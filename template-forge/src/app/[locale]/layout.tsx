import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Libre_Franklin } from "next/font/google";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/shell/AppShell";
import { isLocale } from "@/data/catalog";
import { themeScript } from "@/lib/preferences";
import "../globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Libre_Franklin({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"], display: "swap" });

export const metadata: Metadata = {
  title: { default: "FORGE — Every interface. One reference.", template: "%s · FORGE" },
  description: "A visual library of modern web components, patterns, data, media and developer interfaces.",
};

export function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html lang={locale} suppressHydrationWarning className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body><AppShell locale={locale}>{children}</AppShell></body>
    </html>
  );
}
