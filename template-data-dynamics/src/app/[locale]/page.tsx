import type { Metadata } from "next";
import { Portfolio } from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "Analytics Pro Dashboard",
  description: "A premium dark mode analytics dashboard template built with Next.js and Tailwind CSS.",
};

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <Portfolio locale={locale} />;
}
