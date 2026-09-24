# Plano profissional completo

Documento de **produto** (genérico). Dados da pessoa: **`conteudo/dados.md`** — indicador no topo desse ficheiro.

O site constrói-se inteiro. Campos `vazio` em `dados.md` → slots visíveis. Para outra pessoa, só se troca `dados.md`.

## Produto

Identidade visual: `design/`. Timelines e metros: `design/estrutura-visual.md`. Copy: `dados.md`.

| | |
|--|--|
| Tipo | One-page + `/[locale]/projetos/[slug]` |
| Stack | Next.js, React, TypeScript, Tailwind |
| Locales | `/pt`, `/en` (`/` → `/pt`) |

## Mapa (v1 obrigatório)

```
Header:  PortraitSlot  âncoras  PT|EN  Contacto
Hero:    retrato + identidade + CTAs + disponibilidade
Sobre · Experiência · Competências · Projetos · Distinções · Educação
Contacto: ContactList + SocialList + CvSlot + form
Footer
```

## Áreas reservadas → campos em `dados.md`

| Área | Componente | Campos |
|------|------------|--------|
| Retrato | `PortraitSlot` | `photo.*`, `initials` |
| Disponibilidade | `AvailabilitySlot` | `availability.*` |
| Contactos | `ContactList` | `email`, `phone.*`, `whatsapp`, `location.*` |
| Redes | `SocialList` | `social.*` |
| CV | `CvSlot` | `cv.*` |
| Projetos | grelha / empty | secção 12 |
| Lacuna | timeline | `careerGap` |

## Qualidade v1

Acessibilidade, hreflang, OG, `mailto:`, Vercel. Sem blog/CMS/login. Sem PII extra (`pdf/README.md` + secção 14 de `dados.md`).

## Implementação

1. App + tokens + i18n chrome  
2. Parser/leitura de `dados.md` → secções  
3. Slots + projetos  
4. SEO a partir da secção 13 de `dados.md`
