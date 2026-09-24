// Pré-visualização: mostra o retrato como aparece no círculo do hero.
import sharp from "sharp";

const src = process.argv[2] ?? "public/media/portrait.webp";
const out = process.argv[3] ?? "screenshots/portrait-circle.png";
const size = 600;

const mask = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2 - 4}" fill="white"/></svg>`,
);

const info = await sharp(src)
  .resize(size, size)
  .composite([{ input: mask, blend: "dest-in" }])
  .png()
  .toFile(out);

console.log("ok", info.width, info.height);
