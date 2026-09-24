"use client";

import { 
  BarChart3, PieChart, Users, Settings, Package, LayoutDashboard, Search, 
  Share2, Download, Check, AlertCircle, ChevronDown, Bell, HelpCircle,
  Database, FileText, Layout, BellRing, Upload, Briefcase, Box, DollarSign,
  TrendingUp, Sparkles, Filter, Maximize2, MoreHorizontal, DownloadCloud
} from "lucide-react";
import { useState } from "react";

export function Portfolio() {
  const [activeTab, setActiveTab] = useState("Analytics");

  return (
    <div className="flex h-screen bg-[var(--void)] text-[var(--text)] overflow-hidden font-sans text-sm">
      
      {/* Sidebar Navigation */}
      <aside className="w-56 flex flex-col py-6 border-r border-[var(--border)] bg-[var(--elevated)] z-20 shrink-0 h-full overflow-y-auto hide-scrollbar">
        <div className="flex items-center gap-3 px-6 mb-8 text-[var(--accent-purple)] font-bold text-lg">
          <div className="w-6 h-6 bg-[var(--accent-purple)] rounded-md flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-sm rotate-45"></div>
          </div>
          DATAVIEW
        </div>
        
        <nav className="flex flex-col px-3">
          {[
            { icon: LayoutDashboard, label: "Overview" },
            { icon: BarChart3, label: "Analytics" },
            { icon: PieChart, label: "Visualizations" },
            { icon: Database, label: "Datasets" },
            { icon: FileText, label: "Reports" },
            { icon: Layout, label: "Dashboards" },
            { icon: BellRing, label: "Alerts" },
            { icon: Upload, label: "Exports" }
          ].map((item) => {
            const isActive = activeTab === item.label;
            return (
              <button 
                key={item.label} 
                onClick={() => setActiveTab(item.label)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-[var(--card-hover)] text-white' : 'text-[var(--text-secondary)] hover:text-white'}`}
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium text-xs">{item.label}</span>
              </button>
            );
          })}
        </nav>
        
        <div className="mt-8 px-6 text-[10px] uppercase font-bold text-[var(--text-tertiary)] mb-2">Workspace</div>
        <nav className="flex flex-col px-3">
          {[
            { icon: Briefcase, label: "Marketing" },
            { icon: Box, label: "Product" },
            { icon: DollarSign, label: "Sales" },
            { icon: TrendingUp, label: "Finance" }
          ].map((item) => (
            <button 
              key={item.label} 
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-[var(--text-secondary)] hover:text-white transition-colors"
            >
              <item.icon className="w-4 h-4" />
              <span className="font-medium text-xs">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto px-3 flex flex-col">
          <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-[var(--text-secondary)] hover:text-white transition-colors">
            <Settings className="w-4 h-4" />
            <span className="font-medium text-xs">Settings</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-[var(--text-secondary)] hover:text-white transition-colors">
            <HelpCircle className="w-4 h-4" />
            <span className="font-medium text-xs">Help</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2 mt-2 rounded-lg text-white hover:bg-[var(--card-hover)] transition-colors border-t border-[var(--border)] pt-4">
            <img src="https://i.pravatar.cc/150?img=11" alt="User" className="w-6 h-6 rounded-full" />
            <span className="font-medium text-xs">User profile</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        
        {/* Top Header */}
        <header className="h-14 flex items-center justify-between px-6 border-b border-[var(--border)] shrink-0 bg-[var(--void)] z-10">
          <div className="flex items-center text-xs text-[var(--text-secondary)]">
            Analytics <span className="mx-2">/</span> <span className="text-white">Overview</span>
          </div>
          
          <div className="flex-1 max-w-md mx-8 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
            <input 
              type="text" 
              placeholder="Search data, reports, dashboards..." 
              className="w-full bg-[var(--card)] border border-[var(--border)] rounded-md py-1.5 pl-9 pr-4 text-xs focus:outline-none focus:border-[var(--accent-purple)] text-white placeholder-[var(--text-secondary)]"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-[var(--card)] border border-[var(--border)] rounded-md hover:bg-[var(--card-hover)] transition-colors">
              <CalendarIcon className="w-3.5 h-3.5" /> Last 30 days <ChevronDown className="w-3 h-3" />
            </button>
            <Bell className="w-4 h-4 text-[var(--text-secondary)] cursor-pointer hover:text-white" />
            <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-7 h-7 rounded-full object-cover border border-[var(--border)]" />
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-6 scroll-smooth bg-[#12141C]">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h1 className="text-2xl font-bold mb-1">Analytics Overview</h1>
              <p className="text-[var(--text-secondary)] text-xs">Monitor performance, discover patterns and understand your data.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-3 py-2 text-xs font-medium bg-[var(--card)] border border-[var(--border)] rounded-md hover:bg-[var(--card-hover)] transition-colors">
                <CalendarIcon className="w-3.5 h-3.5" /> Last 30 days <ChevronDown className="w-3 h-3" />
              </button>
              <span className="text-xs text-[var(--text-secondary)]">vs vs previous period</span>
              <button className="flex items-center gap-2 px-3 py-2 text-xs font-medium bg-[var(--card)] border border-[var(--border)] rounded-md hover:bg-[var(--card-hover)] transition-colors ml-2">
                <DownloadCloud className="w-3.5 h-3.5" /> Export
              </button>
            </div>
          </div>
          
          {/* Top KPIs */}
          <div className="grid grid-cols-5 gap-4 mb-4">
            <KpiCard title="Total Revenue" value="€2.84M" trend="+18.4%" trendUp={true} prev="Previous period - €2.84M" color="var(--accent-green)" />
            <KpiCard title="Active Users" value="184,293" trend="+12.7%" trendUp={true} prev="Previous period - 12.7%" color="var(--accent-purple)" />
            <KpiCard title="Conversion Rate" value="8.42%" trend="+2.1%" trendUp={true} prev="Previous period - 8.42%" color="var(--accent-orange)" />
            <KpiCard title="Average Order Value" value="€126.40" trend="+6.6%" trendUp={true} prev="Previous period - +126.40" color="var(--accent-cyan)" />
            <KpiCard title="Customer Retention" value="74.8%" trend="+4.2%" trendUp={true} prev="Previous period - -74.8%" color="var(--accent-blue)" />
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-12 gap-4 mb-4">
            
            {/* Revenue & Growth */}
            <div className="col-span-4 bg-[var(--card)] border border-[var(--border)] rounded-xl p-4">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-bold">Revenue & Growth</h3>
                <button className="flex items-center gap-2 px-2 py-1 text-[10px] bg-[#1A1D27] border border-[var(--border)] rounded">
                  <CalendarIcon className="w-3 h-3" /> Last 30 days <ChevronDown className="w-3 h-3" />
                </button>
              </div>
              <div className="flex gap-4 text-[10px] mb-4">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[var(--accent-green)]"></span> Revenue</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[var(--accent-blue)]"></span> Orders</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[var(--accent-purple)]"></span> Users</span>
              </div>
              <div className="relative h-40 w-full mt-6">
                <img src="https://ui-avatars.com/api/?name=Chart&background=random&color=fff&size=400" className="opacity-0 absolute" alt="" />
                {/* Simulated Chart */}
                <svg viewBox="0 0 400 150" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                  {/* Grid */}
                  <line x1="0" y1="30" x2="400" y2="30" stroke="var(--border)" strokeWidth="1" />
                  <line x1="0" y1="70" x2="400" y2="70" stroke="var(--border)" strokeWidth="1" />
                  <line x1="0" y1="110" x2="400" y2="110" stroke="var(--border)" strokeWidth="1" />
                  
                  {/* Purple Area */}
                  <path d="M0,150 L0,120 C50,110 100,100 150,110 C200,120 250,90 300,100 C350,110 400,100 400,100 L400,150 Z" fill="var(--accent-purple)" fillOpacity="0.1" />
                  <path d="M0,120 C50,110 100,100 150,110 C200,120 250,90 300,100 C350,110 400,100 400,100" fill="none" stroke="var(--accent-purple)" strokeWidth="2" />
                  
                  {/* Blue Area */}
                  <path d="M0,150 L0,90 C50,100 100,70 150,80 C200,90 250,50 300,70 C350,90 400,60 400,60 L400,150 Z" fill="var(--accent-blue)" fillOpacity="0.15" />
                  <path d="M0,90 C50,100 100,70 150,80 C200,90 250,50 300,70 C350,90 400,60 400,60" fill="none" stroke="var(--accent-blue)" strokeWidth="2" />
                  
                  {/* Green Area */}
                  <path d="M0,150 L0,60 C50,50 100,40 150,30 C200,20 250,60 300,30 C350,0 400,20 400,20 L400,150 Z" fill="var(--accent-green)" fillOpacity="0.2" />
                  <path d="M0,60 C50,50 100,40 150,30 C200,20 250,60 300,30 C350,0 400,20 400,20" fill="none" stroke="var(--accent-green)" strokeWidth="2" />
                  
                  {/* Tooltip Line */}
                  <line x1="250" y1="0" x2="250" y2="150" stroke="rgba(255,255,255,0.2)" strokeDasharray="4,4" />
                  <circle cx="250" cy="60" r="4" fill="var(--accent-green)" stroke="var(--card)" strokeWidth="2" />
                  <circle cx="250" cy="50" r="4" fill="var(--accent-blue)" stroke="var(--card)" strokeWidth="2" />
                  <circle cx="250" cy="90" r="4" fill="var(--accent-purple)" stroke="var(--card)" strokeWidth="2" />
                </svg>
                <div className="absolute top-0 right-[45%] bg-[#252A36] border border-[#383F4C] p-2 rounded shadow-lg z-10 text-[9px]">
                  <div className="font-bold mb-1">Jan</div>
                  <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)]"></span> Revenue</div>
                  <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-purple)]"></span> Users</div>
                </div>
                
                <div className="absolute -left-6 top-0 h-full flex flex-col justify-between text-[8px] text-[var(--text-secondary)]">
                  <span>€2.84M</span>
                  <span>€2.00M</span>
                  <span>€1.00M</span>
                  <span>€50K</span>
                  <span>0</span>
                </div>
                <div className="absolute -bottom-4 w-full flex justify-between text-[8px] text-[var(--text-secondary)]">
                  <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span>
                </div>
              </div>
            </div>

            {/* Revenue by Region */}
            <div className="col-span-3 bg-[var(--card)] border border-[var(--border)] rounded-xl p-4">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-bold">Revenue by Region</h3>
                <div className="flex gap-1 text-[var(--text-tertiary)]"><Maximize2 className="w-3 h-3" /><MoreHorizontal className="w-3 h-3" /></div>
              </div>
              <div className="flex justify-between text-[10px] mb-4">
                <div className="flex gap-3">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[var(--accent-green)]"></span> Revenue</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[var(--accent-purple)]"></span> Growth %</span>
                </div>
                <span className="text-[var(--text-secondary)]">Revenue - Growth</span>
              </div>
              
              <div className="relative h-40 w-full mt-4 flex items-end justify-between px-2">
                {[
                  { r: 80, g: 60, l: "North America" },
                  { r: 90, g: 40, l: "Europe" },
                  { r: 70, g: 75, l: "Asia" },
                  { r: 50, g: 65, l: "Asia Pacific" },
                  { r: 40, g: 30, l: "Latin America" },
                  { r: 60, g: 85, l: "Middle East" }
                ].map((col, i) => (
                  <div key={i} className="flex gap-1 h-full items-end">
                    <div className="w-3 bg-[var(--accent-green)] rounded-t-sm" style={{height: `${col.r}%`}}></div>
                    <div className="w-3 bg-[var(--accent-purple)] rounded-t-sm" style={{height: `${col.g}%`}}></div>
                  </div>
                ))}
                
                <div className="absolute -left-6 top-0 h-full flex flex-col justify-between text-[8px] text-[var(--text-secondary)]">
                  <span>12.50K</span><span>750K</span><span>500K</span><span>250K</span><span>0</span>
                </div>
                <div className="absolute -bottom-6 w-full flex justify-between text-[7px] text-[var(--text-secondary)] text-center">
                  <span className="w-10">North America</span><span className="w-10">Europe</span><span className="w-10">Asia</span><span className="w-10">Asia Pacific</span><span className="w-10">Latin America</span><span className="w-10">Middle East</span>
                </div>
              </div>
            </div>

            {/* Revenue by Channel */}
            <div className="col-span-2 bg-[var(--card)] border border-[var(--border)] rounded-xl p-4">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-bold">Revenue by Channel</h3>
              </div>
              
              <div className="relative h-28 w-full flex items-center justify-center mb-6">
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="var(--accent-green)" strokeWidth="12" strokeDasharray="150 251" />
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="var(--accent-blue)" strokeWidth="12" strokeDasharray="60 251" strokeDashoffset="-150" />
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="var(--accent-orange)" strokeWidth="12" strokeDasharray="30 251" strokeDashoffset="-210" />
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="var(--accent-purple)" strokeWidth="12" strokeDasharray="11 251" strokeDashoffset="-240" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-bold text-sm">€2.84M</span>
                  <span className="text-[8px] text-[var(--text-secondary)]">Total Revenue</span>
                </div>
              </div>
              
              <table className="w-full text-[9px]">
                <thead>
                  <tr className="text-[var(--text-secondary)] text-left">
                    <th className="pb-1 font-normal">Channel</th>
                    <th className="pb-1 font-normal text-right">Revenue</th>
                    <th className="pb-1 font-normal text-right">Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-1 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[var(--accent-green)]"></span> Organic</td>
                    <td className="py-1 text-right">€2.84M</td>
                    <td className="py-1 text-right text-[var(--accent-green)]">18.4%</td>
                  </tr>
                  <tr>
                    <td className="py-1 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[var(--accent-blue)]"></span> Referral</td>
                    <td className="py-1 text-right">€2.55M</td>
                    <td className="py-1 text-right text-[var(--accent-green)]">+3.1%</td>
                  </tr>
                  <tr>
                    <td className="py-1 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[var(--accent-orange)]"></span> Social</td>
                    <td className="py-1 text-right">€3.24M</td>
                    <td className="py-1 text-right text-[var(--accent-green)]">+2.1%</td>
                  </tr>
                  <tr>
                    <td className="py-1 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[var(--accent-purple)]"></span> Direct</td>
                    <td className="py-1 text-right">€2.84M</td>
                    <td className="py-1 text-right text-[var(--accent-green)]">+2.2%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Customer Acquisition Flow */}
            <div className="col-span-3 bg-[var(--card)] border border-[var(--border)] rounded-xl p-4">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-bold">Customer Acquisition Flow</h3>
                <div className="flex gap-1 text-[var(--text-tertiary)]"><Maximize2 className="w-3 h-3" /><MoreHorizontal className="w-3 h-3" /></div>
              </div>
              
              <div className="relative h-44 w-full mt-2">
                {/* Mock Sankey Diagram */}
                <svg viewBox="0 0 300 150" className="w-full h-full">
                  <path d="M 50 40 C 100 40 100 20 150 20" fill="none" stroke="var(--accent-green)" strokeWidth="12" strokeOpacity="0.4" />
                  <path d="M 50 70 C 100 70 100 20 150 20" fill="none" stroke="var(--accent-blue)" strokeWidth="8" strokeOpacity="0.4" />
                  <path d="M 50 100 C 100 100 100 80 150 80" fill="none" stroke="var(--accent-purple)" strokeWidth="6" strokeOpacity="0.4" />
                  
                  <path d="M 150 20 C 200 20 200 40 250 40" fill="none" stroke="var(--accent-green)" strokeWidth="16" strokeOpacity="0.4" />
                  <path d="M 150 80 C 200 80 200 100 250 100" fill="none" stroke="var(--accent-orange)" strokeWidth="8" strokeOpacity="0.4" />
                  
                  <rect x="40" y="34" width="2" height="12" fill="var(--accent-green)" />
                  <rect x="40" y="66" width="2" height="8" fill="var(--accent-blue)" />
                  <rect x="40" y="97" width="2" height="6" fill="var(--accent-purple)" />
                  
                  <rect x="150" y="10" width="4" height="20" fill="var(--accent-cyan)" />
                  <rect x="150" y="76" width="4" height="8" fill="var(--accent-cyan)" />
                  
                  <rect x="250" y="32" width="4" height="16" fill="var(--accent-orange)" />
                  <rect x="250" y="96" width="4" height="8" fill="var(--accent-blue)" />
                </svg>
                
                <div className="absolute top-2 left-0 text-[8px] text-[var(--text-secondary)]">Traffic</div>
                <div className="absolute top-2 left-[50%] text-[8px] text-[var(--text-secondary)] -translate-x-1/2">Visitors</div>
                
                <div className="absolute top-10 left-0 text-[7px]">Organic Search</div>
                <div className="absolute top-[4.5rem] left-0 text-[7px]">Paid Search</div>
                <div className="absolute top-[5.5rem] left-0 text-[7px]">Social</div>
                <div className="absolute top-[7.5rem] left-0 text-[7px]">Referral</div>
                
                <div className="absolute top-14 left-[50%] text-[7px] text-center -translate-x-1/2 bg-[var(--void)]/50 px-1 rounded">Product<br/>Page</div>
                <div className="absolute top-20 left-[50%] text-[7px] -translate-x-1/2">Signups</div>
                
                <div className="absolute top-8 right-0 text-[7px]">Trial</div>
                <div className="absolute top-12 right-0 text-[7px]">Activation</div>
                <div className="absolute top-[6.5rem] right-0 text-[7px] text-right">Paying<br/>Customers</div>
              </div>
            </div>

          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-12 gap-4 mb-4">
            
            {/* Customer Value */}
            <div className="col-span-4 bg-[var(--card)] border border-[var(--border)] rounded-xl p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm font-bold">Customer Value vs Acquisition Cost</h3>
                <div className="flex gap-1 text-[var(--text-tertiary)]"><MoreHorizontal className="w-3 h-3" /></div>
              </div>
              <div className="flex gap-3 text-[10px] mb-4 justify-center">
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)]"></span> Enterprise</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]"></span> SMB</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-purple)]"></span> Consumer</span>
              </div>
              
              <div className="relative h-40 w-full">
                <svg viewBox="0 0 400 200" className="w-full h-full overflow-visible">
                  <line x1="0" y1="50" x2="400" y2="50" stroke="var(--border)" strokeWidth="1" />
                  <line x1="0" y1="100" x2="400" y2="100" stroke="var(--border)" strokeWidth="1" />
                  <line x1="0" y1="150" x2="400" y2="150" stroke="var(--border)" strokeWidth="1" />
                  
                  {/* Trend line */}
                  <line x1="0" y1="200" x2="400" y2="50" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  
                  {/* Scatter Dots */}
                  {[...Array(30)].map((_, i) => (
                    <circle key={`g-${i}`} cx={30 + ((i * 17) % 150)} cy={120 + ((i * 23) % 80)} r={2 + ((i * 3) % 3)} fill="var(--accent-green)" opacity="0.8" />
                  ))}
                  {[...Array(20)].map((_, i) => (
                    <circle key={`b-${i}`} cx={100 + ((i * 29) % 180)} cy={80 + ((i * 31) % 80)} r={3 + ((i * 5) % 4)} fill="var(--accent-blue)" opacity="0.8" />
                  ))}
                  {[...Array(15)].map((_, i) => (
                    <circle key={`p-${i}`} cx={150 + ((i * 41) % 200)} cy={40 + ((i * 37) % 80)} r={4 + ((i * 7) % 5)} fill="var(--accent-purple)" opacity="0.8" />
                  ))}
                </svg>
                <div className="absolute -left-6 top-0 h-full flex flex-col justify-between text-[8px] text-[var(--text-secondary)]">
                  <span>200k</span><span>150k</span><span>100k</span><span>50k</span><span>0</span>
                </div>
                <div className="absolute -bottom-6 w-full flex justify-between text-[8px] text-[var(--text-secondary)]">
                  <span>0</span><span>200</span><span>400</span><span>600</span><span>800</span><span>100</span>
                </div>
                <div className="absolute left-[-24px] top-1/2 -rotate-90 text-[7px] text-[var(--text-secondary)] -translate-y-1/2 w-32 text-center origin-center">Customer Lifetime Value</div>
                <div className="absolute -bottom-10 w-full text-center text-[7px] text-[var(--text-secondary)]">Acquisition Cost</div>
              </div>
            </div>

            {/* User Activity */}
            <div className="col-span-3 bg-[var(--card)] border border-[var(--border)] rounded-xl p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm font-bold">User Activity</h3>
              </div>
              <div className="flex gap-2 text-[8px] mb-4">
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)]"></span> Organic</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]"></span> Paid</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-purple)]"></span> Social</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-orange)]"></span> Referral</span>
              </div>
              
              <div className="relative h-40 w-full">
                <svg viewBox="0 0 300 150" className="w-full h-full preserve-3d overflow-visible" preserveAspectRatio="none">
                  {/* Layer 1 (Orange) */}
                  <path d="M0,150 L0,120 L50,110 L100,120 L150,90 L200,95 L250,70 L300,80 L300,150 Z" fill="var(--accent-orange)" opacity="0.8" />
                  {/* Layer 2 (Purple) */}
                  <path d="M0,120 L0,90 L50,85 L100,90 L150,60 L200,70 L250,50 L300,60 L300,80 L250,70 L200,95 L150,90 L100,120 L50,110 Z" fill="var(--accent-purple)" opacity="0.8" />
                  {/* Layer 3 (Blue) */}
                  <path d="M0,90 L0,60 L50,50 L100,60 L150,30 L200,40 L250,20 L300,30 L300,60 L250,50 L200,70 L150,60 L100,90 L50,85 Z" fill="var(--accent-blue)" opacity="0.8" />
                  {/* Layer 4 (Green) */}
                  <path d="M0,60 L0,30 L50,20 L100,30 L150,0 L200,10 L250,0 L300,10 L300,30 L250,20 L200,40 L150,30 L100,60 L50,50 Z" fill="var(--accent-green)" opacity="0.8" />
                </svg>
                <div className="absolute -left-6 top-0 h-full flex flex-col justify-between text-[7px] text-[var(--text-secondary)]">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
                <div className="absolute -bottom-6 w-full flex justify-between text-[7px] text-[var(--text-secondary)]">
                  <span>00</span><span>02</span><span>04</span><span>06</span><span>08</span><span>10</span><span>12</span><span>14</span><span>16</span><span>18</span><span>20</span><span>12</span>
                </div>
                <div className="absolute -bottom-10 w-full text-center text-[7px] text-[var(--text-secondary)]">Months</div>
              </div>
            </div>

            {/* Traffic Sources */}
            <div className="col-span-2 bg-[var(--card)] border border-[var(--border)] rounded-xl p-4">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-bold">Traffic Sources Over Time</h3>
              </div>
              
              <div className="flex flex-col gap-4 mt-6">
                <div>
                  <div className="flex justify-between text-[9px] mb-1">
                    <span>Analytics Pro</span><span>€3.63K</span>
                  </div>
                  <div className="w-full bg-[var(--void)] rounded-sm h-3 overflow-hidden">
                    <div className="bg-[var(--accent-green)] h-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[9px] mb-1">
                    <span>Business Suite</span><span>€3.53K</span>
                  </div>
                  <div className="w-full bg-[var(--void)] rounded-sm h-3 overflow-hidden">
                    <div className="bg-[var(--accent-green)] h-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[9px] mb-1">
                    <span>Enterprise</span><span>€25.5K</span>
                  </div>
                  <div className="w-full bg-[var(--void)] rounded-sm h-3 overflow-hidden">
                    <div className="bg-[var(--accent-green)] h-full" style={{width: '60%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[9px] mb-1">
                    <span>Starter</span><span>€3.28K</span>
                  </div>
                  <div className="w-full bg-[var(--void)] rounded-sm h-3 overflow-hidden">
                    <div className="bg-[var(--accent-green)] h-full" style={{width: '45%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[9px] mb-1">
                    <span>Growth</span><span>€15.4K</span>
                  </div>
                  <div className="w-full bg-[var(--void)] rounded-sm h-3 overflow-hidden">
                    <div className="bg-[var(--accent-green)] h-full" style={{width: '30%'}}></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between text-[7px] text-[var(--text-secondary)] mt-4">
                <span>0</span><span>20</span><span>40</span><span>60</span><span>80</span><span>100</span>
              </div>
              <div className="text-center text-[7px] text-[var(--text-secondary)] mt-1">Revenue %</div>
            </div>

            {/* Top Products */}
            <div className="col-span-3 bg-[var(--card)] border border-[var(--border)] rounded-xl p-4 relative overflow-hidden">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm font-bold">Top Products</h3>
              </div>
              
              <div className="relative w-full h-40 mt-4 opacity-70">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" alt="World Map" className="w-full h-full object-contain filter invert opacity-50" />
                {/* Heatmap blur dots */}
                <div className="absolute top-[30%] left-[20%] w-12 h-12 bg-[var(--accent-orange)] rounded-full blur-xl opacity-60"></div>
                <div className="absolute top-[25%] left-[45%] w-8 h-8 bg-[var(--accent-orange)] rounded-full blur-lg opacity-80"></div>
                <div className="absolute top-[40%] left-[65%] w-10 h-10 bg-[var(--accent-blue)] rounded-full blur-xl opacity-50"></div>
              </div>
              
              <div className="absolute right-4 top-12 flex flex-col gap-3 text-[9px] text-right">
                <div>
                  <div className="text-[var(--text-secondary)]">United States</div>
                  <div className="font-bold">€842K</div>
                </div>
                <div>
                  <div className="text-[var(--text-secondary)] flex items-center justify-end gap-1"><span className="w-1.5 h-1.5 bg-[var(--accent-orange)] rounded-full"></span> United Kingdom</div>
                  <div className="font-bold">€324K</div>
                </div>
                <div>
                  <div className="text-[var(--text-secondary)]">Germany</div>
                  <div className="font-bold">€285K</div>
                </div>
                <div>
                  <div className="text-[var(--text-secondary)] flex items-center justify-end gap-1"><span className="w-1.5 h-1.5 bg-[var(--accent-blue)] rounded-full"></span> France</div>
                  <div className="font-bold">€214K</div>
                </div>
                <div>
                  <div className="text-[var(--text-secondary)]">Japan</div>
                  <div className="font-bold">€192K</div>
                </div>
              </div>
            </div>

          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-12 gap-4 mb-4">
            
            {/* Visualization Library */}
            <div className="col-span-4 bg-[var(--card)] border border-[var(--border)] rounded-xl p-4">
              <h3 className="text-sm font-bold mb-1">Visualization Library</h3>
              <p className="text-[10px] text-[var(--text-secondary)] mb-6">Choose the right visualization for every question.</p>
              
              <div className="grid grid-cols-6 gap-y-6 gap-x-2 text-center text-[8px]">
                <div className="flex flex-col items-center gap-2"><div className="w-8 h-8 bg-[var(--void)] border border-[var(--border)] rounded flex items-center justify-center"><BarChart3 className="w-4 h-4 text-[var(--accent-blue)]" /></div>Line Chart</div>
                <div className="flex flex-col items-center gap-2"><div className="w-8 h-8 bg-[var(--void)] border border-[var(--border)] rounded flex items-center justify-center"><BarChart3 className="w-4 h-4 text-[var(--accent-green)]" /></div>Bar Chart</div>
                <div className="flex flex-col items-center gap-2"><div className="w-8 h-8 bg-[var(--void)] border border-[var(--border)] rounded flex items-center justify-center"><BarChart3 className="w-4 h-4 text-[var(--accent-purple)]" /></div>Area Chart</div>
                <div className="flex flex-col items-center gap-2"><div className="w-8 h-8 bg-[var(--void)] border border-[var(--border)] rounded flex items-center justify-center"><PieChart className="w-4 h-4 text-[var(--accent-orange)]" /></div>Donut Chart</div>
                <div className="flex flex-col items-center gap-2"><div className="w-8 h-8 bg-[var(--void)] border border-[var(--border)] rounded flex items-center justify-center"><PieChart className="w-4 h-4 text-[var(--accent-cyan)]" /></div>Pie Chart</div>
                <div className="flex flex-col items-center gap-2"><div className="w-8 h-8 bg-[var(--void)] border border-[var(--border)] rounded flex items-center justify-center"><div className="w-4 h-4 rounded-full border-2 border-dotted border-[var(--accent-green)]"></div></div>Scatter Plot</div>
                <div className="flex flex-col items-center gap-2"><div className="w-8 h-8 bg-[var(--void)] border border-[var(--border)] rounded flex items-center justify-center"><div className="grid grid-cols-2 gap-0.5"><div className="w-1.5 h-1.5 bg-[var(--accent-orange)]"></div><div className="w-1.5 h-1.5 bg-[var(--accent-blue)]"></div></div></div>Heatmap</div>
                <div className="flex flex-col items-center gap-2"><div className="w-8 h-8 bg-[var(--void)] border border-[var(--border)] rounded flex items-center justify-center"><div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-[var(--accent-purple)]"></div></div>Funnel</div>
                <div className="flex flex-col items-center gap-2"><div className="w-8 h-8 bg-[var(--void)] border border-[var(--border)] rounded flex items-center justify-center"><div className="w-4 h-4 rounded-full border border-[var(--accent-cyan)] opacity-50"></div></div>Radar</div>
                <div className="flex flex-col items-center gap-2"><div className="w-8 h-8 bg-[var(--void)] border border-[var(--border)] rounded flex items-center justify-center"><div className="flex gap-0.5"><div className="w-2 h-4 bg-[var(--accent-green)]"></div><div className="w-1.5 h-4 bg-[var(--accent-blue)]"></div></div></div>Treemap</div>
                <div className="flex flex-col items-center gap-2"><div className="w-8 h-8 bg-[var(--void)] border border-[var(--border)] rounded flex items-center justify-center"><BarChart3 className="w-4 h-4 text-[var(--accent-orange)]" /></div>Histogram</div>
                <div className="flex flex-col items-center gap-2"><div className="w-8 h-8 bg-[var(--void)] border border-[var(--border)] rounded flex items-center justify-center"><div className="w-3 h-3 rounded-full border border-[var(--accent-purple)]"></div></div>Bubble Chart</div>
              </div>
            </div>

            {/* Performance by Product */}
            <div className="col-span-4 bg-[var(--card)] border border-[var(--border)] rounded-xl p-4">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-bold">Performance by Product</h3>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1 px-2 py-1 text-[10px] bg-[var(--void)] border border-[var(--border)] rounded"><Filter className="w-3 h-3" /> Filter</button>
                  <button className="flex items-center gap-1 px-2 py-1 text-[10px] bg-[var(--void)] border border-[var(--border)] rounded"><Search className="w-3 h-3" /></button>
                </div>
              </div>
              
              <table className="w-full text-[10px] text-left">
                <thead className="text-[var(--text-secondary)] border-b border-[var(--border)]">
                  <tr>
                    <th className="font-normal pb-2">Product</th>
                    <th className="font-normal pb-2">Revenue <ChevronDown className="w-2 h-2 inline" /></th>
                    <th className="font-normal pb-2">Orders <ChevronDown className="w-2 h-2 inline" /></th>
                    <th className="font-normal pb-2">Customers</th>
                    <th className="font-normal pb-2">Conversion</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  <tr className="hover:bg-[var(--void)] transition-colors">
                    <td className="py-2.5">Analytics Pro</td>
                    <td className="py-2.5">6842K</td>
                    <td className="py-2.5">20</td>
                    <td className="py-2.5">34.3K</td>
                    <td className="py-2.5 text-[var(--accent-green)] flex items-center gap-1"><div className="w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-current"></div> 18.4%</td>
                  </tr>
                  <tr className="hover:bg-[var(--void)] transition-colors">
                    <td className="py-2.5">Business Suite</td>
                    <td className="py-2.5">€324K</td>
                    <td className="py-2.5">23</td>
                    <td className="py-2.5">33.2K</td>
                    <td className="py-2.5 text-[var(--accent-orange)] flex items-center gap-1"><div className="w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent border-t-current"></div> 12.5%</td>
                  </tr>
                  <tr className="hover:bg-[var(--void)] transition-colors">
                    <td className="py-2.5">Enterprise</td>
                    <td className="py-2.5">€285K</td>
                    <td className="py-2.5">16</td>
                    <td className="py-2.5">21.5%</td>
                    <td className="py-2.5 text-[var(--accent-green)] flex items-center gap-1"><div className="w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-current"></div> 12.3%</td>
                  </tr>
                  <tr className="hover:bg-[var(--void)] transition-colors">
                    <td className="py-2.5">Starter</td>
                    <td className="py-2.5">€214K</td>
                    <td className="py-2.5">9</td>
                    <td className="py-2.5">23.8K</td>
                    <td className="py-2.5 text-[var(--accent-green)] flex items-center gap-1"><div className="w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-current"></div> 14.2%</td>
                  </tr>
                </tbody>
              </table>
              <div className="flex justify-end mt-4 text-[10px] text-[var(--text-secondary)] gap-2">
                <span>&lt;</span><span className="text-white">1</span><span>2</span><span>3</span><span>4</span><span>...</span><span>&gt;</span>
              </div>
            </div>

            {/* Data Insights */}
            <div className="col-span-2 bg-[var(--card)] border border-[var(--border)] rounded-xl p-4 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-sm font-bold">Data Insights</h3>
                  <div className="bg-[#2E284D] text-[#A688FA] text-[8px] px-2 py-0.5 rounded font-bold flex items-center gap-1"><Sparkles className="w-2 h-2" /> AI</div>
                </div>
                <div className="flex flex-col gap-4 text-[10px] text-[var(--text-secondary)]">
                  <p className="flex items-start gap-2"><AlertCircle className="w-3 h-3 mt-0.5 shrink-0" /> Revenue increased <span className="text-white font-bold">18.4%</span> compared with the previous period.</p>
                  <p className="flex items-start gap-2"><Sparkles className="w-3 h-3 mt-0.5 shrink-0" /> Organic traffic generated the highest conversion rate.</p>
                  <p className="flex items-start gap-2"><Users className="w-3 h-3 mt-0.5 shrink-0" /> Enterprise customers represent 42% of total revenue.</p>
                </div>
              </div>
              <button className="w-full mt-4 bg-[var(--void)] border border-[var(--border)] rounded-md py-2 text-xs font-medium hover:bg-[var(--card-hover)] transition-colors">Generate Insights</button>
            </div>

            {/* Compact Reports */}
            <div className="col-span-2 bg-[var(--card)] border border-[var(--border)] rounded-xl p-4 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-sm font-bold">Compact reports</h3>
                  <MoreHorizontal className="w-3 h-3 text-[var(--text-tertiary)]" />
                </div>
                <div className="flex flex-col gap-3 text-xs">
                  <a href="#" className="hover:text-[var(--accent-blue)] transition-colors">Weekly Performance</a>
                  <a href="#" className="hover:text-[var(--accent-blue)] transition-colors">Monthly Revenue</a>
                  <a href="#" className="hover:text-[var(--accent-blue)] transition-colors">Customer Acquisition</a>
                  <a href="#" className="hover:text-[var(--accent-blue)] transition-colors">Product Analytics</a>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <button className="flex-1 bg-[var(--void)] border border-[var(--border)] rounded text-[9px] py-1.5 hover:bg-[var(--card-hover)]">View Report</button>
                <button className="flex-1 bg-[var(--void)] border border-[var(--border)] rounded text-[9px] py-1.5 hover:bg-[var(--card-hover)]">Export PDF</button>
                <button className="flex-1 bg-[var(--void)] border border-[var(--border)] rounded text-[9px] py-1.5 hover:bg-[var(--card-hover)]">Export CSV</button>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}

function KpiCard({ title, value, trend, trendUp, prev, color }: any) {
  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-4 relative overflow-hidden group">
      <div className="absolute right-4 top-4 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }}></div>
      <h3 className="text-xs text-[var(--text-secondary)] mb-1">{title}</h3>
      <div className="flex items-end gap-2 mb-2">
        <span className="text-2xl font-bold">{value}</span>
        <span className={`text-[10px] font-bold mb-1 ${trendUp ? 'text-[var(--accent-green)]' : 'text-[var(--accent-orange)]'}`}>{trend}</span>
      </div>
      <p className="text-[9px] text-[var(--text-secondary)]">{prev}</p>
    </div>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );
}
