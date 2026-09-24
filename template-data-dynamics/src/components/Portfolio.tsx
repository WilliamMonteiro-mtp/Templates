"use client";

import { useState } from "react";
import { Search, ChevronDown, Bell, LogOut, Grid, Hexagon, Activity, Map, Database, LayoutDashboard, Globe } from "lucide-react";
import { MarketTrendsView } from "./views/MarketTrendsView";
import { SupplyChainView } from "./views/SupplyChainView";
import { ClientBillingView } from "./views/ClientBillingView";
import { GeospatialHeatmapView } from "./views/GeospatialHeatmapView";

export function Portfolio({ locale = 'pt' }: { locale?: string }) {
  const [activeTab, setActiveTab] = useState("Market Trends");

  // Basic translations dictionary
  const t = {
    pt: {
      marketTrends: "Tendências de Mercado",
      supplyChain: "Rede de Dados",
      clientBilling: "Faturação",
      heatmap: "Mapa de Calor",
      search: "Pesquisar",
    },
    en: {
      marketTrends: "Market Trends",
      supplyChain: "Supply Chain",
      clientBilling: "Client Billing",
      heatmap: "Geospatial Heatmap",
      search: "Search",
    }
  };
  
  const currentLang = (locale === 'pt' || locale === 'en') ? t[locale] : t['pt'];

  const NAV_ITEMS = [
    { id: "Market Trends", name: currentLang.marketTrends, icon: Activity },
    { id: "Supply Chain", name: currentLang.supplyChain, icon: Hexagon },
    { id: "Client Billing", name: currentLang.clientBilling, icon: Database },
    { id: "Geospatial Heatmap", name: currentLang.heatmap, icon: Globe },
  ];

  return (
    <div className="flex h-screen bg-[var(--void)] text-[var(--text)] font-sans overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-16 flex flex-col items-center py-6 bg-[var(--void)] border-r border-[var(--border)] z-20">
        <div className="w-8 h-8 rounded bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-cyan)] flex items-center justify-center font-bold text-white mb-10 shadow-[var(--glow-cyan)]">
          D
        </div>
        
        <div className="flex flex-col gap-6 flex-1">
          {NAV_ITEMS.map((item) => (
            <button 
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`relative p-2.5 rounded-lg transition-all ${
                activeTab === item.id 
                  ? "text-[var(--accent-cyan)] bg-[var(--accent-cyan)]/10" 
                  : "text-[var(--text-tertiary)] hover:text-white hover:bg-[var(--card)]"
              }`}
              title={item.name}
            >
              <item.icon className="w-5 h-5" />
              {activeTab === item.id && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[var(--accent-cyan)] rounded-r-full shadow-[var(--glow-cyan)]"></span>
              )}
            </button>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-6">
          <button className="p-2.5 text-[var(--text-tertiary)] hover:text-white rounded-lg hover:bg-[var(--card)] transition-colors">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Top Header */}
        <header className="h-16 flex items-center justify-between px-6 bg-[var(--void)] border-b border-[var(--border)] shrink-0 z-10">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-bold text-white tracking-wide">
              DataDynamics <span className="text-[var(--text-secondary)] font-medium">Pro</span>
            </h1>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]" />
              <input 
                type="text" 
                placeholder={currentLang.search} 
                className="bg-[var(--card)] border border-[var(--border)] rounded-full pl-9 pr-4 py-1.5 text-xs focus:outline-none focus:border-[var(--accent-cyan)] focus:ring-1 focus:ring-[var(--accent-cyan)] transition-all w-64 text-white"
              />
            </div>
            
            <div className="flex items-center gap-2 border border-[var(--border)] rounded-full px-1.5 py-1 bg-[var(--card)]">
              <a href="/pt" className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-colors ${locale === 'pt' ? 'bg-[var(--accent-cyan)]/20 text-[var(--accent-cyan)]' : 'text-[var(--text-tertiary)] hover:text-white'}`}>PT</a>
              <a href="/en" className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-colors ${locale === 'en' ? 'bg-[var(--accent-cyan)]/20 text-[var(--accent-cyan)]' : 'text-[var(--text-tertiary)] hover:text-white'}`}>EN</a>
            </div>
          </div>
        </header>

        {/* Dynamic View Container */}
        <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
          <div className="max-w-[1600px] mx-auto h-full">
            {activeTab === "Market Trends" && <MarketTrendsView locale={locale} />}
            {activeTab === "Supply Chain" && <SupplyChainView locale={locale} />}
            {activeTab === "Client Billing" && <ClientBillingView locale={locale} />}
            {activeTab === "Geospatial Heatmap" && <GeospatialHeatmapView locale={locale} />}
          </div>
        </div>

      </main>
      
      {/* Author Badge (Bottom Right Fixed) */}
      <a href="https://wmonteiro.pt" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[var(--card)]/80 backdrop-blur-md p-1.5 pr-4 rounded-full border border-[var(--border)] hover:border-[var(--accent-cyan)] transition-colors w-max group shadow-[var(--shadow-card)]">
        <img src="/perfil2.png" alt="William Monteiro" className="w-6 h-6 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
        <div className="flex flex-col text-left">
          <span className="text-[10px] text-[var(--text-secondary)] leading-none mb-0.5">Template by</span>
          <span className="text-xs text-[var(--text)] group-hover:text-[var(--accent-cyan)] font-medium leading-none">William Monteiro</span>
        </div>
      </a>
    </div>
  );
}
