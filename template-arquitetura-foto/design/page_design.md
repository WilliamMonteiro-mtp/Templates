# Design do site — visão

> **Dados da pessoa:** `conteudo/dados.md` (não repetir nomes nem cargos aqui).

Portefólio **editorial industrial**: fundo obsidiana, ouro champanhe, azul atlântico. Escuro premium, não “cyber neon”.

Plano: `docs/plano.md`. Slots: `design/slots-ui.md`. **Timelines e metros:** `design/estrutura-visual.md`.


## Personalidade

| Qualidade | Como se vê |
|-----------|------------|
| Precisão | Grelha, espaçamento 8px, tipografia alinhada |
| Calor | Ouro nos CTAs e no nome |
| Origem | Azul atlântico em links e chips, não no fundo inteiro |
| Engenharia | Cards como painéis, não glassmorphism pesado |

## Layout (mobile-first)

1. **Header fixo** (64px mobile / 72px desktop): `PortraitSlot sm` · âncoras · `PT | EN` · CTA Contacto (`lg+`)
2. **Hero** (100dvh desktop, auto no telemóvel):

```
mobile:     [PortraitSlot md]
            nome · cargo · AvailabilitySlot · lead · CTAs

desktop:    7 col texto                    |  5 col PortraitSlot md
```

3. **Secções** `padding-y` 80px / 120px, max-width 1120px; `h2` numerado; fundo alternado void/base
4. **Experiência / educação / prémios** em `Timeline`; línguas em `SegmentedMeter`; skills em grelha de grupos
5. **Contacto** — grelha em `slots-ui.md`
6. **Footer:** email · SocialList · copyright

Grelha desktop: 12 colunas, gutter 24px. Mobile: 4 colunas, gutter 16px.

## Hero (copy)

Texto (`displayName`, `role`, `hero.lead`, CTAs): **`conteudo/dados.md`**. Layout: retrato e disponibilidade sempre no sítio.

## Movimento

- Entrada: fade + 12px translateY, 400ms ease-out, stagger 80ms
- Hover de card: translateY(-4px), borda ouro
- Metros: fill ao entrar no viewport (ver `estrutura-visual.md`)
- Sem parallax agressivo, sem cursor customizado no telemóvel

## Light mode

Não existe nesta versão. `color-scheme: dark` no `html`.
