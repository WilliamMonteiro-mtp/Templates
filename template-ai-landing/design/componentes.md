# Componentes

Todos usam tokens de `tokens.md`. Estados: default, hover, active, focus, disabled.

## Botões

### Primário (`ButtonPrimary`)

- Fundo `gold-500` → hover `gold-600` → active `gold-700`
- Texto `text-inverse`, peso 600, 16px
- Padding `12px 24px`, raio `radius-md`, sombra `shadow-gold` no hover
- Uso: Contactar, Descarregar CV, Enviar

### Secundário (`ButtonSecondary`)

- Fundo transparente, borda 1px `gold-500`, texto `gold-400`
- Hover: fundo `gold-500` a 8%, borda `gold-400`
- Uso: Ver projetos, LinkedIn

### Ghost (`ButtonGhost`)

- Sem borda. Texto `text-secondary`. Hover: `text-primary` + fundo `elevated`
- Uso: âncoras do header

### Regras

- Não misturar azul atlântico em botões (fica para links e chips)
- Ícone à esquerda, 16px, gap 8px
- Full-width abaixo de `md` no hero e no formulário

## Cards

### `Card` (base)

- Fundo `card`, borda 1px `border-default`, raio `radius-lg`, padding 24px (20px mobile)
- Hover: `card-hover`, borda `border-subtle`, `translateY(-4px)`, `shadow-card`
- Transição 200ms

### `ExperienceCard`

- Empresa (h3) + cargo (`small` ouro) + datas (`text-muted`)
- Se `group` ≠ `vazio`: linha `micro` «Empresa da {group}» (PT) / «A company of {group}» (EN), link `group.url`
- `tagline` opcional sob o nome, `text-muted`
- Lista de 3 bullets máximo no card
- Logo da empresa opcional, 40px, fundo `elevated`

### `ProjectCard`

- Cover 16:10, overlay escuro, kicker `micro` ouro, título, `summary`, até 3 tags mono
- Sem cover: padrão geométrico discreto (linhas `border-default`), não stock photo
- Clique → `/[locale]/projetos/[slug]`
- Badge `featured` opcional: ponto ouro 6px + “Destaque” / “Featured”

### `ProjectEmpty`

- `Card` centrado, max-width 640px, sem hover de elevação
- Título `h3` + corpo `text-secondary` (chaves `work.emptyTitle` / `work.emptyBody`)
- CTA secundário para `#contacto`
- Não usar ilustrações stock nem “coming soon” animado

### `SkillCard` / grupo

- Título da categoria (`micro` uppercase ouro)
- Chips: fundo `elevated`, texto `text-secondary`, raio pill
- Hover chip: texto `gold-400`

### `AwardCard`

- Data à esquerda (mono, ouro), título + entidade
- 1º lugar: pequeno indicador ouro, sem confetti

### `EducationCard`

- Curso, instituição, local, anos
- Badge “Diploma” (não o PDF do certificado)

### `PortraitSlot` · `AvailabilitySlot` · `ContactList` · `SocialList` · `CvSlot`

Ver `design/slots-ui.md`. Fazer na v1; `vazio` ≠ esconder a área.

## Estrutura (`Timeline`, `Meter`, `SegmentedMeter`, `StatRow`)

Ver `design/estrutura-visual.md`. Experiência, educação e prémios **não** são listas soltas — vão no eixo. Línguas = metros CEFR. Skills sem `level` = chips, nunca %.


## Header

- Fundo `elevated` a 80% + `backdrop-blur(12px)`
- Borda inferior 1px `border-default`
- Mobile: hamburger → sheet `base`, links full-width 48px altura
- Lang: pill `PT | EN`, activo = fundo `gold-500` texto inverse

## Inputs

- Fundo `elevated`, borda `border-default`, raio `radius-md`
- Focus: borda `gold-500` + `focus-ring`
- Erro: borda `danger`, mensagem `small` `danger`
- Label `small` `text-secondary` acima

## Links

- Corpo: `atlantic-500`, underline offset 3px no hover `gold-400`
- Nav: `ButtonGhost`

## Separadores

- Linha 1px `border-default` ou fade ouro 20% no título de secção (`h2` + linha 48px)

## Não usar

- Gradientes arco-íris, glass extremo, sombras neon ciano, botões 3D, emojis como ícones de UI
