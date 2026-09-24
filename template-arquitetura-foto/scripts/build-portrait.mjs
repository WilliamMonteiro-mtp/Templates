// Retrato do hero: recorta o sujeito e desfoca o resto (há pessoas no fundo).
import { mkdirSync } from "node:fs";
import { dirname } from "node:path";
import sharp from "sharp";

const src = process.argv[2] ?? "conteudo/projetos/img/perfil.jpg";
const out = process.argv[3] ?? "public/media/portrait.webp";

// Recorte quadrado (o retrato é um círculo) centrado na cara e ombros.
const crop = { left: 150, top: 170, width: 900, height: 900 };
const size = 900;

// Falloff radial: nítido no sujeito, desfocado nas bordas onde estão outras pessoas.
const focus = { cx: "50%", cy: "44%", r: "60%", solid: "52%" };
const blurSigma = 16;

const base = await sharp(src)
  .extract(crop)
  .resize(size, size)
  .toBuffer();

const mask = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
    <defs>
      <radialGradient id="focus" cx="${focus.cx}" cy="${focus.cy}" r="${focus.r}">
        <stop offset="${focus.solid}" stop-color="#fff" stop-opacity="1"/>
        <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="${size}" height="${size}" fill="url(#focus)"/>
  </svg>`,
);

// Só o sujeito leva nitidez; o fundo desfocado ficaria com grão.
const subject = await sharp(base)
  .sharpen({ sigma: 0.8, m1: 0.4, m2: 2 })
  .composite([{ input: mask, blend: "dest-in" }])
  .png()
  .toBuffer();

mkdirSync(dirname(out), { recursive: true });

// Qualidade alta no master: o otimizador do Next volta a comprimir por cima.
const info = await sharp(base)
  .blur(blurSigma)
  .modulate({ brightness: 0.92 })
  .composite([{ input: subject }])
  .webp({ quality: 96, effort: 6, smartSubsample: false })
  .toFile(out);

console.log("ok", info.width, info.height, info.size);
