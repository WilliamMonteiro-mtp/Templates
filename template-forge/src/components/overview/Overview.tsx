"use client";

import {
  ArrowRight,
  Braces,
  ChartNoAxesCombined,
  FileInput,
  GalleryHorizontalEnd,
  Network,
  PanelsTopLeft,
} from "lucide-react";
import Link from "next/link";
import { ChartPreview } from "@/components/reference/ChartPreview";
import { CodeBlock } from "@/components/reference/CodeBlock";
import { messages, type Locale } from "@/data/catalog";

export function Overview({ locale }: { locale: Locale }) {
  const t = messages[locale];
  const isPt = locale === "pt";
  return (
    <div className="overview-page">
      <section className="overview-hero">
        <div className="hero-grid-mark" aria-hidden="true">
          {Array.from({ length: 40 }).map((_, i) => <i key={i} />)}
        </div>
        <div className="hero-index">00 / OVERVIEW</div>
        <div className="hero-copy">
          <span className="hero-kicker"><i />{t.heroKicker}</span>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroBody}</p>
          <div className="hero-actions">
            <Link className="primary-button large" href={`/${locale}/reference/inputs`}>{t.explore}<ArrowRight size={15} /></Link>
            <Link className="text-action" href={`/${locale}/reference/documentation`}>{t.documentation}<span>↗</span></Link>
          </div>
        </div>
        <div className="hero-ascii" aria-hidden="true">
          <span>┌────────────┐</span><span>│ INTERFACE&nbsp; │</span><span>│ &nbsp;SYSTEMS&nbsp;&nbsp; │</span><span>└─────┬──────┘</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓</span><span>0010110101</span>
        </div>
      </section>

      <section className="stats-strip">
        {[["400+",isPt?"COMPONENTES":"COMPONENTS"],["120+",isPt?"PADRÕES":"PATTERNS"],["30+",isPt?"TIPOS DE GRÁFICO":"CHART TYPES"],["50+",isPt?"FERRAMENTAS DEV":"DEVELOPER TOOLS"]].map(([value,label],i)=><div key={label}><span>0{i+1}</span><strong>{value}</strong><small>{label}</small></div>)}
      </section>

      <section className="overview-section">
        <header className="editorial-heading"><div><span>01</span><h2>{t.featured}</h2></div><p>{isPt?"Uma biblioteca viva de decisões de interface, documentadas visual e tecnicamente.":"A living library of interface decisions, documented visually and technically."}</p></header>
        <div className="feature-grid">
          <FeatureCard icon={<FileInput />} title={isPt?"Formulários":"Forms"} count="24" href={`/${locale}/reference/advanced-forms`} className="feature-forms">
            <div className="mini-form"><label>Email<input defaultValue="alex@northstar.io" readOnly /></label><label>{isPt?"Função":"Role"}<span>Product designer <b>⌄</b></span></label><div><i className="mini-check">✓</i><small>{isPt?"Aceito os termos":"I agree to the terms"}</small><button>{isPt?"Continuar":"Continue"}</button></div></div>
          </FeatureCard>
          <FeatureCard icon={<ChartNoAxesCombined />} title={isPt?"Gráficos":"Charts"} count="23" href={`/${locale}/reference/line`} className="feature-chart">
            <ChartPreview type="line" compact />
          </FeatureCard>
          <FeatureCard icon={<GalleryHorizontalEnd />} title={isPt?"Multimédia":"Media"} count="18" href={`/${locale}/reference/gallery`} className="feature-media">
            <div className="mini-media"><div /><div /><div /><span><i>▶</i><small>02:48</small></span></div>
          </FeatureCard>
          <FeatureCard icon={<Braces />} title="APIs" count="16" href={`/${locale}/reference/rest`} className="feature-api">
            <CodeBlock locale={locale} initial="JSON" compact />
          </FeatureCard>
          <FeatureCard icon={<PanelsTopLeft />} title={isPt?"Padrões":"Patterns"} count="32" href={`/${locale}/reference/dashboard`} className="feature-pattern">
            <div className="mini-pattern"><aside><i/><i/><i/><i/></aside><main><header><span/><span/></header><div><i/><i/><i/></div><section><ChartPreview type="area" compact /></section></main></div>
          </FeatureCard>
          <FeatureCard icon={<Network />} title={isPt?"Dados":"Data"} count="21" href={`/${locale}/reference/tables`} className="feature-data">
            <div className="mini-table">{["Alex Morgan","Maya Chen","Noah Williams","Sofia Rossi"].map((name,i)=><div key={name}><span>{name.slice(0,2).toUpperCase()}</span><strong>{name}<small>{["Enterprise","Pro","Trial","Business"][i]}</small></strong><i className={i===2?"trial":""}>{i===2?"Trial":"Active"}</i><b>${[18.4,12.8,4.2,9.5][i]}k</b></div>)}</div>
          </FeatureCard>
        </div>
      </section>

      <section className="overview-section pulse-section">
        <header className="editorial-heading"><div><span>02</span><h2>{isPt?"Pulso da biblioteca":"Library pulse"}</h2></div><Link href={`/${locale}/reference/documentation`}>{isPt?"Ver changelog":"View changelog"} ↗</Link></header>
        <div className="pulse-grid">
          <div className="release-note"><span className="release-version">v2.4</span><div><small>SEP 24, 2026 · LATEST</small><h3>{isPt?"Novos padrões de dados e acessibilidade":"New data and accessibility patterns"}</h3><p>{isPt?"18 novos componentes, documentação WCAG revista e cinco visualizações avançadas.":"18 new components, revised WCAG guidance and five advanced visualizations."}</p><div><span>+18 components</span><span>+5 charts</span><span>12 fixes</span></div></div></div>
          <div className="recent-list"><span className="technical-label">{t.recent}</span>{[["Sankey","CHART","12m"],["Input","COMPONENT","28m"],["API Explorer","API","1h"],["Dashboard","PATTERN","3h"]].map((row,i)=><Link key={row[0]} href={`/${locale}/reference/${["sankey","inputs","rest","dashboard"][i]}`}><span className="recent-icon">{row[1][0]}</span><strong>{row[0]}<small>{row[1]}</small></strong><time>{row[2]}</time><ArrowRight size={13}/></Link>)}</div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, count, href, className, children }: { icon: React.ReactNode; title: string; count: string; href: string; className: string; children: React.ReactNode }) {
  return <article className={`feature-card ${className}`}><header><span>{icon}<strong>{title}</strong></span><small>{count} ENTRIES</small></header><div className="feature-preview">{children}</div><Link href={href}>Explore {title}<ArrowRight size={13}/></Link></article>;
}
