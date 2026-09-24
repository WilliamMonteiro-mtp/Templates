import type { MetadataRoute } from "next";
import { getPersonData, locales } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const data = getPersonData();
  const pages = locales.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: locale === "pt" ? 1 : 0.9,
  }));
  const projects = locales.flatMap((locale) =>
    data.projects
      .filter((project) => project.slug && project.slug !== "undefined")
      .map((project) => ({
        url: `${base}/${locale}/projetos/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })),
  );
  return [...pages, ...projects];
}
