import { readFileSync, writeFileSync } from "node:fs";
import sharp from "sharp";

// Browsers still request /favicon.ico even when a richer icon is declared, so
// wrap PNG frames in an ICO container (ICO allows PNG payloads since Vista).
const sizes = [16, 32, 48];
const svg = readFileSync("public/favicon.svg");

const frames = await Promise.all(
  sizes.map((size) =>
    sharp(svg, { density: 384 }).resize(size, size).png({ compressionLevel: 9 }).toBuffer(),
  ),
);

const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(frames.length, 4);

let offset = 6 + frames.length * 16;
const entries = frames.map((png, index) => {
  const entry = Buffer.alloc(16);
  const size = sizes[index];

  entry.writeUInt8(size === 256 ? 0 : size, 0);
  entry.writeUInt8(size === 256 ? 0 : size, 1);
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(png.length, 8);
  entry.writeUInt32LE(offset, 12);
  offset += png.length;

  return entry;
});

writeFileSync("src/app/favicon.ico", Buffer.concat([header, ...entries, ...frames]));
console.log("favicon.ico", sizes.join("/"), offset, "bytes");
