import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ProjectStatus } from "@/components/ProjectStatus";
import { getPersonData, locales } from "@/lib/data";
import { getMessages, isLocale } from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

// Campos longos de dados.md: "||" separa parágrafos e `texto` marca termos técnicos.
function CaseText({ text }: { text: string }) {
  const paragraphs = text
    .split("||")
    .map((part) => part.trim())
    .filter(Boolean);

  return (
    <>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>
          {paragraph.split(/`([^`]+)`/).map((part, index) =>
            index % 2 === 1 ? <code key={part}>{part}</code> : part,
          )}
        </p>
      ))}
    </>
  );
}

export function generateStaticParams() {
  const { projects } = getPersonData();
  return locales.flatMap((locale) =>
    projects
      .filter((project) => project.slug && project.slug !== "undefined")
      .map((project) => ({ locale, slug: project.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const data = getPersonData();
  const project = data.projects.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title[locale]} — ${data.displayName}`,
    description: project.summary[locale],
    alternates: {
      canonical: `/${locale}/projetos/${slug}`,
      languages: {
        pt: `/pt/projetos/${slug}`,
        en: `/en/projetos/${slug}`,
      },
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !slug || slug === "undefined") notFound();
  const data = getPersonData();
  const project = data.projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const copy = getMessages(locale);

  return (
    <main className="project-page">
      <header className="project-header container">
        <Link href={`/${locale}/#projetos`}>
          <ArrowLeft size={17} aria-hidden="true" />
          {copy.labels.back}
        </Link>
        <span>{data.initials}</span>
      </header>

      <article className="container">
        <div className="project-hero">
          <div className="project-hero-top">
            <span className="eyebrow">{project.kicker[locale]}</span>
            <ProjectStatus status={project.status} copy={copy} />
          </div>
          <h1>{project.title[locale]}</h1>
          <p>{project.summary[locale]}</p>
          <div className="chips">
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>

        {project.gallery.length ? (
          <ProjectGallery
            images={project.gallery}
            locale={locale}
            copy={copy}
          />
        ) : (
          <div className="project-wide-cover">
            {project.cover ? (
              <Image
                src={project.cover}
                alt=""
                fill
                preload
                sizes="(max-width: 1120px) 100vw, 1120px"
              />
            ) : (
              <Code2 size={64} aria-hidden="true" />
            )}
          </div>
        )}

        <div className="project-meta">
          <div>
            <small>{copy.labels.role}</small>
            <p>{project.role[locale]}</p>
          </div>
          <div>
            <small>Timeline</small>
            <p>{project.yearStart} — {project.yearEnd || copy.labels.present}</p>
          </div>
          <div className="project-links">
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noreferrer">
                {copy.labels.repo}<ExternalLink size={14} aria-hidden="true" />
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer">
                {copy.labels.demo}<ArrowUpRight size={14} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        <div className="case-study">
          <section>
            <span>01</span>
            <div>
              <h2>{copy.labels.problem}</h2>
              <CaseText text={project.problem[locale]} />
            </div>
          </section>
          <section>
            <span>02</span>
            <div>
              <h2>{copy.labels.approach}</h2>
              <CaseText text={project.approach[locale]} />
            </div>
          </section>
          <section>
            <span>03</span>
            <div>
              <h2>{copy.labels.outcome}</h2>
              <CaseText text={project.outcome[locale]} />
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
