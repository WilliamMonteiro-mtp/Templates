"use client";

/* Remote editorial imagery is intentionally rendered without optimization so
   the template can be copied without configuring an image host. */
/* eslint-disable @next/next/no-img-element */

import {
  Heart,
  Menu,
  Search,
  ShoppingBag,
  UserRound,
  X,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";

type Messages = ReturnType<typeof getMessages>;
type Category = "all" | "bags" | "jewellery" | "watches" | "eyewear";

const products = [
  {
    category: "bags",
    name: { pt: "Mala ÉLAN Mini", en: "ÉLAN Mini Bag" },
    detail: { pt: "Couro de vitela", en: "Calfskin leather" },
    price: "€290",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=88",
  },
  {
    category: "watches",
    name: { pt: "Relógio ÉLAN Signature", en: "ÉLAN Signature Watch" },
    detail: { pt: "Champanhe", en: "Champagne" },
    price: "€390",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=88",
  },
  {
    category: "eyewear",
    name: { pt: "Óculos de sol ÉLAN", en: "ÉLAN Sculptural Sunglasses" },
    detail: { pt: "Preto", en: "Black" },
    price: "€190",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=88",
  },
  {
    category: "jewellery",
    name: { pt: "Pulseira ÉLAN Chain", en: "ÉLAN Chain Bracelet" },
    detail: { pt: "Dourado", en: "Gold" },
    price: "€390",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=88",
  },
] as const;

const categoryKeys: Category[] = ["all", "bags", "jewellery", "watches", "eyewear"];

export function Storefront({
  locale,
  messages: m,
}: {
  locale: Locale;
  messages: Messages;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState<Category>("all");
  const [favourites, setFavourites] = useState<number[]>([]);
  const [bagCount, setBagCount] = useState(0);
  const [subscribed, setSubscribed] = useState(false);

  const visibleProducts = useMemo(
    () =>
      category === "all"
        ? products
        : products.filter((product) => product.category === category),
    [category],
  );

  function changeLocale() {
    const target = locale === "pt" ? "en" : "pt";
    const parts = pathname.split("/");
    parts[1] = target;
    router.push(parts.join("/") || `/${target}`);
  }

  function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubscribed(true);
  }

  return (
    <main>
      <div className="announcement">{m.announcement}</div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="ÉLAN home">
          ÉLAN
        </a>
        <nav className={menuOpen ? "main-nav open" : "main-nav"}>
          <button
            className="nav-close"
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close"
          >
            <X size={20} />
          </button>
          {m.nav.map((item, index) => (
            <a key={item} href={index === 0 ? "#collection" : "#categories"} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="icon-button desktop-action" type="button" aria-label={m.search}>
            <Search size={17} />
          </button>
          <button className="icon-button desktop-action" type="button" aria-label={m.account}>
            <UserRound size={17} />
          </button>
          <button className="language-button" type="button" onClick={changeLocale} aria-label={m.language}>
            {locale === "pt" ? "EN" : "PT"}
          </button>
          <button className="bag-button" type="button" aria-label={m.cart}>
            <ShoppingBag size={17} />
            <span>{bagCount}</span>
          </button>
          <button className="menu-button" type="button" onClick={() => setMenuOpen(true)} aria-label={m.menu}>
            <Menu size={20} />
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <img
          src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=2000&q=90"
          alt=""
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <span className="eyebrow">{m.hero.eyebrow}</span>
          <h1>{m.hero.title}</h1>
          <p>{m.hero.body}</p>
          <div className="button-row">
            <a className="button button-light" href="#collection">{m.hero.primary}</a>
            <a className="text-link light" href="#philosophy">{m.hero.secondary}</a>
          </div>
        </div>
      </section>

      <section className="collection section-pad" id="collection">
        <div className="section-heading">
          <span className="eyebrow">{m.collection.eyebrow}</span>
          <h2>{m.collection.title}</h2>
          <p>{m.collection.body}</p>
        </div>
        <div className="category-tabs" id="categories">
          {m.categories.map((label, index) => (
            <button
              key={label}
              className={category === categoryKeys[index] ? "active" : ""}
              type="button"
              onClick={() => setCategory(categoryKeys[index])}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="product-grid">
          {visibleProducts.map((product) => {
            const index = products.indexOf(product);
            const liked = favourites.includes(index);
            return (
              <article className="product-card" key={product.name.en}>
                <div className="product-image">
                  <img src={product.image} alt={product.name[locale]} />
                  <button
                    className={liked ? "heart active" : "heart"}
                    type="button"
                    aria-label={m.favorite}
                    onClick={() =>
                      setFavourites((current) =>
                        liked ? current.filter((item) => item !== index) : [...current, index],
                      )
                    }
                  >
                    <Heart size={17} fill={liked ? "currentColor" : "none"} />
                  </button>
                  <button className="quick-add" type="button" onClick={() => setBagCount((count) => count + 1)}>
                    {m.addToBag}
                  </button>
                </div>
                <div className="product-info">
                  <div>
                    <h3>{product.name[locale]}</h3>
                    <p>{product.detail[locale]}</p>
                  </div>
                  <strong>{product.price}</strong>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="philosophy" id="philosophy">
        <div className="editorial-image">
          <img
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=88"
            alt=""
          />
        </div>
        <div className="editorial-copy">
          <span className="eyebrow">{m.philosophy.eyebrow}</span>
          <h2>{m.philosophy.title}</h2>
          <p>{m.philosophy.body}</p>
          <a className="text-link" href="#journal">{m.philosophy.cta}</a>
        </div>
      </section>

      <section className="most-wanted section-pad">
        <div className="section-heading compact">
          <span className="eyebrow">{m.wanted.eyebrow}</span>
          <h2>{m.wanted.title}</h2>
        </div>
        <div className="wanted-grid">
          {products.slice(0, 3).map((product, index) => (
            <article className={`wanted-card wanted-${index + 1}`} key={product.name.en}>
              <img src={product.image} alt={product.name[locale]} />
              <div>
                <h3>{product.name[locale]}</h3>
                <span>{product.price}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="craft">
        <img
          src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=2000&q=90"
          alt=""
        />
        <div className="craft-overlay" />
        <div className="craft-copy">
          <span className="eyebrow">{m.craft.eyebrow}</span>
          <h2>{m.craft.title}</h2>
          <p>{m.craft.body}</p>
          <a className="button button-light" href="#journal">{m.craft.cta}</a>
        </div>
      </section>

      <section className="journal section-pad" id="journal">
        <div className="section-heading left">
          <span className="eyebrow">{m.journal.eyebrow}</span>
          <h2>{m.journal.title}</h2>
        </div>
        <div className="journal-grid">
          {[
            "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=88",
            "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=900&q=88",
            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=88",
          ].map((image, index) => (
            <article className="journal-card" key={image}>
              <div><img src={image} alt="" /></div>
              <span>0{index + 1} / 03</span>
              <h3>{m.journal.articles[index]}</h3>
              <a className="text-link" href="#newsletter">{m.journal.cta}</a>
            </article>
          ))}
        </div>
      </section>

      <section className="newsletter" id="newsletter">
        <span className="monogram">É</span>
        <h2>{m.newsletter.title}</h2>
        <p>{m.newsletter.body}</p>
        {subscribed ? (
          <div className="success-message">{m.newsletter.success}</div>
        ) : (
          <form onSubmit={subscribe}>
            <input type="email" required placeholder={m.newsletter.placeholder} aria-label={m.newsletter.placeholder} />
            <button type="submit">{m.newsletter.cta}</button>
          </form>
        )}
      </section>

      <footer>
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand" href="#top">ÉLAN</a>
            <p>{m.footer.tagline}</p>
          </div>
          {m.footer.groups.map((group) => (
            <div className="footer-group" key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map((link) => <a href="#top" key={link}>{link}</a>)}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>{m.footer.copyright}</span>
          <div><a href="#">Instagram</a><a href="#">Pinterest</a><a href="#">TikTok</a></div>
        </div>
      </footer>
    </main>
  );
}
