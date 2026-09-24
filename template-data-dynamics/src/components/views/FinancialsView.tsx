import { ChevronDown, TrendingUp, TrendingDown, DollarSign, Download, MoreHorizontal, ArrowUpRight, ArrowDownRight } from "lucide-react";

export function FinancialsView() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-20">
      
      {/* Card 1: Advanced Cash Flow & Runway */}
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-5 col-span-1 shadow-[var(--shadow-card)]">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xs text-[var(--text-secondary)] font-medium uppercase tracking-wider mb-1">Liquidity</h3>
            <h2 className="text-base font-bold">Cash Flow & Runway</h2>
          </div>
          <MoreHorizontal className="w-4 h-4 text-[var(--text-secondary)] cursor-pointer hover:text-white" />
        </div>
        
        <div className="flex justify-between items-end mb-6">
          <div>
            <div className="text-[10px] text-[var(--text-secondary)] mb-1">Total Cash Balance</div>
            <div className="text-3xl font-bold text-white">$4,250,000</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-[var(--text-secondary)] mb-1">Burn Rate</div>
            <div className="text-sm font-bold text-[var(--accent-orange)]">-$185k / mo</div>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          {[
            { label: "Operating Activities", val: "+$320,000", c: "var(--accent-green)", icon: TrendingUp },
            { label: "Investing Activities", val: "-$145,000", c: "var(--accent-orange)", icon: TrendingDown },
            { label: "Financing Activities", val: "+$50,000", c: "var(--accent-blue)", icon: TrendingUp }
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center p-2.5 rounded bg-[var(--void)] border border-[var(--border)]">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded bg-[var(--card)] border border-[var(--border)] flex items-center justify-center">
                  <item.icon className="w-3.5 h-3.5" style={{color: item.c}} />
                </div>
                <span className="text-[11px] font-medium">{item.label}</span>
              </div>
              <span className="text-xs font-bold" style={{color: item.c}}>{item.val}</span>
            </div>
          ))}
        </div>
        
        <div className="pt-4 border-t border-[var(--border)]">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] text-[var(--text-secondary)]">Estimated Runway</span>
            <span className="text-xs font-bold">22 Months</span>
          </div>
          <div className="w-full h-1.5 bg-[var(--void)] rounded-full overflow-hidden border border-[var(--border)]">
            <div className="h-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-cyan)]" style={{width: '75%'}}></div>
          </div>
        </div>
      </div>

      {/* Card 2: Revenue vs Expenses Complex SVG Chart */}
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-5 col-span-1 lg:col-span-2 shadow-[var(--shadow-card)]">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xs text-[var(--text-secondary)] font-medium uppercase tracking-wider mb-1">Performance Overview</h3>
            <h2 className="text-base font-bold">Revenue vs Operating Expenses (FY24)</h2>
          </div>
          <div className="flex gap-2">
            <div className="px-2 py-1 border border-[var(--border)] rounded flex items-center gap-2 text-[10px] text-[var(--text-secondary)] bg-[var(--void)]">
              Monthly <ChevronDown className="w-3 h-3" />
            </div>
            <button className="px-2 py-1 bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] border border-[var(--accent-blue)]/30 rounded flex items-center gap-1 text-[10px] hover:bg-[var(--accent-blue)]/20 transition-colors">
              <Download className="w-3 h-3" /> Export
            </button>
          </div>
        </div>
        
        <div className="relative h-56 w-full mt-4">
          {/* Y-Axis Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between text-[8px] text-[var(--text-secondary)]">
            <div className="flex items-center gap-2 w-full"><span className="w-8 text-right">1.5M</span><div className="h-[1px] bg-[var(--border)] w-full opacity-50"></div></div>
            <div className="flex items-center gap-2 w-full"><span className="w-8 text-right">1.0M</span><div className="h-[1px] bg-[var(--border)] w-full opacity-50"></div></div>
            <div className="flex items-center gap-2 w-full"><span className="w-8 text-right">500k</span><div className="h-[1px] bg-[var(--border)] w-full opacity-50"></div></div>
            <div className="flex items-center gap-2 w-full"><span className="w-8 text-right">0</span><div className="h-[1px] bg-[var(--border)] w-full opacity-50"></div></div>
          </div>
          
          {/* SVG Multi-Line & Area Chart */}
          <div className="absolute inset-0 ml-10 mb-4 mt-2">
            <svg viewBox="0 0 1000 200" className="w-full h-full preserve-3d overflow-visible" preserveAspectRatio="none">
              <defs>
                <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="var(--accent-blue)" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="expGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--accent-orange)" stopOpacity="0.15"/>
                  <stop offset="100%" stopColor="var(--accent-orange)" stopOpacity="0"/>
                </linearGradient>
              </defs>
              
              {/* Revenue Area & Line */}
              <path d="M0,150 C100,140 200,90 300,110 C400,130 500,80 600,60 C700,40 800,70 900,30 L1000,20 L1000,200 L0,200 Z" fill="url(#revGrad)" />
              <path d="M0,150 C100,140 200,90 300,110 C400,130 500,80 600,60 C700,40 800,70 900,30 L1000,20" fill="none" stroke="var(--accent-blue)" strokeWidth="3" strokeLinecap="round" />
              
              {/* Expenses Area & Line */}
              <path d="M0,180 C150,175 250,160 350,165 C450,170 550,140 650,135 C750,130 850,150 1000,120 L1000,200 L0,200 Z" fill="url(#expGrad)" />
              <path d="M0,180 C150,175 250,160 350,165 C450,170 550,140 650,135 C750,130 850,150 1000,120" fill="none" stroke="var(--accent-orange)" strokeWidth="2" strokeDasharray="6,4" strokeLinecap="round" />
              
              {/* Data Points & Tooltips */}
              <circle cx="600" cy="60" r="5" fill="var(--void)" stroke="var(--accent-blue)" strokeWidth="2" className="drop-shadow-lg" />
              <circle cx="650" cy="135" r="4" fill="var(--void)" stroke="var(--accent-orange)" strokeWidth="2" />
            </svg>
            
            {/* Overlay Tooltip */}
            <div className="absolute top-[10%] left-[55%] bg-[var(--elevated)] border border-[var(--border)] px-3 py-2 rounded-md shadow-xl text-[10px] z-10 backdrop-blur-md">
              <div className="font-bold text-white mb-1 border-b border-[var(--border)] pb-1">July 2024</div>
              <div className="flex justify-between gap-4"><span className="text-[var(--text-secondary)]">Revenue</span> <span className="font-mono text-[var(--accent-blue)]">$1.24M</span></div>
              <div className="flex justify-between gap-4"><span className="text-[var(--text-secondary)]">Expenses</span> <span className="font-mono text-[var(--accent-orange)]">$680k</span></div>
              <div className="flex justify-between gap-4 mt-1 pt-1 border-t border-[var(--border)]"><span className="font-bold">Net Margin</span> <span className="font-mono text-[var(--accent-green)]">45.1%</span></div>
            </div>
          </div>
          
          {/* X-Axis Labels */}
          <div className="absolute bottom-[-20px] left-10 right-0 flex justify-between text-[8px] text-[var(--text-secondary)]">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
          </div>
        </div>
      </div>

      {/* Card 3: Granular P&L Matrix */}
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-5 col-span-1 lg:col-span-3 shadow-[var(--shadow-card)]">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-xs text-[var(--text-secondary)] font-medium uppercase tracking-wider mb-1">Financial Statements</h3>
            <h2 className="text-base font-bold">Detailed Profit & Loss Matrix</h2>
          </div>
          <div className="flex gap-4 text-[10px]">
            <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[var(--accent-green)]"></span> Above Target</div>
            <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[var(--accent-orange)]"></span> Below Target</div>
          </div>
        </div>
        
        <div className="overflow-x-auto border border-[var(--border)] rounded-md bg-[var(--void)]">
          <table className="w-full text-[10px]">
            <thead>
              <tr className="text-[var(--text-secondary)] text-left border-b border-[var(--border)] bg-[var(--card)]">
                <th className="py-3 px-4 font-medium w-1/4">Account Category</th>
                <th className="py-3 px-4 font-medium text-right">Q1 Actual</th>
                <th className="py-3 px-4 font-medium text-right">Q2 Actual</th>
                <th className="py-3 px-4 font-medium text-right">Q3 Actual</th>
                <th className="py-3 px-4 font-medium text-right">YTD Total</th>
                <th className="py-3 px-4 font-medium text-right">Budget Var</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text)] font-mono">
              <tr className="border-b border-[var(--border)] hover:bg-[var(--card-hover)]">
                <td className="py-2.5 px-4 font-sans font-bold text-white">Total Revenue</td>
                <td className="py-2.5 px-4 text-right">$2,450,000</td>
                <td className="py-2.5 px-4 text-right">$2,800,000</td>
                <td className="py-2.5 px-4 text-right">$3,150,000</td>
                <td className="py-2.5 px-4 text-right font-bold text-[var(--accent-blue)]">$8,400,000</td>
                <td className="py-2.5 px-4 text-right text-[var(--accent-green)] flex items-center justify-end gap-1"><ArrowUpRight className="w-3 h-3" /> +12.5%</td>
              </tr>
              <tr className="border-b border-[var(--border)] hover:bg-[var(--card-hover)] bg-[var(--void)]/50">
                <td className="py-2 px-4 font-sans text-[var(--text-secondary)] pl-8">↳ Software Subscriptions</td>
                <td className="py-2 px-4 text-right text-[var(--text-secondary)]">$1,800,000</td>
                <td className="py-2 px-4 text-right text-[var(--text-secondary)]">$2,100,000</td>
                <td className="py-2 px-4 text-right text-[var(--text-secondary)]">$2,500,000</td>
                <td className="py-2 px-4 text-right">$6,400,000</td>
                <td className="py-2 px-4 text-right text-[var(--accent-green)]">+15.2%</td>
              </tr>
              <tr className="border-b border-[var(--border)] hover:bg-[var(--card-hover)] bg-[var(--void)]/50">
                <td className="py-2 px-4 font-sans text-[var(--text-secondary)] pl-8">↳ Professional Services</td>
                <td className="py-2 px-4 text-right text-[var(--text-secondary)]">$650,000</td>
                <td className="py-2 px-4 text-right text-[var(--text-secondary)]">$700,000</td>
                <td className="py-2 px-4 text-right text-[var(--text-secondary)]">$650,000</td>
                <td className="py-2 px-4 text-right">$2,000,000</td>
                <td className="py-2 px-4 text-right text-[var(--accent-orange)]">-2.4%</td>
              </tr>
              <tr className="border-b border-[var(--border)] hover:bg-[var(--card-hover)]">
                <td className="py-2.5 px-4 font-sans font-bold text-[var(--accent-orange)]">Cost of Goods Sold (COGS)</td>
                <td className="py-2.5 px-4 text-right">$600,000</td>
                <td className="py-2.5 px-4 text-right">$680,000</td>
                <td className="py-2.5 px-4 text-right">$720,000</td>
                <td className="py-2.5 px-4 text-right font-bold text-[var(--accent-orange)]">$2,000,000</td>
                <td className="py-2.5 px-4 text-right text-[var(--accent-green)] flex items-center justify-end gap-1"><ArrowDownRight className="w-3 h-3" /> -4.1%</td>
              </tr>
              <tr className="border-b border-[var(--border)] hover:bg-[var(--card-hover)] bg-[var(--card)]/30">
                <td className="py-3 px-4 font-sans font-bold text-white text-xs">Gross Profit</td>
                <td className="py-3 px-4 text-right font-bold">$1,850,000</td>
                <td className="py-3 px-4 text-right font-bold">$2,120,000</td>
                <td className="py-3 px-4 text-right font-bold">$2,430,000</td>
                <td className="py-3 px-4 text-right font-bold text-[var(--accent-cyan)]">$6,400,000</td>
                <td className="py-3 px-4 text-right text-[var(--accent-green)] font-bold">+18.7%</td>
              </tr>
              <tr className="border-b border-[var(--border)] hover:bg-[var(--card-hover)]">
                <td className="py-2.5 px-4 font-sans font-bold text-[var(--accent-purple)]">Operating Expenses (OpEx)</td>
                <td className="py-2.5 px-4 text-right">$1,200,000</td>
                <td className="py-2.5 px-4 text-right">$1,250,000</td>
                <td className="py-2.5 px-4 text-right">$1,350,000</td>
                <td className="py-2.5 px-4 text-right font-bold text-[var(--accent-purple)]">$3,800,000</td>
                <td className="py-2.5 px-4 text-right text-[var(--accent-orange)] flex items-center justify-end gap-1"><ArrowUpRight className="w-3 h-3" /> +5.2%</td>
              </tr>
              <tr className="border-b border-[var(--border)] hover:bg-[var(--card-hover)] bg-[var(--card)] shadow-inner">
                <td className="py-4 px-4 font-sans font-bold text-white text-sm">Net Income (EBITDA)</td>
                <td className="py-4 px-4 text-right font-bold text-[var(--accent-green)]">$650,000</td>
                <td className="py-4 px-4 text-right font-bold text-[var(--accent-green)]">$870,000</td>
                <td className="py-4 px-4 text-right font-bold text-[var(--accent-green)]">$1,080,000</td>
                <td className="py-4 px-4 text-right font-bold text-[var(--accent-green)] text-sm">$2,600,000</td>
                <td className="py-4 px-4 text-right text-[var(--accent-green)] font-bold text-sm flex items-center justify-end gap-1"><ArrowUpRight className="w-4 h-4" /> +24.8%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
