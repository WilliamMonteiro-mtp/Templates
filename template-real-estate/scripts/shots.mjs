// Capturas de verificação: usa o Chrome/Edge instalado, sem descarregar browsers.
import { mkdirSync } from "node:fs";
import { pathToFileURL } from "node:url";

const mod = await import(pathToFileURL(process.env.PW_MODULE).href);
const chromium = mod.chromium ?? mod.default.chromium;

const base = process.env.BASE_URL || "http://localhost:3100";
const outDir = process.env.OUT_DIR || "screenshots";
const shots = (process.env.SHOTS || "/pt:1440").split(",");

mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ channel: process.env.PW_CHANNEL || "msedge" });

for (const shot of shots) {
  const [path, width, selector] = shot.split(":");
  const page = await browser.newPage({
    viewport: { width: Number(width), height: 900 },
    deviceScaleFactor: 2,
  });
  await page.goto(`${base}${path}`, { waitUntil: "networkidle" });
  // Imagens abaixo da dobra só carregam depois de entrarem na viewport.
  if (selector) await page.locator(selector).scrollIntoViewIfNeeded();
  await page.waitForLoadState("networkidle");
  await page.waitForFunction(() =>
    [...document.images].every((image) => image.complete),
  );
  const target = selector ? page.locator(selector) : page;
  const name = `${path.replace(/\//g, "_")}-${width}${selector ? "-el" : ""}.png`;
  await target.screenshot({ path: `${outDir}/${name}` });
  console.log(name);
  await page.close();
}

await browser.close();
