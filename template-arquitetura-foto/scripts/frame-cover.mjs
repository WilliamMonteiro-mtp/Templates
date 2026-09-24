import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import sharp from "sharp";

const src = process.argv[2];
const out = process.argv[3];
if (!src || !out) {
  console.error("Uso: node scripts/frame-cover.mjs <origem.png> <destino.png>");
  process.exit(1);
}

const width = 1600;
const height = 1000;
const padX = 100;
const padY = 90;
const innerW = width - padX * 2;
const innerH = height - padY * 2;
const mask = "conteudo/projetos/refs/cover-mask.svg";

const shot = await sharp(src)
  .resize(innerW, innerH, { fit: "cover", position: "north" })
  .png()
  .toBuffer();

writeFileSync(
  mask,
  `<svg xmlns="http://www.w3.org/2000/svg" width="${innerW}" height="${innerH}"><rect width="${innerW}" height="${innerH}" rx="20" fill="white"/></svg>`,
);

const rounded = await sharp(shot)
  .composite([{ input: mask, blend: "dest-in" }])
  .png()
  .toBuffer();

mkdirSync(dirname(out), { recursive: true });

const info = await sharp({
  create: {
    width,
    height,
    channels: 4,
    background: { r: 13, g: 16, b: 23, alpha: 1 },
  },
})
  .composite([{ input: rounded, left: padX, top: padY }])
  .png({ compressionLevel: 9 })
  .toFile(out);

console.log("ok", info.width, info.height, info.size);
