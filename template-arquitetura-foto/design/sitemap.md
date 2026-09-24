# Sitemap e secções

> **Dados da pessoa:** `conteudo/dados.md`.

Site **one-page**. Locale no prefixo. Plano: `docs/plano.md`.

```
/[locale]                 → página única (todas as áreas)
/[locale]/#sobre
/[locale]/#experiencia
/[locale]/#competencias
/[locale]/#projetos
/[locale]/#distincoes
/[locale]/#educacao
/[locale]/#contacto
/[locale]/projetos/[slug] → detalhe (404 se o slug não estiver no catálogo)
```

`locale`: `pt` | `en`. Pedido a `/` redirecciona para `pt`.

## Header (sempre)

- `PortraitSlot sm` → topo
- Âncoras (todas as secções, incluindo Projetos e Contacto)
- `PT | EN`
- CTA compacto “Contacto” a partir de `lg`

## Secções (v1 — nenhuma é opcional)

| ID | Título PT | Título EN | O que está sempre no ecrã |
|----|-----------|-----------|---------------------------|
| `hero` | — | — | Retrato, nome, cargo, disponibilidade, lead, CTAs, CvSlot — valores em `dados.md` |
| `sobre` | Sobre | About | Bio + `StatRow` + `SegmentedMeter` (línguas) |
| `experiencia` | Experiência | Experience | `Timeline` + cards; lacuna se `careerGap.show` |
| `competencias` | Competências | Skills | Grelha de grupos; `Meter` só com `level` |
| `projetos` | Projetos | Projects | secção 12 ou `ProjectEmpty` |
| `distincoes` | Distinções | Awards | `Timeline` compacta |
| `educacao` | Educação | Education | `Timeline` |
| `contacto` | Contacto | Contact | contactos + redes + CV + form |

## Footer

ContactList resumido (email + localização) · SocialList · copyright.

## SEO por locale

Campos `seo.*` e `footer.rights.*` em **`conteudo/dados.md`**. OG: retrato se `photo.src` preenchido; senão nome + ouro.

## Estados vazios

Slots com moldura/rótulo (`design/slots-ui.md`). Projetos: `ProjectEmpty`. Sem foto stock. Sem lorem.
