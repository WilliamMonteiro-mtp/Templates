"use client";

import { Bookmark, Check, Copy, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForge } from "@/components/shell/AppShell";
import { CodeBlock } from "@/components/reference/CodeBlock";
import { Playground, ReferenceShowcase } from "@/components/reference/ReferenceShowcase";
import {
  allItems,
  catalog,
  itemDescription,
  messages,
  type CatalogItem,
  type Locale,
} from "@/data/catalog";

export function DocumentationPage({ item, locale }: { item: CatalogItem; locale: Locale }) {
  const t = messages[locale];
  const [tab, setTab] = useState<"preview" | "code" | "accessibility" | "usage">("preview");
  const [copied, setCopied] = useState(false);
  const { bookmarked, toggleBookmark, toast } = useForge();
  const group = catalog.find((section) => section.id === item.group);
  const itemIndex = allItems.findIndex((entry) => entry.slug === item.slug);
  const related = group?.items.filter((entry) => entry.slug !== item.slug).slice(0, 3) ?? [];
  const nextItem = allItems[(itemIndex + 1) % allItems.length];
  const isPlayground = item.slug === "playground";

  async function copyLink() {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    toast(locale === "pt" ? "Ligação copiada" : "Link copied");
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <article className="documentation-page">
      <div className="breadcrumbs">
        <Link href={`/${locale}`}>FORGE</Link><span>/</span>
        <span>{group?.label[locale]}</span><span>/</span>
        <strong>{item.label[locale]}</strong>
      </div>

      <header className="doc-header">
        <div className="doc-heading">
          <span className="technical-label">{item.kind.toUpperCase()} · {item.group.toUpperCase()}</span>
          <h1>{isPlayground ? "PLAYGROUND" : item.label[locale]}</h1>
          <p>{isPlayground
            ? locale === "pt" ? "Configure componentes ao vivo e copie o resultado para o seu projeto." : "Configure components live and copy the result into your project."
            : itemDescription(item, locale)}</p>
        </div>
        <div className="doc-actions">
          <button onClick={() => toggleBookmark(item.slug)} className={bookmarked.includes(item.slug) ? "bookmarked" : ""}><Bookmark size={14} fill={bookmarked.includes(item.slug) ? "currentColor" : "none"} />{locale === "pt" ? "Guardar" : "Bookmark"}</button>
          <button onClick={copyLink}>{copied ? <Check size={14} /> : <Copy size={14} />}{copied ? t.copied : locale === "pt" ? "Copiar link" : "Copy link"}</button>
        </div>
      </header>

      <div className="metadata-strip">
        <div><span>STATUS</span><strong className="stable-dot"><i />{t.stable}</strong></div>
        <div><span>VERSION</span><strong>2.4.0</strong></div>
        <div><span>CATEGORY</span><strong>{group?.label[locale]}</strong></div>
        <div><span>ACCESSIBILITY</span><strong>WCAG AA</strong></div>
        <div><span>UPDATED</span><strong>SEP 2026</strong></div>
      </div>

      {isPlayground ? <Playground locale={locale} /> : <>
        <div className="doc-tabs" role="tablist">
          {(["preview","code","accessibility","usage"] as const).map((value) => <button key={value} role="tab" aria-selected={tab === value} className={tab === value ? "active" : ""} onClick={() => setTab(value)}>{t[value]}</button>)}
        </div>
        <section className="doc-tab-content">
          {tab === "preview" && <ReferenceShowcase item={item} locale={locale} />}
          {tab === "code" && <CodeBlock locale={locale} initial={item.kind === "api" ? "Bash" : item.group === "core" ? "HTML" : "TypeScript"} />}
          {tab === "accessibility" && <AccessibilityContent locale={locale} />}
          {tab === "usage" && <UsageContent locale={locale} item={item} />}
        </section>
      </>}

      <section className="related-section">
        <header><span className="technical-label">{t.related}</span><small>{related.length} ENTRIES</small></header>
        <div>{related.map((entry) => <Link href={`/${locale}/reference/${entry.slug}`} key={entry.slug}><span>{entry.kind.toUpperCase()}</span><strong>{entry.label[locale]}</strong><p>{itemDescription(entry, locale)}</p><ExternalLink size={14} /></Link>)}</div>
      </section>

      <Link className="explore-next" href={`/${locale}/reference/${nextItem.slug}`}>
        <span>{t.next}</span><strong>{nextItem.label[locale]}</strong><i>→</i>
      </Link>
    </article>
  );
}

function AccessibilityContent({ locale }: { locale: Locale }) {
  const isPt = locale === "pt";
  return <div className="prose-grid"><div className="prose-main">
    <span className="section-number">01 / KEYBOARD</span><h2>{isPt ? "Operável sem rato" : "Operable without a mouse"}</h2><p>{isPt ? "Todos os controlos entram na ordem natural de foco. O estado de foco é visível e nunca depende apenas da cor." : "Every control participates in natural focus order. Focus state is visible and never relies on color alone."}</p>
    <div className="key-table"><div><kbd>Tab</kbd><span>{isPt ? "Mover para o próximo controlo" : "Move to the next control"}</span></div><div><kbd>Shift</kbd> + <kbd>Tab</kbd><span>{isPt ? "Mover para o controlo anterior" : "Move to previous control"}</span></div><div><kbd>Enter</kbd><span>{isPt ? "Ativar a ação" : "Activate action"}</span></div><div><kbd>Esc</kbd><span>{isPt ? "Fechar a camada atual" : "Close current layer"}</span></div></div>
    <span className="section-number">02 / SEMANTICS</span><h2>{isPt ? "Nomes e estados claros" : "Clear names and states"}</h2><p>{isPt ? "Use elementos HTML nativos primeiro. Anuncie alterações assíncronas com regiões de estado e associe mensagens de erro ao respetivo campo." : "Prefer native HTML elements. Announce asynchronous changes with status regions and associate errors with their field."}</p>
  </div><aside className="a11y-checklist"><span>WCAG 2.2 / AA</span>{["Visible focus","Keyboard access","Semantic roles","Error association","4.5:1 contrast","Reduced motion"].map(item=><div key={item}><Check size={13}/>{item}</div>)}</aside></div>;
}

function UsageContent({ locale, item }: { locale: Locale; item: CatalogItem }) {
  const isPt = locale === "pt";
  return <div className="usage-layout"><section><span className="section-number">WHEN TO USE</span><h2>{isPt ? "Escolha com intenção" : "Choose with intent"}</h2><p>{isPt ? `Use ${item.label.pt.toLowerCase()} quando a tarefa e o contexto forem claros para a pessoa utilizadora. Mantenha o comportamento previsível entre páginas.` : `Use ${item.label.en.toLowerCase()} when the task and context are clear to the user. Keep behavior predictable across pages.`}</p><div className="do-dont"><div><strong>DO</strong><p>{isPt ? "Use rótulos específicos e mantenha uma hierarquia visual consistente." : "Use specific labels and maintain consistent visual hierarchy."}</p></div><div><strong>DON&apos;T</strong><p>{isPt ? "Não esconda informação essencial apenas em hover ou tooltips." : "Do not hide essential information behind hover or tooltips."}</p></div></div></section><aside><span className="technical-label">DESIGN TOKENS</span><code>--control-height: 40px</code><code>--radius-sm: 4px</code><code>--focus-ring: 2px</code><code>--motion-fast: 140ms</code></aside></div>;
}
