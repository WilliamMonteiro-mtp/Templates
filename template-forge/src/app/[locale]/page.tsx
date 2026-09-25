import { notFound } from "next/navigation";
import { Overview } from "@/components/overview/Overview";
import { isLocale } from "@/data/catalog";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <Overview locale={locale} />;
}
