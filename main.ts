import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const destDir = "/output";
const dest = join(destDir, "entry.png");
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const MAX_BYTES = 1024 * 1024;

if (!existsSync(src)) {
  console.error(`missing source image: ${src}`);
  process.exit(1);
}

const head = readFileSync(src).subarray(0, 8);
if (!head.equals(PNG_MAGIC)) {
  console.error(`not a PNG file: ${src}`);
  process.exit(1);
}

mkdirSync(destDir, { recursive: true });
copyFileSync(src, dest);

const bytes = statSync(dest).size;
if (bytes > MAX_BYTES) {
  console.error(`output too large: ${bytes} bytes (limit ${MAX_BYTES})`);
  process.exit(1);
}
console.log(`wrote ${dest} (${bytes} bytes)`);
