"use client";

import {
  Bell,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronRight as Caret,
  CircleAlert,
  CircleCheck,
  CircleX,
  File,
  Folder,
  FolderOpen,
  Inbox,
  Info,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  X,
} from "lucide-react";
import { useState } from "react";
import { useForge } from "@/components/shell/AppShell";
import type { Locale } from "@/data/catalog";

export function DataShowcase({ slug, locale }: { slug: string; locale: Locale }) {
  const isPt = locale === "pt";

  if (slug === "timeline") {
    const events = [
      { time: "09:24", title: { pt: "Versão 2.4.0 publicada", en: "Release 2.4.0 published" }, body: { pt: "18 componentes novos e 12 correções.", en: "18 new components and 12 fixes." }, tone: "done" },
      { time: "08:51", title: { pt: "Testes de acessibilidade aprovados", en: "Accessibility tests passed" }, body: { pt: "Contraste e navegação por teclado verificados.", en: "Contrast and keyboard navigation verified." }, tone: "done" },
      { time: "08:12", title: { pt: "Revisão de design em curso", en: "Design review in progress" }, body: { pt: "Maya Chen está a rever a grelha editorial.", en: "Maya Chen is reviewing the editorial grid." }, tone: "active" },
      { time: "07:40", title: { pt: "Branch criada", en: "Branch created" }, body: { pt: "feature/data-visualisation por Kenji Sato.", en: "feature/data-visualisation by Kenji Sato." }, tone: "idle" },
    ];
    return (
      <section className="panel">
        <header className="panel-head"><span className="technical-label">ACTIVITY TIMELINE</span><small>{isPt ? "Hoje · 4 eventos" : "Today · 4 events"}</small></header>
        <ol className="f-timeline">
          {events.map((event) => (
            <li className={`tone-${event.tone}`} key={event.time}>
              <time>{event.time}</time>
              <i />
              <div><strong>{event.title[locale]}</strong><p>{event.body[locale]}</p></div>
            </li>
          ))}
        </ol>
      </section>
    );
  }

  if (slug === "tree-view") return <TreeView locale={locale} />;
  if (slug === "kanban") return <KanbanBoard locale={locale} />;
  if (slug === "pagination") return <PaginationShowcase locale={locale} />;

  return <ListsShowcase locale={locale} />;
}

function ListsShowcase({ locale }: { locale: Locale }) {
  const isPt = locale === "pt";
  const [checked, setChecked] = useState<string[]>(["a11y"]);
  const tasks = [
    { id: "a11y", label: { pt: "Auditar contraste das etiquetas", en: "Audit badge contrast" }, meta: "AA · Maya" },
    { id: "docs", label: { pt: "Escrever notas da versão 2.4", en: "Write 2.4 release notes" }, meta: "Docs · Alex" },
    { id: "charts", label: { pt: "Rever tooltips dos gráficos", en: "Review chart tooltips" }, meta: "Charts · Kenji" },
  ];
  return (
    <div className="showcase-stack">
      <section className="panel">
        <header className="panel-head"><span className="technical-label">LIST WITH IDENTITY</span><small>{isPt ? "Avatar, metadados e ação" : "Avatar, metadata and action"}</small></header>
        <ul className="f-list">
          {[
            ["Amara Okafor", "Engineering lead", "Lagos", "AO"],
            ["Maya Chen", "Product designer", "Vancouver", "MC"],
            ["Kenji Sato", "Data engineer", "Osaka", "KS"],
            ["Inês Costa", "Frontend developer", "Porto", "IC"],
          ].map(([name, role, city, initials]) => (
            <li key={name}>
              <span className="fav">{initials}</span>
              <div><strong>{name}</strong><small>{role} · {city}</small></div>
              <button className="ghost-action" aria-label={isPt ? "Mais opções" : "More options"}><MoreHorizontal size={15} /></button>
            </li>
          ))}
        </ul>
      </section>

      <div className="two-column">
        <section className="panel">
          <header className="panel-head"><span className="technical-label">TASK LIST</span><small>{checked.length}/{tasks.length} {isPt ? "concluídas" : "done"}</small></header>
          <ul className="f-list checkable">
            {tasks.map((task) => (
              <li key={task.id}>
                <label>
                  <input type="checkbox" checked={checked.includes(task.id)} onChange={() => setChecked((current) => current.includes(task.id) ? current.filter((id) => id !== task.id) : [...current, task.id])} />
                  <span className={checked.includes(task.id) ? "done" : ""}>{task.label[locale]}</span>
                </label>
                <code>{task.meta}</code>
              </li>
            ))}
          </ul>
        </section>

        <section className="panel">
          <header className="panel-head"><span className="technical-label">DESCRIPTION LIST</span><small>{isPt ? "Pares de metadados" : "Metadata pairs"}</small></header>
          <dl className="f-description">
            <div><dt>{isPt ? "Ambiente" : "Environment"}</dt><dd>Production</dd></div>
            <div><dt>{isPt ? "Região" : "Region"}</dt><dd>eu-west-1</dd></div>
            <div><dt>{isPt ? "Última implementação" : "Last deploy"}</dt><dd>24 Sep 2026, 09:24</dd></div>
            <div><dt>{isPt ? "Tempo médio" : "Average latency"}</dt><dd>184 ms</dd></div>
          </dl>
        </section>
      </div>

      <section className="panel">
        <header className="panel-head"><span className="technical-label">ORDERED STEPS</span><small>{isPt ? "Instruções numeradas" : "Numbered instructions"}</small></header>
        <ol className="f-ordered">
          <li><strong>{isPt ? "Instalar dependências" : "Install dependencies"}</strong><p>{isPt ? "Execute npm install na raiz do template." : "Run npm install at the template root."}</p></li>
          <li><strong>{isPt ? "Configurar o idioma predefinido" : "Configure the default locale"}</strong><p>{isPt ? "Ajuste o redirecionamento em next.config.ts." : "Adjust the redirect in next.config.ts."}</p></li>
          <li><strong>{isPt ? "Adicionar entradas ao catálogo" : "Add catalog entries"}</strong><p>{isPt ? "Registe o componente em src/data/catalog.ts." : "Register the component in src/data/catalog.ts."}</p></li>
        </ol>
      </section>
    </div>
  );
}

