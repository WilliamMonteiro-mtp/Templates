import { readFileSync, writeFileSync } from "node:fs";
import sharp from "sharp";

const [, , svgPath, pngPath] = process.argv;

// The editor writes these SVGs as latin-1; librsvg only accepts UTF-8.
const source = readFileSync(svgPath, "latin1");
if (/\u00c3|\uFFFD/.test(source) === false) {
  writeFileSync(svgPath, source, { encoding: "utf8" });
}

const info = await sharp(readFileSync(svgPath), { density: 200 })
  .resize(1600, 1000)
  .png({ compressionLevel: 9 })
  .toFile(pngPath);

console.log("ok", info.width, info.height, info.size);
