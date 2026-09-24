import { writeFileSync } from "node:fs";
import sharp from "sharp";

const src = "conteudo/projetos/capas_projetos/ml_selector.png";
const out = "public/projetos/ml-selector/cover-3.png";
const width = 1600;
const height = 1000;
const padX = 100;
const padY = 90;
const innerW = width - padX * 2;
const innerH = height - padY * 2;

const shot = await sharp(src)
  .resize(innerW, innerH, { fit: "cover", position: "north" })
  .png()
  .toBuffer();

writeFileSync(
  "conteudo/projetos/refs/ml-cover-mask.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" width="${innerW}" height="${innerH}"><rect width="${innerW}" height="${innerH}" rx="20" fill="white"/></svg>`,
);

const rounded = await sharp(shot)
  .composite([{ input: "conteudo/projetos/refs/ml-cover-mask.svg", blend: "dest-in" }])
  .png()
  .toBuffer();

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
