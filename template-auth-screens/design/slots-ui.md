# Slots de UI (foto, contactos, redes, CV)

> **Valores:** `conteudo/dados.md`. Este ficheiro só descreve a UI.

Áreas **sempre construídas**. `vazio` ou `phone.visible: false` → estado vazio, a zona não desaparece.

## `PortraitSlot`

Três tamanhos, **o mesmo** `photo.src` de `dados.md`.

| Variante | Onde | Tamanho |
|----------|------|---------|
| `sm` | Header | 32px círculo |
| `md` | Hero (desktop à direita; mobile acima do nome) | 200px mobile / 280px desktop |
| `lg` | Sobre (opcional, mesma foto) | 160px — só se o hero já tiver `md`; se repetir demais, usar só hero + header |

Formato: retrato 1:1, object-fit cover, raio círculo, anel 2px `gold-500`, fundo `elevated`.

**Vazio:** círculo com `initials` (Newsreader), anel tracejado `gold-700`, caption `slot.photoPending`. Sem stock. `alt` traduzido.

## `AvailabilitySlot`

Chip pill sob o cargo no hero.

| `status` | UI |
|----------|-----|
| `vazio` | Chip muted: chaves `slot.availabilityTbd` |
| `open` | Chip `success`: `slot.availabilityOpen` |
| `employed` | Chip `text-muted`: `slot.availabilityEmployed` |
| `selective` | Chip ouro: `slot.availabilitySelective` |

`availability.note.*` só se não for `vazio`.

## `ContactList` (secção Contacto + coluna do footer)

Cada linha: ícone 20px ouro + rótulo `micro` + valor.

| Linha | Campo em `dados.md` | Vazio |
|-------|---------------------|--------|
| Email | `email` | slot se `vazio` |
| Telefone | `phone.*` | «A adicionar» até `phone.visible: true` |
| WhatsApp | `whatsapp` | «A adicionar» |
| Localização | `location.*` | slot se `vazio` |

Linhas vazias: valor `text-muted`, sem `href`. Preenchidas: link `mailto:`, `tel:`, `https://wa.me/`.

## `SocialList`

Ícones GitHub, LinkedIn, GitLab, X, site. Ordem fixa. `social.*` = `vazio` → botão 40px desactivado. Preenchido → link externo.

Não esconder ícones em falta: o bloco de redes no contacto e no footer é uma **fila completa** de 5 slots.

## `CvSlot`

Botão secundário «Descarregar CV» no hero e no contacto.

- `cv.src` `vazio`: botão visível, `disabled`, `slot.cvPending`
- Com path: download do PDF
- Com ficheiro: download do PDF sanitizado

## Formulário

Área sempre visível: nome, email, mensagem, enviar (`mailto:`). Não depende de redes nem de foto.

## Grelha Contacto (layout)

```
mobile:  [ContactList]
         [SocialList]
         [CvSlot]
         [Form]

desktop:  5 col ContactList+Social+Cv  |  7 col Form
```
