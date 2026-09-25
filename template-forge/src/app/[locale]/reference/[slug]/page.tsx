import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocumentationPage } from "@/components/reference/DocumentationPage";
import { allItems, findItem, isLocale, itemDescription } from "@/data/catalog";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return ["pt", "en"].flatMap((locale) => allItems.map((item) => ({ locale, slug: item.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const item = findItem(slug);
  if (!item || !isLocale(locale)) return {};
  return {
    title: item.label[locale],
    description: itemDescription(item, locale),
    alternates: { canonical: `/${locale}/reference/${slug}`, languages: { pt: `/pt/reference/${slug}`, en: `/en/reference/${slug}` } },
  };
}

export default async function ReferencePage({ params }: Props) {
  const { locale, slug } = await params;
  const item = findItem(slug);
  if (!item || !isLocale(locale)) notFound();
  return <DocumentationPage item={item} locale={locale} />;
}
