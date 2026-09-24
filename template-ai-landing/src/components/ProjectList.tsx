"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Code2 } from "lucide-react";
import type { Locale, Project } from "@/lib/data";
import type { getMessages } from "@/lib/i18n";
import { ProjectStatus } from "./ProjectStatus";

type Messages = ReturnType<typeof getMessages>;

const VISIBLE = 3;

function ProjectCard({
  project,
  locale,
  copy,
}: {
  project: Project;
  locale: Locale;
  copy: Messages;
}) {
  return (
    <Link
      className="project-card card"
      href={project.slug ? `/${locale}/projetos/${project.slug}` : `/${locale}#projetos`}
    >
      <div className="project-cover">
        {project.cover ? (
          <Image
            src={project.cover}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        ) : (
          <Code2 size={44} aria-hidden="true" />
        )}
        <ProjectStatus status={project.status} copy={copy} />
      </div>
      <div className="project-content">
        <div className="eyebrow-row">
          <span className="eyebrow">{project.kicker[locale]}</span>
          {project.featured && (
            <span className="project-featured">{copy.labels.featured}</span>
          )}
        </div>
        <h3>{project.title[locale]}</h3>
        <p>{project.summary[locale]}</p>
        <div className="chips">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export function ProjectList({
  projects,
  locale,
  copy,
}: {
  projects: Project[];
  locale: Locale;
  copy: Messages;
}) {
  const [expanded, setExpanded] = useState(false);

  const ordered = [...projects].sort(
    (a, b) => Number(b.featured) - Number(a.featured),
  );
  const hidden = ordered.length - VISIBLE;
  const shown = expanded ? ordered : ordered.slice(0, VISIBLE);

  return (
    <>
      <div className="projects-grid" id="projetos-lista">
        {shown.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            locale={locale}
            copy={copy}
          />
        ))}
      </div>

      {hidden > 0 && (
        <div className="projects-more">
          <button
            className="button button-secondary"
            type="button"
            aria-expanded={expanded}
            aria-controls="projetos-lista"
            onClick={() => setExpanded((value) => !value)}
          >
            {expanded ? copy.labels.showLess : `${copy.labels.showMore} (${hidden})`}
            <ChevronDown size={17} aria-hidden="true" />
          </button>
        </div>
      )}
    </>
  );
}
