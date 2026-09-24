import { ChevronDown, Search, ArrowUpRight, Filter, ShoppingBag, Globe, Zap, Users } from "lucide-react";

export function SalesView() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pb-20">
      
      {/* Top Level KPIs */}
      <div className="col-span-1 lg:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Total Revenue", val: "$2.4M", inc: "+14.5%", icon: DollarSignMock },
          { label: "New Customers", val: "1,249", inc: "+8.2%", icon: Users },
          { label: "Avg. Deal Size", val: "$14.2k", inc: "+2.1%", icon: ShoppingBag },
          { label: "Win Rate", val: "68.4%", inc: "+5.4%", icon: Zap }
        ].map((kpi, i) => (
          <div key={i} className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-4 shadow-[var(--shadow-card)] flex items-center justify-between group hover:border-[var(--accent-blue)] transition-colors">
            <div>
              <div className="text-[10px] text-[var(--text-secondary)] font-medium mb-1">{kpi.label}</div>
              <div className="text-xl font-bold text-white flex items-end gap-2">
                {kpi.val} <span className="text-[10px] text-[var(--accent-green)] flex items-center mb-1"><ArrowUpRight className="w-3 h-3" /> {kpi.inc}</span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-[var(--void)] border border-[var(--border)] flex items-center justify-center text-[var(--accent-blue)] group-hover:scale-110 transition-transform">
              <kpi.icon className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Card 1: 3D Stacked Pipeline Area */}
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-5 col-span-1 lg:col-span-3 shadow-[var(--shadow-card)] flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xs text-[var(--text-secondary)] font-medium uppercase tracking-wider mb-1">Conversion Architecture</h3>
            <h2 className="text-base font-bold">Pipeline Velocity & Stages</h2>
          </div>
          <div className="flex gap-2">
            <div className="px-3 py-1 bg-[var(--void)] border border-[var(--border)] rounded flex items-center gap-2 text-[10px] hover:border-[var(--text-secondary)] cursor-pointer">
              <Filter className="w-3 h-3" /> Filters
            </div>
            <div className="px-3 py-1 bg-[var(--void)] border border-[var(--border)] rounded flex items-center gap-2 text-[10px]">
              Q3 2024 <ChevronDown className="w-3 h-3" />
            </div>
          </div>
        </div>
        
        <div className="relative flex-1 min-h-[200px] w-full flex items-end justify-between px-4 mt-4">
          <div className="absolute inset-0 border-b border-[var(--border)] flex flex-col justify-between text-[8px] text-[var(--text-secondary)] pb-6">
            <div className="w-full h-[1px] bg-[var(--border)]/30"></div>
            <div className="w-full h-[1px] bg-[var(--border)]/30"></div>
            <div className="w-full h-[1px] bg-[var(--border)]/30"></div>
            <div className="w-full h-[1px] bg-[var(--border)]/30"></div>
          </div>
          
          {[
            { l: "Lead Gen", v: 100, c1: "#3B82F6", c2: "#1E3A8A", val: "4,500" },
            { l: "Qualified", v: 75, c1: "#06B6D4", c2: "#164E63", val: "3,375" },
            { l: "Proposal", v: 45, c1: "#10B981", c2: "#064E3B", val: "2,025" },
            { l: "Negotiation", v: 25, c1: "#F59E0B", c2: "#78350F", val: "1,125" },
            { l: "Closed Won", v: 12, c1: "#8B5CF6", c2: "#4C1D95", val: "540" }
          ].map((s, i) => (
            <div key={i} className="relative flex flex-col items-center justify-end h-full w-[15%] group z-10">
              <div className="absolute -top-8 bg-[var(--void)] border border-[var(--border)] px-2 py-1 rounded text-[9px] font-mono shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Vol: {s.val}
              </div>
              <div className="w-full relative shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-500 hover:brightness-125" style={{height: `${s.v}%`, background: `linear-gradient(to bottom, ${s.c1}, ${s.c2})`, borderRadius: '4px 4px 0 0'}}>
                <div className="absolute inset-0 bg-white/10 w-1/3"></div>
              </div>
              <div className="mt-3 text-center">
                <div className="text-[10px] font-bold text-white mb-0.5">{s.v}%</div>
                <div className="text-[8px] text-[var(--text-secondary)] uppercase tracking-wider">{s.l}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Card 2: Geo-Heatmap Simulated */}
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-5 col-span-1 shadow-[var(--shadow-card)] flex flex-col">
        <h3 className="text-xs text-[var(--text-secondary)] font-medium uppercase tracking-wider mb-1">Global Reach</h3>
        <h2 className="text-base font-bold mb-6">Revenue Heatmap</h2>
        
        <div className="relative w-full aspect-[4/3] flex items-center justify-center border border-[var(--border)] rounded-md mb-6 bg-[var(--void)] overflow-hidden group">
          <Globe className="absolute w-64 h-64 text-[var(--border)]/20 animate-pulse" />
          
          <div className="absolute top-[35%] left-[25%] w-3 h-3 rounded-full bg-[var(--accent-blue)] shadow-[0_0_15px_var(--accent-blue)] flex items-center justify-center group-hover:scale-125 transition-transform"><div className="w-1 h-1 bg-white rounded-full"></div></div>
          <div className="absolute top-[45%] left-[70%] w-4 h-4 rounded-full bg-[var(--accent-cyan)] shadow-[0_0_20px_var(--accent-cyan)] flex items-center justify-center group-hover:scale-125 transition-transform"><div className="w-1.5 h-1.5 bg-white rounded-full"></div></div>
          <div className="absolute top-[60%] left-[30%] w-2 h-2 rounded-full bg-[var(--accent-orange)] shadow-[0_0_10px_var(--accent-orange)]"></div>
          <div className="absolute top-[25%] left-[55%] w-2.5 h-2.5 rounded-full bg-[var(--accent-green)] shadow-[0_0_12px_var(--accent-green)]"></div>
          
          <div className="absolute bottom-2 left-2 right-2 bg-[var(--elevated)]/80 backdrop-blur border border-[var(--border)] rounded p-2 text-[8px] flex justify-between items-center">
            <span>High Density</span>
            <div className="flex w-16 h-1.5 rounded-full overflow-hidden bg-gradient-to-r from-[var(--void)] via-[var(--accent-blue)] to-[var(--accent-cyan)]"></div>
          </div>
        </div>
        
        <div className="space-y-3 text-[10px] flex-1">
          <div className="flex justify-between items-center"><span className="text-[var(--text-secondary)]">APAC</span> <span className="font-mono font-bold">$1.2M</span></div>
          <div className="w-full h-1 bg-[var(--void)] rounded-full overflow-hidden"><div className="h-full bg-[var(--accent-cyan)]" style={{width:'60%'}}></div></div>
          
          <div className="flex justify-between items-center mt-2"><span className="text-[var(--text-secondary)]">NA</span> <span className="font-mono font-bold">$980k</span></div>
          <div className="w-full h-1 bg-[var(--void)] rounded-full overflow-hidden"><div className="h-full bg-[var(--accent-blue)]" style={{width:'45%'}}></div></div>
          
          <div className="flex justify-between items-center mt-2"><span className="text-[var(--text-secondary)]">EMEA</span> <span className="font-mono font-bold">$450k</span></div>
          <div className="w-full h-1 bg-[var(--void)] rounded-full overflow-hidden"><div className="h-full bg-[var(--accent-green)]" style={{width:'20%'}}></div></div>
        </div>
      </div>
    </div>
  );
}

function DollarSignMock(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>;
}
