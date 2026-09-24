import { Settings, Filter, Maximize2, ChevronLeft, ChevronRight, Activity } from "lucide-react";

export function SupplyChainView({ locale = 'pt' }: { locale?: string }) {
  const t = {
    pt: {
      metrics: "Visão Geral de Métricas G4",
      revenue: "Receita Total",
      latency: "Latência de Processamento de Dados",
      pipelines: "Pipelines de Dados Ativos",
      servers: "Regiões de Servidores",
      sources: "Fontes de Dados",
      hubs: "Centros de Processamento IA",
      page: "Página",
      network: "Rede Global da Cadeia de Dados",
      alpha: "Projeto Alpha - Camada de Dados...",
      anomalous: "Atividade Anómala de Nós",
    },
    en: {
      metrics: "G4 Key Metrics Overview",
      revenue: "Total Revenue",
      latency: "Data Processing Latency",
      pipelines: "Active Data Pipelines",
      servers: "Server Regions",
      sources: "Data Sources",
      hubs: "AI Processing Hubs",
      page: "Page",
      network: "Global Data Supply Chain Network",
      alpha: "Project Alpha - Data Layer...",
      anomalous: "Anomalous Node Activity",
    }
  };
  const lang = (locale === 'pt' || locale === 'en') ? t[locale] : t['pt'];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-full pb-10">
      
      {/* Left Column */}
      <div className="col-span-1 flex flex-col gap-4">
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-4 shadow-[var(--shadow-card)]">
          <h3 className="text-xs font-semibold text-white mb-4">{lang.metrics}</h3>
          
          <div className="bg-[var(--void)] border border-[var(--border)] rounded-md p-3 mb-4">
            <div className="text-[10px] text-[var(--text-secondary)] mb-1">{lang.revenue}</div>
            <div className="text-2xl font-bold text-white mb-2">$4.2M</div>
            <div className="h-12 w-full mt-2 relative">
              <svg viewBox="0 0 100 40" className="w-full h-full preserve-3d" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="revGrad3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--accent-red)" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="var(--accent-red)" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <path d="M0,35 C10,30 20,20 30,25 C40,30 50,15 60,10 C70,5 80,15 90,5 L100,0 L100,40 L0,40 Z" fill="url(#revGrad3)" />
                <path d="M0,35 C10,30 20,20 30,25 C40,30 50,15 60,10 C70,5 80,15 90,5 L100,0" fill="none" stroke="var(--accent-red)" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          
          <div className="bg-[var(--void)] border border-[var(--border)] rounded-md p-3">
            <div className="text-[10px] text-[var(--text-secondary)] mb-1">{lang.latency}</div>
            <div className="text-2xl font-bold text-white mb-2">22ms</div>
            <div className="h-12 w-full mt-2 relative">
              <svg viewBox="0 0 100 40" className="w-full h-full preserve-3d" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="latGrad3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="var(--accent-blue)" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <path d="M0,25 C10,15 20,35 30,30 C40,25 50,35 60,20 C70,5 80,30 90,15 L100,20 L100,40 L0,40 Z" fill="url(#latGrad3)" />
                <path d="M0,25 C10,15 20,35 30,30 C40,25 50,35 60,20 C70,5 80,30 90,15 L100,20" fill="none" stroke="var(--accent-blue)" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-4 shadow-[var(--shadow-card)] flex-1 flex flex-col relative">
          <h3 className="text-xs font-semibold text-white mb-4">{lang.pipelines}</h3>
          
          <div className="flex-1 space-y-4 text-[10px] font-mono text-[var(--text-secondary)]">
            <div className="flex justify-between hover:text-white transition-colors cursor-pointer border-b border-[var(--border)] pb-2">
              <span>{lang.servers}</span> <span>{lang.page} 14</span>
            </div>
            <div className="flex justify-between hover:text-white transition-colors cursor-pointer border-b border-[var(--border)] pb-2">
              <span>{lang.sources}</span> <span>{lang.page} 12</span>
            </div>
            <div className="flex justify-between hover:text-white transition-colors cursor-pointer border-b border-[var(--border)] pb-2">
              <span>{lang.sources}</span> <span>{lang.page} 13</span>
            </div>
            <div className="flex justify-between hover:text-white transition-colors cursor-pointer border-b border-[var(--border)] pb-2">
              <span>{lang.hubs}</span> <span>{lang.page} 13</span>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4 pt-4 border-t border-[var(--border)]">
            <div className="flex gap-2">
              <button className="w-6 h-6 rounded bg-[var(--void)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white"><ChevronLeft className="w-3 h-3" /></button>
              <button className="w-6 h-6 rounded bg-[var(--void)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white"><ChevronRight className="w-3 h-3" /></button>
            </div>
            <div className="flex gap-2">
              <button className="w-6 h-6 rounded bg-[var(--void)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white"><Settings className="w-3 h-3" /></button>
              <button className="w-6 h-6 rounded bg-[var(--void)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white"><Filter className="w-3 h-3" /></button>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Column (Network Graph) */}
      <div className="col-span-1 lg:col-span-2 flex flex-col gap-4">
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-4 shadow-[var(--shadow-card)] h-full flex flex-col relative overflow-hidden">
          <div className="flex justify-between items-center mb-2 relative z-10">
            <h3 className="text-sm font-semibold text-white">{lang.network}</h3>
            <div className="flex gap-2">
              <button className="w-6 h-6 rounded bg-[var(--void)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white"><Maximize2 className="w-3 h-3" /></button>
            </div>
          </div>
          
          <div className="absolute top-[10%] left-0 w-full text-center text-[10px] text-[var(--text-tertiary)] uppercase tracking-widest font-semibold z-10">{lang.servers}</div>
          <div className="absolute top-[45%] left-10 text-[10px] text-[var(--text-tertiary)] uppercase tracking-widest font-semibold z-10">{lang.sources}</div>
          <div className="absolute bottom-[10%] right-20 text-[10px] text-[var(--text-tertiary)] uppercase tracking-widest font-semibold z-10">{lang.hubs}</div>

          {/* SVG Constellation Network */}
          <div className="absolute inset-0 flex items-center justify-center pt-8">
            <svg viewBox="0 0 800 600" className="w-full h-full scale-[0.85] opacity-90 mix-blend-screen">
              {/* Lines */}
              <g stroke="rgba(255,255,255,0.15)" strokeWidth="1">
                <line x1="550" y1="200" x2="450" y2="150" />
                <line x1="550" y1="200" x2="350" y2="250" />
                <line x1="550" y1="200" x2="600" y2="300" />
                <line x1="550" y1="200" x2="520" y2="380" />
                <line x1="480" y1="280" x2="300" y2="200" />
                <line x1="480" y1="280" x2="350" y2="350" />
                <line x1="480" y1="280" x2="520" y2="450" />
                <line x1="620" y1="250" x2="550" y2="200" />
                <line x1="620" y1="250" x2="680" y2="180" />
                <line x1="620" y1="250" x2="700" y2="350" />
                <line x1="300" y1="200" x2="250" y2="300" />
                <line x1="300" y1="200" x2="350" y2="120" />
                <line x1="250" y1="300" x2="200" y2="400" />
                <line x1="250" y1="300" x2="320" y2="420" />
                <line x1="200" y1="400" x2="280" y2="500" />
                <line x1="320" y1="420" x2="400" y2="480" />
                <line x1="280" y1="500" x2="400" y2="480" />
                <line x1="400" y1="480" x2="520" y2="450" />
                <line x1="350" y1="250" x2="250" y2="300" />
                <line x1="350" y1="350" x2="320" y2="420" />
                <line x1="350" y1="120" x2="450" y2="150" />
                <line x1="450" y1="150" x2="500" y2="80" />
                <line x1="680" y1="180" x2="750" y2="220" />
                <line x1="700" y1="350" x2="650" y2="450" />
              </g>
              <circle cx="450" cy="150" r="2" fill="#fff" className="animate-ping" />
              <circle cx="350" cy="250" r="2" fill="#fff" className="animate-ping" style={{animationDelay: '0.5s'}} />
              <circle cx="550" cy="200" r="16" fill="var(--accent-red)" className="shadow-[0_0_30px_var(--accent-red)]" />
              <circle cx="480" cy="280" r="12" fill="var(--accent-orange)" className="shadow-[0_0_20px_var(--accent-orange)]" />
              <circle cx="620" cy="250" r="10" fill="var(--accent-red)" />
              <circle cx="520" cy="380" r="8" fill="var(--accent-orange)" />
              <circle cx="300" cy="200" r="10" fill="var(--accent-cyan)" className="shadow-[0_0_20px_var(--accent-cyan)]" />
              <circle cx="450" cy="150" r="8" fill="var(--accent-blue)" />
              <circle cx="350" cy="120" r="6" fill="var(--accent-cyan)" />
              <circle cx="250" cy="300" r="12" fill="var(--accent-cyan)" />
              <circle cx="350" cy="250" r="8" fill="var(--accent-blue)" />
              <circle cx="200" cy="400" r="7" fill="var(--accent-cyan)" />
              <circle cx="320" cy="420" r="10" fill="var(--accent-cyan)" />
              <circle cx="280" cy="500" r="6" fill="var(--accent-blue)" />
              <circle cx="400" cy="480" r="8" fill="var(--accent-cyan)" />
              <circle cx="520" cy="450" r="6" fill="var(--accent-cyan)" />
              <circle cx="650" cy="450" r="5" fill="var(--accent-blue)" />
              <circle cx="700" cy="350" r="7" fill="var(--accent-cyan)" />
              <circle cx="680" cy="180" r="6" fill="var(--accent-blue)" />
              <circle cx="750" cy="220" r="5" fill="var(--accent-cyan)" />
              <circle cx="500" cy="80" r="5" fill="var(--accent-cyan)" />
            </svg>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="col-span-1 flex flex-col gap-4">
        
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-4 shadow-[var(--shadow-card)] flex-1 relative overflow-hidden">
          <div className="flex justify-between items-center mb-2 z-10 relative">
            <h3 className="text-xs font-semibold text-white">{lang.alpha}</h3>
            <Activity className="w-4 h-4 text-[var(--text-tertiary)]" />
          </div>
          
          <div className="absolute inset-0 pt-10 px-4 flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-full h-full opacity-70">
              <g stroke="rgba(255,255,255,0.1)" strokeWidth="1">
                <line x1="100" y1="50" x2="50" y2="100" />
                <line x1="100" y1="50" x2="150" y2="80" />
                <line x1="50" y1="100" x2="80" y2="150" />
                <line x1="150" y1="80" x2="120" y2="160" />
                <line x1="80" y1="150" x2="120" y2="160" />
                <line x1="50" y1="100" x2="150" y2="80" />
                <line x1="100" y1="50" x2="120" y2="160" />
              </g>
              <circle cx="100" cy="50" r="4" fill="var(--accent-cyan)" />
              <circle cx="50" cy="100" r="6" fill="var(--accent-blue)" />
              <circle cx="150" cy="80" r="5" fill="var(--accent-cyan)" />
              <circle cx="80" cy="150" r="4" fill="var(--accent-cyan)" />
              <circle cx="120" cy="160" r="6" fill="var(--accent-blue)" />
            </svg>
          </div>
          
          <div className="absolute bottom-4 left-4 right-4 flex gap-2 z-10 bg-[var(--void)] border border-[var(--border)] p-1 rounded">
            {['1', '2', '3', '4', '5'].map(n => (
              <div key={n} className="flex-1 text-center text-[8px] text-[var(--text-tertiary)] hover:text-white hover:bg-[var(--card)] rounded py-0.5 cursor-pointer">{n}</div>
            ))}
          </div>
        </div>

        <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-4 shadow-[var(--shadow-card)] h-64 flex flex-col">
          <h3 className="text-xs font-semibold text-white mb-6">{lang.anomalous}</h3>
          
          <div className="flex-1 flex gap-2 relative h-full">
            <div className="absolute inset-0 flex flex-col justify-between text-[7px] text-[var(--text-tertiary)] opacity-50 pb-6 pointer-events-none">
              <div className="border-b border-[var(--border)] w-full text-left">500</div>
              <div className="border-b border-[var(--border)] w-full text-left">400</div>
              <div className="border-b border-[var(--border)] w-full text-left">300</div>
              <div className="border-b border-[var(--border)] w-full text-left">200</div>
              <div className="border-b border-[var(--border)] w-full text-left">100</div>
            </div>
            
            <div className="flex flex-1 items-end justify-around pl-6 z-10 gap-1 pb-6 h-full">
              {[40, 70, 50, 90, 30, 85, 20].map((h, i) => {
                const isHigh = h > 70;
                const isMed = h > 40 && h <= 70;
                let bg = "var(--accent-cyan)";
                if (isHigh) bg = "var(--accent-red)";
                else if (isMed) bg = "var(--accent-orange)";
                return (
                  <div key={i} className="flex-1 max-w-[12px] group relative flex flex-col justify-end h-full">
                    <div className="absolute -top-5 w-full text-center text-[8px] font-mono text-white opacity-0 group-hover:opacity-100">{h * 5}</div>
                    <div className="w-full rounded-t-sm transition-all" style={{height: `${h}%`, backgroundColor: bg}}></div>
                  </div>
                );
              })}
            </div>
            
            <div className="absolute bottom-0 left-6 right-0 flex justify-around text-[7px] text-[var(--text-tertiary)] font-mono border-t border-[var(--border)] pt-2">
              <span>Apc</span><span>Fra</span><span>Lhr</span><span>Mdp</span><span>Sgp</span><span>Nrt</span><span>Syd</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
