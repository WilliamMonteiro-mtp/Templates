"use client";

import {
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  Copy,
  Eye,
  EyeOff,
  FileUp,
  Filter,
  MoreHorizontal,
  Play,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import { useForge } from "@/components/shell/AppShell";
import type { CatalogItem, Locale } from "@/data/catalog";
import { ChartPreview } from "./ChartPreview";
import { CodeBlock } from "./CodeBlock";
import { CoreShowcase } from "./showcases/core";
import { DataShowcase, FeedbackShowcase, NavigationShowcase } from "./showcases/data-nav";
import { AuthShowcase, CommerceShowcase, MapsShowcase, PatternShowcase } from "./showcases/flows";
import { LayoutShowcase } from "./showcases/layout";
import { MediaShowcase } from "./showcases/media";

export function ReferenceShowcase({ item, locale }: { item: CatalogItem; locale: Locale }) {
  if (item.kind === "chart") return <ChartReference type={item.slug} locale={locale} />;
  if (item.slug === "tables" || item.slug === "data-grid") return <DataTable locale={locale} />;
  if (item.group === "forms") return <FormsReference focus={item.slug} locale={locale} />;
  if (item.group === "apis") return <ApiExplorer locale={locale} focus={item.slug} />;
  if (item.group === "code") return <CodeReference locale={locale} focus={item.slug} />;
  if (item.group === "media") return <MediaShowcase slug={item.slug} locale={locale} />;
  if (item.group === "core") return <CoreShowcase slug={item.slug} locale={locale} />;
  if (item.group === "data") return <DataShowcase slug={item.slug} locale={locale} />;
  if (item.group === "navigation") return <NavigationShowcase slug={item.slug} locale={locale} />;
  if (item.group === "feedback") return <FeedbackShowcase slug={item.slug} locale={locale} />;
  if (item.group === "layout") return <LayoutShowcase slug={item.slug} locale={locale} />;
  if (item.group === "auth") return <AuthShowcase slug={item.slug} locale={locale} />;
  if (item.group === "ecommerce") return <CommerceShowcase slug={item.slug} locale={locale} />;
  if (item.group === "maps-library") return <MapsShowcase slug={item.slug} locale={locale} />;
  if (item.group === "patterns") return <PatternShowcase slug={item.slug} locale={locale} />;
  return <ComponentReference locale={locale} item={item} />;
}

function ChartReference({ type, locale }: { type: string; locale: Locale }) {
  const [range, setRange] = useState("12M");
  return (
    <div className="showcase-stack">
      <section className="live-panel chart-panel">
        <header className="panel-toolbar">
          <div><span className="technical-label">{locale === "pt" ? "RECEITA ANALISADA" : "REVENUE ANALYSIS"}</span><strong>$1.24M</strong><small>+18.4% YoY</small></div>
          <div className="segmented">{["7D", "30D", "12M", "ALL"].map((value) => <button className={range === value ? "active" : ""} onClick={() => setRange(value)} key={value}>{value}</button>)}</div>
        </header>
        <ChartPreview type={type} />
        <footer className="chart-footer"><span><i className="legend-a" />{locale === "pt" ? "Receita" : "Revenue"}</span><span><i className="legend-b" />{locale === "pt" ? "Meta" : "Target"}</span><span>{locale === "pt" ? "Última sincronização: agora" : "Last synced: just now"}</span></footer>
      </section>
      <div className="insight-grid">
        {[["$284.2k", locale === "pt" ? "Valor médio" : "Average value"],["18.4%", locale === "pt" ? "Crescimento" : "Growth"],["92.6%", locale === "pt" ? "Confiança" : "Confidence"]].map(([value,label])=><div className="metric-cell" key={label}><span>{label}</span><strong>{value}</strong><small>↗ 4.2%</small></div>)}
      </div>
    </div>
  );
}

const customers = [
  ["Alex Morgan","alex@northstar.io","Active","$18,420","142","2 min ago","Enterprise"],
  ["Maya Chen","maya@horizon.co","Active","$12,880","96","18 min ago","Pro"],
  ["Noah Williams","noah@monocle.dev","Trial","$4,210","37","1 hour ago","Pro"],
  ["Sofia Rossi","sofia@atelier.it","Active","$9,540","81","3 hours ago","Business"],
  ["Liam Becker","liam@vector.de","Paused","$7,120","64","Yesterday","Business"],
  ["Amara Okafor","amara@fieldwork.ng","Active","$21,300","188","Yesterday","Enterprise"],
  ["Oliver Smith","oliver@frame.uk","Active","$5,890","49","2 days ago","Pro"],
  ["Inês Costa","ines@studio.pt","Trial","$2,140","18","2 days ago","Starter"],
  ["Kenji Sato","kenji@signal.jp","Active","$14,750","122","3 days ago","Enterprise"],
  ["Nora Jensen","nora@form.dk","Paused","$6,480","55","4 days ago","Business"],
  ["Mateo Ruiz","mateo@nuevo.es","Active","$8,920","73","5 days ago","Pro"],
  ["Aisha Rahman","aisha@woven.ae","Active","$16,110","136","6 days ago","Enterprise"],
] as const;

function DataTable({ locale }: { locale: Locale }) {
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [selected, setSelected] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const rows = useMemo(() => customers
    .filter((row) => `${row[0]} ${row[1]} ${row[2]}`.toLowerCase().includes(search.toLowerCase()))
    .sort((a,b) => sortAsc ? a[0].localeCompare(b[0]) : b[0].localeCompare(a[0]))
    .slice((page-1)*6,page*6), [search,sortAsc,page]);
  return (
    <section className="data-table-panel">
      <header className="table-tools">
        <div><h3>{locale === "pt" ? "Clientes" : "Customers"}</h3><p>{locale === "pt" ? "12 registos · atualizado agora" : "12 records · updated just now"}</p></div>
        <div className="tool-row"><label className="table-search"><Search size={14}/><input value={search} onChange={(e)=>{setSearch(e.target.value);setPage(1)}} placeholder={locale === "pt" ? "Pesquisar clientes..." : "Search customers..."}/></label><button className="secondary-button"><Filter size={14}/>{locale === "pt" ? "Filtrar" : "Filter"}</button><button className="primary-button">+ {locale === "pt" ? "Adicionar" : "Add customer"}</button></div>
      </header>
      {selected.length > 0 && <div className="bulk-bar"><strong>{selected.length} selected</strong><button>Export</button><button>Archive</button><button onClick={()=>setSelected([])}>Clear</button></div>}
      <div className="table-scroll"><table>
        <thead><tr><th><input type="checkbox" aria-label="Select all" checked={selected.length === rows.length && rows.length > 0} onChange={(e)=>setSelected(e.target.checked ? rows.map(row=>row[1]) : [])}/></th><th><button onClick={()=>setSortAsc(!sortAsc)}>Customer {sortAsc ? "↑":"↓"}</button></th><th>Status</th><th>Revenue</th><th>Orders</th><th>Last active</th><th>Plan</th><th /></tr></thead>
        <tbody>{rows.map((row,i)=><tr key={row[1]}><td><input type="checkbox" aria-label={`Select ${row[0]}`} checked={selected.includes(row[1])} onChange={()=>setSelected(current=>current.includes(row[1])?current.filter(id=>id!==row[1]):[...current,row[1]])}/></td><td><div className="customer"><span className={`avatar avatar-${i%5}`}>{row[0].split(" ").map(v=>v[0]).join("")}</span><span><strong>{row[0]}</strong><small>{row[1]}</small></span></div></td><td><span className={`status status-${row[2].toLowerCase()}`}><i/>{row[2]}</span></td><td className="mono">{row[3]}</td><td>{row[4]}</td><td>{row[5]}</td><td><span className="plan-badge">{row[6]}</span></td><td><button className="icon-btn"><MoreHorizontal size={15}/></button></td></tr>)}</tbody>
      </table></div>
      <footer className="table-pagination"><span>{locale === "pt" ? `A mostrar ${(page-1)*6+1}–${Math.min(page*6, customers.length)} de ${customers.length}` : `Showing ${(page-1)*6+1}–${Math.min(page*6, customers.length)} of ${customers.length}`}</span><div><button disabled={page===1} onClick={()=>setPage(1)}><ChevronLeft size={14}/></button><button className={page===1?"active":""} onClick={()=>setPage(1)}>1</button><button className={page===2?"active":""} onClick={()=>setPage(2)}>2</button><button disabled={page===2} onClick={()=>setPage(2)}><ChevronRight size={14}/></button></div></footer>
    </section>
  );
}

function FormsReference({ focus, locale }: { focus: string; locale: Locale }) {
  const [passwordVisible,setPasswordVisible]=useState(false);
  const [enabled,setEnabled]=useState(true);
  const [slider,setSlider]=useState(62);
  const [tags,setTags]=useState(["Design system","React"]);
  const isPt=locale==="pt";
  return <div className="forms-catalog">
    <section className="form-section"><header><span>01</span><div><h3>{isPt?"Campos de texto":"Text fields"}</h3><p>{isPt?"Entradas fundamentais com estados de produção.":"Foundational inputs with production states."}</p></div></header>
      <div className="form-grid">
        <Field label={isPt?"Nome completo":"Full name"} placeholder={isPt?"Alex Morgan":"Alex Morgan"}/>
        <Field label="Email" value="alex@northstar.io" state="success" helper={isPt?"Email verificado":"Email verified"}/>
        <label className="forge-field"><span>{isPt?"Palavra-passe":"Password"}</span><div className="input-with-icon"><input type={passwordVisible?"text":"password"} defaultValue="forgepass"/><button onClick={()=>setPasswordVisible(!passwordVisible)}>{passwordVisible?<EyeOff size={15}/>:<Eye size={15}/>}</button></div><small>{isPt?"Mínimo de 8 caracteres":"Minimum 8 characters"}</small></label>
        <Field label={isPt?"Email de trabalho":"Work email"} value="invalid@email" state="error" helper={isPt?"Introduza um email válido":"Enter a valid email address"}/>
        <label className="forge-field"><span>{isPt?"Pesquisar":"Search"}</span><div className="input-prefix"><Search size={14}/><input placeholder={isPt?"Pesquisar equipa...":"Search team..."}/><kbd>⌘K</kbd></div></label>
        <Field label={isPt?"Somente leitura":"Read only"} value="USR-4821" readOnly/>
      </div>
    </section>
    <section className="form-section"><header><span>02</span><div><h3>{isPt?"Seleção e controlo":"Selection & control"}</h3><p>{isPt?"Escolhas binárias, múltiplas e de intervalo.":"Binary, multiple and range choices."}</p></div></header>
      <div className="control-grid">
        <label className="forge-field"><span>{isPt?"Função":"Role"}</span><div className="fake-select">Product designer<ChevronDown size={15}/></div></label>
        <div className="control-card"><span>{isPt?"Notificações":"Notifications"}</span><label className="switch-row"><span><strong>{isPt?"Atualizações do produto":"Product updates"}</strong><small>{isPt?"Receba novidades mensais.":"Receive a monthly digest."}</small></span><button role="switch" aria-checked={enabled} className={`switch ${enabled?"on":""}`} onClick={()=>setEnabled(!enabled)}><i/></button></label></div>
        <div className="control-card"><span>{isPt?"Visibilidade":"Visibility"}</span><label className="check-row"><input type="radio" name="visibility" defaultChecked/>Public</label><label className="check-row"><input type="radio" name="visibility"/>Team only</label><label className="check-row"><input type="radio" name="visibility"/>Private</label></div>
        <div className="control-card"><span>{isPt?"Densidade":"Density"} · {slider}%</span><input className="range" type="range" value={slider} onChange={(e)=>setSlider(Number(e.target.value))}/><div className="range-labels"><small>Compact</small><small>Comfortable</small></div></div>
      </div>
    </section>
    <section className="form-section"><header><span>03</span><div><h3>{isPt?"Entradas avançadas":"Advanced inputs"}</h3><p>{isPt?"Ficheiros, tags, datas e códigos de uso único.":"Files, tags, dates and one-time codes."}</p></div></header>
      <div className="advanced-form-grid">
        <div className="dropzone"><FileUp size={22}/><strong>{isPt?"Arraste ficheiros ou clique para procurar":"Drop files or click to browse"}</strong><small>PNG, JPG, SVG · MAX 10MB</small><button>{isPt?"Escolher ficheiro":"Choose file"}</button></div>
        <div className="advanced-stack"><label className="forge-field"><span>Tags</span><div className="tag-input">{tags.map(tag=><i key={tag}>{tag}<button onClick={()=>setTags(tags.filter(value=>value!==tag))}><X size={10}/></button></i>)}<input placeholder="Add tag..."/></div></label><label className="forge-field"><span>OTP</span><div className="otp-input">{["4","8","2","1","",""].map((value,i)=><input key={i} defaultValue={value} maxLength={1}/>)}</div><small>Code expires in 04:32</small></label></div>
      </div>
    </section>
    {focus==="validation" && <div className="validation-summary"><CircleAlert size={18}/><div><strong>{isPt?"Existem 2 erros no formulário":"There are 2 errors in the form"}</strong><p>{isPt?"Reveja o email e a palavra-passe antes de continuar.":"Review email and password before continuing."}</p></div></div>}
  </div>;
}

function Field({label,placeholder,value,state,helper,readOnly}:{label:string;placeholder?:string;value?:string;state?:string;helper?:string;readOnly?:boolean}) {
  return <label className={`forge-field ${state??""}`}><span>{label}</span><div className="field-input"><input placeholder={placeholder} defaultValue={value} readOnly={readOnly}/>{state==="success"&&<Check size={15}/>} {state==="error"&&<CircleAlert size={15}/>}</div>{helper&&<small>{helper}</small>}</label>;
}

const apiSnippets = {
  cURL: `curl "https://api.forge.dev/v1/users?page=1&limit=20" \\\n  -H "Authorization: Bearer $FORGE_API_KEY"`,
  JavaScript: `const users = await forge.users.list({\n  page: 1,\n  limit: 20,\n  status: "active"\n});`,
  TypeScript: `const users: UserList = await client.users.list({\n  page: 1,\n  limit: 20,\n  status: "active"\n});`,
  Python: `users = forge.users.list(\n    page=1,\n    limit=20,\n    status="active"\n)`,
  Go: `users, err := client.Users.List(ctx, &forge.UserListParams{\n  Limit: 20,\n})`,
};

function ApiExplorer({ locale, focus }: { locale: Locale; focus: string }) {
  const [lang,setLang]=useState<keyof typeof apiSnippets>("cURL");
  const [running,setRunning]=useState(false);
  const {toast}=useForge();
  function run(){setRunning(true);setTimeout(()=>{setRunning(false);toast(locale==="pt"?"Pedido concluído em 184ms":"Request completed in 184ms")},800)}
  return <div className="api-explorer">
    <aside className="api-routes"><span className="technical-label">ENDPOINTS</span>{["Users","Projects","Authentication","Payments","Products","Orders"].map((route,i)=><button className={i===0?"active":""} key={route}><span>{route}</span><small>{i===2?"POST":"GET"}</small></button>)}</aside>
    <div className="api-main">
      <header className="endpoint-header"><div><span className="method">GET</span><code>/v1/users</code></div><button className="run-button" onClick={run} disabled={running}><Play size={13} fill="currentColor"/>{running?"Running...":locale==="pt"?"Executar pedido":"Run request"}</button></header>
      <p>{locale==="pt"?"Devolve uma lista paginada de utilizadores, ordenada pela atividade mais recente.":"Returns a paginated list of users ordered by most recent activity."}</p>
      <div className="api-section"><h3>{locale==="pt"?"Parâmetros":"Parameters"}</h3>{[["page","integer","Page number","1"],["limit","integer","Results per page","20"],["search","string","Match name or email","—"],["status","enum","active, invited, blocked","active"]].map(row=><div className="param-row" key={row[0]}><code>{row[0]}</code><span>{row[1]}</span><p>{row[2]}</p><input defaultValue={row[3]}/></div>)}</div>
      <div className="api-code"><header><div className="language-tabs">{Object.keys(apiSnippets).map(value=><button className={lang===value?"active":""} onClick={()=>setLang(value as keyof typeof apiSnippets)} key={value}>{value}</button>)}</div><button onClick={()=>{navigator.clipboard.writeText(apiSnippets[lang]);toast("Copied")}}><Copy size={13}/>Copy</button></header><pre>{apiSnippets[lang]}</pre></div>
      <div className="response-header"><h3>{locale==="pt"?"Resposta":"Response"}</h3><span><i/>200 OK</span><small>184 ms · 2.3 KB</small></div>
      <JsonViewer focus={focus}/>
    </div>
  </div>;
}

function JsonViewer({focus}:{focus:string}) {
  const [collapsed,setCollapsed]=useState(false);
  const response = collapsed
    ? `{\n  "data": […],\n  "has_more": true,\n  "request_id": "req_${focus}_92fd"\n}`
    : `{
  "data": [
    {
      "id": "usr_4821",
      "name": "Alex Morgan",
      "email": "alex@example.com",
      "status": "active",
      "plan": "enterprise"
    },
    {
      "id": "usr_4822",
      "name": "Maya Chen",
      "email": "maya@horizon.co",
      "status": "active",
      "plan": "pro"
    }
  ],
  "has_more": true,
  "request_id": "req_${focus}_92fd"
}`;
  return <div className="json-viewer"><header><span>application/json</span><div><button onClick={()=>setCollapsed(!collapsed)}>{collapsed?"Expand":"Collapse"}</button><button><Search size={12}/>Search</button><button onClick={()=>navigator.clipboard.writeText('{"data":[]}')}><Copy size={12}/>Copy</button></div></header>
    <pre>{response}</pre>
  </div>;
}

function CodeReference({locale,focus}:{locale:Locale;focus:string}) {
  const initial = focus==="html"?"HTML":focus==="css"?"CSS":focus==="json-code"?"JSON":focus==="terminal"?"Bash":"TypeScript";
  return <div className="code-reference"><div className="code-intro-grid"><div><span className="technical-label">EXAMPLE / USER SERVICE</span><h3>{locale==="pt"?"Código pronto a adaptar":"Code ready to adapt"}</h3><p>{locale==="pt"?"Exemplo tipado com tratamento de erros, parâmetros opcionais e uma resposta previsível.":"A typed example with error handling, optional parameters and a predictable response."}</p></div><div className="code-stats"><div><strong>34</strong><span>LINES</span></div><div><strong>0</strong><span>ERRORS</span></div><div><strong>AA</strong><span>A11Y</span></div></div></div><CodeBlock locale={locale} initial={initial}/></div>;
}

function ComponentReference({locale,item}:{locale:Locale;item:CatalogItem}) {
  const [activeTab,setActiveTab]=useState("Default");
  return <div className="component-stage">
    <div className="variant-tabs">{["Default","Hover","Focus","Disabled"].map(tab=><button className={activeTab===tab?"active":""} onClick={()=>setActiveTab(tab)} key={tab}>{tab}</button>)}</div>
    <div className="component-preview-canvas">
      <div className={`generic-component state-${activeTab.toLowerCase()}`}>
        {item.slug.includes("button")?<button className="demo-button">{locale==="pt"?"Guardar alterações":"Save changes"}</button>
        :item.slug.includes("badge")?<div className="badge-set"><span>Stable</span><span>In review</span><span>Deprecated</span><span>Draft</span></div>
        :item.slug.includes("avatar")?<div className="avatar-set"><span>AM</span><span>MC</span><span>NW</span><span>+8</span></div>
        :item.slug.includes("progress")||item.slug.includes("loading")?<div className="progress-demo"><span><i style={{width:"72%"}}/></span><strong>72%</strong><small>Uploading interface-assets.zip</small></div>
        :item.slug.includes("accordion")?<div className="accordion-demo">{["What is FORGE?","Can I use it commercially?","How are updates delivered?"].map((q,i)=><details open={i===0} key={q}><summary>{q}<ChevronDown size={14}/></summary><p>A precise, reusable reference for building modern interfaces.</p></details>)}</div>
        :item.slug.includes("alert")||item.slug.includes("error")?<div className="alert-demo"><CircleAlert/><div><strong>Deployment needs attention</strong><p>Two environment variables are missing from production.</p></div><button>Review</button></div>
        :<div className="generic-card"><span className="technical-label">{item.group.toUpperCase()} / 01</span><h3>{item.label[locale]}</h3><p>{locale==="pt"?"Um exemplo de produção com hierarquia, estados e comportamento acessível.":"A production example with hierarchy, states and accessible behavior."}</p><div><button className="primary-button">{locale==="pt"?"Continuar":"Continue"}</button><button className="secondary-button">{locale==="pt"?"Cancelar":"Cancel"}</button></div></div>}
      </div>
    </div>
    <div className="component-notes"><div><span>KEYBOARD</span><p><kbd>Tab</kbd> Focus element · <kbd>Enter</kbd> Activate</p></div><div><span>ARIA</span><p>Semantic role, visible label and state announcement.</p></div><div><span>CONTRAST</span><p>7.8:1 · WCAG AAA text contrast</p></div></div>
  </div>;
}

export function Playground({locale}:{locale:Locale}) {
  const [variant,setVariant]=useState("Primary");
  const [size,setSize]=useState("Medium");
  const [state,setState]=useState("Default");
  const [radius,setRadius]=useState(4);
  const [density,setDensity]=useState(50);
  const {toast}=useForge();
  return <div className="playground">
    <aside className="play-controls"><header><SlidersHorizontal size={15}/><strong>{locale==="pt"?"Propriedades":"Properties"}</strong><button>Reset</button></header>
      <ControlSelect label="Variant" value={variant} values={["Primary","Secondary","Outline","Ghost","Destructive"]} onChange={setVariant}/>
      <ControlSelect label="Size" value={size} values={["Small","Medium","Large"]} onChange={setSize}/>
      <ControlSelect label="State" value={state} values={["Default","Hover","Loading","Disabled"]} onChange={setState}/>
      <label className="range-control"><span>Radius <code>{radius}px</code></span><input type="range" min="0" max="24" value={radius} onChange={(e)=>setRadius(Number(e.target.value))}/></label>
      <label className="range-control"><span>Density <code>{density}%</code></span><input type="range" value={density} onChange={(e)=>setDensity(Number(e.target.value))}/></label>
    </aside>
    <section className="play-preview"><header><span>PREVIEW</span><div><button>Light</button><button>Dark</button><button>↗</button></div></header><div className="play-canvas" style={{"--demo-radius":`${radius}px`,"--demo-density":`${8+density/5}px`} as React.CSSProperties}><button className={`play-button v-${variant.toLowerCase()} s-${size.toLowerCase()}`} disabled={state==="Disabled"}>{state==="Loading"&&<i/>}{state==="Loading"?(locale==="pt"?"A guardar...":"Saving..."):(locale==="pt"?"Guardar alterações":"Save changes")}</button></div><footer><code>{`<Button variant="${variant.toLowerCase()}" size="${size.toLowerCase()}">Save changes</Button>`}</code><button onClick={()=>toast(locale==="pt"?"Código copiado":"Code copied")}><Copy size={13}/>Copy code</button></footer></section>
  </div>;
}

function ControlSelect({label,value,values,onChange}:{label:string;value:string;values:string[];onChange:(value:string)=>void}) {
  return <label className="control-select"><span>{label}</span><select value={value} onChange={(e)=>onChange(e.target.value)}>{values.map(v=><option key={v}>{v}</option>)}</select></label>;
}
