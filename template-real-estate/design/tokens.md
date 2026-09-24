# Tokens visuais

Única palete. No código, copiar para `src/styles/tokens.css` e mapear no Tailwind. **Não usar hex soltos.**

## Cores

### Superfícies

| Token | Hex | Uso |
|-------|-----|-----|
| `void` | `#07090C` | Fundo da página |
| `base` | `#0C0F14` | Secções alternadas |
| `elevated` | `#12161E` | Header, dropdowns |
| `card` | `#161C27` | Cards, painéis |
| `card-hover` | `#1C2433` | Hover de card |

### Texto

| Token | Hex | Uso |
|-------|-----|-----|
| `text-primary` | `#F4F1EA` | Títulos, corpo principal |
| `text-secondary` | `#B8B4AB` | Parágrafos de apoio |
| `text-muted` | `#7A7F8A` | Meta, datas, captions |
| `text-inverse` | `#0C0F14` | Texto em botão ouro |

### Marca

| Token | Hex | Uso |
|-------|-----|-----|
| `gold-400` | `#E4C58A` | Ícones activos, underline |
| `gold-500` | `#C9A86C` | CTA primário, focus ring |
| `gold-600` | `#A8884E` | Hover do CTA |
| `gold-700` | `#7A6238` | Active / pressed |
| `atlantic-400` | `#8BB0FF` | Hover de link |
| `atlantic-500` | `#5B86E5` | Links, chips secundários |
| `atlantic-600` | `#3D6FD9` | Visitado / pressed |

### Semântico (raro)

| Token | Hex | Uso |
|-------|-----|-----|
| `success` | `#3DDC97` | “Disponível para contacto” |
| `danger` | `#E85D5D` | Erro de formulário |
| `border-default` | `#2A3344` | Borda de card |
| `track` | `#12161E` | Fundo de `Meter` / segmentos vazios (igual `elevated`) |
| `meter-fill` | `#C9A86C` | Preenchimento (`gold-500`) |
| `timeline-axis` | `#2A3344` | Eixo da timeline |

## Tipografia

| Papel | Família | Fallback | Pesos |
|-------|---------|----------|-------|
| Display (hero nome) | **Newsreader** | Georgia, serif | 400–600 |
| UI / corpo | **Plus Jakarta Sans** | system-ui | 400, 500, 600 |
| Mono (tags técnicas) | **IBM Plex Mono** | ui-monospace | 400, 500 |

Escala (mobile → desktop):

| Token | Mobile | Desktop | Line-height |
|-------|--------|---------|-------------|
| `display` | 40px | 64px | 1.1 |
| `h1` | 32px | 40px | 1.2 |
| `h2` | 24px | 32px | 1.25 |
| `h3` | 18px | 20px | 1.3 |
| `body` | 16px | 16px | 1.65 |
| `small` | 13px | 14px | 1.5 |
| `micro` | 11px | 12px | 1.4 |

Letter-spacing: display `-0.02em`; `micro` `0.08em` uppercase.

## Espaçamento (base 8)

`4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 120`

Secção: `80` mobile / `120` desktop. Gap entre cards: `16` mobile / `24` desktop.

## Raios e sombra

| Token | Valor |
|-------|--------|
| `radius-sm` | 8px |
| `radius-md` | 12px (botões, inputs) |
| `radius-lg` | 20px (cards) |
| `radius-pill` | 999px (chips, lang) |
| `shadow-card` | `0 8px 32px rgba(0,0,0,0.35)` |
| `shadow-gold` | `0 8px 24px rgba(201,168,108,0.18)` (hover CTA) |
| `focus-ring` | `0 0 0 2px void, 0 0 0 4px gold-500` |

## Breakpoints

| Nome | Min-width |
|------|-----------|
| `sm` | 480px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1440px |

Touch targets ≥ 44px.
