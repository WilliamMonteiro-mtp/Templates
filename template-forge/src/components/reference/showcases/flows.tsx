"use client";

/* eslint-disable @next/next/no-img-element */
import {
  ArrowRight,
  Check,
  ChevronRight,
  CreditCard,
  Heart,
  Minus,
  Navigation,
  Plus,
  Search,
  Shield,
  Smartphone,
  Star,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import type { Locale } from "@/data/catalog";
import { ChartPreview } from "../ChartPreview";

export function AuthShowcase({ slug, locale }: { slug: string; locale: Locale }) {
  const isPt = locale === "pt";
  const [code, setCode] = useState(["4", "8", "2", "", "", ""]);

  const socialRow = (
    <div className="auth-social">
      <button className="fbtn v-secondary"><span className="social-mark">G</span>Google</button>
      <button className="fbtn v-secondary"><span className="social-mark">A</span>Apple</button>
      <button className="fbtn v-secondary"><span className="social-mark">{"<>"}</span>GitHub</button>
    </div>
  );

  let body: React.ReactNode;
  let title: string;
  let subtitle: string;

  if (slug === "signup") {
    title = isPt ? "Criar conta" : "Create your account";
    subtitle = isPt ? "14 dias de avaliação. Sem cartão de crédito." : "14-day trial. No credit card required.";
    body = (
      <>
        {socialRow}
        <div className="auth-divider"><span>{isPt ? "ou continuar com email" : "or continue with email"}</span></div>
        <label className="forge-field"><span>{isPt ? "Nome completo" : "Full name"}</span><div className="field-input"><input defaultValue="Alex Morgan" /></div></label>
        <label className="forge-field"><span>{isPt ? "Email de trabalho" : "Work email"}</span><div className="field-input"><input defaultValue="alex@northstar.io" /></div></label>
        <label className="forge-field"><span>{isPt ? "Palavra-passe" : "Password"}</span><div className="field-input"><input type="password" defaultValue="forgepass26" /></div>
          <div className="password-strength"><i className="on" /><i className="on" /><i className="on" /><i /></div>
          <small>{isPt ? "Forte · 12 caracteres, número e símbolo" : "Strong · 12 characters, number and symbol"}</small>
        </label>
        <label className="check-row"><input type="checkbox" defaultChecked />{isPt ? "Aceito os termos e a política de privacidade" : "I agree to the terms and privacy policy"}</label>
        <button className="fbtn v-primary full">{isPt ? "Criar conta" : "Create account"}</button>
        <p className="auth-foot">{isPt ? "Já tem conta?" : "Already have an account?"} <a href="#top">{isPt ? "Entrar" : "Sign in"}</a></p>
      </>
    );
  } else if (slug === "otp" || slug === "2fa") {
    const is2fa = slug === "2fa";
    title = is2fa ? (isPt ? "Verificação em dois passos" : "Two-factor authentication") : (isPt ? "Confirme o seu email" : "Confirm your email");
    subtitle = is2fa
      ? (isPt ? "Introduza o código da aplicação de autenticação." : "Enter the code from your authenticator app.")
      : (isPt ? "Enviámos um código de 6 dígitos para alex@northstar.io." : "We sent a 6-digit code to alex@northstar.io.");
    body = (
      <>
        {is2fa && <div className="auth-method"><Smartphone size={15} /><div><strong>{isPt ? "Aplicação de autenticação" : "Authenticator app"}</strong><small>{isPt ? "Código renovado a cada 30 segundos" : "Code refreshes every 30 seconds"}</small></div><Shield size={14} /></div>}
        <div className="otp-input large">
          {code.map((value, index) => (
            <input key={index} value={value} maxLength={1} aria-label={`${isPt ? "Dígito" : "Digit"} ${index + 1}`} onChange={(event) => setCode(code.map((digit, position) => position === index ? event.target.value.slice(-1) : digit))} />
          ))}
        </div>
        <div className="otp-meta"><span>{isPt ? "O código expira em" : "Code expires in"} <code>04:32</code></span><button className="link-quiet">{isPt ? "Reenviar" : "Resend"}</button></div>
        <button className="fbtn v-primary full" disabled={code.some((digit) => !digit)}>{isPt ? "Verificar" : "Verify"}</button>
        {is2fa && <p className="auth-foot"><a href="#top">{isPt ? "Usar um código de recuperação" : "Use a recovery code"}</a></p>}
      </>
    );
  } else if (slug === "password-reset") {
    title = isPt ? "Repor palavra-passe" : "Reset your password";
    subtitle = isPt ? "Enviamos um link seguro válido por 30 minutos." : "We’ll send a secure link valid for 30 minutes.";
    body = (
      <>
        <label className="forge-field"><span>{isPt ? "Email da conta" : "Account email"}</span><div className="field-input"><input defaultValue="alex@northstar.io" /></div></label>
        <button className="fbtn v-primary full">{isPt ? "Enviar link de reposição" : "Send reset link"}</button>
        <div className="auth-note"><Check size={14} />{isPt ? "Enviado há instantes. Verifique também o spam." : "Sent moments ago. Check your spam folder too."}</div>
        <p className="auth-foot"><a href="#top">{isPt ? "Voltar ao início de sessão" : "Back to sign in"}</a></p>
      </>
    );
  } else if (slug === "social-auth") {
    title = isPt ? "Entrar em Northstar" : "Sign in to Northstar";
    subtitle = isPt ? "Escolha um fornecedor de identidade." : "Choose an identity provider.";
    body = (
      <>
        <div className="auth-social stacked">
          <button className="fbtn v-secondary full"><span className="social-mark">G</span>{isPt ? "Continuar com Google" : "Continue with Google"}</button>
          <button className="fbtn v-secondary full"><span className="social-mark">A</span>{isPt ? "Continuar com Apple" : "Continue with Apple"}</button>
          <button className="fbtn v-secondary full"><span className="social-mark">{"<>"}</span>{isPt ? "Continuar com GitHub" : "Continue with GitHub"}</button>
          <button className="fbtn v-secondary full"><span className="social-mark">S</span>{isPt ? "Continuar com SSO" : "Continue with SSO"}</button>
        </div>
        <div className="auth-divider"><span>{isPt ? "ou" : "or"}</span></div>
        <button className="fbtn v-ghost full">{isPt ? "Entrar com email e palavra-passe" : "Sign in with email and password"}</button>
        <p className="auth-foot">{isPt ? "As contas empresariais usam SAML 2.0." : "Enterprise accounts use SAML 2.0."}</p>
      </>
    );
  } else {
    title = isPt ? "Bem-vindo de volta" : "Welcome back";
    subtitle = isPt ? "Entre para continuar na sua área de trabalho." : "Sign in to continue to your workspace.";
    body = (
      <>
        {socialRow}
        <div className="auth-divider"><span>{isPt ? "ou continuar com email" : "or continue with email"}</span></div>
        <label className="forge-field"><span>Email</span><div className="field-input"><input defaultValue="alex@northstar.io" /></div></label>
        <label className="forge-field"><span className="label-row">{isPt ? "Palavra-passe" : "Password"}<a href="#top">{isPt ? "Esqueceu-se?" : "Forgot?"}</a></span><div className="field-input"><input type="password" defaultValue="forgepass26" /></div></label>
        <label className="check-row"><input type="checkbox" defaultChecked />{isPt ? "Manter sessão iniciada" : "Keep me signed in"}</label>
        <button className="fbtn v-primary full">{isPt ? "Entrar" : "Sign in"}</button>
        <p className="auth-foot">{isPt ? "Não tem conta?" : "No account yet?"} <a href="#top">{isPt ? "Criar gratuitamente" : "Create one free"}</a></p>
      </>
    );
  }

  return (
    <div className="auth-stage">
      <section className="auth-card">
        <span className="forge-mark">N</span>
        <h3>{title}</h3>
        <p className="auth-sub">{subtitle}</p>
        {body}
      </section>
      <aside className="auth-aside">
        <span className="technical-label">{isPt ? "SEGURANÇA" : "SECURITY"}</span>
        <strong>{isPt ? "Proteção por predefinição" : "Protected by default"}</strong>
        <ul>
          {[
            isPt ? "Verificação em dois passos disponível" : "Two-factor verification available",
            isPt ? "Sessões revogáveis por dispositivo" : "Per-device revocable sessions",
            isPt ? "Registo de auditoria de 90 dias" : "90-day audit log",
            isPt ? "SSO com SAML 2.0 e SCIM" : "SSO with SAML 2.0 and SCIM",
          ].map((item) => <li key={item}><Check size={13} />{item}</li>)}
        </ul>
        <div className="auth-quote"><p>{isPt ? "“Migrámos 2.400 contas sem uma única reposição manual.”" : "“We migrated 2,400 accounts without a single manual reset.”"}</p><div><span className="fav">KS</span><small>Kenji Sato · Signal</small></div></div>
      </aside>
    </div>
  );
}

const products = [
  { name: { pt: "Teclado Field 65", en: "Field 65 Keyboard" }, price: 189, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80", rating: 4.8, reviews: 214 },
  { name: { pt: "Monitor Studio 27", en: "Studio 27 Display" }, price: 749, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=700&q=80", rating: 4.6, reviews: 96 },
  { name: { pt: "Auscultadores Quiet", en: "Quiet Headphones" }, price: 299, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80", rating: 4.9, reviews: 412 },
  { name: { pt: "Candeeiro Arc", en: "Arc Desk Lamp" }, price: 129, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=80", rating: 4.4, reviews: 58 },
];

export function CommerceShowcase({ slug, locale }: { slug: string; locale: Locale }) {
  const isPt = locale === "pt";
  const [quantities, setQuantities] = useState([1, 2]);
  const [liked, setLiked] = useState<number[]>([0, 2]);

  if (slug === "pricing") {
    const plans = [
      { name: "Starter", price: "$0", note: { pt: "para experimentar", en: "to explore" }, features: ["3 projetos", "1 utilizador", "Comunidade"], featuresEn: ["3 projects", "1 seat", "Community support"] },
      { name: "Pro", price: "$29", note: { pt: "por utilizador / mês", en: "per seat / month" }, features: ["Projetos ilimitados", "10 utilizadores", "Apoio prioritário", "Registo de auditoria"], featuresEn: ["Unlimited projects", "10 seats", "Priority support", "Audit log"], featured: true },
      { name: "Enterprise", price: isPt ? "Sob consulta" : "Custom", note: { pt: "faturação anual", en: "annual billing" }, features: ["SSO e SCIM", "Utilizadores ilimitados", "SLA 99.9%", "Gestor dedicado"], featuresEn: ["SSO and SCIM", "Unlimited seats", "99.9% SLA", "Dedicated manager"] },
    ];
    return (
      <section className="panel">
        <header className="panel-head"><span className="technical-label">PRICING</span><small>{isPt ? "Faturação mensal · IVA não incluído" : "Monthly billing · VAT excluded"}</small></header>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article className={plan.featured ? "price-card featured" : "price-card"} key={plan.name}>
              {plan.featured && <span className="price-flag">{isPt ? "MAIS ESCOLHIDO" : "MOST CHOSEN"}</span>}
              <strong>{plan.name}</strong>
              <div className="price-value">{plan.price}<small>{plan.note[locale]}</small></div>
              <ul>{(isPt ? plan.features : plan.featuresEn).map((feature) => <li key={feature}><Check size={13} />{feature}</li>)}</ul>
              <button className={plan.featured ? "fbtn v-primary full" : "fbtn v-secondary full"}>{isPt ? "Escolher plano" : "Choose plan"}</button>
            </article>
          ))}
        </div>
      </section>
    );
  }

  if (slug === "cart") {
    const lines = products.slice(0, 2);
    const subtotal = lines.reduce((total, product, index) => total + product.price * quantities[index], 0);
    return (
      <div className="commerce-split">
        <section className="panel">
          <header className="panel-head"><span className="technical-label">{isPt ? "CARRINHO" : "CART"}</span><small>{quantities.reduce((a, b) => a + b, 0)} {isPt ? "artigos" : "items"}</small></header>
          {lines.map((product, index) => (
            <div className="cart-line" key={product.name.en}>
              <img src={product.image} alt="" />
              <div><strong>{product.name[locale]}</strong><small>{isPt ? "Preto · Envio em 2 dias" : "Black · Ships in 2 days"}</small></div>
              <div className="qty">
                <button onClick={() => setQuantities(quantities.map((value, position) => position === index ? Math.max(1, value - 1) : value))} aria-label={isPt ? "Diminuir" : "Decrease"}><Minus size={12} /></button>
                <span>{quantities[index]}</span>
                <button onClick={() => setQuantities(quantities.map((value, position) => position === index ? value + 1 : value))} aria-label={isPt ? "Aumentar" : "Increase"}><Plus size={12} /></button>
              </div>
              <strong className="line-total">${(product.price * quantities[index]).toLocaleString()}</strong>
              <button className="ghost-action" aria-label={isPt ? "Remover" : "Remove"}><Trash2 size={14} /></button>
            </div>
          ))}
        </section>
        <aside className="panel order-summary">
          <header className="panel-head"><span className="technical-label">{isPt ? "RESUMO" : "SUMMARY"}</span></header>
          <dl className="f-description">
            <div><dt>{isPt ? "Subtotal" : "Subtotal"}</dt><dd>${subtotal.toLocaleString()}</dd></div>
            <div><dt>{isPt ? "Envio" : "Shipping"}</dt><dd>{isPt ? "Grátis" : "Free"}</dd></div>
            <div><dt>IVA (23%)</dt><dd>${Math.round(subtotal * 0.23).toLocaleString()}</dd></div>
          </dl>
          <div className="summary-total"><span>{isPt ? "Total" : "Total"}</span><strong>${Math.round(subtotal * 1.23).toLocaleString()}</strong></div>
          <button className="fbtn v-primary full">{isPt ? "Finalizar compra" : "Checkout"}<ArrowRight size={13} /></button>
        </aside>
      </div>
    );
  }

  if (slug === "checkout") {
    return (
      <div className="commerce-split">
        <section className="panel">
          <header className="panel-head"><span className="technical-label">{isPt ? "PAGAMENTO" : "PAYMENT"}</span><small>{isPt ? "Ligação segura" : "Secure connection"}</small></header>
          <div className="checkout-form">
            <ol className="f-stepper">
              <li className="done"><i><Check size={12} /></i><span>{isPt ? "Envio" : "Shipping"}</span></li>
              <li className="active"><i>2</i><span>{isPt ? "Pagamento" : "Payment"}</span></li>
              <li><i>3</i><span>{isPt ? "Confirmação" : "Review"}</span></li>
            </ol>
            <div className="pay-methods">
              <label className="check-row"><input type="radio" name="pay" defaultChecked /><CreditCard size={14} />{isPt ? "Cartão de crédito" : "Credit card"}</label>
              <label className="check-row"><input type="radio" name="pay" />MB Way</label>
              <label className="check-row"><input type="radio" name="pay" />{isPt ? "Transferência" : "Bank transfer"}</label>
            </div>
            <label className="forge-field"><span>{isPt ? "Número do cartão" : "Card number"}</span><div className="field-input"><input defaultValue="4242 4242 4242 4242" /></div></label>
            <div className="field-pair">
              <label className="forge-field"><span>{isPt ? "Validade" : "Expiry"}</span><div className="field-input"><input defaultValue="09/29" /></div></label>
              <label className="forge-field"><span>CVC</span><div className="field-input"><input defaultValue="123" /></div></label>
            </div>
            <button className="fbtn v-primary full">{isPt ? "Pagar $1,687" : "Pay $1,687"}</button>
          </div>
        </section>
        <aside className="panel order-summary">
          <header className="panel-head"><span className="technical-label">{isPt ? "ENCOMENDA" : "ORDER"}</span></header>
          {products.slice(0, 2).map((product) => (
            <div className="summary-line" key={product.name.en}><img src={product.image} alt="" /><div><strong>{product.name[locale]}</strong><small>× 1</small></div><code>${product.price}</code></div>
          ))}
          <div className="summary-total"><span>{isPt ? "Total" : "Total"}</span><strong>$1,687</strong></div>
          <small className="summary-note"><Shield size={12} />{isPt ? "Devoluções gratuitas em 30 dias" : "Free returns within 30 days"}</small>
        </aside>
      </div>
    );
  }

  if (slug === "reviews") {
    return (
      <div className="showcase-stack">
        <section className="panel">
          <header className="panel-head"><span className="technical-label">RATING SUMMARY</span><small>412 {isPt ? "avaliações" : "reviews"}</small></header>
          <div className="rating-summary">
            <div className="rating-score"><strong>4.9</strong><div className="stars">{[0, 1, 2, 3, 4].map((star) => <Star key={star} size={13} fill="currentColor" />)}</div><small>412 {isPt ? "avaliações" : "reviews"}</small></div>
            <div className="rating-bars">
              {[[5, 82], [4, 12], [3, 4], [2, 1], [1, 1]].map(([stars, percent]) => (
                <div key={stars}><span>{stars}★</span><i><b style={{ width: `${percent}%` }} /></i><small>{percent}%</small></div>
              ))}
            </div>
          </div>
        </section>
        <section className="panel">
          <header className="panel-head"><span className="technical-label">{isPt ? "COMENTÁRIOS" : "CUSTOMER REVIEWS"}</span><small>{isPt ? "Mais recentes" : "Most recent"}</small></header>
          {[
            { who: "Maya Chen", when: isPt ? "há 2 dias" : "2 days ago", stars: 5, text: { pt: "O isolamento é notável e a bateria dura uma semana inteira de trabalho.", en: "The isolation is remarkable and the battery lasts a full working week." } },
            { who: "Noah Williams", when: isPt ? "há 1 semana" : "1 week ago", stars: 4, text: { pt: "Excelente construção. A aplicação podia ter mais opções de equalização.", en: "Excellent build. The app could offer more equaliser options." } },
          ].map((review) => (
            <article className="review" key={review.who}>
              <span className="fav">{review.who.split(" ").map((part) => part[0]).join("")}</span>
              <div>
                <header><strong>{review.who}</strong><div className="stars">{Array.from({ length: review.stars }).map((_, index) => <Star key={index} size={11} fill="currentColor" />)}</div><small>{review.when}</small></header>
                <p>{review.text[locale]}</p>
                <footer><button className="link-quiet">{isPt ? "Útil (24)" : "Helpful (24)"}</button><span className="fbadge tone-success"><i />{isPt ? "Compra verificada" : "Verified purchase"}</span></footer>
              </div>
            </article>
          ))}
        </section>
      </div>
    );
  }

  if (slug === "wishlist") {
    return (
      <section className="panel">
        <header className="panel-head"><span className="technical-label">WISHLIST</span><small>{liked.length} {isPt ? "guardados" : "saved"}</small></header>
        <div className="wishlist">
          {products.map((product, index) => (
            <article key={product.name.en}>
              <img src={product.image} alt={product.name[locale]} />
              <div><strong>{product.name[locale]}</strong><code>${product.price}</code><small>{isPt ? "Em stock" : "In stock"}</small></div>
              <div className="wishlist-actions">
                <button className={liked.includes(index) ? "ghost-action liked" : "ghost-action"} onClick={() => setLiked(liked.includes(index) ? liked.filter((id) => id !== index) : [...liked, index])} aria-label={isPt ? "Guardar" : "Save"}>
                  <Heart size={15} fill={liked.includes(index) ? "currentColor" : "none"} />
                </button>
                <button className="fbtn v-secondary s-small">{isPt ? "Adicionar ao carrinho" : "Add to cart"}</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="panel">
      <header className="panel-head"><span className="technical-label">PRODUCT GRID</span><div className="segmented"><button className="active">{isPt ? "Tudo" : "All"}</button><button>{isPt ? "Novidades" : "New"}</button><button>{isPt ? "Promoções" : "Sale"}</button></div></header>
      <div className="product-grid-demo">
        {products.map((product, index) => (
          <article key={product.name.en}>
            <div className="product-media">
              <img src={product.image} alt={product.name[locale]} />
              {index === 1 && <span className="product-flag">{isPt ? "NOVO" : "NEW"}</span>}
              <button className={liked.includes(index) ? "product-like liked" : "product-like"} onClick={() => setLiked(liked.includes(index) ? liked.filter((id) => id !== index) : [...liked, index])} aria-label={isPt ? "Guardar" : "Save"}>
                <Heart size={14} fill={liked.includes(index) ? "currentColor" : "none"} />
              </button>
            </div>
            <strong>{product.name[locale]}</strong>
            <div className="product-meta"><span className="stars"><Star size={11} fill="currentColor" />{product.rating}</span><small>({product.reviews})</small><code>${product.price}</code></div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function MapsShowcase({ slug, locale }: { slug: string; locale: Locale }) {
  const isPt = locale === "pt";
  const [selected, setSelected] = useState(1);
  const stores = [
    { name: "Northstar Lisboa", address: "Rua Garrett 42, Lisboa", distance: "1.2 km", open: true, x: 140, y: 190 },
    { name: "Northstar Porto", address: "Rua de Cedofeita 118, Porto", distance: "3.8 km", open: true, x: 330, y: 120 },
    { name: "Northstar Braga", address: "Av. Central 27, Braga", distance: "9.4 km", open: false, x: 470, y: 225 },
  ];

  const mapSvg = (
    <svg className="f-map" viewBox="0 0 620 330" role="img" aria-label={isPt ? "Mapa com pontos de interesse" : "Map with points of interest"}>
      <rect width="620" height="330" className="map-bg" />
      {Array.from({ length: 13 }).map((_, index) => <line key={`v${index}`} x1={index * 50} y1="0" x2={index * 50} y2="330" className="map-grid" />)}
      {Array.from({ length: 7 }).map((_, index) => <line key={`h${index}`} x1="0" y1={index * 50} x2="620" y2={index * 50} className="map-grid" />)}
      <path d="M0 250 C120 235 180 275 260 258 C360 236 430 285 620 262" className="map-water" />
      <path d="M60 40 L200 40 L200 150 L380 150 L380 60 L560 60" className="map-road" />
      <path d="M90 300 L90 170 L300 170 L300 300" className="map-road" />
      {slug === "routes" && <path d="M140 190 C210 120 260 150 330 120" className="map-route" />}
      {stores.map((store, index) => (
        <g key={store.name} className={`map-pin ${selected === index ? "active" : ""}`} onClick={() => setSelected(index)}>
          <circle cx={store.x} cy={store.y} r={selected === index ? 13 : 9} />
          <text x={store.x} y={store.y + 4} textAnchor="middle">{index + 1}</text>
        </g>
      ))}
      {slug === "location" && <g className="map-accuracy"><circle cx="250" cy="200" r="52" /><circle cx="250" cy="200" r="7" className="map-dot" /></g>}
    </svg>
  );

  if (slug === "store-locator") {
    return (
      <section className="panel">
        <header className="panel-head"><span className="technical-label">STORE LOCATOR</span><small>{stores.length} {isPt ? "lojas próximas" : "nearby stores"}</small></header>
        <div className="locator">
          <aside>
            <label className="table-search"><Search size={14} /><input defaultValue="Lisboa" aria-label={isPt ? "Pesquisar localidade" : "Search location"} /></label>
            {stores.map((store, index) => (
              <button key={store.name} className={selected === index ? "active" : ""} onClick={() => setSelected(index)}>
                <span className="locator-index">{index + 1}</span>
                <div><strong>{store.name}</strong><small>{store.address}</small><em className={store.open ? "open" : "closed"}>{store.open ? (isPt ? "Aberto até às 20:00" : "Open until 8pm") : (isPt ? "Encerrado" : "Closed")}</em></div>
                <code>{store.distance}</code>
              </button>
            ))}
          </aside>
          <div className="locator-map">{mapSvg}</div>
        </div>
      </section>
    );
  }

  return (
    <div className="showcase-stack">
      <section className="panel">
        <header className="panel-head">
          <span className="technical-label">{slug === "routes" ? "ROUTE" : slug === "location" ? "CURRENT LOCATION" : slug === "markers" ? "MARKERS" : "BASE MAP"}</span>
          <div className="segmented"><button className="active">{isPt ? "Mapa" : "Map"}</button><button>{isPt ? "Satélite" : "Satellite"}</button><button>{isPt ? "Terreno" : "Terrain"}</button></div>
        </header>
        <div className="map-stage">
          {mapSvg}
          <div className="map-controls"><button aria-label={isPt ? "Aproximar" : "Zoom in"}><Plus size={14} /></button><button aria-label={isPt ? "Afastar" : "Zoom out"}><Minus size={14} /></button><button aria-label={isPt ? "Centrar" : "Recenter"}><Navigation size={13} /></button></div>
          <div className="map-card">
            <strong>{stores[selected].name}</strong>
            <small>{stores[selected].address}</small>
            <div><code>{stores[selected].distance}</code><button className="fbtn v-primary s-small">{isPt ? "Traçar rota" : "Get directions"}</button></div>
          </div>
        </div>
      </section>
      {slug === "routes" && (
        <section className="panel">
          <header className="panel-head"><span className="technical-label">ROUTE STEPS</span><small>18 km · 24 min</small></header>
          <ol className="route-steps">
            {[
              { pt: "Siga para norte na Rua Garrett", en: "Head north on Rua Garrett", d: "400 m" },
              { pt: "Vire à direita na Av. da Liberdade", en: "Turn right onto Av. da Liberdade", d: "2.1 km" },
              { pt: "Entre na A1 em direção ao Porto", en: "Merge onto A1 towards Porto", d: "14.8 km" },
              { pt: "Saída 3 para Rua de Cedofeita", en: "Take exit 3 to Rua de Cedofeita", d: "700 m" },
            ].map((step, index) => <li key={step.en}><i>{index + 1}</i><span>{step[locale]}</span><code>{step.d}</code></li>)}
          </ol>
        </section>
      )}
    </div>
  );
}

export function PatternShowcase({ slug, locale }: { slug: string; locale: Locale }) {
  const isPt = locale === "pt";
  const navByPattern: Record<string, string[]> = {
    crm: ["Pipeline", "Contacts", "Deals", "Activities", "Reports", "Settings"],
    inbox: ["Inbox", "Starred", "Sent", "Drafts", "Archive", "Spam"],
    billing: ["Overview", "Invoices", "Subscriptions", "Payment methods", "Tax", "Usage"],
    settings: ["General", "Members", "Security", "Integrations", "Billing", "Advanced"],
    documentation: ["Getting started", "Components", "Guides", "API", "Migration", "Changelog"],
    notifications: ["All", "Mentions", "Comments", "Releases", "Security", "Digest"],
  };
  const nav = navByPattern[slug] ?? ["Overview", "Analytics", "Customers", "Projects", "Automations", "Settings"];
  const heading: Record<string, { pt: string; en: string }> = {
    dashboard: { pt: "Bom dia, Alex.", en: "Good morning, Alex." },
    analytics: { pt: "Desempenho de setembro", en: "September performance" },
    crm: { pt: "Pipeline comercial", en: "Sales pipeline" },
    settings: { pt: "Definições da organização", en: "Organisation settings" },
    onboarding: { pt: "Vamos configurar o Northstar", en: "Let’s set up Northstar" },
    billing: { pt: "Faturação e utilização", en: "Billing and usage" },
    inbox: { pt: "Caixa de entrada", en: "Inbox" },
    "search-results": { pt: "Resultados para “data grid”", en: "Results for “data grid”" },
    profile: { pt: "Maya Chen", en: "Maya Chen" },
    notifications: { pt: "Notificações", en: "Notifications" },
    documentation: { pt: "Começar com FORGE", en: "Getting started with FORGE" },
  };

  return (
    <div className="pattern-frame">
      <header className="mini-app-top">
        <strong>Northstar</strong>
        <nav><span>{isPt ? "Visão geral" : "Overview"}</span><span>{isPt ? "Projetos" : "Projects"}</span><span>{isPt ? "Equipa" : "Team"}</span></nav>
        <div className="mini-search"><Search size={12} />{isPt ? "Pesquisar" : "Search"}</div>
        <span className="fav">AM</span>
      </header>
      <div className="mini-app">
        <aside>{nav.map((item, index) => <span className={index === 0 ? "active" : ""} key={item}>{item}{index === 1 && <small>24</small>}</span>)}</aside>
        <main>
          <div className="mini-heading">
            <div><small>{slug.replace("-", " ").toUpperCase()} PATTERN</small><h3>{(heading[slug] ?? heading.dashboard)[locale]}</h3><p>{isPt ? "Uma composição completa com dados reais." : "A complete composition with realistic data."}</p></div>
            <button>{slug === "inbox" ? (isPt ? "Nova mensagem" : "New message") : isPt ? "Nova ação" : "New action"}</button>
          </div>
          <PatternBody slug={slug} locale={locale} />
        </main>
      </div>
    </div>
  );
}

function PatternBody({ slug, locale }: { slug: string; locale: Locale }) {
  const isPt = locale === "pt";

  if (slug === "crm") {
    const stages = [
      { name: { pt: "Qualificação", en: "Qualified" }, value: "$182k", deals: 12 },
      { name: { pt: "Proposta", en: "Proposal" }, value: "$96k", deals: 7 },
      { name: { pt: "Negociação", en: "Negotiation" }, value: "$64k", deals: 4 },
      { name: { pt: "Fechado", en: "Closed won" }, value: "$41k", deals: 3 },
    ];
    return (
      <>
        <div className="mini-metrics">{stages.slice(0, 3).map((stage) => <div key={stage.name.en}><span>{stage.name[locale]}</span><strong>{stage.value}</strong><small>{stage.deals} {isPt ? "negócios" : "deals"}</small></div>)}</div>
        <div className="crm-pipeline">
          {stages.map((stage) => (
            <div key={stage.name.en}>
              <header><strong>{stage.name[locale]}</strong><code>{stage.value}</code></header>
              {["Fieldwork", "Atelier", "Signal"].slice(0, stage.deals % 3 + 1).map((company) => (
                <article key={company}><strong>{company}</strong><small>{isPt ? "Fecho previsto" : "Expected close"} · Oct 2026</small><span className="fav">{company.slice(0, 2).toUpperCase()}</span></article>
              ))}
            </div>
          ))}
        </div>
      </>
    );
  }

  if (slug === "inbox") {
    return (
      <div className="inbox-layout">
        <div className="inbox-list">
          {[
            { who: "Maya Chen", subject: { pt: "Revisão do sistema de grelha", en: "Grid system review" }, time: "09:24", unread: true },
            { who: "Kenji Sato", subject: { pt: "Dados do gráfico Sankey", en: "Sankey chart data" }, time: "08:51", unread: true },
            { who: "Amara Okafor", subject: { pt: "Contratação de engenharia", en: "Engineering hiring" }, time: "Yesterday" },
            { who: "Inês Costa", subject: { pt: "Notas da versão 2.4", en: "Release notes 2.4" }, time: "Yesterday" },
          ].map((mail, index) => (
            <button key={mail.who} className={index === 0 ? "active" : mail.unread ? "unread" : ""}>
              <span className="fav">{mail.who.split(" ").map((part) => part[0]).join("")}</span>
              <div><strong>{mail.who}</strong><small>{mail.subject[locale]}</small></div>
              <code>{mail.time}</code>
            </button>
          ))}
        </div>
        <article className="inbox-reader">
          <header><strong>{isPt ? "Revisão do sistema de grelha" : "Grid system review"}</strong><small>Maya Chen · 09:24</small></header>
          <p>{isPt ? "Revi as larguras de coluna em ecrãs entre 900 e 1100 pixéis. A densidade mantém-se legível, mas sugiro reduzir o gutter para 20px nesse intervalo." : "I reviewed column widths between 900 and 1100 pixels. Density stays readable, but I suggest reducing the gutter to 20px in that range."}</p>
          <p>{isPt ? "Anexei as capturas com a comparação lado a lado." : "I attached screenshots with the side-by-side comparison."}</p>
          <div className="inbox-actions"><button className="fbtn v-primary s-small">{isPt ? "Responder" : "Reply"}</button><button className="fbtn v-secondary s-small">{isPt ? "Encaminhar" : "Forward"}</button></div>
        </article>
      </div>
    );
  }

  if (slug === "settings") {
    return (
      <div className="settings-layout">
        <section>
          <h4>{isPt ? "Identidade" : "Identity"}</h4>
          <label className="forge-field"><span>{isPt ? "Nome da organização" : "Organisation name"}</span><div className="field-input"><input defaultValue="Northstar" /></div></label>
          <label className="forge-field"><span>{isPt ? "Domínio" : "Domain"}</span><div className="field-input"><input defaultValue="northstar.io" /></div></label>
          <h4>{isPt ? "Preferências" : "Preferences"}</h4>
          {[
            { t: { pt: "Aprovação obrigatória em publicações", en: "Require approval before publishing" }, on: true },
            { t: { pt: "Permitir convites externos", en: "Allow external invitations" }, on: false },
            { t: { pt: "Registo de auditoria detalhado", en: "Detailed audit logging" }, on: true },
          ].map((row) => (
            <div className="settings-row" key={row.t.en}><span>{row.t[locale]}</span><span className={`switch ${row.on ? "on" : ""}`}><i /></span></div>
          ))}
        </section>
        <aside>
          <span className="technical-label">{isPt ? "PLANO ATUAL" : "CURRENT PLAN"}</span>
          <strong>Enterprise</strong>
          <p>{isPt ? "12 utilizadores de 25 · renovação a 1 de janeiro" : "12 of 25 seats · renews 1 January"}</p>
          <button className="fbtn v-secondary s-small full">{isPt ? "Gerir plano" : "Manage plan"}</button>
        </aside>
      </div>
    );
  }

  if (slug === "onboarding") {
    return (
      <div className="onboarding-layout">
        <ol className="f-stepper">
          <li className="done"><i><Check size={12} /></i><span>{isPt ? "Conta" : "Account"}</span></li>
          <li className="done"><i><Check size={12} /></i><span>{isPt ? "Organização" : "Organisation"}</span></li>
          <li className="active"><i>3</i><span>{isPt ? "Equipa" : "Team"}</span></li>
          <li><i>4</i><span>{isPt ? "Integrações" : "Integrations"}</span></li>
        </ol>
        <div className="onboarding-body">
          <div>
            <h4>{isPt ? "Convide a sua equipa" : "Invite your team"}</h4>
            <p>{isPt ? "Adicione colegas por email. Pode alterar permissões depois." : "Add colleagues by email. You can change permissions later."}</p>
            <div className="invite-row"><input defaultValue="maya@northstar.io" aria-label="Email" /><select defaultValue="Editor"><option>Admin</option><option>Editor</option><option>Viewer</option></select><button className="fbtn v-secondary s-small">{isPt ? "Convidar" : "Invite"}</button></div>
            <div className="invite-row"><input placeholder="nome@empresa.com" aria-label="Email" /><select defaultValue="Viewer"><option>Admin</option><option>Editor</option><option>Viewer</option></select><button className="fbtn v-secondary s-small">{isPt ? "Convidar" : "Invite"}</button></div>
          </div>
          <aside className="checklist">
            <span className="technical-label">{isPt ? "PROGRESSO" : "PROGRESS"}</span>
            {[[isPt ? "Criar conta" : "Create account", true], [isPt ? "Definir organização" : "Set organisation", true], [isPt ? "Convidar equipa" : "Invite team", false], [isPt ? "Ligar repositório" : "Connect repository", false]].map(([label, done]) => (
              <div key={String(label)} className={done ? "done" : ""}><i>{done ? <Check size={11} /> : ""}</i>{String(label)}</div>
            ))}
          </aside>
        </div>
      </div>
    );
  }

  if (slug === "billing") {
    return (
      <>
        <div className="mini-metrics">
          <div><span>{isPt ? "Fatura atual" : "Current invoice"}</span><strong>$1,248</strong><small>{isPt ? "fecha a 30 set" : "closes 30 Sep"}</small></div>
          <div><span>{isPt ? "Utilizadores" : "Seats"}</span><strong>12 / 25</strong><small>+2 {isPt ? "este mês" : "this month"}</small></div>
          <div><span>{isPt ? "Chamadas à API" : "API calls"}</span><strong>1.8M</strong><small>72% {isPt ? "do limite" : "of quota"}</small></div>
        </div>
        <div className="billing-table">
          <div className="billing-head"><span>{isPt ? "Fatura" : "Invoice"}</span><span>{isPt ? "Data" : "Date"}</span><span>{isPt ? "Estado" : "Status"}</span><span>{isPt ? "Valor" : "Amount"}</span></div>
          {[["INV-2026-0912", "12 Sep 2026", "paid", "$1,248"], ["INV-2026-0812", "12 Aug 2026", "paid", "$1,180"], ["INV-2026-0712", "12 Jul 2026", "paid", "$1,180"], ["INV-2026-0612", "12 Jun 2026", "refunded", "$980"]].map((row) => (
            <div className="billing-row" key={row[0]}>
              <code>{row[0]}</code><span>{row[1]}</span>
              <span className={`fbadge tone-${row[2] === "paid" ? "success" : "warning"}`}><i />{row[2] === "paid" ? (isPt ? "Pago" : "Paid") : (isPt ? "Reembolsado" : "Refunded")}</span>
              <strong>{row[3]}</strong>
            </div>
          ))}
        </div>
      </>
    );
  }

  if (slug === "search-results") {
    return (
      <div className="results-layout">
        <aside className="results-filters">
          <span className="technical-label">{isPt ? "FILTROS" : "FILTERS"}</span>
          {[[isPt ? "Componentes" : "Components", 18], [isPt ? "Padrões" : "Patterns", 6], [isPt ? "Gráficos" : "Charts", 4], ["APIs", 2]].map(([label, count]) => (
            <label className="check-row" key={String(label)}><input type="checkbox" defaultChecked={label === (isPt ? "Componentes" : "Components")} />{String(label)}<code>{count}</code></label>
          ))}
        </aside>
        <div className="results-list">
          <div className="results-meta">30 {isPt ? "resultados · 0.18 s" : "results · 0.18s"}</div>
          {[
            { title: "Data grid", group: "Data", text: { pt: "Grelha com ordenação, filtros, seleção em massa e colunas configuráveis.", en: "Grid with sorting, filters, bulk selection and configurable columns." } },
            { title: "Tables", group: "Data", text: { pt: "Tabela empresarial com estados, avatares e paginação.", en: "Enterprise table with states, avatars and pagination." } },
            { title: "Pagination", group: "Data", text: { pt: "Controlos numerados, carregar mais e linhas por página.", en: "Numbered controls, load more and rows per page." } },
          ].map((result) => (
            <article key={result.title}><span className="technical-label">{result.group.toUpperCase()}</span><strong>{result.title}<ChevronRight size={13} /></strong><p>{result.text[locale]}</p></article>
          ))}
        </div>
      </div>
    );
  }

  if (slug === "profile") {
    return (
      <div className="profile-layout">
        <header><span className="fav large">MC</span><div><strong>Maya Chen</strong><small>Product designer · Vancouver</small><div className="profile-tags"><span className="fbadge">Design system</span><span className="fbadge">Accessibility</span><span className="fbadge">Charts</span></div></div><button className="fbtn v-secondary s-small">{isPt ? "Editar perfil" : "Edit profile"}</button></header>
        <div className="mini-metrics"><div><span>{isPt ? "Projetos" : "Projects"}</span><strong>9</strong><small>+2</small></div><div><span>{isPt ? "Revisões" : "Reviews"}</span><strong>142</strong><small>+18</small></div><div><span>{isPt ? "Componentes" : "Components"}</span><strong>38</strong><small>+5</small></div></div>
        <div className="mini-content"><section><header><strong>{isPt ? "Contribuições" : "Contributions"}</strong><span>{isPt ? "12 meses" : "12 months"}</span></header><ChartPreview type="heatmap" compact /></section></div>
      </div>
    );
  }

  if (slug === "notifications") {
    return (
      <div className="notification-feed">
        {[
          { who: "Maya Chen", action: { pt: "comentou em Grid system", en: "commented on Grid system" }, time: "2m", unread: true },
          { who: "Release bot", action: { pt: "publicou a versão 2.4.0", en: "published version 2.4.0" }, time: "18m", unread: true },
          { who: "Kenji Sato", action: { pt: "pediu revisão em Sankey chart", en: "requested review on Sankey chart" }, time: "1h" },
          { who: "Security", action: { pt: "detetou novo início de sessão em Lisboa", en: "detected a new sign-in from Lisbon" }, time: "3h" },
          { who: "Amara Okafor", action: { pt: "adicionou 3 pessoas à equipa", en: "added 3 people to the team" }, time: "Yesterday" },
        ].map((item) => (
          <div className={item.unread ? "notification unread" : "notification"} key={item.who + item.time}>
            <span className="fav">{item.who.slice(0, 2).toUpperCase()}</span>
            <p><strong>{item.who}</strong> {item.action[locale]}</p>
            <code>{item.time}</code>
          </div>
        ))}
      </div>
    );
  }

  if (slug === "documentation") {
    return (
      <div className="docs-layout">
        <article>
          <h4>{isPt ? "Instalação" : "Installation"}</h4>
          <p>{isPt ? "O FORGE é um projeto Next.js independente. Instale as dependências e inicie o servidor de desenvolvimento." : "FORGE is a standalone Next.js project. Install dependencies and start the development server."}</p>
          <pre className="docs-code">npm install{"\n"}npm run dev</pre>
          <h4>{isPt ? "Adicionar uma entrada" : "Adding an entry"}</h4>
          <p>{isPt ? "Cada item do catálogo gera automaticamente uma rota estática em ambos os idiomas." : "Every catalog item automatically generates a static route in both locales."}</p>
          <div className="docs-callout"><strong>{isPt ? "Nota" : "Note"}</strong>{isPt ? "As rotas são pré-renderizadas no build, por isso reinicie o servidor após alterar o catálogo." : "Routes are prerendered at build time, so restart the server after changing the catalog."}</div>
        </article>
        <aside className="docs-toc">
          <span className="technical-label">{isPt ? "NESTA PÁGINA" : "ON THIS PAGE"}</span>
          <a className="active" href="#top">{isPt ? "Instalação" : "Installation"}</a>
          <a href="#top">{isPt ? "Adicionar uma entrada" : "Adding an entry"}</a>
          <a href="#top">{isPt ? "Traduções" : "Translations"}</a>
          <a href="#top">{isPt ? "Implementação" : "Deployment"}</a>
        </aside>
      </div>
    );
  }

  return (
    <>
      <div className="mini-metrics">
        {[["$84,240", isPt ? "Receita" : "Revenue", "+12.4%"], ["1,842", isPt ? "Utilizadores ativos" : "Active users", "+8.1%"], ["68.4%", isPt ? "Conversão" : "Conversion", "+3.2%"]].map((row) => (
          <div key={String(row[1])}><span>{row[1]}</span><strong>{row[0]}</strong><small>{row[2]}</small></div>
        ))}
      </div>
      <div className="mini-content">
        <section><header><strong>{isPt ? "Desempenho" : "Performance"}</strong><span>{isPt ? "Últimos 30 dias" : "Last 30 days"}</span></header><ChartPreview type={slug === "analytics" ? "bar" : "area"} compact /></section>
        <section><header><strong>{isPt ? "Atividade" : "Activity"}</strong><span>{isPt ? "Ver tudo" : "View all"}</span></header>
          {[
            isPt ? "Maya publicou um projeto" : "Maya published a project",
            isPt ? "Fatura #4821 paga" : "Invoice #4821 paid",
            isPt ? "Kenji entrou na equipa" : "Kenji joined the workspace",
            isPt ? "Versão 2.4 implementada" : "Release 2.4 deployed",
          ].map((item, index) => <div className="activity" key={item}><span className={`fav avatar-${index}`}>{item[0]}</span><p>{item}<small>{index + 2}h</small></p></div>)}
        </section>
      </div>
    </>
  );
}
