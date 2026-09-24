import { Search, Download, Filter, MoreHorizontal } from "lucide-react";

export function ReportsView() {
  return (
    <div className="grid grid-cols-1 gap-6 pb-20">
      
      {/* Full Width Report Table */}
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-5 shadow-[var(--shadow-card)] flex flex-col min-h-[60vh]">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xs text-[var(--text-secondary)] font-medium uppercase tracking-wider mb-1">Data Explorer</h3>
            <h2 className="text-base font-bold">Master Database Export</h2>
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
              <input type="text" placeholder="Search records..." className="bg-[var(--void)] border border-[var(--border)] rounded-[var(--radius-sm)] py-2 pl-9 pr-4 text-xs focus:outline-none focus:border-[var(--accent-blue)] w-64" />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-[var(--void)] border border-[var(--border)] rounded-[var(--radius-sm)] text-xs font-medium hover:border-[var(--text-secondary)] transition-colors">
              <Filter className="w-3.5 h-3.5" /> Filters
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[var(--accent-blue)] text-white rounded-[var(--radius-sm)] text-xs font-medium hover:bg-[var(--accent-blue)]/80 transition-colors shadow-lg shadow-[var(--accent-blue)]/20">
              <Download className="w-3.5 h-3.5" /> Export CSV
            </button>
          </div>
        </div>
        
        <div className="flex-1 overflow-auto border border-[var(--border)] rounded-md rounded-b-none bg-[var(--void)]">
          <table className="w-full text-[11px]">
            <thead>
              <tr className="text-[var(--text-secondary)] text-left border-b border-[var(--border)] bg-[var(--card)] sticky top-0 z-10">
                <th className="py-3 px-4 font-medium">Record ID</th>
                <th className="py-3 px-4 font-medium">Timestamp</th>
                <th className="py-3 px-4 font-medium">Event Type</th>
                <th className="py-3 px-4 font-medium">Source</th>
                <th className="py-3 px-4 font-medium">User ID</th>
                <th className="py-3 px-4 font-medium">Location</th>
                <th className="py-3 px-4 font-medium text-right">Value Metric</th>
                <th className="py-3 px-4 font-medium text-center">Status</th>
                <th className="py-3 px-4 font-medium text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text)]">
              {Array.from({length: 15}).map((_, i) => (
                <tr key={i} className="border-b border-[var(--border)] last:border-0 hover:bg-[var(--card-hover)] transition-colors">
                  <td className="py-3 px-4 text-[var(--accent-blue)] font-medium">REC-{84920 + i}</td>
                  <td className="py-3 px-4 text-[var(--text-secondary)]">2026-10-24 14:{30+i}:00</td>
                  <td className="py-3 px-4 font-medium">{['API_CALL', 'USER_LOGIN', 'DATA_SYNC', 'PAYMENT_PROC'][i % 4]}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-0.5 rounded text-[9px] border ${['border-[var(--accent-cyan)] text-[var(--accent-cyan)]', 'border-[var(--accent-purple)] text-[var(--accent-purple)]', 'border-[var(--accent-orange)] text-[var(--accent-orange)]'][i % 3]}`}>
                      {['Web App', 'Mobile iOS', 'Backend Cron'][i % 3]}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-[var(--text-secondary)]">USR-{1000 + i*7}</td>
                  <td className="py-3 px-4">{['New York, US', 'London, UK', 'Tokyo, JP', 'Berlin, DE'][i % 4]}</td>
                  <td className="py-3 px-4 text-right font-mono">{((i * 123.45) % 5000).toFixed(2)}</td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center items-center">
                      <div className={`w-2 h-2 rounded-full ${i % 5 === 0 ? 'bg-[var(--accent-orange)]' : 'bg-[var(--accent-green)]'}`}></div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button className="text-[var(--text-secondary)] hover:text-white"><MoreHorizontal className="w-4 h-4 mx-auto" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="border border-t-0 border-[var(--border)] rounded-b-md bg-[var(--card)] p-3 flex justify-between items-center text-[10px] text-[var(--text-secondary)]">
          <span>Showing 1-15 of 2,459 records</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-[var(--border)] rounded hover:bg-[var(--void)]">Previous</button>
            <button className="px-3 py-1 border border-[var(--border)] rounded hover:bg-[var(--void)]">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
