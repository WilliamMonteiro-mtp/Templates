"use client";

import { BarChart3, PieChart, Users, Settings, Package, LayoutDashboard, Search, Edit3, Share2, Download, Check, AlertCircle, ChevronDown, Bell } from "lucide-react";
import { useState } from "react";
import { SalesView } from "./views/SalesView";
import { MarketingView } from "./views/MarketingView";
import { InventoryView } from "./views/InventoryView";
import { FinancialsView } from "./views/FinancialsView";
import { ReportsView } from "./views/ReportsView";

export function Portfolio() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="flex h-screen bg-[var(--void)] text-[var(--text)] overflow-hidden font-sans">
      
      {/* Sidebar Navigation */}
      <aside className="w-16 flex flex-col items-center py-6 border-r border-[var(--border)] bg-[var(--elevated)] z-20 shrink-0">
        <div className="w-8 h-8 bg-[var(--accent-blue)] rounded-md flex items-center justify-center mb-8">
          <BarChart3 className="text-white w-5 h-5" />
        </div>
        <nav className="flex flex-col gap-6 w-full">
          {[
            { icon: LayoutDashboard, label: "Overview" },
            { icon: PieChart, label: "Sales" },
            { icon: Users, label: "Marketing" },
            { icon: Package, label: "Inventory" },
            { icon: BarChart3, label: "Financials" },
            { icon: Check, label: "Reports" }
          ].map((item) => {
            const isActive = activeTab === item.label;
            return (
              <button 
                key={item.label} 
                onClick={() => setActiveTab(item.label)}
                className={`flex flex-col items-center gap-1 group transition-colors ${isActive ? 'text-[var(--accent-blue)]' : 'text-[var(--text-secondary)] hover:text-[var(--text)]'}`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isActive ? 'bg-[var(--accent-blue)]/10' : 'group-hover:bg-white/5'}`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-medium transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 absolute mt-12'}`}>{item.label}</span>
              </button>
            );
          })}
        </nav>
        <div className="mt-auto flex flex-col items-center gap-4 text-[var(--text-secondary)]">
          <Settings className="w-5 h-5 hover:text-[var(--text)] cursor-pointer" />
          <img src="/perfil2.png" alt="User Avatar" className="w-8 h-8 rounded-full border border-[var(--border)] grayscale hover:grayscale-0 cursor-pointer object-cover mt-2" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        
        {/* Top Header */}
        <header className="h-16 flex items-center justify-between px-6 border-b border-[var(--border)] shrink-0 bg-[var(--void)] z-10">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-bold">Analytics Pro - Data Template</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium border border-[var(--border)] rounded-[var(--radius-sm)] hover:bg-[var(--card)] transition-colors">
              Project <ChevronDown className="w-3 h-3" />
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium border border-[var(--border)] rounded-[var(--radius-sm)] hover:bg-[var(--card)] transition-colors">
              <Edit3 className="w-3.5 h-3.5" /> Edit
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] border border-[var(--accent-blue)]/20 rounded-[var(--radius-sm)] hover:bg-[var(--accent-blue)]/20 transition-colors">
              <Share2 className="w-3.5 h-3.5" /> Share
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium border border-[var(--border)] rounded-[var(--radius-sm)] hover:bg-[var(--card)] transition-colors">
              <Download className="w-3.5 h-3.5" /> Export
            </button>
            <div className="ml-2 pl-4 border-l border-[var(--border)] flex items-center gap-3">
              <img src="/perfil2.png" alt="Profile" className="w-7 h-7 rounded-full object-cover" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
          <h2 className="text-xl font-bold mb-4">{activeTab === "Overview" ? "Executive Overview" : `${activeTab} Dashboard`}</h2>
          
          {activeTab === "Overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-20">
            
            {/* Card 1: Revenue Trends */}
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-5 col-span-1 lg:col-span-1 shadow-[var(--shadow-card)] relative overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xs text-[var(--text-secondary)] font-medium uppercase tracking-wider mb-1">Executive Summary</h3>
                  <h2 className="text-base font-bold">Revenue Trends Q3 2024</h2>
                </div>
                <div className="text-[10px] text-[var(--text-secondary)]">
                  <div className="flex items-center gap-2">Time Range</div>
                  <div className="mt-1 px-2 py-1 border border-[var(--border)] rounded flex items-center justify-between gap-4">This Quarter <ChevronDown className="w-3 h-3" /></div>
                </div>
              </div>
              
              <div className="relative h-40 w-full mb-4 border-b border-l border-[var(--border)] flex items-end">
                {/* SVG Line Chart Mockup */}
                <svg viewBox="0 0 400 150" className="w-full h-full preserve-3d overflow-visible" preserveAspectRatio="none">
                  {/* Area fill */}
                  <path d="M0,130 L50,110 L100,120 L150,90 L200,95 L250,70 L300,80 L350,40 L400,20 L400,150 L0,150 Z" fill="var(--accent-blue)" fillOpacity="0.1" />
                  {/* Revenue Line */}
                  <path d="M0,130 L50,110 L100,120 L150,90 L200,95 L250,70 L300,80 L350,40 L400,20" fill="none" stroke="var(--accent-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Projection Line */}
                  <path d="M0,140 L100,125 L200,105 L300,85 L400,55" fill="none" stroke="var(--accent-orange)" strokeWidth="2" strokeDasharray="5,5" strokeLinecap="round" />
                  {/* Tooltip dot */}
                  <circle cx="250" cy="70" r="4" fill="var(--void)" stroke="var(--accent-blue)" strokeWidth="2" />
                </svg>
                <div className="absolute top-[30%] left-[55%] bg-[var(--void)] border border-[var(--border)] px-2 py-1 rounded text-[9px] shadow-lg">
                  Revenue: $11.2M<br/><span className="text-[var(--accent-orange)]">Projection: $10.5M</span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div>
                  <div className="text-[10px] text-[var(--text-secondary)]">Total Revenue</div>
                  <div className="text-xl font-bold">$14.2M</div>
                  <div className="text-[10px] text-[var(--text-secondary)] mt-1">Profit Margin <span className="text-white">28%</span></div>
                </div>
                <div>
                  <div className="text-[10px] text-[var(--text-secondary)]">Growth</div>
                  <div className="text-xl font-bold text-[var(--accent-green)]">18.2%</div>
                  <div className="text-[10px] text-[var(--text-secondary)] mt-1">↑ YoY</div>
                </div>
                <div>
                  <div className="text-[10px] text-[var(--text-secondary)]">Regional Sales</div>
                  <div className="flex items-end gap-1 h-8 mt-1">
                    <div className="w-3 bg-[var(--accent-cyan)] h-[40%] rounded-t-sm"></div>
                    <div className="w-3 bg-[var(--accent-cyan)] h-[70%] rounded-t-sm"></div>
                    <div className="w-3 bg-[var(--accent-cyan)] h-[100%] rounded-t-sm"></div>
                    <div className="w-3 bg-[var(--accent-cyan)] h-[60%] rounded-t-sm"></div>
                  </div>
                  <div className="text-[8px] text-[var(--text-secondary)] flex gap-2 mt-1"><span>NA</span><span>EU</span><span>AP</span><span>SA</span></div>
                </div>
              </div>
            </div>

            {/* Card 2: Conversion Analysis */}
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-5 col-span-1 lg:col-span-1 shadow-[var(--shadow-card)]">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xs text-[var(--text-secondary)] font-medium uppercase tracking-wider mb-1">Customer Behavior</h3>
                  <h2 className="text-base font-bold">Conversion Analysis</h2>
                </div>
                <div className="text-[10px] text-[var(--text-secondary)] flex flex-col gap-1">
                  Filters <span className="px-2 py-0.5 border border-[var(--border)] rounded flex items-center justify-between gap-2">Source <ChevronDown className="w-2 h-2" /></span>
                </div>
              </div>
              
              <div className="text-[10px] text-[var(--text-secondary)] mb-4">Visits → Leads → Customers</div>
              
              {/* Funnel Chart SVG */}
              <div className="relative w-full h-32 flex items-center justify-center mb-6">
                <svg viewBox="0 0 200 120" className="w-full h-full max-w-[200px]">
                  <polygon points="0,0 200,0 160,40 40,40" fill="var(--accent-blue)" />
                  <polygon points="40,42 160,42 130,80 70,80" fill="var(--accent-green)" />
                  <polygon points="70,82 130,82 110,120 90,120" fill="var(--accent-orange)" />
                  <text x="100" y="25" fill="white" fontSize="12" textAnchor="middle" fontWeight="bold">300</text>
                  <text x="100" y="65" fill="white" fontSize="12" textAnchor="middle" fontWeight="bold">270</text>
                  <text x="100" y="105" fill="white" fontSize="12" textAnchor="middle" fontWeight="bold">55</text>
                </svg>
                <div className="absolute right-0 top-0 h-full flex flex-col justify-around text-[10px] text-[var(--text-secondary)]">
                  <div>Visitors</div>
                  <div>Leads</div>
                  <div>Customers</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <div className="text-[10px] text-[var(--text-secondary)] mb-2">Conversion Rate by Channel</div>
                  <div className="flex items-end gap-2 h-16 border-b border-[var(--border)]">
                    <div className="w-6 bg-[var(--accent-cyan)] h-[80%] rounded-t-sm relative group">
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[var(--void)] text-[8px] px-1 rounded border border-[var(--border)] hidden group-hover:block">80%</div>
                    </div>
                    <div className="w-6 bg-[var(--accent-blue)] h-[60%] rounded-t-sm relative group">
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[var(--void)] text-[8px] p-1 rounded border border-[var(--border)] z-10 w-24 text-center">Conversion Rate: 60%<br/><span className="text-[var(--text-secondary)]">Channel: SEO</span></div>
                    </div>
                    <div className="w-6 bg-[var(--accent-green)] h-[40%] rounded-t-sm"></div>
                    <div className="w-6 bg-[var(--accent-orange)] h-[20%] rounded-t-sm"></div>
                  </div>
                  <div className="flex gap-2 mt-1 text-[8px] text-[var(--text-secondary)]">
                    <span className="w-6 text-center">Social</span>
                    <span className="w-6 text-center">SEO</span>
                    <span className="w-6 text-center">Email</span>
                    <span className="w-6 text-center">Paid</span>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center relative">
                  <div className="text-[10px] text-[var(--text-secondary)] mb-2 w-full">Demographics: Age & Gender</div>
                  <div className="relative w-20 h-20">
                    <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                      <circle cx="50" cy="50" r="40" fill="transparent" stroke="var(--accent-blue)" strokeWidth="20" strokeDasharray="180 251" />
                      <circle cx="50" cy="50" r="40" fill="transparent" stroke="var(--accent-orange)" strokeWidth="20" strokeDasharray="50 251" strokeDashoffset="-180" />
                      <circle cx="50" cy="50" r="40" fill="transparent" stroke="var(--accent-green)" strokeWidth="20" strokeDasharray="21 251" strokeDashoffset="-230" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Representative Performance */}
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-5 col-span-1 lg:col-span-1 shadow-[var(--shadow-card)]">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xs text-[var(--text-secondary)] font-medium uppercase tracking-wider mb-1">Sales Dashboard</h3>
                  <h2 className="text-base font-bold">Representative Performance</h2>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="text-center w-1/2">
                  <div className="text-[10px] text-[var(--text-secondary)] mb-2">Target Achievement</div>
                  <div className="relative w-24 h-14 mx-auto overflow-hidden">
                    <svg viewBox="0 0 100 50" className="w-full h-full">
                      <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="var(--border)" strokeWidth="12" strokeLinecap="round" />
                      <path d="M 10 50 A 40 40 0 0 1 75 20" fill="none" stroke="var(--accent-orange)" strokeWidth="12" strokeLinecap="round" />
                    </svg>
                    <div className="absolute bottom-0 left-0 right-0 text-center font-bold text-lg">88%</div>
                  </div>
                  <div className="text-[9px] text-[var(--text-secondary)] flex justify-between px-2 mt-1"><span>0%</span><span>Goal</span></div>
                </div>
                
                <div className="w-1/2 flex flex-col gap-2 border-l border-[var(--border)] pl-4">
                  <div className="text-[10px] text-[var(--text-secondary)]">Sparkline</div>
                  {[1,2,3].map((i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-[9px] w-8">Metric</span>
                      <svg viewBox="0 0 50 15" className="w-12 h-4">
                        <path d={`M0,${10-i} L10,${12-i} L20,${5-i} L30,${8-i} L40,${2-i} L50,${4-i}`} fill="none" stroke={i===1?"var(--accent-orange)":i===2?"var(--accent-blue)":"var(--accent-cyan)"} strokeWidth="1.5" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-[10px]">
                  <thead>
                    <tr className="text-[var(--text-secondary)] text-left border-b border-[var(--border)]">
                      <th className="pb-2 font-medium">Rep Name</th>
                      <th className="pb-2 font-medium">Region</th>
                      <th className="pb-2 font-medium">Sales</th>
                      <th className="pb-2 font-medium">Progress</th>
                      <th className="pb-2 font-medium">Ranking</th>
                    </tr>
                  </thead>
                  <tbody className="text-[var(--text)]">
                    {[
                      { name: "John Joseph", reg: "USA", sales: "$109,200", p: 100, r: 1 },
                      { name: "Sarah Connor", reg: "UK", sales: "$95,500", p: 85, r: 2 },
                      { name: "Alex Asaip", reg: "USA", sales: "$92,100", p: 82, r: 3 },
                      { name: "Julia Smith", reg: "Germany", sales: "$88,000", p: 75, r: 4 },
                      { name: "Mike Tyson", reg: "USA", pos: "$80,200", p: 70, r: 5 }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-[var(--border)] last:border-0">
                        <td className="py-2">{row.name}</td>
                        <td className="py-2 text-[var(--text-secondary)]">{row.reg}</td>
                        <td className="py-2 font-medium">{row.sales || row.pos}</td>
                        <td className="py-2">
                          <div className="w-12 h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
                            <div className="h-full bg-[var(--accent-blue)]" style={{width: `${row.p}%`}}></div>
                          </div>
                        </td>
                        <td className="py-2 text-center text-[var(--text-secondary)]">{row.r}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Card 4: Inventory Management */}
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-5 col-span-1 lg:col-span-1 shadow-[var(--shadow-card)]">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xs text-[var(--text-secondary)] font-medium uppercase tracking-wider mb-1">Inventory Management</h3>
                  <div className="flex items-center gap-2">
                    <h2 className="text-base font-bold">Stock Turn Q3</h2>
                    <div className="w-5 h-3 border border-[var(--border)] rounded flex items-center justify-center"><ChevronDown className="w-2 h-2 text-[var(--text-secondary)]" /></div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-2/3">
                  <div className="text-[10px] text-[var(--text-secondary)] mb-2">Inventory Value vs. Stock Turns by Category</div>
                  <div className="relative w-full h-32 border-b border-l border-[var(--border)]">
                    {/* Scatter Plot Simulation */}
                    <div className="absolute top-[70%] left-[20%] w-3 h-3 rounded-full bg-[var(--accent-blue)]"></div>
                    <div className="absolute top-[40%] left-[40%] w-3.5 h-3.5 rounded-full bg-[var(--accent-cyan)]"></div>
                    <div className="absolute top-[60%] left-[50%] w-2.5 h-2.5 rounded-full bg-[var(--accent-green)]"></div>
                    <div className="absolute top-[30%] left-[70%] w-4 h-4 rounded-full bg-[var(--accent-orange)] relative group">
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[var(--void)] text-[8px] p-1.5 rounded border border-[var(--border)] z-10 w-28 whitespace-nowrap hidden group-hover:block text-white">
                        <span className="font-bold text-[var(--accent-cyan)]">Tooltips</span><br/>
                        Inventory Value: $4,820<br/>
                        Stock Turn: 124
                      </div>
                    </div>
                    <div className="absolute bottom-[-15px] w-full text-center text-[8px] text-[var(--text-secondary)]">Stock Turns</div>
                    <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 -rotate-90 text-[8px] text-[var(--text-secondary)] origin-center">Inventory Value</div>
                  </div>
                </div>
                
                <div className="w-1/3 flex flex-col gap-3">
                  <div>
                    <div className="text-[10px] text-[var(--text-secondary)]">Total SKUs</div>
                    <div className="text-lg font-bold">5,420</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-[var(--text-secondary)]">Out of Stock</div>
                    <div className="text-lg font-bold text-[var(--accent-orange)]">38</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-[var(--text-secondary)]">Stock Value</div>
                    <div className="text-lg font-bold">$4.8M</div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-[10px] font-bold mb-2">Low-Stock Alerts</h4>
                <table className="w-full text-[9px]">
                  <thead>
                    <tr className="text-[var(--text-secondary)] text-left border-b border-[var(--border)]">
                      <th className="pb-1 font-medium">Category</th>
                      <th className="pb-1 font-medium">Supplier</th>
                      <th className="pb-1 font-medium">Level Stock</th>
                      <th className="pb-1 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-[var(--text)]">
                    {[
                      { cat: "Hardware", sup: "TechPro", lvl: 12, stat: "Low Stock" },
                      { cat: "Supplies", sup: "OfficeMax", lvl: 5, stat: "Low Stock" },
                      { cat: "Cabling", sup: "WireTech", lvl: 28, stat: "Low Stock" },
                      { cat: "Displays", sup: "ScreenCo", lvl: 3, stat: "Low Stock" }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-[var(--border)] last:border-0">
                        <td className="py-1.5">{row.cat}</td>
                        <td className="py-1.5 text-[var(--text-secondary)]">{row.sup}</td>
                        <td className="py-1.5">{row.lvl}</td>
                        <td className="py-1.5 text-[var(--accent-orange)]">{row.stat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Card 5: Quarterly Profit & Loss */}
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-5 col-span-1 lg:col-span-1 shadow-[var(--shadow-card)]">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xs text-[var(--text-secondary)] font-medium uppercase tracking-wider mb-1">Financial Health</h3>
                  <h2 className="text-base font-bold">Quarterly Profit & Loss</h2>
                </div>
              </div>
              
              <div className="flex gap-4 mb-4">
                <div className="w-2/3">
                  <div className="text-[10px] text-[var(--text-secondary)] mb-2">Revenue vs. COGS</div>
                  <div className="relative w-full h-28 border-b border-l border-[var(--border)] flex items-end justify-around px-2">
                    {[
                      { h1: 80, h2: 40, label: "Q1" },
                      { h1: 90, h2: 45, label: "Q2" },
                      { h1: 85, h2: 40, label: "Q3" },
                      { h1: 100, h2: 50, label: "Q4" }
                    ].map((col, i) => (
                      <div key={i} className="flex flex-col items-center gap-1 w-6">
                        <div className="w-full flex flex-col justify-end h-full">
                          <div className="w-full bg-[var(--accent-blue)] rounded-t-sm" style={{height: `${col.h1}%`}}>
                            <div className="w-full bg-[var(--accent-cyan)] h-1/2 opacity-80 mix-blend-overlay"></div>
                          </div>
                        </div>
                        <span className="text-[8px] text-[var(--text-secondary)]">{col.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4 justify-center mt-2 text-[8px] text-[var(--text-secondary)]">
                    <div className="flex items-center gap-1"><div className="w-2 h-2 bg-[var(--accent-blue)] rounded-sm"></div> Revenue</div>
                    <div className="flex items-center gap-1"><div className="w-2 h-2 bg-[var(--accent-orange)] rounded-sm"></div> COGS</div>
                  </div>
                </div>
                
                <div className="w-1/3 flex flex-col gap-3">
                  <div>
                    <div className="text-[10px] text-[var(--text-secondary)]">Gross Profit</div>
                    <div className="text-xl font-bold">$3.9M</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-[var(--text-secondary)]">Net Income</div>
                    <div className="text-xl font-bold text-[var(--accent-green)]">$1.6M</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-[var(--text-secondary)]">Operating Margin</div>
                    <div className="text-xl font-bold">14%</div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <table className="w-full text-[9px]">
                  <thead>
                    <tr className="text-[var(--text-secondary)] text-left border-b border-[var(--border)]">
                      <th className="pb-1 font-medium">Summary P&L</th>
                      <th className="pb-1 font-medium text-right">Revenue</th>
                      <th className="pb-1 font-medium text-right">COGS</th>
                      <th className="pb-1 font-medium text-right">Net Income</th>
                      <th className="pb-1 font-medium text-right">Net Margin</th>
                    </tr>
                  </thead>
                  <tbody className="text-[var(--text)]">
                    {[
                      { cat: "Services", rev: "$1.8M", cogs: "$0.8M", net: "$0.7M", m: "18%" },
                      { cat: "Products", rev: "$2.6M", cogs: "$1.4M", net: "$0.6M", m: "12%" },
                      { cat: "Consulting", rev: "$1.2M", cogs: "$0.4M", net: "$0.5M", m: "22%" },
                      { cat: "Subscriptions", rev: "$0.8M", cogs: "$0.1M", net: "$0.6M", m: "35%" },
                      { cat: "Net Totals", rev: "$6.4M", cogs: "$2.7M", net: "$2.4M", m: "20%" }
                    ].map((row, i) => (
                      <tr key={i} className={`border-b border-[var(--border)] last:border-0 ${i === 4 ? 'font-bold' : ''}`}>
                        <td className="py-1.5">{row.cat}</td>
                        <td className="py-1.5 text-right text-[var(--text-secondary)]">{row.rev}</td>
                        <td className="py-1.5 text-right text-[var(--text-secondary)]">{row.cogs}</td>
                        <td className={`py-1.5 text-right ${i === 4 ? 'text-[var(--accent-green)]' : ''}`}>{row.net}</td>
                        <td className="py-1.5 text-right">{row.m}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Card 6: Order History */}
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-5 col-span-1 lg:col-span-1 shadow-[var(--shadow-card)] flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xs text-[var(--text-secondary)] font-medium uppercase tracking-wider mb-1">Detailed Reports</h3>
                  <h2 className="text-base font-bold">Order History</h2>
                </div>
              </div>
              
              <div className="relative mb-4">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
                <input type="text" placeholder="Search..." className="w-full bg-[var(--void)] border border-[var(--border)] rounded-[var(--radius-sm)] py-1.5 pl-9 pr-3 text-xs focus:outline-none focus:border-[var(--accent-blue)]" />
              </div>
              
              <div className="flex-1 overflow-auto">
                <table className="w-full text-[9px]">
                  <thead>
                    <tr className="text-[var(--text-secondary)] text-left border-b border-[var(--border)] bg-[var(--void)] sticky top-0">
                      <th className="py-2 font-medium">Order ID</th>
                      <th className="py-2 font-medium">Customer</th>
                      <th className="py-2 font-medium">Product</th>
                      <th className="py-2 font-medium text-right">Quantity</th>
                      <th className="py-2 font-medium text-right">Amount</th>
                      <th className="py-2 font-medium">Date</th>
                      <th className="py-2 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-[var(--text)]">
                    {[
                      { id: "0000100", cust: "Customer 1", prod: "Product X", qty: 2, amt: "$145.20", date: "10/24/2026", stat: "Shipped" },
                      { id: "0000101", cust: "Customer 2", prod: "Product Y", qty: 5, amt: "$89.00", date: "10/24/2026", stat: "Shipped" },
                      { id: "0000102", cust: "Customer 3", prod: "Product Z", qty: 1, amt: "$420.50", date: "10/23/2026", stat: "Processing" },
                      { id: "0000103", cust: "Customer 4", prod: "Product X", qty: 8, amt: "$95.00", date: "10/23/2026", stat: "Shipped" },
                      { id: "0000104", cust: "Customer 5", prod: "Product X", qty: 3, amt: "$210.00", date: "10/22/2026", stat: "Shipped" },
                      { id: "0000105", cust: "Customer 6", prod: "Product W", qty: 4, amt: "$55.20", date: "10/22/2026", stat: "Pending" },
                      { id: "0000106", cust: "Customer 7", prod: "Product Y", qty: 1, amt: "$1,200.00", date: "10/21/2026", stat: "Shipped" },
                      { id: "0000107", cust: "Customer 8", prod: "Product Z", qty: 2, amt: "$340.00", date: "10/21/2026", stat: "Shipped" }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-[var(--border)] last:border-0 hover:bg-[var(--card-hover)] transition-colors">
                        <td className="py-2 text-[var(--accent-blue)] font-medium">{row.id}</td>
                        <td className="py-2">{row.cust}</td>
                        <td className="py-2 text-[var(--text-secondary)]">{row.prod}</td>
                        <td className="py-2 text-right">{row.qty}</td>
                        <td className="py-2 text-right">{row.amt}</td>
                        <td className="py-2 text-[var(--text-secondary)]">{row.date}</td>
                        <td className={`py-2 ${row.stat === 'Shipped' ? 'text-[var(--accent-green)]' : row.stat === 'Pending' ? 'text-[var(--accent-orange)]' : 'text-[var(--text-secondary)]'}`}>{row.stat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          )}

          {activeTab === "Sales" && <SalesView />}
          {activeTab === "Marketing" && <MarketingView />}
          {activeTab === "Inventory" && <InventoryView />}
          {activeTab === "Financials" && <FinancialsView />}
          {activeTab === "Reports" && <ReportsView />}
        </div>
      </main>

      {/* Author Badge */}
      <a href="https://wmonteiro.pt" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 flex items-center gap-3 bg-[var(--card)] border border-[var(--border)] p-2 pr-4 rounded-full hover:border-[var(--accent-blue)] transition-colors group shadow-lg z-50">
        <img src="/perfil2.png" alt="William Monteiro" className="w-10 h-10 rounded-full border border-[var(--border)] group-hover:grayscale-0 grayscale transition-all object-cover" />
        <div className="flex flex-col">
          <span className="text-[10px] text-[var(--text-secondary)] leading-none">Criado por</span>
          <span className="text-sm font-bold text-[var(--text)] group-hover:text-[var(--accent-blue)] transition-colors">William Monteiro</span>
        </div>
      </a>
    </div>
  );
}
