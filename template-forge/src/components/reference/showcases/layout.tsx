"use client";

/* eslint-disable @next/next/no-img-element */
import {
  ArrowUpRight,
  ChevronDown,
  GripVertical,
  Plus,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import type { Locale } from "@/data/catalog";
import { ChartPreview } from "../ChartPreview";

export function LayoutShowcase({ slug, locale }: { slug: string; locale: Locale }) {
  const isPt = locale === "pt";

  if (slug === "bento") {
    return (
      <section className="panel">
        <header className="panel-head"><span className="technical-label">BENTO GRID</span><small>{isPt ? "Blocos de densidade variável" : "Blocks of varying density"}</small></header>
        <div className="f-bento">
          <div className="bento-a"><span className="technical-label">RECEITA ANUAL</span><strong>$1.24M</strong><small>+18.4% {isPt ? "face ao ano anterior" : "year over year"}</small><ChartPreview type="area" compact /></div>
          <div className="bento-b"><span className="technical-label">NPS</span><strong>68</strong><small>{isPt ? "412 respostas" : "412 responses"}</small></div>
          <div className="bento-c"><span className="technical-label">{isPt ? "EQUIPA" : "TEAM"}</span><div className="avatar-stack"><span className="fav">AM</span><span className="fav">MC</span><span className="fav">KS</span><span className="fav more">+9</span></div><small>{isPt ? "12 pessoas em 4 fusos" : "12 people across 4 time zones"}</small></div>
          <div className="bento-d"><span className="technical-label">{isPt ? "DISPONIBILIDADE" : "UPTIME"}</span><strong>99.98%</strong><div className="uptime-bars">{Array.from({ length: 30 }).map((_, index) => <i key={index} className={index === 19 ? "down" : ""} />)}</div></div>
          <div className="bento-e"><span className="technical-label">{isPt ? "ÚLTIMA VERSÃO" : "LATEST RELEASE"}</span><strong>v2.4.0</strong><p>{isPt ? "18 componentes novos, 5 gráficos e 12 correções." : "18 new components, 5 charts and 12 fixes."}</p><a href="#top">{isPt ? "Ver changelog" : "View changelog"}<ArrowUpRight size={12} /></a></div>
        </div>
      </section>
    );
  }

  if (slug === "grid") {
    return (
      <div className="showcase-stack">
        <section className="panel">
          <header className="panel-head"><span className="technical-label">12 COLUMN GRID</span><small>24px gutter · {isPt ? "largura máxima 1340px" : "1340px max width"}</small></header>
          <div className="grid-ruler">{Array.from({ length: 12 }).map((_, index) => <i key={index}><small>{index + 1}</small></i>)}</div>
          <div className="grid-samples">
            <div className="grid-row"><span style={{ gridColumn: "span 12" }}>12</span></div>
            <div className="grid-row"><span style={{ gridColumn: "span 8" }}>8</span><span style={{ gridColumn: "span 4" }}>4</span></div>
            <div className="grid-row"><span style={{ gridColumn: "span 6" }}>6</span><span style={{ gridColumn: "span 3" }}>3</span><span style={{ gridColumn: "span 3" }}>3</span></div>
            <div className="grid-row"><span style={{ gridColumn: "span 3" }}>3</span><span style={{ gridColumn: "span 3" }}>3</span><span style={{ gridColumn: "span 3" }}>3</span><span style={{ gridColumn: "span 3" }}>3</span></div>
          </div>
        </section>
        <section className="panel">
          <header className="panel-head"><span className="technical-label">BREAKPOINTS</span><small>{isPt ? "Colunas por dispositivo" : "Columns per device"}</small></header>
          <div className="breakpoint-table">
            {[["Mobile", "< 560px", "4", isPt ? "1 coluna de conteúdo" : "single content column"], ["Tablet", "560–1100px", "8", isPt ? "navegação recolhida" : "collapsed navigation"], ["Desktop", "> 1100px", "12", isPt ? "sidebar permanente" : "persistent sidebar"]].map((row) => (
              <div key={row[0]}><strong>{row[0]}</strong><code>{row[1]}</code><span>{row[2]} cols</span><small>{row[3]}</small></div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  if (slug === "masonry") {
    const blocks = [
      { h: 210, t: { pt: "Tipografia editorial", en: "Editorial typography" } },
      { h: 140, t: { pt: "Tokens de espaçamento", en: "Spacing tokens" } },
      { h: 260, t: { pt: "Sistemas de grelha", en: "Grid systems" } },
      { h: 170, t: { pt: "Movimento contido", en: "Restrained motion" } },
      { h: 230, t: { pt: "Densidade de dados", en: "Data density" } },
      { h: 150, t: { pt: "Acessibilidade", en: "Accessibility" } },
      { h: 195, t: { pt: "Estados de interface", en: "Interface states" } },
      { h: 125, t: { pt: "Código legível", en: "Readable code" } },
    ];
    return (
      <section className="panel">
        <header className="panel-head"><span className="technical-label">MASONRY</span><small>{isPt ? "Colunas CSS com alturas naturais" : "CSS columns with natural heights"}</small></header>
        <div className="f-masonry">
          {blocks.map((block, index) => (
            <article key={block.t.en} style={{ minHeight: block.h }}>
              <span className="technical-label">0{index + 1}</span>
              <strong>{block.t[locale]}</strong>
              <p>{isPt ? "Uma nota curta sobre a decisão de design e a sua aplicação prática." : "A short note on the design decision and how it is applied."}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }

  if (slug === "hero") {
    return (
      <div className="showcase-stack">
        <section className="panel">
          <header className="panel-head"><span className="technical-label">EDITORIAL HERO</span><small>{isPt ? "Tipografia dominante" : "Type-led"}</small></header>
          <div className="hero-demo">
            <span className="technical-label">{isPt ? "PLATAFORMA DE INTERFACES" : "INTERFACE PLATFORM"}</span>
            <h3>{isPt ? "Construa com peças que já foram decididas." : "Build with pieces that are already decided."}</h3>
            <p>{isPt ? "Componentes documentados, acessíveis e prontos para produção." : "Documented, accessible, production-ready components."}</p>
            <div><button className="fbtn v-primary">{isPt ? "Começar" : "Get started"}</button><button className="fbtn v-ghost">{isPt ? "Ver documentação" : "Read the docs"}</button></div>
          </div>
        </section>
        <section className="panel">
          <header className="panel-head"><span className="technical-label">SPLIT HERO</span><small>{isPt ? "Texto e visual lado a lado" : "Copy and visual side by side"}</small></header>
          <div className="hero-demo split">
            <div>
              <span className="technical-label">{isPt ? "ANÁLISE EM TEMPO REAL" : "REAL-TIME ANALYSIS"}</span>
              <h3>{isPt ? "Veja o que muda, quando muda." : "See what changes, as it changes."}</h3>
              <p>{isPt ? "Painéis que respondem aos dados em vez de os decorar." : "Dashboards that answer the data instead of decorating it."}</p>
              <button className="fbtn v-primary">{isPt ? "Pedir demonstração" : "Request a demo"}</button>
            </div>
            <div className="hero-visual"><ChartPreview type="bar" compact /></div>
          </div>
        </section>
      </div>
    );
  }

  if (slug === "accordion") {
    const items = [
      { q: { pt: "O que está incluído na biblioteca?", en: "What is included in the library?" }, a: { pt: "Mais de 120 entradas documentadas com pré-visualização, código, acessibilidade e notas de utilização.", en: "Over 120 documented entries with preview, code, accessibility and usage notes." } },
      { q: { pt: "Como adiciono um componente novo?", en: "How do I add a new component?" }, a: { pt: "Registe a entrada em src/data/catalog.ts e a rota estática é gerada automaticamente.", en: "Register the entry in src/data/catalog.ts and the static route is generated automatically." } },
      { q: { pt: "Os exemplos funcionam sem backend?", en: "Do the examples work without a backend?" }, a: { pt: "Sim. Todos os dados são locais e o API Explorer simula as respostas.", en: "Yes. All data is local and the API Explorer simulates responses." } },
    ];
    return (
      <section className="panel">
        <header className="panel-head"><span className="technical-label">ACCORDION</span><small>{isPt ? "Uma secção aberta por predefinição" : "One section open by default"}</small></header>
        <div className="f-accordion">
          {items.map((item, index) => (
            <details key={item.q.en} open={index === 0}>
              <summary>{item.q[locale]}<ChevronDown size={15} /></summary>
              <p>{item.a[locale]}</p>
            </details>
          ))}
        </div>
      </section>
    );
  }

  if (slug === "drawer") return <DrawerShowcase locale={locale} />;
  if (slug === "split-pane") return <SplitPaneShowcase locale={locale} />;

  return (
    <div className="showcase-stack">
      <section className="panel">
        <header className="panel-head"><span className="technical-label">CARD VARIANTS</span><small>{isPt ? "Métrica, conteúdo e ação" : "Metric, content and action"}</small></header>
        <div className="card-grid">
          <article className="f-card">
            <span className="technical-label">{isPt ? "RECEITA MENSAL" : "MONTHLY REVENUE"}</span>
            <strong className="card-metric">$84,240</strong>
            <small className="card-delta">+12.4% {isPt ? "vs. mês anterior" : "vs. last month"}</small>
            <ChartPreview type="line" compact />
          </article>
          <article className="f-card media">
            <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80" alt="" />
            <div><span className="technical-label">{isPt ? "GUIA" : "GUIDE"}</span><strong>{isPt ? "Como estruturar tokens" : "How to structure tokens"}</strong><p>{isPt ? "Do valor bruto à decisão semântica em quatro passos." : "From raw value to semantic decision in four steps."}</p></div>
          </article>
          <article className="f-card">
            <div className="card-head"><span className="fav">MC</span><div><strong>Maya Chen</strong><small>{isPt ? "Convidou-o para Northstar" : "Invited you to Northstar"}</small></div></div>
            <p>{isPt ? "Terá acesso a 12 projetos e à biblioteca partilhada da equipa." : "You will get access to 12 projects and the shared team library."}</p>
            <div className="card-actions"><button className="fbtn v-primary s-small">{isPt ? "Aceitar" : "Accept"}</button><button className="fbtn v-secondary s-small">{isPt ? "Recusar" : "Decline"}</button></div>
          </article>
        </div>
      </section>
      <section className="panel">
        <header className="panel-head"><span className="technical-label">STAT CARDS</span><small>{isPt ? "Densidade compacta" : "Compact density"}</small></header>
        <div className="stat-cards">
          {[["1,842", isPt ? "Utilizadores ativos" : "Active users", "+8.1%"], ["68.4%", isPt ? "Conversão" : "Conversion", "+3.2%"], ["184 ms", isPt ? "Latência média" : "Average latency", "-12 ms"], ["12", isPt ? "Projetos" : "Projects", "+2"]].map((row) => (
            <div key={String(row[1])}><span>{row[1]}</span><strong>{row[0]}</strong><small>{row[2]}</small></div>
          ))}
        </div>
      </section>
    </div>
  );
}

function DrawerShowcase({ locale }: { locale: Locale }) {
  const isPt = locale === "pt";
  const [open, setOpen] = useState(false);
  return (
    <section className="panel">
      <header className="panel-head"><span className="technical-label">DRAWER</span><small>{isPt ? "Painel lateral sobreposto" : "Overlay side panel"}</small></header>
      <div className="drawer-stage">
        <button className="fbtn v-primary" onClick={() => setOpen(true)}>{isPt ? "Abrir detalhes" : "Open details"}</button>
        <p>{isPt ? "O painel fecha com Esc ou ao clicar fora." : "The panel closes with Esc or an outside click."}</p>
        {open && <button className="drawer-backdrop" aria-label={isPt ? "Fechar" : "Close"} onClick={() => setOpen(false)} />}
        <aside className={`f-drawer ${open ? "open" : ""}`} aria-hidden={!open}>
          <header><strong>{isPt ? "Detalhes do cliente" : "Customer details"}</strong><button onClick={() => setOpen(false)} aria-label={isPt ? "Fechar" : "Close"}><X size={15} /></button></header>
          <div className="drawer-body">
            <div className="drawer-identity"><span className="fav">AO</span><div><strong>Amara Okafor</strong><small>amara@fieldwork.ng</small></div></div>
            <dl className="f-description">
              <div><dt>{isPt ? "Plano" : "Plan"}</dt><dd>Enterprise</dd></div>
              <div><dt>{isPt ? "Receita" : "Revenue"}</dt><dd>$21,300</dd></div>
              <div><dt>{isPt ? "Encomendas" : "Orders"}</dt><dd>188</dd></div>
              <div><dt>{isPt ? "Cliente desde" : "Customer since"}</dt><dd>Mar 2024</dd></div>
            </dl>
          </div>
          <footer><button className="fbtn v-secondary s-small">{isPt ? "Exportar" : "Export"}</button><button className="fbtn v-primary s-small">{isPt ? "Guardar" : "Save"}</button></footer>
        </aside>
      </div>
    </section>
  );
}

function SplitPaneShowcase({ locale }: { locale: Locale }) {
  const isPt = locale === "pt";
  const [split, setSplit] = useState(42);
  return (
    <section className="panel">
      <header className="panel-head"><span className="technical-label">SPLIT PANE</span><small>{split}% / {100 - split}%</small></header>
      <div className="f-split" style={{ gridTemplateColumns: `${split}% 6px 1fr` }}>
        <div className="split-side">
          <div className="split-head"><Users size={13} />{isPt ? "Equipa" : "Team"}<button aria-label={isPt ? "Adicionar" : "Add"}><Plus size={12} /></button></div>
          {["Amara Okafor", "Maya Chen", "Kenji Sato", "Inês Costa", "Noah Williams"].map((name, index) => (
            <button className={index === 1 ? "active" : ""} key={name}><span className="fav">{name.split(" ").map((part) => part[0]).join("")}</span>{name}</button>
          ))}
        </div>
        <div className="split-handle" role="separator" aria-orientation="vertical"><GripVertical size={12} /></div>
        <div className="split-main">
          <div className="split-identity"><span className="fav">MC</span><div><strong>Maya Chen</strong><small>Product designer · Vancouver</small></div></div>
          <dl className="f-description">
            <div><dt>{isPt ? "Função" : "Role"}</dt><dd>{isPt ? "Administradora" : "Administrator"}</dd></div>
            <div><dt>{isPt ? "Projetos" : "Projects"}</dt><dd>9</dd></div>
            <div><dt>{isPt ? "Última atividade" : "Last active"}</dt><dd>{isPt ? "há 18 minutos" : "18 minutes ago"}</dd></div>
          </dl>
          <label className="split-range">{isPt ? "Largura do painel" : "Pane width"}<input className="range" type="range" min={22} max={70} value={split} onChange={(event) => setSplit(Number(event.target.value))} /></label>
        </div>
      </div>
    </section>
  );
}
