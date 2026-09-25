export type Locale = "pt" | "en";
export type Localized = { pt: string; en: string };

export type CatalogItem = {
  slug: string;
  label: Localized;
  group: string;
  kind: "component" | "pattern" | "chart" | "api" | "code";
  featured?: boolean;
};

export type CatalogGroup = {
  id: string;
  label: Localized;
  items: CatalogItem[];
};

const group = (
  id: string,
  pt: string,
  en: string,
  kind: CatalogItem["kind"],
  entries: Array<string | [string, string, string]>,
): CatalogGroup => ({
  id,
  label: { pt, en },
  items: entries.map((entry) => {
    const [slug, labelPt, labelEn] =
      typeof entry === "string"
        ? [entry, title(entry), title(entry)]
        : entry;
    return { slug, label: { pt: labelPt, en: labelEn }, group: id, kind };
  }),
});

function title(value: string) {
  return value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export const catalog: CatalogGroup[] = [
  group("core", "Base", "Core", "component", [
    ["typography", "Tipografia", "Typography"],
    ["colors", "Cores", "Colors"],
    ["icons", "Ícones", "Icons"],
    ["buttons", "Botões", "Buttons"],
    ["links", "Links", "Links"],
    ["badges", "Etiquetas", "Badges"],
    ["avatars", "Avatares", "Avatars"],
    ["playground", "Playground", "Playground"],
  ]),
  group("forms", "Formulários", "Forms", "component", [
    ["inputs", "Campos", "Inputs"],
    ["select", "Seleção", "Select"],
    ["checkbox", "Caixa de seleção", "Checkbox"],
    ["radio", "Opção", "Radio"],
    ["switch", "Interruptor", "Switch"],
    ["date-time", "Data e hora", "Date & Time"],
    ["upload", "Carregamento", "Upload"],
    ["validation", "Validação", "Validation"],
    ["advanced-forms", "Formulários avançados", "Advanced Forms"],
  ]),
  group("data", "Dados", "Data", "component", [
    ["tables", "Tabelas", "Tables"],
    ["data-grid", "Grelha de dados", "Data Grid"],
    ["pagination", "Paginação", "Pagination"],
    ["lists", "Listas", "Lists"],
    ["timeline", "Cronologia", "Timeline"],
    ["tree-view", "Vista em árvore", "Tree View"],
    ["kanban", "Kanban", "Kanban"],
  ]),
  group("charts", "Gráficos", "Charts", "chart", [
    "line", "area", "bar", "pie", "donut", "scatter", "bubble", "radar",
    "heatmap", "funnel", "sankey", "treemap", "waterfall", "gauge",
    "histogram", "candlestick", "network", "maps",
  ]),
  group("media", "Multimédia", "Media", "component", [
    ["images", "Imagens", "Images"],
    ["gallery", "Galeria", "Gallery"],
    ["video", "Vídeo", "Video"],
    ["audio", "Áudio", "Audio"],
    ["players", "Leitores", "Players"],
    ["carousel", "Carrossel", "Carousel"],
    ["lightbox", "Lightbox", "Lightbox"],
    ["comparison", "Comparação", "Comparison"],
  ]),
  group("navigation", "Navegação", "Navigation", "component", [
    "navbar", "sidebar", "tabs", "breadcrumbs", "pagination-navigation",
    "stepper", "command-menu", "mega-menu",
  ]),
  group("feedback", "Feedback", "Feedback", "component", [
    "alerts", "toast", "modal", "dialog", "progress", "skeleton", "loading",
    "errors", "empty-states",
  ]),
  group("layout", "Composição", "Layout", "component", [
    "cards", "bento", "grid", "masonry", "hero", "accordion", "drawer", "split-pane",
  ]),
  group("auth", "Autenticação", "Authentication", "pattern", [
    "login", "signup", "otp", "2fa", "password-reset", "social-auth",
  ]),
  group("ecommerce", "Comércio", "E-commerce", "pattern", [
    "products", "cart", "checkout", "pricing", "reviews", "wishlist",
  ]),
  group("maps-library", "Mapas", "Maps", "component", [
    "map", "markers", "routes", "location", "store-locator",
  ]),
  group("apis", "APIs", "APIs", "api", [
    "rest", "requests", "responses", "json", "webhooks", "api-authentication",
    "api-keys", "http-status",
  ]),
  group("code", "Código", "Code", "code", [
    "html", "css", "javascript", "typescript", "json-code", "sql", "markdown",
    "terminal", "diff",
  ]),
  group("patterns", "Padrões", "Patterns", "pattern", [
    "dashboard", "crm", "analytics", "settings", "onboarding", "billing", "inbox",
    "search-results", "profile", "notifications", "documentation",
  ]),
];

export const allItems = catalog.flatMap((section) => section.items);

export const featuredSlugs = [
  "advanced-forms",
  "sankey",
  "gallery",
  "navbar",
  "rest",
  "dashboard",
];

export const messages = {
  pt: {
    descriptor: "BIBLIOTECA DE INTERFACES WEB",
    overview: "Visão geral",
    search: "Pesquisar componentes, padrões, APIs...",
    settings: "Definições",
    shortcuts: "Atalhos de teclado",
    theme: "Mudar tema",
    heroKicker: "ENCICLOPÉDIA VISUAL · EDIÇÃO 2026",
    heroTitle: "A WEB, CONSTRUÍDA PEÇA A PEÇA.",
    heroBody:
      "Explore uma referência visual completa de interfaces, componentes, padrões, visualizações de dados e utilitários para programadores.",
    explore: "Explorar componentes",
    documentation: "Ver documentação",
    recent: "Vistos recentemente",
    featured: "Categorias em destaque",
    copy: "Copiar",
    copied: "Copiado",
    preview: "Pré-visualização",
    accessibility: "Acessibilidade",
    usage: "Utilização",
    code: "Código",
    related: "Componentes relacionados",
    next: "Explorar a seguir",
    stable: "Estável",
    lastUpdated: "Atualizado em set. 2026",
    openMenu: "Abrir navegação",
    close: "Fechar",
  },
  en: {
    descriptor: "WEB INTERFACE LIBRARY",
    overview: "Overview",
    search: "Search components, patterns, APIs...",
    settings: "Settings",
    shortcuts: "Keyboard shortcuts",
    theme: "Change theme",
    heroKicker: "VISUAL ENCYCLOPEDIA · 2026 EDITION",
    heroTitle: "THE WEB, BUILT PIECE BY PIECE.",
    heroBody:
      "Explore a comprehensive visual reference of modern web interfaces, components, patterns, data visualizations and developer utilities.",
    explore: "Explore components",
    documentation: "Browse documentation",
    recent: "Recently viewed",
    featured: "Featured categories",
    copy: "Copy",
    copied: "Copied",
    preview: "Preview",
    accessibility: "Accessibility",
    usage: "Usage",
    code: "Code",
    related: "Related components",
    next: "Explore next",
    stable: "Stable",
    lastUpdated: "Updated Sep 2026",
    openMenu: "Open navigation",
    close: "Close",
  },
} as const;

export function isLocale(value: string): value is Locale {
  return value === "pt" || value === "en";
}

export function findItem(slug: string) {
  return allItems.find((item) => item.slug === slug);
}

export function itemDescription(item: CatalogItem, locale: Locale) {
  const labels: Record<CatalogItem["kind"], Localized> = {
    component: {
      pt: "Componentes de produção, estados, variantes e recomendações de acessibilidade.",
      en: "Production-ready components, states, variants and accessibility guidance.",
    },
    chart: {
      pt: "Visualização de dados com valores realistas, legendas e interação.",
      en: "Data visualization with realistic values, legends and interaction.",
    },
    pattern: {
      pt: "Uma composição completa para fluxos reais de produto.",
      en: "A complete interface composition for real product flows.",
    },
    api: {
      pt: "Referência técnica para integração e exploração de APIs.",
      en: "Technical reference for API integration and exploration.",
    },
    code: {
      pt: "Exemplos legíveis, copiáveis e prontos a adaptar.",
      en: "Readable, copyable examples ready to adapt.",
    },
  };
  return `${item.label[locale]}. ${labels[item.kind][locale]}`;
}