const tree = [
  { name: "src", depth: 0, type: "folder", children: true },
  { name: "app", depth: 1, type: "folder", children: true },
  { name: "[locale]", depth: 2, type: "folder", children: true },
  { name: "layout.tsx", depth: 3, type: "file" },
  { name: "page.tsx", depth: 3, type: "file" },
  { name: "globals.css", depth: 2, type: "file" },
  { name: "components", depth: 1, type: "folder", children: true },
  { name: "shell", depth: 2, type: "folder", children: true },
  { name: "AppShell.tsx", depth: 3, type: "file" },
  { name: "reference", depth: 2, type: "folder", children: true },
  { name: "ChartPreview.tsx", depth: 3, type: "file" },
  { name: "data", depth: 1, type: "folder", children: true },
  { name: "catalog.ts", depth: 2, type: "file" },
];

function TreeView({ locale }: { locale: Locale }) {
  const [collapsed, setCollapsed] = useState<string[]>(["reference"]);
  const [selected, setSelected] = useState("page.tsx");
  const isPt = locale === "pt";
  const visible = tree.reduce<{ nodes: typeof tree; skipDepth: number | null }>((acc, node) => {
    if (acc.skipDepth !== null && node.depth > acc.skipDepth) return acc;
    const isCollapsed = collapsed.includes(node.name);
    return {
      nodes: [...acc.nodes, node],
      skipDepth: node.type === "folder" && isCollapsed ? node.depth : null,
    };
  }, { nodes: [], skipDepth: null }).nodes;
  return (
    <section className="panel">
      <header className="panel-head"><span className="technical-label">FILE TREE</span><small>{isPt ? "Clique nas pastas para expandir" : "Click folders to expand"}</small></header>
      <div className="f-tree" role="tree">
        {visible.map((node) => {
          const isCollapsed = collapsed.includes(node.name);
          return (
            <button
              key={`${node.name}-${node.depth}`}
              role="treeitem"
              aria-expanded={node.type === "folder" ? !isCollapsed : undefined}
              aria-selected={selected === node.name}
              style={{ paddingLeft: 12 + node.depth * 18 }}
              onClick={() => node.type === "folder"
                ? setCollapsed((current) => isCollapsed ? current.filter((name) => name !== node.name) : [...current, node.name])
                : setSelected(node.name)}
            >
              {node.type === "folder"
                ? <><Caret size={12} className={isCollapsed ? "" : "open"} />{isCollapsed ? <Folder size={14} /> : <FolderOpen size={14} />}</>
                : <><span className="tree-spacer" /><File size={14} /></>}
              {node.name}
            </button>
          );
        })}
      </div>
    </section>
  );
}

