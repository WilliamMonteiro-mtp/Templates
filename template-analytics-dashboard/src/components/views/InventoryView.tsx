import { ChevronDown, AlertTriangle, Truck, Box, Database, RefreshCw, BarChart2, ArrowUpRight } from "lucide-react";

export function InventoryView() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-20">
      
      {/* Overview Stats */}
      <div className="col-span-1 lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total SKUs", val: "14,204", icon: Box, c: "var(--accent-blue)" },
          { label: "Stock Value", val: "$12.4M", icon: Database, c: "var(--accent-cyan)" },
          { label: "Turnover Rate", val: "8.4x", icon: RefreshCw, c: "var(--accent-green)" },
          { label: "Low Stock Items", val: "342", icon: AlertTriangle, c: "var(--accent-orange)" }
        ].map((stat, i) => (
          <div key={i} className="p-4 border border-[var(--border)] rounded-[var(--radius-md)] bg-[var(--card)] shadow-[var(--shadow-card)] flex flex-col justify-between h-28">
            <div className="flex justify-between items-start">
              <stat.icon className="w-5 h-5" style={{color: stat.c}} />
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-white mb-0.5">{stat.val}</div>
              <div className="text-[10px] text-[var(--text-secondary)] font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Card 1: Warehouse Capacity */}
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-5 col-span-1 shadow-[var(--shadow-card)]">
        <h3 className="text-xs text-[var(--text-secondary)] font-medium uppercase tracking-wider mb-1">Facilities</h3>
        <h2 className="text-base font-bold mb-8">Capacity Utilization</h2>
        
        <div className="flex flex-col items-center justify-center relative mb-8">
          <div className="relative w-40 h-40">
            {/* Multiple nested gauges */}
            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90 drop-shadow-xl">
              {/* Outer - Europe */}
              <circle cx="50" cy="50" r="42" fill="transparent" stroke="var(--void)" strokeWidth="6" />
              <circle cx="50" cy="50" r="42" fill="transparent" stroke="var(--accent-blue)" strokeWidth="6" strokeDasharray="210 264" strokeLinecap="round" />
              {/* Middle - NA */}
              <circle cx="50" cy="50" r="32" fill="transparent" stroke="var(--void)" strokeWidth="6" />
              <circle cx="50" cy="50" r="32" fill="transparent" stroke="var(--accent-cyan)" strokeWidth="6" strokeDasharray="140 201" strokeLinecap="round" />
              {/* Inner - APAC */}
              <circle cx="50" cy="50" r="22" fill="transparent" stroke="var(--void)" strokeWidth="6" />
              <circle cx="50" cy="50" r="22" fill="transparent" stroke="var(--accent-orange)" strokeWidth="6" strokeDasharray="120 138" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-white">82%</span>
              <span className="text-[8px] text-[var(--text-secondary)] uppercase">Global Avg</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center text-[10px] p-2 bg-[var(--void)] border border-[var(--border)] rounded">
            <span className="flex items-center gap-2"><span className="w-2 h-2 bg-[var(--accent-orange)] rounded-full"></span> APAC Hub</span>
            <span className="font-bold text-[var(--accent-orange)]">87% <span className="text-[var(--text-secondary)] font-normal ml-1">(Crit)</span></span>
          </div>
          <div className="flex justify-between items-center text-[10px] p-2 bg-[var(--void)] border border-[var(--border)] rounded">
            <span className="flex items-center gap-2"><span className="w-2 h-2 bg-[var(--accent-blue)] rounded-full"></span> EU Central</span>
            <span className="font-bold text-[var(--accent-blue)]">79%</span>
          </div>
          <div className="flex justify-between items-center text-[10px] p-2 bg-[var(--void)] border border-[var(--border)] rounded">
            <span className="flex items-center gap-2"><span className="w-2 h-2 bg-[var(--accent-cyan)] rounded-full"></span> NA East</span>
            <span className="font-bold text-[var(--accent-cyan)]">69%</span>
          </div>
        </div>
      </div>

      {/* Card 2: Supply Chain Status (Advanced Table) */}
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-5 col-span-1 lg:col-span-2 shadow-[var(--shadow-card)] flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xs text-[var(--text-secondary)] font-medium uppercase tracking-wider mb-1">Logistics & Tracking</h3>
            <h2 className="text-base font-bold">Active Inbound Shipments</h2>
          </div>
          <button className="text-[10px] px-3 py-1 bg-[var(--void)] border border-[var(--border)] rounded hover:text-white flex items-center gap-2">
            View All <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
        
        <div className="flex-1 overflow-x-auto">
          <table className="w-full text-[11px]">
            <thead>
              <tr className="text-[var(--text-secondary)] text-left border-b border-[var(--border)]">
                <th className="pb-3 px-2 font-medium">Tracking ID</th>
                <th className="pb-3 px-2 font-medium">Supplier & Route</th>
                <th className="pb-3 px-2 font-medium">Progress</th>
                <th className="pb-3 px-2 font-medium text-right">ETA</th>
                <th className="pb-3 px-2 font-medium text-center">Status</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text)]">
              {[
                { id: "AWB-992140", sup: "Global Electronics", route: "Shenzhen → LAX", p: 85, eta: "Oct 26", status: "In Transit", c: "var(--accent-blue)" },
                { id: "AWB-992141", sup: "Apex Materials", route: "Mumbai → LHR", p: 40, eta: "Oct 29", status: "Delayed", c: "var(--accent-orange)" },
                { id: "AWB-992142", sup: "Nordic Packaging", route: "Oslo → JFK", p: 95, eta: "Today", status: "Customs", c: "var(--accent-cyan)" },
                { id: "AWB-992143", sup: "Silico Processors", route: "Taipei → FRA", p: 15, eta: "Nov 02", status: "Departed", c: "var(--accent-purple)" },
                { id: "AWB-992144", sup: "BatteryCorp", route: "Seoul → ORD", p: 60, eta: "Oct 27", status: "In Transit", c: "var(--accent-blue)" }
              ].map((s, i) => (
                <tr key={i} className="border-b border-[var(--border)] last:border-0 hover:bg-[var(--void)] transition-colors">
                  <td className="py-3 px-2 font-mono font-bold" style={{color: s.c}}>{s.id}</td>
                  <td className="py-3 px-2">
                    <div className="font-medium text-white">{s.sup}</div>
                    <div className="text-[9px] text-[var(--text-secondary)] mt-0.5">{s.route}</div>
                  </td>
                  <td className="py-3 px-2 w-32">
                    <div className="w-full h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{width: `${s.p}%`, backgroundColor: s.c}}></div>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-right font-medium">{s.eta}</td>
                  <td className="py-3 px-2 text-center">
                    <span className="px-2 py-0.5 rounded text-[9px] border bg-[var(--void)]" style={{borderColor: s.c, color: s.c}}>
                      {s.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
