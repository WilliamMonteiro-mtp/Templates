import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Portfolio } from "@/components/Portfolio";
import { getPersonData } from "@/lib/data";
import { isLocale } from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const data = getPersonData();

  return {
    title: data.seo.title[locale],
    description: data.seo.description[locale],
    alternates: {
      canonical: `/${locale}`,
      languages: { pt: "/pt", en: "/en" },
    },
    openGraph: {
      title: data.seo.title[locale],
      description: data.seo.description[locale],
      type: "website",
      locale: locale === "pt" ? "pt_PT" : "en_GB",
    },
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <Portfolio data={getPersonData()} locale={locale} />;
}
