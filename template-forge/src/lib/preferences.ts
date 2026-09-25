export type Theme = "light" | "dark";

const THEME_KEY = "forge-theme";
const BOOKMARKS_KEY = "forge-bookmarks";
const EMPTY_BOOKMARKS: string[] = [];

// The server always renders the light theme with no bookmarks, so the client
// snapshots are only adopted after hydration finishes.
export const themeScript = `try{var t=localStorage.getItem("${THEME_KEY}")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.dataset.theme=t}catch(e){}`;

const listeners = new Set<() => void>();

let theme: Theme = "light";
let bookmarks = EMPTY_BOOKMARKS;

if (typeof document !== "undefined") {
  theme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  try {
    const stored: unknown = JSON.parse(localStorage.getItem(BOOKMARKS_KEY) ?? "[]");
    if (Array.isArray(stored)) bookmarks = stored as string[];
  } catch {
    bookmarks = EMPTY_BOOKMARKS;
  }
}

function emit() {
  for (const listener of listeners) listener();
}

export function subscribePreferences(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getTheme() {
  return theme;
}

export function getServerTheme(): Theme {
  return "light";
}

export function getBookmarks() {
  return bookmarks;
}

export function getServerBookmarks() {
  return EMPTY_BOOKMARKS;
}

export function setTheme(next: Theme) {
  theme = next;
  document.documentElement.dataset.theme = next;
  localStorage.setItem(THEME_KEY, next);
  emit();
}

export function toggleBookmark(slug: string) {
  bookmarks = bookmarks.includes(slug)
    ? bookmarks.filter((item) => item !== slug)
    : [...bookmarks, slug];
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
  emit();
}
