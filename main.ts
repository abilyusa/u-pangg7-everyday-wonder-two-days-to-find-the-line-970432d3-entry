// Everyday Wonder: Two Days to Find the Line
// make.fun entry — deterministic, no network, no external reads.
// Writes exactly one sentence (1-200 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt
// (fallback: /output/entry.txt). Self-checks the official gate before writing.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The girl in the yellow coat drew a chalk line down the sidewalk, and at dusk the sun drew a second one beside it in gold, as if the pavement were finishing her drawing.";

// Official gate (RULES.txt): /output/entry.txt must be UTF-8 text of
// 1 to 200 characters, not only white space.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails gate: ${ENTRY.length} characters (must be 1-200)`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
