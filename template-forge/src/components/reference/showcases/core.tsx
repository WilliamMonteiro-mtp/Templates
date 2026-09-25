"use client";

import {
  Archive,
  ArrowUpRight,
  Bell,
  Bookmark,
  Calendar,
  Check,
  Clock,
  Cloud,
  Command,
  Database,
  Download,
  Eye,
  Filter,
  Folder,
  Globe,
  Heart,
  Inbox,
  Key,
  Layers,
  Lock,
  Mail,
  MapPin,
  MessageSquare,
  Package,
  Play,
  Plus,
  Search,
  Settings,
  Shield,
  Star,
  Tag,
  Terminal,
  Trash2,
  Upload,
  User,
  Zap,
} from "lucide-react";
import { useState } from "react";
import type { Locale } from "@/data/catalog";

const typeScale = [
  { name: "Display", token: "--text-display", size: "64px", tracking: "-0.06em", weight: "700", face: "display" },
  { name: "Heading", token: "--text-heading", size: "35px", tracking: "-0.04em", weight: "600", face: "display" },
  { name: "Title", token: "--text-title", size: "19px", tracking: "-0.02em", weight: "600", face: "sans" },
  { name: "Body", token: "--text-body", size: "13px", tracking: "0", weight: "400", face: "sans" },
  { name: "Label", token: "--text-label", size: "11px", tracking: "0", weight: "600", face: "sans" },
  { name: "Caption", token: "--text-caption", size: "9px", tracking: "0.02em", weight: "400", face: "sans" },
  { name: "Code", token: "--text-code", size: "11px", tracking: "0", weight: "400", face: "mono" },
];

const palette = [
  { token: "--ink", hex: "#181A17", role: { pt: "Texto principal", en: "Primary text" }, contrast: "15.2:1" },
  { token: "--text-2", hex: "#555951", role: { pt: "Texto secundário", en: "Secondary text" }, contrast: "7.1:1" },
  { token: "--text-3", hex: "#858981", role: { pt: "Metadados", en: "Metadata" }, contrast: "3.9:1" },
  { token: "--border", hex: "#D6D5CE", role: { pt: "Limites subtis", en: "Subtle borders" }, contrast: "1.4:1" },
  { token: "--surface", hex: "#FAF9F5", role: { pt: "Superfície elevada", en: "Elevated surface" }, contrast: "—" },
  { token: "--bg", hex: "#F3F2ED", role: { pt: "Fundo da aplicação", en: "Application background" }, contrast: "—" },
  { token: "--accent", hex: "#B9F227", role: { pt: "Ação e destaque", en: "Action and emphasis" }, contrast: "1.2:1" },
  { token: "--success", hex: "#357352", role: { pt: "Estado positivo", en: "Positive state" }, contrast: "5.4:1" },
  { token: "--warning", hex: "#9D6B23", role: { pt: "Estado de atenção", en: "Attention state" }, contrast: "4.7:1" },
  { token: "--danger", hex: "#B4493F", role: { pt: "Estado destrutivo", en: "Destructive state" }, contrast: "4.9:1" },
];

const iconSet = [
  ["Search", Search], ["Command", Command], ["Bell", Bell], ["Mail", Mail], ["Inbox", Inbox],
  ["User", User], ["Settings", Settings], ["Shield", Shield], ["Lock", Lock], ["Key", Key],
  ["Folder", Folder], ["Archive", Archive], ["Database", Database], ["Layers", Layers], ["Package", Package],
  ["Upload", Upload], ["Download", Download], ["Trash2", Trash2], ["Filter", Filter], ["Tag", Tag],
  ["Calendar", Calendar], ["Clock", Clock], ["MapPin", MapPin], ["Globe", Globe], ["Cloud", Cloud],
  ["Star", Star], ["Heart", Heart], ["Bookmark", Bookmark], ["MessageSquare", MessageSquare], ["Eye", Eye],
  ["Play", Play], ["Terminal", Terminal], ["Zap", Zap], ["Plus", Plus], ["ArrowUpRight", ArrowUpRight],
] as const;