function KanbanBoard({ locale }: { locale: Locale }) {
  const isPt = locale === "pt";
  const columns = [
    { id: "backlog", title: { pt: "Por fazer", en: "Backlog" }, cards: [
      { title: { pt: "Documentar tokens de espaçamento", en: "Document spacing tokens" }, tag: "Docs", who: "AM" },
      { title: { pt: "Adicionar gráfico de dispersão", en: "Add scatter chart" }, tag: "Charts", who: "KS" },
    ] },
    { id: "progress", title: { pt: "Em curso", en: "In progress" }, cards: [
      { title: { pt: "Rever navegação por teclado", en: "Review keyboard navigation" }, tag: "A11y", who: "MC" },
      { title: { pt: "Refinar paleta escura", en: "Refine dark palette" }, tag: "Design", who: "IC" },
      { title: { pt: "Otimizar tabela de clientes", en: "Optimise customer table" }, tag: "Data", who: "NW" },
    ] },
    { id: "review", title: { pt: "Em revisão", en: "In review" }, cards: [
      { title: { pt: "Notas da versão 2.4", en: "Release notes 2.4" }, tag: "Docs", who: "AO" },
    ] },
    { id: "done", title: { pt: "Concluído", en: "Done" }, cards: [
      { title: { pt: "Command palette", en: "Command palette" }, tag: "Shell", who: "AM" },
      { title: { pt: "Tema escuro", en: "Dark theme" }, tag: "Design", who: "MC" },
    ] },
  ];
  return (
    <section className="panel">
      <header className="panel-head"><span className="technical-label">SPRINT 24</span><small>{isPt ? "8 tarefas · 4 colunas" : "8 tasks · 4 columns"}</small></header>
      <div className="f-kanban">
        {columns.map((column) => (
          <div className="kanban-column" key={column.id}>
            <header><strong>{column.title[locale]}</strong><span>{column.cards.length}</span><button aria-label={isPt ? "Adicionar" : "Add"}><Plus size={13} /></button></header>
            {column.cards.map((card) => (
              <article key={card.title.en}>
                <span className={`kanban-tag tag-${card.tag.toLowerCase()}`}>{card.tag}</span>
                <p>{card.title[locale]}</p>
                <footer><span className="fav">{card.who}</span><small>FRG-{100 + card.title.en.length}</small></footer>
              </article>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function PaginationShowcase({ locale }: { locale: Locale }) {
  const isPt = locale === "pt";
  const [page, setPage] = useState(4);
  const pages = [1, 2, 3, 4, 5];
  return (
    <div className="showcase-stack">
      <section className="panel">
        <header className="panel-head"><span className="technical-label">NUMBERED</span><small>{isPt ? "Página" : "Page"} {page} / 12</small></header>
        <div className="pager">
          <button disabled={page === 1} onClick={() => setPage(page - 1)}><ChevronLeft size={14} />{isPt ? "Anterior" : "Previous"}</button>
          <div>
            {pages.map((value) => <button key={value} className={page === value ? "active" : ""} onClick={() => setPage(value)}>{value}</button>)}
            <span>…</span>
            <button className={page === 12 ? "active" : ""} onClick={() => setPage(12)}>12</button>
          </div>
          <button disabled={page === 12} onClick={() => setPage(page + 1)}>{isPt ? "Seguinte" : "Next"}<ChevronRight size={14} /></button>
        </div>
      </section>
      <div className="two-column">
        <section className="panel">
          <header className="panel-head"><span className="technical-label">LOAD MORE</span><small>24 / 248</small></header>
          <div className="pager-simple"><div className="load-track"><i style={{ width: "10%" }} /></div><button className="fbtn v-secondary">{isPt ? "Carregar mais 24" : "Load 24 more"}</button></div>
        </section>
        <section className="panel">
          <header className="panel-head"><span className="technical-label">ROWS PER PAGE</span><small>{isPt ? "Controlo compacto" : "Compact control"}</small></header>
          <div className="pager-simple compact">
            <label>{isPt ? "Linhas" : "Rows"}<select defaultValue="20"><option>10</option><option>20</option><option>50</option></select></label>
            <span>1–20 {isPt ? "de" : "of"} 248</span>
            <div><button aria-label={isPt ? "Anterior" : "Previous"}><ChevronLeft size={14} /></button><button aria-label={isPt ? "Seguinte" : "Next"}><ChevronRight size={14} /></button></div>
          </div>
        </section>
      </div>
    </div>
  );
}

export function NavigationShowcase({ slug, locale }: { slug: string; locale: Locale }) {
  const isPt = locale === "pt";
  const [tab, setTab] = useState("overview");
  const [step] = useState(2);

  if (slug === "tabs") {
    const tabs = [
      { id: "overview", label: { pt: "Visão geral", en: "Overview" } },
      { id: "activity", label: { pt: "Atividade", en: "Activity" } },
      { id: "settings", label: { pt: "Definições", en: "Settings" } },
    ];
    return (
      <div className="showcase-stack">
        <section className="panel">
          <header className="panel-head"><span className="technical-label">UNDERLINE TABS</span><small>{isPt ? "Com painel associado" : "With associated panel"}</small></header>
          <div className="f-tabs" role="tablist">
            {tabs.map((item) => <button key={item.id} role="tab" aria-selected={tab === item.id} className={tab === item.id ? "active" : ""} onClick={() => setTab(item.id)}>{item.label[locale]}</button>)}
          </div>
          <div className="tab-panel" role="tabpanel">
            {tab === "overview" && <p>{isPt ? "Resumo do projeto, responsáveis e estado atual da implementação." : "Project summary, owners and current deployment state."}</p>}
            {tab === "activity" && <p>{isPt ? "Histórico completo de alterações, revisões e publicações." : "Full history of changes, reviews and releases."}</p>}
            {tab === "settings" && <p>{isPt ? "Permissões, integrações e preferências de notificação." : "Permissions, integrations and notification preferences."}</p>}
          </div>
        </section>
        <section className="panel">
          <header className="panel-head"><span className="technical-label">PILL TABS</span><small>{isPt ? "Para filtros compactos" : "For compact filters"}</small></header>
          <div className="f-tabs pills">
            <button className="active">{isPt ? "Tudo" : "All"}</button><button>{isPt ? "Componentes" : "Components"}</button><button>{isPt ? "Padrões" : "Patterns"}</button><button>{isPt ? "Gráficos" : "Charts"}</button>
          </div>
        </section>
      </div>
    );
  }

  if (slug === "breadcrumbs") {
    return (
      <section className="panel">
        <header className="panel-head"><span className="technical-label">BREADCRUMBS</span><small>{isPt ? "Contexto hierárquico" : "Hierarchical context"}</small></header>
        <div className="crumb-grid">
          <nav className="f-crumbs" aria-label="Breadcrumb"><a href="#top">FORGE</a><span>/</span><a href="#top">{isPt ? "Dados" : "Data"}</a><span>/</span><strong>{isPt ? "Tabelas" : "Tables"}</strong></nav>
          <nav className="f-crumbs boxed" aria-label="Breadcrumb"><a href="#top">{isPt ? "Projetos" : "Projects"}</a><span>›</span><a href="#top">Northstar</a><span>›</span><a href="#top">{isPt ? "Definições" : "Settings"}</a><span>›</span><strong>{isPt ? "Faturação" : "Billing"}</strong></nav>
          <nav className="f-crumbs truncated" aria-label="Breadcrumb"><a href="#top">FORGE</a><span>/</span><button aria-label={isPt ? "Mostrar caminho completo" : "Show full path"}>…</button><span>/</span><strong>ChartPreview.tsx</strong></nav>
        </div>
      </section>
    );
  }

  if (slug === "stepper") {
    const steps = [
      { pt: "Conta", en: "Account" },
      { pt: "Organização", en: "Organisation" },
      { pt: "Equipa", en: "Team" },
      { pt: "Confirmação", en: "Confirmation" },
    ];
    return (
      <div className="showcase-stack">
        <section className="panel">
          <header className="panel-head"><span className="technical-label">HORIZONTAL STEPPER</span><small>{isPt ? "Passo" : "Step"} {step} / {steps.length}</small></header>
          <ol className="f-stepper">
            {steps.map((label, index) => (
              <li key={label.en} className={index + 1 < step ? "done" : index + 1 === step ? "active" : ""}>
                <i>{index + 1 < step ? <Check size={12} /> : index + 1}</i>
                <span>{label[locale]}</span>
              </li>
            ))}
          </ol>
        </section>
        <section className="panel">
          <header className="panel-head"><span className="technical-label">VERTICAL STEPPER</span><small>{isPt ? "Com descrição" : "With description"}</small></header>
          <ol className="f-stepper vertical">
            {steps.slice(0, 3).map((label, index) => (
              <li key={label.en} className={index === 0 ? "done" : index === 1 ? "active" : ""}>
                <i>{index === 0 ? <Check size={12} /> : index + 1}</i>
                <div><strong>{label[locale]}</strong><small>{isPt ? "Informação necessária para continuar." : "Information required to continue."}</small></div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    );
  }

  if (slug === "command-menu") {
    return (
      <section className="panel">
        <header className="panel-head"><span className="technical-label">COMMAND MENU</span><small>{isPt ? "Pressione Ctrl/Cmd + K na aplicação" : "Press Ctrl/Cmd + K in the app"}</small></header>
        <div className="command-preview">
          <div className="command-preview-input"><Search size={15} /><span>{isPt ? "Pesquisar componentes..." : "Search components..."}</span><kbd>ESC</kbd></div>
          <div className="command-preview-group">
            <small>COMPONENTS</small>
            {[["Input", "Forms"], ["Data table", "Data"], ["Sankey diagram", "Charts"]].map(([name, group]) => <div key={name}><span>{group[0]}</span><strong>{name}</strong><em>{group}</em><kbd>↵</kbd></div>)}
            <small>ACTIONS</small>
            <div><span>T</span><strong>{isPt ? "Alternar tema" : "Toggle theme"}</strong><em>{isPt ? "Aparência" : "Appearance"}</em><kbd>⌘T</kbd></div>
          </div>
        </div>
      </section>
    );
  }

  if (slug === "mega-menu") {
    const columns = [
      { title: { pt: "Produto", en: "Product" }, links: ["Components", "Patterns", "Charts", "Playground"] },
      { title: { pt: "Programadores", en: "Developers" }, links: ["API reference", "CLI", "Webhooks", "Changelog"] },
      { title: { pt: "Recursos", en: "Resources" }, links: ["Guides", "Accessibility", "Design tokens", "Support"] },
    ];
    return (
      <section className="panel">
        <header className="panel-head"><span className="technical-label">MEGA MENU</span><small>{isPt ? "Painel de navegação alargado" : "Expanded navigation panel"}</small></header>
        <div className="mega-shell">
          <nav className="mega-bar"><strong>FORGE</strong><span className="active">{isPt ? "Produto" : "Product"}<ChevronDown size={12} /></span><span>{isPt ? "Preços" : "Pricing"}</span><span>{isPt ? "Documentação" : "Docs"}</span></nav>
          <div className="mega-panel">
            {columns.map((column) => (
              <div key={column.title.en}><small>{column.title[locale]}</small>{column.links.map((link) => <a href="#top" key={link}>{link}</a>)}</div>
            ))}
            <aside><small>{isPt ? "EM DESTAQUE" : "FEATURED"}</small><strong>{isPt ? "Novo: 23 tipos de gráfico" : "New: 23 chart types"}</strong><p>{isPt ? "Visualizações prontas para produção com dados reais." : "Production-ready visualizations with real data."}</p><a href="#top">{isPt ? "Explorar" : "Explore"} →</a></aside>
          </div>
        </div>
      </section>
    );
  }

  if (slug === "sidebar") {
    return (
      <section className="panel">
        <header className="panel-head"><span className="technical-label">SIDEBAR NAVIGATION</span><small>{isPt ? "Grupos, contagens e estado ativo" : "Groups, counts and active state"}</small></header>
        <div className="sidebar-demo">
          <aside>
            <div className="sidebar-demo-brand"><span className="forge-mark">N</span>Northstar</div>
            <small>{isPt ? "PRINCIPAL" : "MAIN"}</small>
            {[["Overview", true], ["Projects", false], ["Customers", false]].map(([label, active]) => <button key={String(label)} className={active ? "active" : ""}>{String(label)}</button>)}
            <small>{isPt ? "GESTÃO" : "MANAGE"}</small>
            {["Billing", "Team", "Settings"].map((label) => <button key={label}>{label}</button>)}
          </aside>
          <div className="sidebar-demo-body"><Inbox size={20} /><p>{isPt ? "A área de conteúdo acompanha a navegação lateral." : "The content area follows the side navigation."}</p></div>
        </div>
      </section>
    );
  }

  if (slug === "pagination-navigation") return <PaginationShowcase locale={locale} />;

  return (
    <div className="showcase-stack">
      <section className="panel">
        <header className="panel-head"><span className="technical-label">APPLICATION NAVBAR</span><small>{isPt ? "Logo, navegação, pesquisa e ações" : "Logo, navigation, search and actions"}</small></header>
        <div className="navbar-demo">
          <strong>Northstar</strong>
          <nav><a className="active" href="#top">{isPt ? "Painel" : "Dashboard"}</a><a href="#top">{isPt ? "Projetos" : "Projects"}</a><a href="#top">{isPt ? "Relatórios" : "Reports"}</a><a href="#top">{isPt ? "Equipa" : "Team"}</a></nav>
          <div className="navbar-search"><Search size={13} />{isPt ? "Pesquisar" : "Search"}<kbd>⌘K</kbd></div>
          <button className="ghost-action" aria-label={isPt ? "Notificações" : "Notifications"}><Bell size={15} /></button>
          <button className="ghost-action" aria-label={isPt ? "Definições" : "Settings"}><Settings size={15} /></button>
          <span className="fav">AM</span>
        </div>
      </section>
      <section className="panel">
        <header className="panel-head"><span className="technical-label">MARKETING NAVBAR</span><small>{isPt ? "Com chamada para ação" : "With call to action"}</small></header>
        <div className="navbar-demo marketing">
          <strong>FORGE</strong>
          <nav><a href="#top">{isPt ? "Produto" : "Product"}</a><a href="#top">{isPt ? "Preços" : "Pricing"}</a><a href="#top">{isPt ? "Documentação" : "Docs"}</a></nav>
          <div><button className="fbtn v-ghost s-small">{isPt ? "Entrar" : "Sign in"}</button><button className="fbtn v-primary s-small">{isPt ? "Começar" : "Get started"}</button></div>
        </div>
      </section>
    </div>
  );
}

export function FeedbackShowcase({ slug, locale }: { slug: string; locale: Locale }) {
  const isPt = locale === "pt";
  const { toast } = useForge();
  const [modalOpen, setModalOpen] = useState(false);
  const [progress, setProgress] = useState(64);

  if (slug === "modal" || slug === "dialog") {
    return (
      <>
        <section className="panel">
          <header className="panel-head"><span className="technical-label">{slug === "modal" ? "MODAL" : "CONFIRMATION DIALOG"}</span><small>{isPt ? "Fecha com Esc ou clique fora" : "Closes with Esc or outside click"}</small></header>
          <div className="center-action">
            <button className="fbtn v-primary" onClick={() => setModalOpen(true)}>{isPt ? "Abrir diálogo" : "Open dialog"}</button>
            <p>{isPt ? "O foco fica retido no diálogo enquanto estiver aberto." : "Focus stays within the dialog while it is open."}</p>
          </div>
        </section>
        {modalOpen && (
          <div className="f-modal-backdrop" onMouseDown={() => setModalOpen(false)}>
            <div className="f-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={(event) => event.stopPropagation()}>
              <header><strong id="modal-title">{isPt ? "Eliminar projeto" : "Delete project"}</strong><button onClick={() => setModalOpen(false)} aria-label={isPt ? "Fechar" : "Close"}><X size={15} /></button></header>
              <p>{isPt ? "Esta ação remove permanentemente o projeto Northstar e os 142 ficheiros associados. Não é possível anular." : "This permanently removes the Northstar project and its 142 associated files. This cannot be undone."}</p>
              <footer>
                <button className="fbtn v-secondary" onClick={() => setModalOpen(false)}>{isPt ? "Cancelar" : "Cancel"}</button>
                <button className="fbtn v-destructive" onClick={() => { setModalOpen(false); toast(isPt ? "Projeto eliminado" : "Project deleted"); }}>{isPt ? "Eliminar" : "Delete"}</button>
              </footer>
            </div>
          </div>
        )}
      </>
    );
  }

  if (slug === "toast") {
    return (
      <section className="panel">
        <header className="panel-head"><span className="technical-label">TOAST</span><small>{isPt ? "Notificações temporárias" : "Transient notifications"}</small></header>
        <div className="toast-demo">
          <div className="toast-samples">
            <div className="f-toast tone-success"><CircleCheck size={15} /><div><strong>{isPt ? "Alterações guardadas" : "Changes saved"}</strong><small>{isPt ? "A versão 2.4 está publicada." : "Version 2.4 is live."}</small></div><button aria-label={isPt ? "Fechar" : "Dismiss"}><X size={13} /></button></div>
            <div className="f-toast tone-danger"><CircleX size={15} /><div><strong>{isPt ? "Falha ao exportar" : "Export failed"}</strong><small>{isPt ? "Tente novamente em instantes." : "Try again in a moment."}</small></div><button aria-label={isPt ? "Fechar" : "Dismiss"}><X size={13} /></button></div>
            <div className="f-toast"><Info size={15} /><div><strong>{isPt ? "Novo comentário" : "New comment"}</strong><small>Maya Chen · {isPt ? "há 2 minutos" : "2 minutes ago"}</small></div><button aria-label={isPt ? "Fechar" : "Dismiss"}><X size={13} /></button></div>
          </div>
          <button className="fbtn v-primary" onClick={() => toast(isPt ? "Notificação enviada" : "Notification sent")}>{isPt ? "Disparar notificação" : "Trigger toast"}</button>
        </div>
      </section>
    );
  }

  if (slug === "progress") {
    return (
      <div className="showcase-stack">
        <section className="panel">
          <header className="panel-head"><span className="technical-label">LINEAR PROGRESS</span><small>{progress}%</small></header>
          <div className="progress-stack">
            <div className="f-progress"><i style={{ width: `${progress}%` }} /></div>
            <input className="range" type="range" value={progress} onChange={(event) => setProgress(Number(event.target.value))} aria-label={isPt ? "Progresso" : "Progress"} />
            <div className="f-progress striped"><i style={{ width: "100%" }} /></div>
            <small>{isPt ? "Indeterminado enquanto o servidor responde" : "Indeterminate while the server responds"}</small>
          </div>
        </section>
        <div className="two-column">
          <section className="panel">
            <header className="panel-head"><span className="technical-label">CIRCULAR</span><small>{progress}%</small></header>
            <div className="center-action">
              <svg className="f-ring" viewBox="0 0 100 100"><circle cx="50" cy="50" r="42" className="ring-track" /><circle cx="50" cy="50" r="42" className="ring-value" pathLength="100" strokeDasharray={`${progress} 100`} transform="rotate(-90 50 50)" /><text x="50" y="55" textAnchor="middle">{progress}%</text></svg>
            </div>
          </section>
          <section className="panel">
            <header className="panel-head"><span className="technical-label">SEGMENTED</span><small>{isPt ? "3 de 5 etapas" : "3 of 5 steps"}</small></header>
            <div className="center-action"><div className="segment-progress">{[0, 1, 2, 3, 4].map((index) => <i key={index} className={index < 3 ? "filled" : ""} />)}</div></div>
          </section>
        </div>
      </div>
    );
  }

  if (slug === "skeleton" || slug === "loading") {
    return (
      <div className="showcase-stack">
        <section className="panel">
          <header className="panel-head"><span className="technical-label">SKELETON</span><small>{isPt ? "Reserva o espaço do conteúdo final" : "Reserves the final content space"}</small></header>
          <div className="skeleton-grid">
            {[0, 1, 2].map((index) => (
              <div className="skeleton-card" key={index}>
                <div className="sk sk-image" /><div className="sk sk-line w80" /><div className="sk sk-line w60" /><div className="sk sk-line w40" />
              </div>
            ))}
          </div>
        </section>
        <section className="panel">
          <header className="panel-head"><span className="technical-label">SPINNERS</span><small>{isPt ? "Para esperas curtas" : "For short waits"}</small></header>
          <div className="spinner-row">
            <div><i className="f-spinner" /><small>{isPt ? "A carregar" : "Loading"}</small></div>
            <div><i className="f-spinner large" /><small>{isPt ? "A processar dados" : "Processing data"}</small></div>
            <div><span className="f-dots"><i /><i /><i /></span><small>{isPt ? "A sincronizar" : "Syncing"}</small></div>
          </div>
        </section>
      </div>
    );
  }

  if (slug === "errors") {
    return (
      <div className="two-column">
        <section className="panel">
          <header className="panel-head"><span className="technical-label">404</span><small>{isPt ? "Recurso inexistente" : "Missing resource"}</small></header>
          <div className="error-state"><code>404</code><strong>{isPt ? "Não encontrámos esta página" : "We couldn’t find this page"}</strong><p>{isPt ? "Verifique o endereço ou volte ao início da biblioteca." : "Check the address or return to the library home."}</p><button className="fbtn v-secondary">{isPt ? "Voltar ao início" : "Back to overview"}</button></div>
        </section>
        <section className="panel">
          <header className="panel-head"><span className="technical-label">500</span><small>{isPt ? "Erro do servidor" : "Server error"}</small></header>
          <div className="error-state tone-danger"><code>500</code><strong>{isPt ? "Algo correu mal do nosso lado" : "Something went wrong on our side"}</strong><p>{isPt ? "A equipa foi notificada. Identificador do pedido req_92fd." : "The team has been notified. Request id req_92fd."}</p><button className="fbtn v-secondary">{isPt ? "Tentar novamente" : "Try again"}</button></div>
        </section>
      </div>
    );
  }

  if (slug === "empty-states") {
    return (
      <div className="two-column">
        <section className="panel">
          <header className="panel-head"><span className="technical-label">FIRST USE</span><small>{isPt ? "Sem dados ainda" : "No data yet"}</small></header>
          <div className="empty-state"><div className="empty-mark"><Plus size={18} /></div><strong>{isPt ? "Ainda não existem projetos" : "No projects yet"}</strong><p>{isPt ? "Crie o primeiro projeto para começar a acompanhar métricas." : "Create your first project to start tracking metrics."}</p><button className="fbtn v-primary">{isPt ? "Criar projeto" : "Create project"}</button></div>
        </section>
        <section className="panel">
          <header className="panel-head"><span className="technical-label">NO RESULTS</span><small>{isPt ? "Pesquisa sem correspondência" : "Search without matches"}</small></header>
          <div className="empty-state"><div className="empty-mark"><Search size={18} /></div><strong>{isPt ? "Sem resultados para “sankey 3d”" : "No results for “sankey 3d”"}</strong><p>{isPt ? "Tente termos mais gerais ou limpe os filtros ativos." : "Try broader terms or clear the active filters."}</p><button className="fbtn v-secondary">{isPt ? "Limpar filtros" : "Clear filters"}</button></div>
        </section>
      </div>
    );
  }

  return (
    <section className="panel">
      <header className="panel-head"><span className="technical-label">ALERTS</span><small>{isPt ? "Quatro tons semânticos" : "Four semantic tones"}</small></header>
      <div className="alert-stack">
        {[
          { tone: "info", icon: <Info size={16} />, title: { pt: "Manutenção agendada", en: "Scheduled maintenance" }, body: { pt: "A API estará indisponível a 28 de setembro, entre as 02:00 e as 02:30 UTC.", en: "The API will be unavailable on 28 September, 02:00–02:30 UTC." } },
          { tone: "success", icon: <CircleCheck size={16} />, title: { pt: "Implementação concluída", en: "Deployment complete" }, body: { pt: "A versão 2.4.0 está disponível em produção.", en: "Version 2.4.0 is live in production." } },
          { tone: "warning", icon: <CircleAlert size={16} />, title: { pt: "Chave de API a expirar", en: "API key expiring" }, body: { pt: "A chave forge_live_4821 expira dentro de 7 dias.", en: "Key forge_live_4821 expires in 7 days." } },
          { tone: "danger", icon: <CircleX size={16} />, title: { pt: "Falha no pagamento", en: "Payment failed" }, body: { pt: "Atualize o método de pagamento para manter o serviço ativo.", en: "Update the payment method to keep the service active." } },
        ].map((alert) => (
          <div className={`f-alert tone-${alert.tone}`} key={alert.tone}>
            {alert.icon}
            <div><strong>{alert.title[locale]}</strong><p>{alert.body[locale]}</p></div>
            <button aria-label={isPt ? "Fechar" : "Dismiss"}><X size={14} /></button>
          </div>
        ))}
      </div>
    </section>
  );
}
