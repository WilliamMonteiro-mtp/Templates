import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Storefront } from "@/components/Storefront";
import { getMessages, isLocale } from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  return {
    title: locale === "pt" ? "ÉLAN — Acessórios contemporâneos" : "ÉLAN — Contemporary accessories",
    description:
      locale === "pt"
        ? "Moda e acessórios intemporais, feitos com intenção."
        : "Timeless fashion and accessories, made with intention.",
    alternates: {
      canonical: `/${locale}`,
      languages: { pt: "/pt", en: "/en" },
    },
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <Storefront locale={locale} messages={getMessages(locale)} />;
}
