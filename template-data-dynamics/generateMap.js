const fs = require('fs');
const svgPath = 'C:\\\\Users\\\\william.monteiro\\\\.gemini\\\\antigravity-ide\\\\brain\\\\dff8796a-9809-4b74-9a80-a720dc97dcf1\\\\.system_generated\\\\steps\\\\726\\\\content.md';
let svg = fs.readFileSync(svgPath, 'utf8');

const paths = [...svg.matchAll(/\sd="([^"]+)"/g)].map(m => m[1]);

const component = `export function WorldMap() {
  return (
    <svg viewBox="0 0 1016 515" className="w-full h-full opacity-60 preserve-3d" preserveAspectRatio="xMidYMid slice">
      <g fill="var(--void)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5">
        ${paths.map((d, i) => `<path key={${i}} d="${d}" />`).join('\n        ')}
      </g>
    </svg>
  );
}
`;

fs.writeFileSync('src/components/WorldMap.tsx', component);
