"use client";

import type { Locale } from "@/lib/data";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  locale: Locale;
  label: string;
};

export function LangSwitch({ locale, label }: Props) {
  const target = locale === "pt" ? "en" : "pt";
  const pathname = usePathname();
  const router = useRouter();

  // Both locales share the same layout, so keeping the scroll offset leaves the
  // reader on the same content. Any hash is dropped on purpose: a stale one
  // would drag the page to that section.
  function switchLanguage() {
    const parts = pathname.split("/");
    parts[1] = target;
    const offset = window.scrollY;

    router.push(parts.join("/"), { scroll: false });
    requestAnimationFrame(() => window.scrollTo(0, offset));
  }

  return (
    <button
      className="lang-switch"
      type="button"
      onClick={switchLanguage}
      aria-label={label}
    >
      <span className={locale === "pt" ? "active" : ""}>PT</span>
      <span aria-hidden="true">/</span>
      <span className={locale === "en" ? "active" : ""}>EN</span>
    </button>
  );
}
