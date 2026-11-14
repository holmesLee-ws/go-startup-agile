#!/usr/bin/env node
// 리포 관리자용 검사기. 학습자에게는 필요 없다.
// 검사: 커리큘럼 형식·선수 관계(R2), 국내 근거·글로벌 비교(R10), 경계 표 일치(R13), 출처 절(R11), 미리 만든 시각 자료 없음(R5), 설정 JSON 유효성.
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const read = (p) => readFileSync(join(root, p), "utf8").replace(/\r\n/g, "\n");

const LEVELS = ["Explain", "Apply", "Evaluate", "Develop"];
const FIELDS = ["선수", "핵심 질문", "목표", "만들어 볼 것", "국내 근거", "글로벌 비교", "근거"];
const OPTIONAL = ["경계·연결"];
// R10: 법·제도가 반드시 걸리는 모듈. 「법정 기준 없음」을 쓸 수 없다.
const LEGAL_REQUIRED = (id) => /^[KF]\d+$/.test(id) || id === "A4" || id === "A5";

function parseCurriculum(text) {
  const modules = new Map();
  const problems = [];
  const boundaryRepos = new Set();
  const body = text.split(/^## 출처/m)[0];
  const blocks = body.split(/^### /m).slice(1);
  for (const block of blocks) {
    const head = block.split("\n")[0];
    const m = head.match(/^([PLAKFX]\d+) · (.+)$/);
    if (!m) { problems.push(`모듈 제목 형식 오류: ${head}`); continue; }
    const id = m[1];
    if (modules.has(id)) problems.push(`${id}: 중복 id`);
    const fields = {};
    for (const line of block.split("\n").slice(1)) {
      if (!line.trim() || line.startsWith("## ")) continue;
      const f = line.match(/^- ([^:]+): (.+)$/);
      if (!f) { problems.push(`${id}: 항목 밖 본문 금지(강의 본문 없음): ${line.slice(0, 30)}`); continue; }
      if (![...FIELDS, ...OPTIONAL].includes(f[1])) problems.push(`${id}: 모르는 항목 「${f[1]}」`);
      fields[f[1]] = f[2];
    }
    for (const name of FIELDS) if (!fields[name]) problems.push(`${id}: 「${name}」 없음`);
    const dom = fields["국내 근거"] || "";
    if (dom.startsWith("법정 기준 없음")) {
      if (LEGAL_REQUIRED(id)) problems.push(`${id}: 법·제도 모듈은 「법정 기준 없음」 불가`);
      else if (!dom.startsWith("법정 기준 없음 — 국내 맥락: ")) problems.push(`${id}: 「법정 기준 없음 — 국내 맥락: …」 형식 오류`);
    } else if (dom && !/(「[^」]+」|규정|고시|공고|기관|진흥원|중소벤처기업부|거래소|시스템|양식)/.test(dom)) problems.push(`${id}: 국내 근거에 법령·기관이 없음`);
    for (const r of (fields["경계·연결"] || "").matchAll(/go-[a-z-]+/g)) boundaryRepos.add(`${id}:${r[0]}`);
    if (fields["목표"] && !LEVELS.some((l) => fields["목표"].startsWith(`${l} — `))) problems.push(`${id}: 목표 수준 형식 오류`);
    const prereq = !fields["선수"] || fields["선수"] === "없음" ? [] : fields["선수"].split(",").map((s) => s.trim());
    modules.set(id, prereq);
  }
  for (const [id, prereq] of modules) for (const p of prereq) if (!modules.has(p)) problems.push(`${id}: 없는 선수 ${p}`);
  const state = new Map();
  const visit = (id, path) => {
    if (state.get(id) === 2 || !modules.has(id)) return;
    if (state.get(id) === 1) { problems.push(`선수 순환: ${[...path, id].join(" → ")}`); return; }
    state.set(id, 1);
    for (const p of modules.get(id)) visit(p, [...path, id]);
    state.set(id, 2);
  };
  for (const id of modules.keys()) visit(id, []);
  return { modules, problems, boundaryRepos };
}

function findVisualAssets(files) {
  const allowedJs = /^tools\/[^/]+\.mjs$/;
  return files.filter((f) => /\.(html?|xhtml|css|svgz?|png|jpe?g|gif|webp|avif|ico|bmp)$/i.test(f) || (/\.(m?js|cjs|jsx|tsx?)$/i.test(f) && !allowedJs.test(f)));
}

function findTemplateMarkup(name, text) {
  const hits = [];
  const MARK = /<(!doctype|html|svg|style|canvas|script)\b/i;
  for (const m of text.matchAll(/(```|~~~)[\s\S]*?\1/g)) if (MARK.test(m[0])) hits.push(name);
  for (const line of text.split("\n")) if (/^( {4}|\t)/.test(line) && MARK.test(line)) { hits.push(`${name}(들여쓰기 블록)`); break; }
  return hits;
}

function main() {
  const mapText = read("curriculum/map.md");
  const { modules, problems, boundaryRepos } = parseCurriculum(mapText);
  errors.push(...problems);
  if (modules.size === 0) errors.push("모듈을 찾지 못함");

  // R13: 커리큘럼 경계·연결의 go-* 이름은 spec 경계 표에 있어야 한다.
  const spec = read("docs/build/spec.md");
  const table = (spec.split("### 다른 go-* 영역과의 경계")[1] || "").split(/^## /m)[0];
  const known = new Set([...table.matchAll(/go-[a-z-]+/g)].map((m) => m[0]));
  for (const pair of boundaryRepos) { const [id, r] = pair.split(":"); if (!known.has(r)) errors.push(`${id}: 경계 표에 없는 ${r}`); }

  // R11: 「국내 근거」의 법령명은 「」로 감싼 국가법령정보센터 정식 명칭이고, 출처 절에 같은 이름으로 URL·조회일이 있어야 한다.
  const [mapBody, srcText = ""] = mapText.split(/^## 출처/m);
  const srcNames = new Set();
  for (const line of srcText.split("\n")) if (/https?:\/\//.test(line) && /\d{4}-\d{2}-\d{2}/.test(line)) for (const n of line.matchAll(/「([^」]+)」/g)) srcNames.add(n[1]);
  for (const m of mapBody.matchAll(/^- 국내 근거: (.+)$/gm)) {
    for (const n of m[1].matchAll(/「([^」]+)」/g)) if (!srcNames.has(n[1])) errors.push(`출처 절에 없는 법령: ${n[1]}`);
    const rest = m[1].replace(/「[^」]+」/g, "□");
    const SKIP = /^(방법|헌법|위법|불법|입법|사법|법정|임의규정|강행규정)$/;
    for (const b of rest.matchAll(/[가-힣]+(?:법률|법|규정|고시)(?=[\s,·()의에상은이을를과와로도]|$)/g)) if (!SKIP.test(b[0])) errors.push(`「」 없는 법령·규정명: ${b[0]}`);
    for (const b of rest.matchAll(/(?:관한|위한) 법률/g)) errors.push(`「」 없는 법령명: …${b[0]}`);
    // R10: K·F 모듈은 「」 법령마다 조문(제N조·제N장) 표기가 뒤따라야 한다(규정·고시·계약서는 제외).
    const idm = m.index !== undefined ? mapBody.slice(0, m.index).match(/^### ([PLAKFX]\d+)/gm) : null;
    const curId = idm ? idm.at(-1).slice(4) : "";
    if (/^[KF]\d+$/.test(curId)) {
      const parts = m[1].split("「").slice(1);
      for (const part of parts) {
        const [nm, after] = part.split("」");
        if (/(규정|고시|계약서|해설서)$/.test(nm)) continue;
        if (!/제\d+(조|장)/.test(after || "")) errors.push(`${curId}: 「${nm}」에 조문 표기 없음`);
      }
    }
  }

  // R11: tutor/sources.md의 「읽는 법」은 실측으로 채워져 있어야 한다.
  const tsrc = read("tutor/sources.md");
  const howto = (tsrc.split("## 읽는 법")[1] || "").split(/^## /m)[0];
  if (!howto.trim() || /채운다\)/.test(howto)) errors.push("tutor/sources.md 「읽는 법」이 비어 있음");

  // R13: tutor/sources.md 경계 표와 spec 경계 표는 같은 행이어야 한다.
  const rows = (t) => new Set([...t.matchAll(/^\| ([^|]+) \| [^|]+ \| (go-[a-z-]+) \|$/gm)].map((m) => `${m[1].trim()}→${m[2]}`));
  const specRows = rows(table), tutorRows = rows((tsrc.split("## 다른 go-* 영역과의 경계")[1] || ""));
  for (const r of specRows) if (!tutorRows.has(r)) errors.push(`sources.md 경계 표에 없는 행: ${r}`);
  for (const r of tutorRows) if (!specRows.has(r)) errors.push(`spec 경계 표에 없는 행: ${r}`);

  // R11: 출처 절은 URL과 조회일을 담는다.
  const sources = mapText.split(/^## 출처/m)[1] || "";
  if (!/https?:\/\//.test(sources) || !/\d{4}-\d{2}-\d{2}/.test(sources) || /채움\)/.test(sources)) errors.push("출처 절에 URL·조회일 없음");

  const files = execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard", "-z"], { cwd: root, encoding: "utf8" }).split("\0").filter(Boolean);
  for (const f of findVisualAssets(files)) errors.push(`미리 만든 시각 자료 금지: ${f}`);
  for (const f of files.filter((x) => x.endsWith(".md") && existsSync(join(root, x)))) for (const n of findTemplateMarkup(f, read(f))) errors.push(`복사용 마크업 금지: ${n}`);

  for (const p of [".claude/settings.json", "learner-template/state.json"]) {
    if (!existsSync(join(root, p))) { errors.push(`${p} 없음`); continue; }
    try { JSON.parse(read(p)); } catch (e) { errors.push(`${p}: JSON 오류 ${e.constructor.name}`); }
  }
  if (!existsSync(join(root, "learner-template/log.md"))) errors.push("learner-template/log.md 없음");
  for (const s of readdirSync(join(root, ".claude/skills"))) {
    if (statSync(join(root, ".claude/skills", s)).isDirectory() && !existsSync(join(root, ".claude/skills", s, "SKILL.md"))) errors.push(`스킬 ${s}: SKILL.md 없음`);
  }
  if (!read(".gitignore").split("\n").includes("learner/")) errors.push(".gitignore에 learner/ 없음");

  if (errors.length) { console.error(errors.map((e) => `FAIL ${e}`).join("\n")); process.exit(1); }
  console.log(`OK 모듈 ${modules.size}개, 파일 ${files.length}개 검사`);
}

main();
