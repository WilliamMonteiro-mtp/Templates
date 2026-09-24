# Projetos pessoais

> **Lista:** secção 12 de `conteudo/dados.md`.

Secção sempre visível. Sem blocos `### project.*` → `ProjectEmpty`. Não inventar cases.

## Comportamento

| Estado | UI |
|--------|-----|
| 0 | `ProjectEmpty` |
| 1 | 1 card |
| 2–3 | 1 col / 2 col |
| 4+ | até 3 col em `xl` |

Clique → `/[locale]/projetos/[slug]`. Campos do bloco: slug, featured, status, datas, cover, repo, demo, tags, textos pt/en (problem, approach, outcome).

`status` (`idea` | `design` | `building` | `paused` | `live` | `done`): pill mono sobre a capa e ao lado do kicker na página. Ouro por omissão, verde em `live` e `done`, muted em `paused`. Serve para não parecer terminado o que ainda não está.

`featured: true` no máximo 3, primeiro na home. Cover em `public/projetos/{slug}/`. Trabalho de empresa só com autorização.
