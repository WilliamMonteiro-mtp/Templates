import { Plus, Minus, Search, Maximize2 } from "lucide-react";
import { WorldMap } from "../WorldMap";

export function GeospatialHeatmapView({ locale = 'pt' }: { locale?: string }) {
  const t = {
    pt: {
      title: "Mapa de Calor Receita Geoespacial",
      topChannels: "Principais Canais de Vendas",
      ourStock: "Nossa Ação",
      marketIndex: "Índice de Mercado",
      marketPenetration: "Penetração de Mercado",
      sparse: "Esparso",
      regional: "Receita Regional",
      europe: "Europa",
      extro: "Extro-Froca",
      activeUsers: "Utilizadores Ativos",
      market: "Mercado"
    },
    en: {
      title: "Geospatial Revenue Heatmap",
      topChannels: "Top Sales Channels",
      ourStock: "Our Stock",
      marketIndex: "Market Index",
      marketPenetration: "Market Penetration",
      sparse: "Sparse",
      regional: "Regional Revenue",
      europe: "Europe",
      extro: "Extro-Froca",
      activeUsers: "Active Users",
      market: "Market"
    }
  };
  const lang = (locale === 'pt' || locale === 'en') ? t[locale] : t['pt'];

  return (
    <div className="flex flex-col h-full gap-4 pb-10">
      
      {/* Map Container */}
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-4 shadow-[var(--shadow-card)] flex-1 relative overflow-hidden flex flex-col">
        <div className="flex justify-between items-center mb-2 z-10 relative">
          <h3 className="text-sm font-semibold text-white">{lang.title}</h3>
          <div className="flex gap-2">
            <button className="w-6 h-6 rounded bg-[var(--void)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white"><Maximize2 className="w-3 h-3" /></button>
          </div>
        </div>

        {/* Zoom Controls */}
        <div className="absolute left-4 top-16 z-10 flex flex-col gap-1 bg-[var(--void)] border border-[var(--border)] rounded-md p-1 shadow-lg">
          <button className="w-6 h-6 rounded hover:bg-[var(--card)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white transition-colors"><Plus className="w-4 h-4" /></button>
          <div className="w-full h-[1px] bg-[var(--border)]"></div>
          <button className="w-6 h-6 rounded hover:bg-[var(--card)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white transition-colors"><Minus className="w-4 h-4" /></button>
        </div>

        {/* Floating Panel Right */}
        <div className="absolute right-4 top-16 z-10 w-48 bg-[var(--void)]/90 backdrop-blur border border-[var(--border)] rounded-md p-3 shadow-lg">
          <h4 className="text-[10px] font-semibold text-[var(--text-secondary)] mb-3">{lang.topChannels}</h4>
          <div className="space-y-2 text-[9px] font-mono">
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)]"></span> {lang.ourStock}</span>
              <span className="text-white">23.3%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]"></span> Competitor A</span>
              <span className="text-white">18.2%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-orange)]"></span> Competitor B</span>
              <span className="text-white">11.5%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-red)]"></span> {lang.marketIndex}</span>
              <span className="text-white">0.2%</span>
            </div>
          </div>
        </div>

        {/* Real World Map SVG */}
        <div className="absolute inset-0 flex items-center justify-center pt-8 pointer-events-none">
          <div className="relative w-full max-w-5xl aspect-video opacity-90 pointer-events-auto">
            <WorldMap />

            {/* Heat Spots overlays */}
            <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full pointer-events-none">
              <circle cx="220" cy="170" r="40" fill="url(#heatRed)" />
              <circle cx="200" cy="180" r="10" fill="var(--accent-orange)" />
              <circle cx="240" cy="160" r="15" fill="var(--accent-red)" />
              
              <circle cx="500" cy="150" r="25" fill="url(#heatOrange)" />
              <circle cx="490" cy="140" r="8" fill="var(--accent-orange)" />
              
              <circle cx="750" cy="200" r="35" fill="url(#heatRed)" />
              <circle cx="760" cy="190" r="12" fill="var(--accent-red)" />
              
              <circle cx="300" cy="300" r="20" fill="url(#heatCyan)" />
              <circle cx="520" cy="280" r="15" fill="url(#heatOrange)" />
              <circle cx="820" cy="400" r="25" fill="url(#heatRed)" />

              <defs>
                <radialGradient id="heatRed">
                  <stop offset="0%" stopColor="var(--accent-red)" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="var(--accent-red)" stopOpacity="0"/>
                </radialGradient>
                <radialGradient id="heatOrange">
                  <stop offset="0%" stopColor="var(--accent-orange)" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="var(--accent-orange)" stopOpacity="0"/>
                </radialGradient>
                <radialGradient id="heatCyan">
                  <stop offset="0%" stopColor="var(--accent-cyan)" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="var(--accent-cyan)" stopOpacity="0"/>
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-32 shrink-0">
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-4 shadow-[var(--shadow-card)] flex flex-col justify-between">
          <h3 className="text-[10px] font-semibold text-[var(--text-secondary)]">{lang.topChannels}</h3>
          <div className="space-y-1.5 text-[9px] font-mono">
            <div className="flex justify-between items-center"><span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[var(--accent-cyan)]"></span> {lang.ourStock}</span> <span className="text-white">$315.6M</span></div>
            <div className="flex justify-between items-center"><span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[var(--accent-blue)]"></span> Competitor A</span> <span className="text-white">$89.5M</span></div>
            <div className="flex justify-between items-center"><span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[var(--accent-orange)]"></span> Competitor B</span> <span className="text-white">$232.1M</span></div>
            <div className="flex justify-between items-center"><span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[var(--accent-red)]"></span> {lang.marketIndex}</span> <span className="text-white">$31.3M</span></div>
          </div>
        </div>

        <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-4 shadow-[var(--shadow-card)] flex flex-col justify-between">
          <h3 className="text-[10px] font-semibold text-[var(--text-secondary)]">{lang.marketPenetration}</h3>
          <div className="space-y-1.5 text-[9px] font-mono">
            <div className="flex justify-between items-center"><span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[var(--accent-cyan)]"></span> Competitor A</span> <span className="text-white">100.00%</span></div>
            <div className="flex justify-between items-center"><span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[var(--accent-blue)]"></span> {lang.market}</span> <span className="text-white">58.05%</span></div>
            <div className="flex justify-between items-center"><span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[var(--accent-orange)]"></span> Competitor B</span> <span className="text-white">40.06%</span></div>
            <div className="flex justify-between items-center"><span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[var(--accent-red)]"></span> {lang.sparse}</span> <span className="text-white">45.03%</span></div>
          </div>
        </div>

        <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-4 shadow-[var(--shadow-card)] flex flex-col justify-between">
          <h3 className="text-[10px] font-semibold text-[var(--text-secondary)]">{lang.regional}</h3>
          <div className="space-y-3 mt-2">
            <div className="flex items-center gap-3 text-[9px]">
              <div className="w-12 text-[var(--text-secondary)] truncate">{lang.europe}</div>
              <div className="flex-1 h-1 bg-[var(--void)] rounded-full overflow-hidden">
                <div className="h-full bg-[var(--accent-cyan)] w-[80%]"></div>
              </div>
              <div className="w-6 text-right font-mono text-white">400</div>
            </div>
            <div className="flex items-center gap-3 text-[9px]">
              <div className="w-12 text-[var(--text-secondary)] truncate">{lang.extro}</div>
              <div className="flex-1 h-1 bg-[var(--void)] rounded-full overflow-hidden">
                <div className="h-full bg-[var(--accent-orange)] w-[40%]"></div>
              </div>
              <div className="w-6 text-right font-mono text-white">120</div>
            </div>
            <div className="flex items-center gap-3 text-[9px]">
              <div className="w-12 text-[var(--text-secondary)] truncate">Malta</div>
              <div className="flex-1 h-1 bg-[var(--void)] rounded-full overflow-hidden">
                <div className="h-full bg-[var(--accent-red)] w-[20%]"></div>
              </div>
              <div className="w-6 text-right font-mono text-white">18</div>
            </div>
          </div>
        </div>

        <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-4 shadow-[var(--shadow-card)] flex flex-col justify-between">
          <h3 className="text-[10px] font-semibold text-[var(--text-secondary)]">{lang.activeUsers}</h3>
          <div className="space-y-3 mt-2">
            <div className="flex items-center gap-3 text-[9px]">
              <div className="w-16 text-[var(--text-secondary)] truncate">{lang.activeUsers}</div>
              <div className="flex-1 h-1 bg-[var(--void)] rounded-full overflow-hidden">
                <div className="h-full bg-[var(--accent-cyan)] w-[60%]"></div>
              </div>
              <div className="w-6 text-right font-mono text-white">30</div>
            </div>
            <div className="flex items-center gap-3 text-[9px]">
              <div className="w-16 text-[var(--text-secondary)] truncate">{lang.activeUsers}</div>
              <div className="flex-1 h-1 bg-[var(--void)] rounded-full overflow-hidden">
                <div className="h-full bg-[var(--accent-blue)] w-[30%]"></div>
              </div>
              <div className="w-6 text-right font-mono text-white">23</div>
            </div>
            <div className="flex items-center gap-3 text-[9px]">
              <div className="w-16 text-[var(--text-secondary)] truncate">{lang.activeUsers}</div>
              <div className="flex-1 h-1 bg-[var(--void)] rounded-full overflow-hidden">
                <div className="h-full bg-[var(--accent-red)] w-[5%]"></div>
              </div>
              <div className="w-6 text-right font-mono text-white">0</div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