export function CoreShowcase({ slug, locale }: { slug: string; locale: Locale }) {
  const isPt = locale === "pt";

  if (slug === "typography") {
    return (
      <div className="showcase-stack">
        <section className="panel">
          <header className="panel-head"><span className="technical-label">TYPE SCALE</span><small>7 {isPt ? "níveis" : "levels"} · Libre Franklin / Inter / IBM Plex Mono</small></header>
          {typeScale.map((level) => (
            <div className="type-row" key={level.name}>
              <div className="type-meta"><strong>{level.name}</strong><code>{level.token}</code><small>{level.size} · {level.weight} · {level.tracking}</small></div>
              <p className={`type-sample face-${level.face}`} style={{ fontSize: level.size, fontWeight: Number(level.weight), letterSpacing: level.tracking }}>
                {level.face === "mono" ? "const interface = forge.build()" : isPt ? "Interfaces construídas com intenção" : "Interfaces built with intention"}
              </p>
            </div>
          ))}
        </section>
        <section className="panel prose-sample">
          <header className="panel-head"><span className="technical-label">READING BLOCK</span><small>65ch · 1.75 line height</small></header>
          <div>
            <h3>{isPt ? "Hierarquia legível em textos longos" : "Readable hierarchy in long-form text"}</h3>
            <p>{isPt
              ? "Um bloco de leitura confortável mantém a medida entre 60 e 75 caracteres. A entrelinha aumenta com o comprimento da linha e as margens verticais criam ritmo entre parágrafos sem recorrer a separadores visuais."
              : "A comfortable reading block keeps the measure between 60 and 75 characters. Line height grows with line length, and vertical rhythm separates paragraphs without relying on visual dividers."}</p>
            <p>{isPt
              ? "Números tabulares mantêm as colunas alinhadas em tabelas e a tipografia monoespaçada fica reservada a metadados, versões e código."
              : "Tabular figures keep table columns aligned, while monospace type stays reserved for metadata, versions and code."}</p>
          </div>
        </section>
      </div>
    );
  }

  if (slug === "colors") {
    return (
      <div className="showcase-stack">
        <section className="panel">
          <header className="panel-head"><span className="technical-label">PALETTE</span><small>{isPt ? "Base monocromática com um acento" : "Monochrome foundation with one accent"}</small></header>
          <div className="swatch-grid">
            {palette.map((color) => (
              <div className="swatch" key={color.token}>
                <i style={{ background: `var(${color.token})` }} />
                <strong>{color.token}</strong>
                <code>{color.hex}</code>
                <small>{color.role[locale]}</small>
                <span>{isPt ? "Contraste" : "Contrast"} {color.contrast}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="panel">
          <header className="panel-head"><span className="technical-label">SEMANTIC USAGE</span><small>{isPt ? "A cor nunca é o único sinal" : "Color is never the only signal"}</small></header>
          <div className="semantic-grid">
            {[
              { tone: "success", label: isPt ? "Implementação concluída" : "Deployment complete", icon: <Check size={14} /> },
              { tone: "warning", label: isPt ? "Duas variáveis em falta" : "Two variables missing", icon: <Bell size={14} /> },
              { tone: "danger", label: isPt ? "Falha na ligação à base de dados" : "Database connection failed", icon: <Shield size={14} /> },
            ].map((item) => <div className={`semantic-row tone-${item.tone}`} key={item.tone}>{item.icon}<span>{item.label}</span><code>--{item.tone}</code></div>)}
          </div>
        </section>
      </div>
    );
  }

  if (slug === "icons") {
    return (
      <div className="showcase-stack">
        <section className="panel">
          <header className="panel-head"><span className="technical-label">ICON GRID</span><small>{iconSet.length} {isPt ? "ícones · traço 2px" : "icons · 2px stroke"}</small></header>
          <div className="icon-grid">
            {iconSet.map(([name, Icon]) => <div key={name}><Icon size={17} /><small>{name}</small></div>)}
          </div>
        </section>
        <section className="panel">
          <header className="panel-head"><span className="technical-label">SIZES</span><small>12 · 14 · 16 · 20 · 24</small></header>
          <div className="icon-sizes">
            {[12, 14, 16, 20, 24].map((size) => <div key={size}><Search size={size} /><small>{size}px</small></div>)}
          </div>
        </section>
      </div>
    );
  }

  if (slug === "buttons") {
    return <ButtonMatrix locale={locale} />;
  }

  if (slug === "links") {
    return (
      <section className="panel">
        <header className="panel-head"><span className="technical-label">LINK VARIANTS</span><small>{isPt ? "Estados visíveis sem depender de cor" : "Visible states without relying on color"}</small></header>
        <div className="link-grid">
          <div><span className="technical-label">INLINE</span><p>{isPt ? "Consulte a " : "Read the "}<a className="link-inline" href="#top">{isPt ? "documentação de acessibilidade" : "accessibility documentation"}</a>{isPt ? " antes de publicar." : " before shipping."}</p></div>
          <div><span className="technical-label">STANDALONE</span><a className="link-standalone" href="#top">{isPt ? "Ver todos os componentes" : "View all components"}<ArrowUpRight size={13} /></a></div>
          <div><span className="technical-label">EXTERNAL</span><a className="link-inline" href="https://developer.mozilla.org" target="_blank" rel="noreferrer">developer.mozilla.org<ArrowUpRight size={11} /></a><small>{isPt ? "Abre numa nova janela" : "Opens in a new window"}</small></div>
          <div><span className="technical-label">QUIET</span><a className="link-quiet" href="#top">{isPt ? "Termos e privacidade" : "Terms and privacy"}</a></div>
          <div><span className="technical-label">DISABLED</span><span className="link-disabled" aria-disabled="true">{isPt ? "Exportar relatório" : "Export report"}</span><small>{isPt ? "Requer plano Business" : "Requires Business plan"}</small></div>
          <div><span className="technical-label">VISITED</span><a className="link-inline visited" href="#top">{isPt ? "Guia de migração 2.3" : "Migration guide 2.3"}</a></div>
        </div>
      </section>
    );
  }

  if (slug === "badges") {
    return (
      <section className="panel">
        <header className="panel-head"><span className="technical-label">BADGES</span><small>{isPt ? "Estado, contagem e metadados" : "Status, counts and metadata"}</small></header>
        <div className="badge-grid">
          <div><span className="technical-label">STATUS</span><div><span className="fbadge tone-success"><i />Stable</span><span className="fbadge tone-warning"><i />Beta</span><span className="fbadge tone-danger"><i />Deprecated</span><span className="fbadge"><i />Draft</span></div></div>
          <div><span className="technical-label">COUNT</span><div><span className="fbadge count">12</span><span className="fbadge count">248</span><span className="fbadge count">9+</span><span className="fbadge dot" aria-label="Unread" /></div></div>
          <div><span className="technical-label">VERSION</span><div><code className="fbadge mono-badge">v2.4.0</code><code className="fbadge mono-badge">WCAG AA</code><code className="fbadge mono-badge">SSR</code></div></div>
          <div><span className="technical-label">REMOVABLE</span><div><span className="fbadge removable">Design system<button aria-label="Remove">×</button></span><span className="fbadge removable">React<button aria-label="Remove">×</button></span></div></div>
        </div>
      </section>
    );
  }

  if (slug === "avatars") {
    return (
      <section className="panel">
        <header className="panel-head"><span className="technical-label">AVATARS</span><small>{isPt ? "Tamanhos, grupos e estados" : "Sizes, groups and states"}</small></header>
        <div className="avatar-grid">
          <div><span className="technical-label">SIZES</span><div className="avatar-row">{[24, 32, 40, 52].map((size) => <span className="fav" key={size} style={{ width: size, height: size, fontSize: size / 3.6 }}>AM</span>)}</div></div>
          <div><span className="technical-label">WITH STATUS</span><div className="avatar-row"><span className="fav has-status">MC<i className="online" /></span><span className="fav has-status">NW<i className="away" /></span><span className="fav has-status">SR<i className="offline" /></span></div></div>
          <div><span className="technical-label">GROUP</span><div className="avatar-stack"><span className="fav">AM</span><span className="fav">MC</span><span className="fav">NW</span><span className="fav">SR</span><span className="fav more">+8</span></div></div>
          <div><span className="technical-label">WITH IDENTITY</span><div className="avatar-identity"><span className="fav">AO</span><span><strong>Amara Okafor</strong><small>Engineering lead · Lagos</small></span></div></div>
        </div>
      </section>
    );
  }

  return <ButtonMatrix locale={locale} />;
}

function ButtonMatrix({ locale }: { locale: Locale }) {
  const isPt = locale === "pt";
  const [loading, setLoading] = useState(false);
  const variants = ["primary", "secondary", "outline", "ghost", "destructive"] as const;
  return (
    <div className="showcase-stack">
      <section className="panel">
        <header className="panel-head"><span className="technical-label">VARIANTS</span><small>5 {isPt ? "variantes × 3 tamanhos" : "variants × 3 sizes"}</small></header>
        <div className="button-matrix">
          {variants.map((variant) => (
            <div key={variant}>
              <span className="technical-label">{variant.toUpperCase()}</span>
              <div>
                <button className={`fbtn v-${variant} s-small`}>{isPt ? "Pequeno" : "Small"}</button>
                <button className={`fbtn v-${variant}`}>{isPt ? "Guardar alterações" : "Save changes"}</button>
                <button className={`fbtn v-${variant} s-large`}>{isPt ? "Grande" : "Large"}</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="panel">
        <header className="panel-head"><span className="technical-label">STATES</span><small>{isPt ? "Interativo · clique para ver o estado de carregamento" : "Interactive · click to see the loading state"}</small></header>
        <div className="button-states">
          <div><small>{isPt ? "Predefinido" : "Default"}</small><button className="fbtn v-primary">{isPt ? "Publicar" : "Publish"}</button></div>
          <div><small>{isPt ? "Com ícone" : "With icon"}</small><button className="fbtn v-secondary"><Download size={13} />{isPt ? "Exportar CSV" : "Export CSV"}</button></div>
          <div><small>{isPt ? "A carregar" : "Loading"}</small><button className="fbtn v-primary" onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 1400); }} disabled={loading}>{loading && <i className="fbtn-spinner" />}{loading ? (isPt ? "A publicar..." : "Publishing...") : (isPt ? "Clique" : "Click me")}</button></div>
          <div><small>{isPt ? "Desativado" : "Disabled"}</small><button className="fbtn v-primary" disabled>{isPt ? "Publicar" : "Publish"}</button></div>
          <div><small>{isPt ? "Apenas ícone" : "Icon only"}</small><button className="fbtn v-outline icon-only" aria-label={isPt ? "Definições" : "Settings"}><Settings size={15} /></button></div>
          <div><small>{isPt ? "Largura total" : "Full width"}</small><button className="fbtn v-primary full">{isPt ? "Continuar" : "Continue"}</button></div>
        </div>
      </section>
    </div>
  );
}
