# Estrutura visual (timelines, metros, grelha)

> **Dados:** `conteudo/dados.md`. Não inventar percentagens de skills.

O layout é **instrumentado**: eixo temporal, metros discretos, secções numeradas. Premium industrial, não dashboard neon.

## Ritmo da página

Secções ímpares `void`, pares `base`. Cada `h2`:

```
01    Experiência
————  (48px gold-500 a 35% de opacidade)
```

Número `micro` mono ouro. Conteúdo max-width 1120px, alinhado à grelha 12 col.

## `Timeline` (eixo vertical)

Usar em **Experiência**, **Educação**, **Distinções**.

```
desktop:  [data]  [eixo]  [card]
          3 col    32px    8 col

mobile:   [eixo+data no topo do card]
          card full width; eixo 2px à esquerda, padding-left 24px
```

- Eixo: 2px `border-default`; no item `current`: segmento `gold-500`
- Nó: círculo 12px, borda 2px ouro, fundo `void`. `current`: 16px + ponto interior `gold-400` (pulse CSS 2s, `prefers-reduced-motion: none`)
- Data: mono `small` `text-muted` à esquerda no desktop; dentro do card no mobile
- Card: `ExperienceCard` / `EducationCard` / `AwardCard` colado ao eixo (sem “flutuar” ao centro da página)

Lacuna (`careerGap.show`): nó oco, eixo tracejado, card mais baixo só com o texto da lacuna.

Ordem cronológica **decrescente** (mais recente no topo), como em `dados.md`.

## `SegmentedMeter` (línguas)

CEFR em **6 segmentos** iguais (A1 A2 B1 B2 C1 C2). Não usar barra contínua 0–100.

| `level` em `dados.md` | Segmentos ouro |
|-----------------------|----------------|
| A1 | 1 |
| A2 | 2 |
| B1 | 3 |
| B2 | 4 |
| C1 | 5 |
| C2 / materna | 6 |

Segmento: altura 6px, gap 4px, raio 2px, vazio = `border-default`, cheio = `gold-500`. Label: nome + nível `micro`. `note` por baixo se ≠ `vazio`.

**Sobre:** bio à esquerda (7 col) · metros de línguas à direita (5 col). Mobile: bio, depois metros empilhados.

Acessível: cada metro é `meter` ou lista com `aria-valuenow` 1–6, `aria-valuemax` 6, texto visível do nível (não só cor).

## `Meter` (barra de preenchimento)

Barra 8px, track `elevated`, fill `gold-500`, raio pill. **Só** se o campo tiver nível explícito em `dados.md`.

Uso permitido:

- Skills com `level` 1–5 (opcional; hoje a maioria é só lista → **chips**, sem barra)
- Duração relativa de cada job na timeline (eixo secundário): largura proporcional ao tempo no cargo, max 100% = o emprego mais longo. Tooltip com datas. Não é “skill”.

Proibido: inventar 85% Python. Sem `level` → chip.

## `StatRow` (hero ou sobre, opcional)

Três números em linha, separados por 1px `border-default`:

| Stat | Fonte |
|------|--------|
| Anos de experiência | calculado de `job.*.start` até hoje |
| Projetos | count secção 12 (0 → não mostrar este stat) |
| Distinções | count secção 11 |

Número: Newsreader 32px ouro. Label: `micro` muted. Se um valor for 0, omitir a célula (não mostrar «0 projetos»).

## Competências (grelha)

Desktop 2 colunas de grupos; mobile 1.

Cada grupo: `Card` sem hover pesado.

1. Título `micro` ouro + traço 24px  
2. Chips das `items`  
3. Se no futuro `level` 1–5 por item: `Meter` sob o nome, 5 stops

WixToolset / `showExtra: false`: não renderizar o grupo.

## Distinções

Mesmo `Timeline` compacto (nós menores 8px). `rank: 1` → nó preenchido ouro; `rank: 2` → nó oco ouro.

## Projetos

Grelha já definida em `projetos.md`. Empty state: card único centrado, não timeline.

## Contacto

Dois painéis lado a lado (`slots-ui.md`): lista alinhada em linhas de 48px (ritmo de tabela), form com os mesmos 48px por campo.

## Animação dos metros

Fill: width 0 → valor, 600ms ease-out, só na primeira vez que entram no viewport (`IntersectionObserver`). Sem animação se `prefers-reduced-motion`.

## Não usar

Barras arco-íris, gráficos 3D, radar de skills, percentagens fake, timeline horizontal no telemóvel (só vertical).
