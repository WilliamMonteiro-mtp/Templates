import { ChevronDown, MousePointerClick, Mail, Share2, Search, ArrowUpRight, BarChart2 } from "lucide-react";

export function MarketingView() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-20">
      
      {/* Card 1: Multi-metric Area Chart */}
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-5 col-span-1 lg:col-span-3 shadow-[var(--shadow-card)]">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xs text-[var(--text-secondary)] font-medium uppercase tracking-wider mb-1">Campaign Analytics</h3>
            <h2 className="text-base font-bold">Acquisition vs Retention Cost (CAC/LTV)</h2>
          </div>
          <div className="text-[10px] text-[var(--text-secondary)] bg-[var(--void)] border border-[var(--border)] px-3 py-1.5 rounded flex items-center gap-4">
            Q3-Q4 2024 <ChevronDown className="w-3 h-3" />
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { label: "Blended CAC", val: "$142.50", inc: "-12.4%", c: "var(--accent-green)" },
            { label: "Avg LTV", val: "$2,450", inc: "+5.2%", c: "var(--accent-green)" },
            { label: "LTV:CAC Ratio", val: "17.1", inc: "+1.2", c: "var(--accent-cyan)" },
            { label: "Payback Period", val: "2.4 Mo", inc: "-0.5 Mo", c: "var(--accent-blue)" }
          ].map((kpi, i) => (
            <div key={i} className="p-4 border border-[var(--border)] rounded-md bg-[var(--void)] hover:border-[var(--text-secondary)] transition-colors cursor-default">
              <div className="text-[10px] text-[var(--text-secondary)] font-medium mb-2">{kpi.label}</div>
              <div className="flex items-end justify-between">
                <span className="text-xl font-bold text-white font-mono">{kpi.val}</span>
                <span className="text-[10px] font-medium" style={{color: kpi.c}}>{kpi.inc}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="relative h-64 w-full mt-4">
          <svg viewBox="0 0 1200 300" className="w-full h-full preserve-3d overflow-visible">
            {/* Grid */}
            <path d="M0,50 L1200,50 M0,125 L1200,125 M0,200 L1200,200 M0,275 L1200,275" stroke="var(--border)" strokeWidth="1" strokeDasharray="4,4" fill="none" opacity="0.5" />
            
            <defs>
              <linearGradient id="ltvGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--accent-cyan)" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="var(--accent-cyan)" stopOpacity="0.0"/>
              </linearGradient>
            </defs>

            {/* Bars for CAC */}
            {[...Array(12)].map((_, i) => (
              <rect key={`cac-${i}`} x={40 + i*95} y={275 - (Math.sin(i)*40 + 80)} width="20" height={Math.sin(i)*40 + 80} fill="var(--accent-purple)" rx="2" className="hover:opacity-80 transition-opacity cursor-pointer" />
            ))}

            {/* Line/Area for LTV */}
            <path d="M50,150 C150,140 250,90 350,110 C450,160 550,120 650,80 C750,40 850,70 950,50 C1050,30 1100,60 1150,40 L1150,275 L50,275 Z" fill="url(#ltvGrad)" />
            <path d="M50,150 C150,140 250,90 350,110 C450,160 550,120 650,80 C750,40 850,70 950,50 C1050,30 1100,60 1150,40" fill="none" stroke="var(--accent-cyan)" strokeWidth="4" strokeLinecap="round" className="drop-shadow-[0_0_8px_var(--accent-cyan)]" />

            <circle cx="650" cy="80" r="6" fill="var(--void)" stroke="var(--accent-cyan)" strokeWidth="3" className="drop-shadow-lg cursor-pointer" />
          </svg>
          
          <div className="absolute top-[10%] left-[50%] bg-[var(--elevated)] border border-[var(--border)] px-4 py-3 rounded-md shadow-2xl text-[10px] z-10 backdrop-blur-md">
            <div className="font-bold text-white mb-2 border-b border-[var(--border)] pb-1">July Campaign Cohort</div>
            <div className="flex justify-between gap-6 mb-1"><span className="text-[var(--text-secondary)]">Avg LTV</span> <span className="font-mono text-[var(--accent-cyan)] font-bold">$2,840</span></div>
            <div className="flex justify-between gap-6"><span className="text-[var(--text-secondary)]">Blended CAC</span> <span className="font-mono text-[var(--accent-purple)] font-bold">$115</span></div>
          </div>
        </div>
      </div>

      {/* Card 2: Channels Complex */}
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-5 col-span-1 lg:col-span-3 shadow-[var(--shadow-card)] flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3">
          <h3 className="text-xs text-[var(--text-secondary)] font-medium uppercase tracking-wider mb-1">Attribution</h3>
          <h2 className="text-base font-bold mb-6">Traffic by Channel</h2>
          
          <div className="relative w-48 h-48 mx-auto mb-6">
            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90 drop-shadow-xl">
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="var(--accent-cyan)" strokeWidth="12" strokeDasharray="113 251" />
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="var(--accent-blue)" strokeWidth="12" strokeDasharray="63 251" strokeDashoffset="-113" />
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="var(--accent-purple)" strokeWidth="12" strokeDasharray="38 251" strokeDashoffset="-176" />
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="var(--accent-orange)" strokeWidth="12" strokeDasharray="25 251" strokeDashoffset="-214" />
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="var(--accent-green)" strokeWidth="12" strokeDasharray="12 251" strokeDashoffset="-239" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[10px] text-[var(--text-secondary)] uppercase">Total Hits</span>
              <span className="text-xl font-bold text-white font-mono">1.2M</span>
            </div>
          </div>
        </div>
        
        <div className="lg:w-2/3 flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {[
              { icon: Search, label: "Organic Search", val: "45%", num: "540k", c: "var(--accent-cyan)" },
              { icon: MousePointerClick, label: "Paid Ads", val: "25%", num: "300k", c: "var(--accent-blue)" },
              { icon: Share2, label: "Social Media", val: "15%", num: "180k", c: "var(--accent-purple)" },
              { icon: Mail, label: "Email Marketing", val: "10%", num: "120k", c: "var(--accent-orange)" }
            ].map((ch, i) => (
              <div key={i} className="p-4 border border-[var(--border)] rounded bg-[var(--void)] hover:border-[var(--text-secondary)] transition-all group">
                <div className="flex justify-between items-center mb-3 text-[11px]">
                  <span className="flex items-center gap-2 font-medium text-[var(--text-secondary)] group-hover:text-white transition-colors">
                    <ch.icon className="w-4 h-4" style={{color: ch.c}} /> {ch.label}
                  </span>
                  <span className="font-mono text-xs">{ch.num}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-[var(--card)] border border-[var(--border)] rounded-full overflow-hidden">
                    <div className="h-full rounded-full shadow-[0_0_5px_currentColor]" style={{width: ch.val, backgroundColor: ch.c, color: ch.c}}></div>
                  </div>
                  <span className="text-[10px] font-bold w-8 text-right" style={{color: ch.c}}>{ch.val}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
