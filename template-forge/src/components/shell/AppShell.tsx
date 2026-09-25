"use client";

import {
  Bookmark,
  ChevronDown,
  Code,
  Command,
  Menu,
  Moon,
  Search,
  Settings,
  Sun,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import { allItems, catalog, messages, type Locale } from "@/data/catalog";
import {
  getBookmarks,
  getServerBookmarks,
  getServerTheme,
  getTheme,
  setTheme,
  subscribePreferences,
  toggleBookmark as toggleBookmarkSlug,
} from "@/lib/preferences";

type AppContextValue = {
  toast: (message: string) => void;
  bookmarked: string[];
  toggleBookmark: (slug: string) => void;
};

const AppContext = createContext<AppContextValue>({
  toast: () => undefined,
  bookmarked: [],
  toggleBookmark: () => undefined,
});

export function useForge() {
  return useContext(AppContext);
}

export function AppShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const t = messages[locale];
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState<string[]>([]);
  const [commandOpen, setCommandOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const theme = useSyncExternalStore(subscribePreferences, getTheme, getServerTheme);
  const bookmarked = useSyncExternalStore(subscribePreferences, getBookmarks, getServerBookmarks);

  const toast = useCallback((message: string) => {
    setToastMessage(message);
    window.setTimeout(() => setToastMessage(""), 1800);
  }, []);

  const toggleBookmark = useCallback((slug: string) => {
    toggleBookmarkSlug(slug);
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandOpen((open) => !open);
      }
      if (event.key === "Escape") {
        setCommandOpen(false);
        setSidebarOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return allItems.slice(0, 8);
    return allItems
      .filter((item) =>
        `${item.label.pt} ${item.label.en} ${item.group} ${item.kind}`
          .toLowerCase()
          .includes(term),
      )
      .slice(0, 12);
  }, [query]);

  function switchTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  function switchLocale() {
    const target = locale === "pt" ? "en" : "pt";
    const parts = pathname.split("/");
    parts[1] = target;
    router.push(parts.join("/"));
  }

  return (
    <AppContext.Provider value={{ toast, bookmarked, toggleBookmark }}>
      <div className="app-shell">
        <aside className={`sidebar ${sidebarOpen ? "is-open" : ""}`}>
          <div className="sidebar-brand">
            <Link href={`/${locale}`} onClick={() => setSidebarOpen(false)}>
              <span className="forge-mark">F</span>
              <span><strong>FORGE</strong><small>{t.descriptor}</small></span>
            </Link>
            <button className="mobile-only icon-btn" onClick={() => setSidebarOpen(false)} aria-label={t.close}>
              <X size={18} />
            </button>
          </div>

          <nav className="sidebar-nav" aria-label="Library navigation">
            <Link className={pathname === `/${locale}` ? "nav-overview active" : "nav-overview"} href={`/${locale}`}>
              <span>00</span>{t.overview}
            </Link>
            {catalog.map((section, sectionIndex) => {
              const isCollapsed = collapsed.includes(section.id);
              return (
                <div className="nav-group" key={section.id}>
                  <button
                    className="nav-group-title"
                    type="button"
                    aria-expanded={!isCollapsed}
                    onClick={() =>
                      setCollapsed((current) =>
                        isCollapsed
                          ? current.filter((id) => id !== section.id)
                          : [...current, section.id],
                      )
                    }
                  >
                    <span>{String(sectionIndex + 1).padStart(2, "0")} / {section.label[locale]}</span>
                    <ChevronDown size={13} />
                  </button>
                  {!isCollapsed && (
                    <div className="nav-group-links">
                      {section.items.map((item) => {
                        const href = `/${locale}/reference/${item.slug}`;
                        return (
                          <Link
                            className={pathname === href ? "active" : ""}
                            href={href}
                            key={item.slug}
                            onClick={() => setSidebarOpen(false)}
                          >
                            {item.label[locale]}
                            {bookmarked.includes(item.slug) && <Bookmark size={10} fill="currentColor" />}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="sidebar-footer">
            <button><Settings size={14} />{t.settings}</button>
            <button onClick={() => setCommandOpen(true)}><Command size={14} />{t.shortcuts}<kbd>⌘K</kbd></button>
            <a href="https://github.com" target="_blank" rel="noreferrer"><Code size={14} />GitHub</a>
            <div className="profile-row">
              <span className="avatar">WM</span>
              <span><strong>William</strong><small>Developer</small></span>
              <span className="status-dot" />
            </div>
          </div>
        </aside>

        <div className="app-main">
          <header className="topbar">
            <button className="mobile-only icon-btn" onClick={() => setSidebarOpen(true)} aria-label={t.openMenu}>
              <Menu size={19} />
            </button>
            <Link className="mobile-wordmark" href={`/${locale}`}>FORGE</Link>
            <button className="global-search" onClick={() => setCommandOpen(true)}>
              <Search size={15} />
              <span>{t.search}</span>
              <kbd>⌘ K</kbd>
            </button>
            <div className="top-actions">
              <a className="icon-btn" href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><Code size={16} /></a>
              <button className="icon-btn" onClick={switchTheme} aria-label={t.theme}>
                {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
              </button>
              <button className="locale-switch" onClick={switchLocale}>{locale === "pt" ? "EN" : "PT"}</button>
              <span className="version">v2.4.0</span>
              <span className="top-avatar"><User size={14} /></span>
            </div>
          </header>
          <div className="page-scroll">{children}</div>
        </div>

        {sidebarOpen && <button className="sidebar-backdrop" aria-label={t.close} onClick={() => setSidebarOpen(false)} />}

        {commandOpen && (
          <div className="command-backdrop" role="presentation" onMouseDown={() => setCommandOpen(false)}>
            <section className="command-palette" role="dialog" aria-modal="true" aria-label={t.search} onMouseDown={(e) => e.stopPropagation()}>
              <div className="command-input">
                <Search size={18} />
                <input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t.search} />
                <kbd>ESC</kbd>
              </div>
              <div className="command-results">
                <div className="command-label">{query ? "RESULTS" : locale === "pt" ? "SUGESTÕES" : "SUGGESTED"}</div>
                {results.map((item) => (
                  <button
                    key={item.slug}
                    onClick={() => {
                      router.push(`/${locale}/reference/${item.slug}`);
                      setCommandOpen(false);
                      setQuery("");
                    }}
                  >
                    <span className="result-icon">{item.kind.slice(0, 1).toUpperCase()}</span>
                    <span><strong>{item.label[locale]}</strong><small>{item.group} · {item.kind}</small></span>
                    <span className="result-arrow">↗</span>
                  </button>
                ))}
                {!results.length && <div className="no-results">{locale === "pt" ? "Sem resultados." : "No results."}</div>}
              </div>
              <footer><span><kbd>↑↓</kbd> navigate</span><span><kbd>↵</kbd> open</span><span>FORGE SEARCH INDEX · {allItems.length} ENTRIES</span></footer>
            </section>
          </div>
        )}

        {toastMessage && <div className="toast-message" role="status">{toastMessage}</div>}
      </div>
    </AppContext.Provider>
  );
}
