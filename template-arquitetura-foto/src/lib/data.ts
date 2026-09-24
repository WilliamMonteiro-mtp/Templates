import "server-only";

import { readFileSync } from "node:fs";
import { join } from "node:path";

export type Locale = "pt" | "en";
export const locales: Locale[] = ["pt", "en"];

type Localized = Record<Locale, string>;

export type Job = {
  company: string;
  tagline: Localized;
  url: string;
  group: string;
  groupUrl: string;
  role: Localized;
  start: string;
  end: string;
  current: boolean;
  location: Localized;
  bullets: Record<Locale, string[]>;
};

export type Education = {
  degree: Localized;
  school: string;
  url: string;
  start: string;
  end: string;
  completed: string;
  place: Localized;
  grade: string;
  showGrade: boolean;
  current?: boolean;
};

export type Language = {
  code: string;
  name: Localized;
  level: string;
  note: Localized;
};

export type SkillGroup = {
  id: string;
  title: Localized;
  items: string[];
};

export type Award = {
  date: string;
  title: Localized;
  org: string;
  rank: number;
};

export type ProjectImage = {
  src: string;
  caption: Localized;
};

export type Project = {
  slug: string;
  featured: boolean;
  status: string;
  yearStart: string;
  yearEnd: string;
  cover: string;
  gallery: ProjectImage[];
  repo: string;
  demo: string;
  tags: string[];
  kicker: Localized;
  title: Localized;
  role: Localized;
  summary: Localized;
  problem: Localized;
  approach: Localized;
  outcome: Localized;
};

export type PersonData = {
  fullName: string;
  displayName: string;
  initials: string;
  nationality: Localized;
  origin: Localized;
  photo: { src: string };
  role: Localized;
  kicker: Localized;
  positioning: Localized;
  about: Localized;
  heroLead: Localized;
  availability: { status: string; note: Localized };
  email: string;
  formEndpoint: string;
  phone: { display: string; e164: string; visible: boolean };
  whatsapp: string;
  location: Localized;
  social: Record<"github" | "linkedin" | "gitlab" | "x" | "website", string>;
  cv: { src: string };
  languages: Language[];
  jobs: Job[];
  careerGap: { show: boolean; from: string; to: string; text: Localized };
  education: Education[];
  skills: SkillGroup[];
  awards: Award[];
  projects: Project[];
  seo: { title: Localized; description: Localized };
  footerRights: Localized;
};

const EMPTY = "vazio";

function clean(value = "") {
  const result = value.trim().replace(/^`|`$/g, "");
  return result.toLowerCase() === EMPTY ? "" : result;
}

function bool(value = "") {
  return clean(value).toLowerCase() === "true";
}

function isProjectSlug(value: string) {
  return Boolean(value) && value !== "undefined" && !value.includes("{");
}

// Itens de `gallery`: "caminho | legenda pt | legenda en".
function galleryImages(items: string[] = []): ProjectImage[] {
  return items
    .map((item) => item.split("|").map((part) => part.trim()))
    .filter(([src]) => Boolean(src))
    .map(([src, pt = "", en = ""]) => ({ src, caption: { pt, en } }));
}

function section(source: string, number: number) {
  const match = source.match(
    new RegExp(`## ${number}\\. [^\\n]+\\n([\\s\\S]*?)(?=\\n---|$)`),
  );
  return match?.[1] ?? "";
}

function tableValues(source: string) {
  const values: Record<string, string> = {};
  for (const line of source.split(/\r?\n/)) {
    const match = line.match(/^\|\s*`([^`]+)`\s*\|\s*([^|]*?)\s*\|/);
    if (match) values[match[1]] = clean(match[2]);
  }
  return values;
}

function headingText(source: string, heading: string) {
  const match = source.match(
    new RegExp(`### ${heading.replace(".", "\\.")}\\r?\\n([\\s\\S]*?)(?=\\r?\\n###|\\r?\\n---|$)`),
  );
  return clean(match?.[1].split(/\r?\n/).filter(Boolean).join(" ") ?? "");
}

function records(source: string, prefix: string) {
  const pattern = new RegExp(
    `(?:^|\\n)### ${prefix.replace(".", "\\.")}([^\\n]*)\\n([\\s\\S]*?)(?=\\n###|\\n---|$)`,
    "g",
  );
  return [...source.matchAll(pattern)].map((match) => {
    const fields: Record<string, string> = {};
    const lists: Record<string, string[]> = {};
    let listKey = "";

    for (const line of match[2].split(/\r?\n/)) {
      const field = line.match(/^- `([^`]+)`:\s*(.*)$/);
      if (field) {
        listKey = field[1];
        fields[field[1]] = clean(field[2]);
        continue;
      }
      const item = line.match(/^\s{2}-\s+(.+)$/);
      if (item && listKey) {
        lists[listKey] ??= [];
        lists[listKey].push(clean(item[1]));
      }
    }
    return { id: clean(match[1]), fields, lists };
  });
}

function parseLanguages(source: string): Language[] {
  return section(source, 7)
    .split(/\r?\n/)
    .filter((line) => /^\|\s*[^-`]/.test(line))
    .map((line) => line.split("|").slice(1, -1).map(clean))
    .filter((cols) => cols.length >= 6 && cols[0] !== "code")
    .map(([code, pt, en, level, notePt, noteEn]) => ({
      code,
      name: { pt, en },
      level,
      note: { pt: notePt, en: noteEn },
    }));
}

