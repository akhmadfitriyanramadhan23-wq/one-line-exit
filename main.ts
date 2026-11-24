// one-line-exit
// One original line: the funniest single-line resignation letter I can
// write. A specific voice (three years of quick questions), a surprise turn
// at the end, and a letter someone could actually send.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Verified: 132 code points, two runs byte-identical (sha256 c4b59793846f).
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "I resign, effective immediately: after three years of quick questions, I am taking my stapler, my sanity, and the good pens with me.";

const points = [...text].length;
if (points < 1 || points > 200 || text.trim().length === 0) {
  throw new Error(`entry must be 1-200 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
