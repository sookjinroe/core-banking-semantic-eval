#!/usr/bin/env python3
"""
tree-sitter-java 기반 코드표(enum) 카탈로그 추출기.

코퍼스의 모든 enum 선언(top-level·중첩·가시성 무관)을 AST로 전수 수집하고,
상수 인자에서 코드값을 추출해 코드표 카탈로그를 만든다.

분류:
  int_code    — 상수의 첫 정수 인자를 코드값으로 갖는 enum (예: PENDING(100, "..."))
  string_code — 첫 인자가 문자열 코드 (예: MIFOS_STANDARD("mifos-standard-strategy", ...))
  no_code     — 인자 없는 순수 enum (ordinal 사용 가능성, 코드표 아님으로 분류)

전수성 근거: enum_declaration 노드는 자바 문법 요소라 AST 순회로 구문 수준 전수가 성립한다.
"코드값 enum" 분류는 판단이므로, 분류 결과 전체(no_code 포함)를 산출물에 남겨
잔여 감사가 가능하게 한다.

입력: $1 — 코퍼스 루트 (java 파일 트리)
출력: $2 — JSON

산출 구조:
{
  "source": "...", "file_count": N, "enum_count": N,
  "catalog": {
    "<EnumName>": {
      "kind": "int_code|string_code|no_code",
      "file": "<상대경로>",
      "nested_in": "<외곽 클래스명|null>",
      "entries": [{"code": <int|str|null>, "name": "<상수명>", "extra": [<나머지 인자들>]}],
      "duplicate_names": ["<같은 이름의 다른 파일 경로>", ...]   # 있을 때만
    }
  }
}
"""
import argparse, json, sys
from pathlib import Path
from tree_sitter import Language, Parser
import tree_sitter_java

LANG = Language(tree_sitter_java.language())
PARSER = Parser(LANG)


def text_of(node, src: bytes) -> str:
    return src[node.start_byte:node.end_byte].decode("utf-8", errors="replace")


def walk(node, type_name: str):
    """AST에서 type_name 노드 전부 (중첩 포함) yield."""
    if node.type == type_name:
        yield node
    for c in node.children:
        yield from walk(c, type_name)


def enclosing_class(node, src: bytes):
    """enum 선언을 감싸는 가장 가까운 클래스/인터페이스 이름 (top-level enum이면 None)."""
    p = node.parent
    while p is not None:
        if p.type in ("class_declaration", "interface_declaration", "record_declaration"):
            for c in p.children:
                if c.type == "identifier":
                    return text_of(c, src)
        p = p.parent
    return None


def parse_constant_args(const_node, src: bytes):
    """enum_constant의 인자 목록 → (code, extras). 인자 없으면 (None, [])."""
    args = None
    for c in const_node.children:
        if c.type == "argument_list":
            args = c
            break
    if args is None:
        return None, []
    vals = []
    for a in args.children:
        if not a.is_named:
            continue
        t = text_of(a, src).strip()
        vals.append(t)
    if not vals:
        return None, []
    return vals[0], vals[1:]


def classify_and_normalize(raw_entries):
    """상수들의 첫 인자 성질로 enum kind 판정 + 코드값 정규화.

    다수결이 아니라 전건 판정: 모든 상수의 첫 인자가 정수 리터럴이어야 int_code.
    (혼합이면 상수 참조·수식 등이 섞인 것 — string_code/no_code가 아니라 mixed로 보존)
    """
    if all(e["raw"] is None for e in raw_entries):
        return "no_code", [{"code": None, "name": e["name"], "extra": []} for e in raw_entries]

    def is_int(s):
        return s is not None and s.lstrip("-").isdigit()

    def is_str(s):
        return s is not None and len(s) >= 2 and s[0] == '"' and s[-1] == '"'

    firsts = [e["raw"] for e in raw_entries]
    if all(is_int(f) for f in firsts):
        kind = "int_code"
        norm = [{"code": int(e["raw"]), "name": e["name"], "extra": e["extra"]} for e in raw_entries]
    elif all(is_str(f) for f in firsts):
        kind = "string_code"
        norm = [{"code": e["raw"].strip('"'), "name": e["name"], "extra": e["extra"]} for e in raw_entries]
    else:
        kind = "mixed"  # 상수 참조(X.Y)·수식 등 — 파서 확장 필요 표시. 잔여 감사 대상.
        norm = [{"code": e["raw"], "name": e["name"], "extra": e["extra"]} for e in raw_entries]
    return kind, norm


def extract_file(path: Path, root: Path):
    src = path.read_bytes()
    tree = PARSER.parse(src)
    out = []
    for en in walk(tree.root_node, "enum_declaration"):
        name = None
        for c in en.children:
            if c.type == "identifier":
                name = text_of(c, src)
                break
        if not name:
            continue
        body = None
        for c in en.children:
            if c.type == "enum_body":
                body = c
                break
        raw_entries = []
        if body is not None:
            for const in body.children:
                if const.type != "enum_constant":
                    continue
                cname = None
                for cc in const.children:
                    if cc.type == "identifier":
                        cname = text_of(cc, src)
                        break
                if not cname:
                    continue
                first, extras = parse_constant_args(const, src)
                raw_entries.append({"name": cname, "raw": first, "extra": extras})
        if not raw_entries:
            continue
        kind, entries = classify_and_normalize(raw_entries)
        out.append({
            "name": name,
            "kind": kind,
            "file": str(path.relative_to(root)),
            "nested_in": enclosing_class(en, src),
            "entries": entries,
        })
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("corpus_root")
    ap.add_argument("out_json")
    args = ap.parse_args()
    root = Path(args.corpus_root)
    files = sorted(root.rglob("*.java"))

    catalog = {}
    dup = {}
    for f in files:
        for e in extract_file(f, root):
            key = e["name"]
            if key in catalog:
                # 동명 enum — 항목 수 많은 쪽을 대표로, 나머지는 duplicate 기록
                dup.setdefault(key, []).append(e["file"])
                if len(e["entries"]) > len(catalog[key]["entries"]):
                    dup[key].append(catalog[key]["file"])
                    catalog[key] = e
                continue
            catalog[key] = e
    for k, files_ in dup.items():
        catalog[k]["duplicate_names"] = sorted(set(files_) - {catalog[k]["file"]})

    kinds = {}
    for e in catalog.values():
        kinds[e["kind"]] = kinds.get(e["kind"], 0) + 1

    result = {
        "source": "tree-sitter-java enum_declaration 전수 (top-level·중첩·가시성 무관)",
        "file_count": len(files),
        "enum_count": len(catalog),
        "kind_counts": kinds,
        "catalog": catalog,
    }
    Path(args.out_json).write_text(json.dumps(result, ensure_ascii=False, indent=1))
    print(f"[extract_code_enums] 파일 {len(files)} · enum {len(catalog)} · kind {kinds}", file=sys.stderr)


if __name__ == "__main__":
    main()
