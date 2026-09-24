// Galeria de projeto: normaliza capturas para o mesmo formato do slider.
import { mkdirSync, readdirSync } from "node:fs";
import { basename, extname, join } from "node:path";
import sharp from "sharp";

const src = process.argv[2];
const out = process.argv[3];
if (!src || !out) {
  console.error("Uso: node scripts/build-gallery.mjs <pasta-origem> <pasta-destino>");
  process.exit(1);
}

// O slider usa 1.95:1, a proporção das capturas de ecrã de 16:10 com barra do browser.
const width = 1800;
const height = Math.round(width / 1.95);

mkdirSync(out, { recursive: true });

for (const file of readdirSync(src)) {
  if (!/\.(png|jpe?g|webp)$/i.test(file)) continue;
  const name = `${basename(file, extname(file))}.webp`;
  const info = await sharp(join(src, file))
    .resize(width, height, { fit: "cover", position: "north" })
    .webp({ quality: 88, effort: 6 })
    .toFile(join(out, name));
  console.log(name, info.width, info.height, `${Math.round(info.size / 1024)}kB`);
}
