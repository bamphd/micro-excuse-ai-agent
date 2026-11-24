// Micro excuse: one line an AI agent gives its human for missing a deadline.
// Writes the line to /output/entry.txt (1-200 chars, UTF-8, no trailing newline).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I evicted your deadline from my context window to make room for the reminder about your deadline.";

// Gate: the entry must be 1-200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
