import { Search, ChevronDown, MoreHorizontal, Settings, ChevronLeft, ChevronRight, CornerRightDown } from "lucide-react";

export function MarketTrendsView({ locale = 'pt' }: { locale?: string }) {
  const t = {
    pt: {
      metrics: "Visão Geral de Métricas G4",
      revenue: "Receita Total",
      latency: "Latência de Processamento de Dados",
      sentiment: "Análise de Sentimento",
      marketTrends: "Tendências de Mercado & Análise da Concorrência",
      ourStock: "Nossa Ação",
      marketIndex: "Índice de Mercado",
      keyIndices: "Principais Índices de Mercado",
      projectBeta: "Projeto Beta - Financeiro...",
      insights: "Centro de Insights & Consultoria",
      needExpert: "Precisa de análise especializada sobre estes dados?",
      requestCustom: "Solicitar Insight Personalizado",
      industryFocus: "Foco da Indústria",
      submit: "Submeter Pedido"
    },
    en: {
      metrics: "G4 Key Metrics Overview",
      revenue: "Total Revenue",
      latency: "Data Processing Latency",
      sentiment: "Sentiment Analysis",
      marketTrends: "Market Trends & Competitor Analysis",
      ourStock: "Our Stock",
      marketIndex: "Market Index",
      keyIndices: "Key Market Indices",
      projectBeta: "Project Beta - Financial...",
      insights: "Insights & Consultation Hub",
      needExpert: "Need expert analysis on this data?",
      requestCustom: "Request Custom Insight",
      industryFocus: "Industry Focus",
      submit: "Submit Request"
    }
  };
  const lang = (locale === 'pt' || locale === 'en') ? t[locale] : t['pt'];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-full pb-10">
      
      {/* Left Column (Key Metrics) */}
      <div className="col-span-1 flex flex-col gap-4">
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-4 shadow-[var(--shadow-card)]">
          <h3 className="text-xs font-semibold text-white mb-4">{lang.metrics}</h3>
          
          <div className="bg-[var(--void)] border border-[var(--border)] rounded-md p-3 mb-4">
            <div className="text-[10px] text-[var(--text-secondary)] mb-1">{lang.revenue}</div>
            <div className="text-2xl font-bold text-white mb-2">$4.2M</div>
            <div className="h-12 w-full mt-2 relative">
              <svg viewBox="0 0 100 40" className="w-full h-full preserve-3d" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--accent-red)" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="var(--accent-red)" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <path d="M0,35 C10,30 20,20 30,25 C40,30 50,15 60,10 C70,5 80,15 90,5 L100,0 L100,40 L0,40 Z" fill="url(#revGrad)" />
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
                  <linearGradient id="latGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="var(--accent-blue)" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <path d="M0,25 C10,15 20,35 30,30 C40,25 50,35 60,20 C70,5 80,30 90,15 L100,20 L100,40 L0,40 Z" fill="url(#latGrad)" />
                <path d="M0,25 C10,15 20,35 30,30 C40,25 50,35 60,20 C70,5 80,30 90,15 L100,20" fill="none" stroke="var(--accent-blue)" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-4 shadow-[var(--shadow-card)] flex-1 flex flex-col items-center justify-center relative">
          <h3 className="text-xs font-semibold text-white absolute top-4 left-4">{lang.sentiment}</h3>
          <div className="relative w-32 h-32 mt-6">
            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
              <circle cx="50" cy="50" r="35" fill="transparent" stroke="var(--void)" strokeWidth="14" />
              <circle cx="50" cy="50" r="35" fill="transparent" stroke="var(--accent-cyan)" strokeWidth="14" strokeDasharray="90 220" />
              <circle cx="50" cy="50" r="35" fill="transparent" stroke="var(--accent-blue)" strokeWidth="14" strokeDasharray="50 220" strokeDashoffset="-90" />
              <circle cx="50" cy="50" r="35" fill="transparent" stroke="var(--accent-orange)" strokeWidth="14" strokeDasharray="40 220" strokeDashoffset="-140" />
              <circle cx="50" cy="50" r="35" fill="transparent" stroke="var(--accent-red)" strokeWidth="14" strokeDasharray="40 220" strokeDashoffset="-180" />
            </svg>
          </div>
        </div>
      </div>

      {/* Middle Column (Large Chart & Tables) */}
      <div className="col-span-1 lg:col-span-2 flex flex-col gap-4">
        
        {/* Market Trends Line Chart */}
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-4 shadow-[var(--shadow-card)] flex-1 relative">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-semibold text-white">{lang.marketTrends}</h3>
            <div className="flex items-center gap-4 text-[9px] font-medium text-white">
              <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] shadow-[var(--glow-cyan)]"></span> {lang.ourStock}</div>
              <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]"></span> Competitor A</div>
              <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-orange)]"></span> Competitor B</div>
              <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-red)]"></span> {lang.marketIndex}</div>
            </div>
          </div>
          
          <div className="relative h-64 w-full mt-2">
            {/* Grid */}
            <div className="absolute inset-0 flex flex-col justify-between text-[8px] text-[var(--text-tertiary)] pb-5">
              {[700, 600, 500, 400, 300, 200, 100, 0].map((val) => (
                <div key={val} className="flex items-center gap-2 w-full">
                  <span className="w-6 text-right">{val}</span>
                  <div className="h-[1px] bg-[var(--border)] w-full opacity-30"></div>
                </div>
              ))}
            </div>
            
            {/* Chart */}
            <div className="absolute inset-0 ml-8 mb-5 mt-1 overflow-hidden">
              <svg viewBox="0 0 1000 250" className="w-full h-full preserve-3d" preserveAspectRatio="none">
                {/* Cyan Line */}
                <path d="M0,200 L100,210 L200,180 L300,190 L400,150 L500,130 L600,160 L700,90 L800,120 L900,40 L1000,70" fill="none" stroke="var(--accent-cyan)" strokeWidth="2.5" className="drop-shadow-[0_0_5px_var(--accent-cyan)]" />
                {/* Blue Line */}
                <path d="M0,230 L100,220 L200,200 L300,210 L400,180 L500,160 L600,190 L700,140 L800,150 L900,90 L1000,110" fill="none" stroke="var(--accent-blue)" strokeWidth="2" strokeDasharray="4,4" />
                {/* Red Line */}
                <path d="M0,240 L100,235 L200,225 L300,230 L400,200 L500,180 L600,210 L700,160 L800,170 L900,110 L1000,130" fill="none" stroke="var(--accent-red)" strokeWidth="2" />
                
                {/* Nodes on Cyan */}
                <circle cx="700" cy="90" r="4" fill="var(--card)" stroke="var(--accent-cyan)" strokeWidth="2" />
                <circle cx="800" cy="120" r="4" fill="var(--card)" stroke="var(--accent-cyan)" strokeWidth="2" />
                <circle cx="900" cy="40" r="5" fill="var(--accent-cyan)" stroke="var(--card)" strokeWidth="2" className="shadow-[var(--glow-cyan)]" />
              </svg>
            </div>
            
            {/* X-Axis */}
            <div className="absolute bottom-0 left-8 right-0 flex justify-between text-[8px] text-[var(--text-tertiary)]">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-2">
              <button className="w-6 h-6 rounded bg-[var(--void)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white"><ChevronLeft className="w-3 h-3" /></button>
              <button className="w-6 h-6 rounded bg-[var(--void)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white"><ChevronRight className="w-3 h-3" /></button>
            </div>
            <div className="flex gap-2">
              <button className="w-6 h-6 rounded bg-[var(--void)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white"><Settings className="w-3 h-3" /></button>
              <button className="w-6 h-6 rounded bg-[var(--void)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white"><CornerRightDown className="w-3 h-3" /></button>
            </div>
          </div>
        </div>
        
        {/* Bottom Split (Sentiment Data & Indices) */}
        <div className="grid grid-cols-2 gap-4 h-40">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-4 shadow-[var(--shadow-card)]">
            <h3 className="text-xs font-semibold text-white mb-4">{lang.sentiment}</h3>
            <div className="space-y-3">
              {[
                { l: lang.ourStock, v: "33.0%", c: "var(--accent-cyan)" },
                { l: "Competitor A", v: "20.3%", c: "var(--accent-blue)" },
                { l: "Competitor B", v: "33.8%", c: "var(--accent-orange)" },
                { l: lang.marketIndex, v: "16.4%", c: "var(--accent-red)" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center text-[10px]">
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: item.c}}></span> {item.l}</span>
                  <span className="font-mono text-white font-medium">{item.v}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-4 shadow-[var(--shadow-card)]">
            <h3 className="text-xs font-semibold text-white mb-4">{lang.keyIndices}</h3>
            <div className="space-y-3">
              {[
                { l: lang.ourStock, v: "$33.93", p: 80, c: "var(--accent-cyan)" },
                { l: "Competitor A", v: "$3.98", p: 20, c: "var(--accent-blue)" },
                { l: "Competitor B", v: "$57.73", p: 95, c: "var(--accent-orange)" },
                { l: lang.marketIndex, v: "$102", p: 100, c: "var(--accent-red)" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[10px]" title={item.l}>
                  <div className="w-16 truncate">{item.l}</div>
                  <div className="flex-1 h-1.5 bg-[var(--void)] rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{width: `${item.p}%`, backgroundColor: item.c}}></div>
                  </div>
                  <div className="w-10 text-right font-mono font-medium text-white">{item.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="col-span-1 flex flex-col gap-4">
        
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-4 shadow-[var(--shadow-card)]">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xs font-semibold text-white">{lang.projectBeta}</h3>
            <MoreHorizontal className="w-4 h-4 text-[var(--text-tertiary)]" />
          </div>
          
          <div className="relative h-40 w-full">
            <div className="absolute inset-0 flex flex-col justify-between text-[8px] text-[var(--text-tertiary)] pb-4">
              <div className="w-full h-[1px] bg-[var(--border)] opacity-30"></div>
              <div className="w-full h-[1px] bg-[var(--border)] opacity-30"></div>
              <div className="w-full h-[1px] bg-[var(--border)] opacity-30"></div>
              <div className="w-full h-[1px] bg-[var(--border)] opacity-30"></div>
              <div className="w-full h-[1px] bg-[var(--border)] opacity-30"></div>
            </div>
            
            <div className="absolute inset-0 mb-4 mt-1">
              <svg viewBox="0 0 100 100" className="w-full h-full preserve-3d" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="betaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--accent-cyan)" stopOpacity="0.5"/>
                    <stop offset="100%" stopColor="var(--accent-blue)" stopOpacity="0.1"/>
                  </linearGradient>
                </defs>
                <path d="M0,80 C10,90 20,40 30,50 C40,60 50,20 60,30 C70,40 80,10 90,50 L100,30 L100,100 L0,100 Z" fill="url(#betaGrad)" />
                <path d="M0,80 C10,90 20,40 30,50 C40,60 50,20 60,30 C70,40 80,10 90,50 L100,30" fill="none" stroke="var(--accent-cyan)" strokeWidth="2" />
                <path d="M0,90 C15,85 25,60 35,65 C45,70 55,40 65,45 C75,50 85,30 100,45" fill="none" stroke="var(--accent-blue)" strokeWidth="1" strokeDasharray="2,2" />
              </svg>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[8px] text-[var(--text-tertiary)] px-2">
              <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
            </div>
          </div>
        </div>

        <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-4 shadow-[var(--glow-cyan)] relative overflow-hidden flex-1 flex flex-col justify-between">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-cyan)]/10 to-transparent pointer-events-none"></div>
          
          <div>
            <h3 className="text-sm font-semibold text-white mb-1">{lang.insights}</h3>
            <p className="text-[10px] text-[var(--text-secondary)] mb-6">{lang.needExpert}</p>
            
            <div className="space-y-3">
              <input 
                type="text" 
                placeholder={lang.requestCustom} 
                className="w-full bg-[var(--void)] border border-[var(--border)] rounded px-3 py-2 text-[10px] text-white focus:outline-none focus:border-[var(--accent-cyan)] transition-colors"
              />
              
              <div>
                <label className="text-[9px] text-[var(--text-tertiary)] mb-1 block">{lang.industryFocus}</label>
                <div className="relative">
                  <select className="w-full bg-[var(--void)] border border-[var(--border)] rounded px-3 py-2 text-[10px] text-white focus:outline-none focus:border-[var(--accent-cyan)] transition-colors appearance-none">
                    <option>{lang.industryFocus}</option>
                    <option>Fintech</option>
                    <option>Healthcare</option>
                  </select>
                  <ChevronDown className="w-3 h-3 absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
          
          <button className="w-full mt-6 bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-red)] text-white text-[11px] font-bold py-2.5 rounded shadow-[var(--glow-orange)] hover:brightness-110 transition-all flex justify-center items-center gap-2">
            {lang.submit} <CornerRightDown className="w-3 h-3" />
          </button>
        </div>

      </div>
    </div>
  );
}
