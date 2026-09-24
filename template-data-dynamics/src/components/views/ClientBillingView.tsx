import { MoreHorizontal, ChevronLeft, ChevronRight, Settings, Filter, ChevronDown } from "lucide-react";

export function ClientBillingView({ locale = 'pt' }: { locale?: string }) {
  const t = {
    pt: {
      metrics: "Visão Geral de Métricas G4",
      revenue: "Receita Total",
      latency: "Latência de Processamento de Dados",
      newSubs: "Novas Assinaturas Este Mês",
      outstanding: "Faturas Pendentes",
      billing: "Dados de Faturação e Assinaturas",
      search: "Pesquisar",
      sortable: "Colunas ordenáveis",
      clientId: "ID Cliente",
      companyName: "Nome da Empresa",
      planType: "Tipo de Plano",
      startDate: "Data Início",
      nextBilling: "Próxima Faturação",
      totalLtv: "LTV Total",
      status: "Estado",
      active: "Ativo",
      warning: "Aviso",
      error: "Erro"
    },
    en: {
      metrics: "G4 Key Metrics Overview",
      revenue: "Total Revenue",
      latency: "Data Processing Latency",
      newSubs: "New Subscriptions This Month",
      outstanding: "Outstanding Invoices",
      billing: "Client Subscription & Billing Data",
      search: "Search",
      sortable: "Sortable columns",
      clientId: "Client ID",
      companyName: "Company Name",
      planType: "Plan Type",
      startDate: "Start Date",
      nextBilling: "Next Billing",
      totalLtv: "Total LTV",
      status: "Status",
      active: "Active",
      warning: "Warning",
      error: "Error"
    }
  };
  const lang = (locale === 'pt' || locale === 'en') ? t[locale] : t['pt'];

  const tableData = [
    { id: "Client 01", name: "Company Name", type: "Plan Type", start: "2023/06-30", next: "10/06/2023", ltv: "$142.0M", status: lang.active, c: "var(--accent-green)" },
    { id: "Client 02", name: "Company Name", type: "Plan Type", start: "2023/08-01", next: "12/06/2023", ltv: "$305.0M", status: lang.active, c: "var(--accent-green)" },
    { id: "Client 03", name: "Company Name", type: "Plan Type", start: "2023/10-31", next: "11/08/2023", ltv: "$850.5M", status: lang.active, c: "var(--accent-green)" },
    { id: "Client 04", name: "Company Name", type: "Plan Type", start: "2023/10-31", next: "11/08/2023", ltv: "$225.0M", status: lang.active, c: "var(--accent-green)" },
    { id: "Client 05", name: "Company Name", type: "Plan Type", start: "2023/10/12", next: "10/13/2023", ltv: "$230.0M", status: lang.active, c: "var(--accent-green)" },
    { id: "Client 06", name: "Company Name", type: "Plan Type", start: "2023/10/25", next: "10/26/2023", ltv: "$235.0M", status: lang.active, c: "var(--accent-green)" },
    { id: "Client 07", name: "Exmpleinc", type: "Plan Type", start: "2023/30/20", next: "11/08/2023", ltv: "$236.0M", status: lang.warning, c: "var(--accent-orange)" },
    { id: "Client 08", name: "Exmpleinc", type: "Plan Type", start: "2023/10/20", next: "09/13/2023", ltv: "$250.0M", status: lang.error, c: "var(--accent-red)" },
    { id: "Client 09", name: "Company Name", type: "Plan Type", start: "2023/10/20", next: "10/13/2023", ltv: "$256.0M", status: lang.active, c: "var(--accent-green)" },
    { id: "Client 10", name: "Company Name", type: "Plan Type", start: "2023/20/20", next: "09/28/2023", ltv: "$285.0M", status: lang.active, c: "var(--accent-green)" },
    { id: "Client 11", name: "Company Name", type: "Plan Type", start: "2023/30/20", next: "11/28/2023", ltv: "$336.5M", status: lang.active, c: "var(--accent-green)" },
    { id: "Client 12", name: "Company Name", type: "Plan Tupe", start: "2023/10/21", next: "08/13/2023", ltv: "$135.5M", status: lang.warning, c: "var(--accent-orange)" },
  ];

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
                  <linearGradient id="revGrad2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--accent-red)" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="var(--accent-red)" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <path d="M0,35 C10,30 20,20 30,25 C40,30 50,15 60,10 C70,5 80,15 90,5 L100,0 L100,40 L0,40 Z" fill="url(#revGrad2)" />
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
                  <linearGradient id="latGrad2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="var(--accent-blue)" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <path d="M0,25 C10,15 20,35 30,30 C40,25 50,35 60,20 C70,5 80,30 90,15 L100,20 L100,40 L0,40 Z" fill="url(#latGrad2)" />
                <path d="M0,25 C10,15 20,35 30,30 C40,25 50,35 60,20 C70,5 80,30 90,15 L100,20" fill="none" stroke="var(--accent-blue)" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-4 shadow-[var(--shadow-card)] flex flex-col justify-between h-24">
          <div className="text-[10px] text-[var(--text-secondary)]">{lang.newSubs}</div>
          <div className="flex items-end justify-between">
            <div className="text-2xl font-bold text-white">13</div>
            <div className="text-[9px] text-[var(--text-tertiary)]">1 New Month</div>
          </div>
        </div>

        <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-4 shadow-[var(--shadow-card)] flex flex-col justify-between h-24">
          <div className="text-[10px] text-[var(--text-secondary)]">{lang.outstanding}</div>
          <div className="flex items-end justify-between">
            <div className="text-2xl font-bold text-white">0</div>
            <div className="text-[9px] text-[var(--text-tertiary)]">Last Invoices</div>
          </div>
        </div>
      </div>

      {/* Right Column (Huge Table) */}
      <div className="col-span-1 lg:col-span-3">
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-md)] p-4 shadow-[var(--shadow-card)] h-full flex flex-col">
          
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-semibold text-white">{lang.billing}</h3>
            <div className="flex gap-2">
              <button className="w-6 h-6 rounded bg-[var(--void)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white"><Settings className="w-3 h-3" /></button>
              <button className="w-6 h-6 rounded bg-[var(--void)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white"><Filter className="w-3 h-3" /></button>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4 bg-[var(--void)] border border-[var(--border)] p-2 rounded-md">
            <div className="flex items-center gap-2 text-[10px] text-[var(--text-secondary)] pl-2">
              <span className="w-3 h-3 border border-[var(--text-tertiary)] rounded-sm"></span> {lang.search}
            </div>
            <div className="text-[10px] text-[var(--text-secondary)] bg-[var(--card)] px-3 py-1 rounded border border-[var(--border)]">
              {lang.sortable} <ChevronDown className="w-3 h-3 inline ml-1" />
            </div>
          </div>

          <div className="flex-1 overflow-auto hide-scrollbar border border-[var(--border)] rounded-md bg-[var(--void)]">
            <table className="w-full text-[10px]">
              <thead className="sticky top-0 bg-[var(--card)] z-10 border-b border-[var(--border)]">
                <tr className="text-[var(--text-secondary)] text-left">
                  <th className="py-2.5 px-3 font-medium">{lang.clientId} ↕</th>
                  <th className="py-2.5 px-3 font-medium">{lang.companyName} ↕</th>
                  <th className="py-2.5 px-3 font-medium">{lang.planType}</th>
                  <th className="py-2.5 px-3 font-medium">{lang.startDate} ↕</th>
                  <th className="py-2.5 px-3 font-medium">{lang.nextBilling} ↕</th>
                  <th className="py-2.5 px-3 font-medium">{lang.totalLtv} ↕</th>
                  <th className="py-2.5 px-3 font-medium">{lang.status}</th>
                </tr>
              </thead>
              <tbody className="text-[var(--text)] font-mono">
                {tableData.map((row, i) => (
                  <tr key={i} className="border-b border-[var(--border)] last:border-0 hover:bg-[var(--card-hover)] transition-colors">
                    <td className="py-2.5 px-3 text-[var(--accent-cyan)]">{row.id}</td>
                    <td className="py-2.5 px-3 font-sans">{row.name}</td>
                    <td className="py-2.5 px-3 font-sans text-[var(--text-secondary)]">{row.type}</td>
                    <td className="py-2.5 px-3">{row.start}</td>
                    <td className="py-2.5 px-3">{row.next}</td>
                    <td className="py-2.5 px-3">{row.ltv}</td>
                    <td className="py-2.5 px-3">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: row.c, boxShadow: `0 0 5px ${row.c}`}}></span>
                        <span className="font-sans text-[9px] uppercase tracking-wider">{row.status}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <button className="w-6 h-6 rounded bg-[var(--void)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white"><ChevronLeft className="w-3 h-3" /></button>
            <button className="w-6 h-6 rounded bg-[var(--void)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white"><ChevronRight className="w-3 h-3" /></button>
            <span className="text-[9px] text-[var(--text-tertiary)] ml-2">Page 1 of 8</span>
          </div>
        </div>
      </div>

    </div>
  );
}
