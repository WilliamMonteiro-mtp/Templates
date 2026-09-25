export type Locale = "pt" | "en";

const messages = {
  pt: {
    announcement: "Envio gratuito em encomendas superiores a €150",
    nav: ["Novidades", "Bolsas", "Joalharia", "Relógios", "Acessórios"],
    search: "Pesquisar",
    account: "Conta",
    cart: "Saco",
    menu: "Abrir menu",
    language: "Mudar idioma",
    hero: {
      eyebrow: "A nova coleção",
      title: "Criado para ser lembrado.",
      body: "Objetos de confiança discreta, concebidos para uma vida bem vivida.",
      primary: "Explorar coleção",
      secondary: "Descobrir a história",
    },
    collection: {
      eyebrow: "Seleção Primavera / Verão",
      title: "A nova coleção",
      body: "Peças intemporais, reimaginadas.",
    },
    categories: ["Tudo", "Bolsas", "Joalharia", "Relógios", "Óculos"],
    addToBag: "Adicionar ao saco",
    favorite: "Adicionar aos favoritos",
    philosophy: {
      eyebrow: "A nossa filosofia",
      title: "Menos, mas melhor.",
      body: "Design depurado e beleza essencial, materiais refinados e detalhes que revelam a sua força silenciosa ao longo do tempo.",
      cta: "Descobrir ÉLAN",
    },
    wanted: {
      eyebrow: "Escolhas da estação",
      title: "Mais desejados",
    },
    craft: {
      eyebrow: "Feito em Itália",
      title: "Feito com intenção.",
      body: "Cada peça ÉLAN nasce de materiais escolhidos e das mãos de artesãos experientes.",
      cta: "O nosso savoir-faire",
    },
    journal: {
      eyebrow: "ÉLAN / Journal 26",
      title: "Histórias para guardar",
      articles: [
        "A arte dos objetos quotidianos",
        "Por dentro do atelier",
        "Como criar um guarda-roupa intemporal",
      ],
      cta: "Ler história",
    },
    newsletter: {
      title: "Entre no mundo de ÉLAN",
      body: "Receba novidades, histórias editoriais e convites privados.",
      placeholder: "O seu email",
      cta: "Subscrever",
      success: "Bem-vindo ao mundo de ÉLAN.",
    },
    footer: {
      tagline: "Acessórios contemporâneos para a vida quotidiana.",
      groups: [
        { title: "Comprar", links: ["Novidades", "Bolsas", "Joalharia", "Acessórios"] },
        { title: "Sobre", links: ["A nossa história", "Artesanato", "Journal", "Lojas"] },
        { title: "Apoio", links: ["Contacto", "Envios", "Devoluções", "Cuidados"] },
      ],
      copyright: "© 2026 ÉLAN. Todos os direitos reservados.",
    },
  },
  en: {
    announcement: "Complimentary shipping on orders over €150",
    nav: ["New arrivals", "Handbags", "Jewellery", "Watches", "Accessories"],
    search: "Search",
    account: "Account",
    cart: "Bag",
    menu: "Open menu",
    language: "Change language",
    hero: {
      eyebrow: "The new collection",
      title: "Designed to be remembered.",
      body: "Objects of quiet confidence, crafted for everyday life.",
      primary: "Explore the collection",
      secondary: "Discover the story",
    },
    collection: {
      eyebrow: "Spring / Summer edit",
      title: "The new collection",
      body: "Timeless pieces, reimagined.",
    },
    categories: ["All", "Handbags", "Jewellery", "Watches", "Eyewear"],
    addToBag: "Add to bag",
    favorite: "Add to favourites",
    philosophy: {
      eyebrow: "Our philosophy",
      title: "Less, but better.",
      body: "Stripped-back design and essential beauty, refined materials and details that reveal their quiet strength over time.",
      cta: "Discover ÉLAN",
    },
    wanted: {
      eyebrow: "The season's edit",
      title: "Most wanted",
    },
    craft: {
      eyebrow: "Made in Italy",
      title: "Made with intention.",
      body: "Every ÉLAN piece is born from considered materials and the hands of experienced artisans.",
      cta: "Our craftsmanship",
    },
    journal: {
      eyebrow: "ÉLAN / Journal 26",
      title: "Stories worth keeping",
      articles: [
        "The art of everyday objects",
        "Inside the atelier",
        "How to build a timeless wardrobe",
      ],
      cta: "Read story",
    },
    newsletter: {
      title: "Enter the world of ÉLAN",
      body: "Receive new collection releases, editorial stories and private invitations.",
      placeholder: "Your email address",
      cta: "Subscribe",
      success: "Welcome to the world of ÉLAN.",
    },
    footer: {
      tagline: "Contemporary accessories for everyday life.",
      groups: [
        { title: "Shop", links: ["New arrivals", "Handbags", "Jewellery", "Accessories"] },
        { title: "About", links: ["Our story", "Craftsmanship", "Journal", "Stores"] },
        { title: "Customer care", links: ["Contact", "Shipping", "Returns", "Care guide"] },
      ],
      copyright: "© 2026 ÉLAN. All rights reserved.",
    },
  },
} as const;

export function isLocale(value: string): value is Locale {
  return value === "pt" || value === "en";
}

export function getMessages(locale: Locale) {
  return messages[locale];
}