function parseSkills(source: string): SkillGroup[] {
  const values = tableValues(section(source, 10));
  const showExtra = bool(values["skills.showExtra"]);
  return section(source, 10)
    .split(/\r?\n/)
    .filter((line) => /^\|\s*[^-`]/.test(line))
    .map((line) => line.split("|").slice(1, -1).map(clean))
    .filter((cols) => cols.length >= 4 && cols[0] !== "group.id")
    .filter(([id]) => id !== "extra" || showExtra)
    .map(([id, pt, en, items]) => ({
      id,
      title: { pt, en },
      items: items.split(",").map(clean).filter(Boolean),
    }));
}

export function getPersonData(): PersonData {
  const source = readFileSync(
    join(process.cwd(), "conteudo", "dados.md"),
    "utf8",
  );
  const values = tableValues(source);
  const jobRecords = records(section(source, 8), "job.");
  const educationRecords = records(section(source, 9), "edu.");
  const awardRecords = records(section(source, 11), "award.");

  // Ignore the fenced example: only real project headings outside code fences count.
  const projectSource = section(source, 12).replace(/```[\s\S]*?```/g, "");
  const projectRecords = records(projectSource, "project.");
  const gap = records(section(source, 8), "careerGap")[0]?.fields ?? {};

  return {
    fullName: values.fullName,
    displayName: values.displayName,
    initials: values.initials,
    nationality: { pt: values["nationality.pt"], en: values["nationality.en"] },
    origin: { pt: values["origin.pt"], en: values["origin.en"] },
    photo: { src: values["photo.src"] },
    role: { pt: values["role.pt"], en: values["role.en"] },
    kicker: { pt: values["kicker.pt"], en: values["kicker.en"] },
    positioning: {
      pt: headingText(source, "positioning.pt"),
      en: headingText(source, "positioning.en"),
    },
    about: {
      pt: headingText(source, "about.pt"),
      en: headingText(source, "about.en"),
    },
    heroLead: {
      pt: headingText(source, "hero.lead.pt"),
      en: headingText(source, "hero.lead.en"),
    },
    availability: {
      status: values["availability.status"],
      note: {
        pt: values["availability.note.pt"],
        en: values["availability.note.en"],
      },
    },
    email: values.email,
    formEndpoint: values.formEndpoint || "",
    phone: {
      display: values["phone.display"],
      e164: values["phone.e164"],
      visible: bool(values["phone.visible"]),
    },
    whatsapp: values.whatsapp,
    location: { pt: values["location.pt"], en: values["location.en"] },
    social: {
      github: values["social.github"],
      linkedin: values["social.linkedin"],
      gitlab: values["social.gitlab"],
      x: values["social.x"],
      website: values["social.website"],
    },
    cv: { src: values["cv.src"] },
    languages: parseLanguages(source),
    jobs: jobRecords.map(({ fields, lists }) => ({
      company: fields.company,
      tagline: { pt: fields["tagline.pt"], en: fields["tagline.en"] },
      url: fields.url,
      group: fields.group,
      groupUrl: fields["group.url"],
      role: { pt: fields["role.pt"], en: fields["role.en"] },
      start: fields.start,
      end: fields.end,
      current: bool(fields.current),
      location: { pt: fields["location.pt"], en: fields["location.en"] },
      bullets: { pt: lists["bullets.pt"] ?? [], en: lists["bullets.en"] ?? [] },
    })),
    careerGap: {
      show: bool(gap.show),
      from: gap.from,
      to: gap.to,
      text: { pt: gap.pt, en: gap.en },
    },
    education: educationRecords.map(({ fields }) => ({
      degree: { pt: fields["degree.pt"], en: fields["degree.en"] },
      school: fields.school,
      url: fields.url,
      start: fields.start,
      end: fields.end,
      completed: fields.completed,
      place: { pt: fields["place.pt"], en: fields["place.en"] },
      grade: fields.grade,
      showGrade: bool(fields.showGrade),
      current: bool(fields.current),
    })),
    skills: parseSkills(source),
    awards: awardRecords.map(({ fields }) => ({
      date: fields.date,
      title: { pt: fields["title.pt"], en: fields["title.en"] },
      org: fields.org,
      rank: Number(fields.rank) || 0,
    })),
    projects: projectRecords
      .map(({ id, fields, lists }) => ({
        slug: fields.slug || id,
        featured: bool(fields.featured),
        status: fields.status,
        yearStart: fields.yearStart,
        yearEnd: fields.yearEnd,
        cover: fields.cover,
        gallery: galleryImages(lists.gallery),
        repo: fields.repo,
        demo: fields.demo,
        tags: (fields.tags ?? "").split(",").map(clean).filter(Boolean),
        kicker: { pt: fields["kicker.pt"], en: fields["kicker.en"] },
        title: { pt: fields["title.pt"], en: fields["title.en"] },
        role: { pt: fields["role.pt"], en: fields["role.en"] },
        summary: { pt: fields["summary.pt"], en: fields["summary.en"] },
        problem: { pt: fields["problem.pt"], en: fields["problem.en"] },
        approach: { pt: fields["approach.pt"], en: fields["approach.en"] },
        outcome: { pt: fields["outcome.pt"], en: fields["outcome.en"] },
      }))
      .filter((project) => isProjectSlug(project.slug)),
    seo: {
      title: { pt: values["seo.title.pt"], en: values["seo.title.en"] },
      description: {
        pt: values["seo.description.pt"],
        en: values["seo.description.en"],
      },
    },
    footerRights: {
      pt: values["footer.rights.pt"],
      en: values["footer.rights.en"],
    },
  };
}
