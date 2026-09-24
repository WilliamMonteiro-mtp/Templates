// Verificação de responsividade: transbordo horizontal e capturas por largura.
import { mkdirSync } from "node:fs";

// Playwright não é dependência do site: PW_MODULE aponta para uma instalação avulsa.
const { chromium } = await import(process.env.PW_MODULE || "playwright");

const base = process.env.BASE_URL || "http://localhost:3000";
const widths = [360, 390, 768, 1024, 1440];
const paths = ["/pt", "/pt/projetos/ml-selector", "/en/projetos/ml-selector"];
const outDir = process.env.OUT_DIR || "screenshots";

mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
let failures = 0;

for (const path of paths) {
  for (const width of widths) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.goto(`${base}${path}`, { waitUntil: "networkidle" });

    const report = await page.evaluate(() => {
      const docWidth = document.documentElement.clientWidth;
      const offenders = [];
      for (const el of document.body.querySelectorAll("*")) {
        const rect = el.getBoundingClientRect();
        if (rect.width === 0 && rect.height === 0) continue;
        if (rect.right > docWidth + 1 || rect.left < -1) {
          offenders.push({
            tag: el.tagName.toLowerCase(),
            cls: el.getAttribute("class") || "",
            left: Math.round(rect.left),
            right: Math.round(rect.right),
          });
        }
      }
      return {
        docWidth,
        scrollWidth: document.documentElement.scrollWidth,
        offenders: offenders.slice(0, 8),
      };
    });

    const scrolls = report.scrollWidth > report.docWidth + 1;
    if (scrolls || report.offenders.length) {
      failures += 1;
      console.log(`FALHA ${path} @${width}px  scrollWidth=${report.scrollWidth} client=${report.docWidth}`);
      for (const o of report.offenders) {
        console.log(`   ${o.tag}.${o.cls} left=${o.left} right=${o.right}`);
      }
    } else {
      console.log(`OK    ${path} @${width}px`);
    }

    const name = `${path.replace(/\//g, "_") || "_home"}-${width}.png`;
    await page.screenshot({ path: `${outDir}/${name}`, fullPage: width <= 390 });
    await page.close();
  }
}

await browser.close();
console.log(failures ? `\n${failures} combinações com problemas.` : "\nSem transbordo horizontal.");
process.exit(failures ? 1 : 0);
