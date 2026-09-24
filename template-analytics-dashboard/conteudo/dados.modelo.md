# DADOS DA PESSOA

> **INDICADOR — FONTE ÚNICA**  
> Copiar este ficheiro para `conteudo/dados.md` e preencher. O portefólio (código + agente) lê **só** `dados.md`.  
> Campo por preencher: `vazio`.

`<!-- FONTE: conteudo/dados.md -->`

---

## 1. Identidade

| Campo | Valor |
|-------|--------|
| `fullName` | vazio |
| `displayName` | vazio |
| `initials` | vazio |
| `nationality.pt` | vazio |
| `nationality.en` | vazio |
| `origin.pt` | vazio |
| `origin.en` | vazio |
| `photo.src` | vazio |
| `photo.fileHint` | public/media/portrait.webp |
| `role.pt` | vazio |
| `role.en` | vazio |
| `kicker.pt` | Portefólio |
| `kicker.en` | Portfolio |

### positioning.pt
vazio

### positioning.en
vazio

---

## 2. Disponibilidade

| Campo | Valor |
|-------|--------|
| `availability.status` | vazio |
| `availability.note.pt` | vazio |
| `availability.note.en` | vazio |

---

## 3. Contactos

| Campo | Valor |
|-------|--------|
| `email` | vazio |
| `phone.display` | vazio |
| `phone.e164` | vazio |
| `phone.visible` | false |
| `whatsapp` | vazio |
| `location.pt` | vazio |
| `location.en` | vazio |

---

## 4. Redes

| Campo | Valor |
|-------|--------|
| `social.github` | vazio |
| `social.linkedin` | vazio |
| `social.gitlab` | vazio |
| `social.x` | vazio |
| `social.website` | vazio |

---

## 5. CV público

| Campo | Valor |
|-------|--------|
| `cv.src` | vazio |
| `cv.fileHint` | public/cv/cv.pdf |
| `drivingLicence` | não mostrar |

---

## 6. Sobre (bios)

### about.pt
vazio

### about.en
vazio

### hero.lead.pt
vazio

### hero.lead.en
vazio

---

## 7. Línguas

| `code` | `name.pt` | `name.en` | `level` | `note.pt` | `note.en` |
|--------|-----------|-----------|---------|-----------|-----------|
| vazio | vazio | vazio | vazio | vazio | vazio |

---

## 8. Experiência

### job.1
- `company`: vazio
- `tagline.pt`: vazio
- `tagline.en`: vazio
- `url`: vazio
- `group`: vazio
- `group.url`: vazio
- `role.pt`: vazio
- `role.en`: vazio
- `start`: vazio
- `end`: vazio
- `current`: false
- `location.pt`: vazio
- `location.en`: vazio
- `bullets.pt`:
  - vazio
- `bullets.en`:
  - vazio

### careerGap
- `show`: false
- `from`: vazio
- `to`: vazio
- `pt`: vazio
- `en`: vazio

---

## 9. Educação

### edu.1
- `degree.pt`: vazio
- `degree.en`: vazio
- `school`: vazio
- `url`: vazio
- `start`: vazio
- `end`: vazio
- `completed`: vazio
- `place.pt`: vazio
- `place.en`: vazio
- `grade`: vazio
- `showGrade`: false
- `showDiplomaScan`: false

---

## 10. Competências

| `group.id` | `title.pt` | `title.en` | `items` |
|------------|------------|------------|---------|
| languages | Linguagens | Languages | vazio |

Opcional por item (só se quiseres barras): `Nome|3` (nível 1–5). Sem `|n` → chip.

| Campo | Valor |
|-------|--------|
| `skills.showExtra` | false |

---

## 11. Distinções

### award.1
- `date`: vazio
- `title.pt`: vazio
- `title.en`: vazio
- `org`: vazio
- `rank`: vazio

---

## 12. Projetos pessoais

_(nenhum projeto — catálogo vazio)_

Cada projeto é um bloco `### project.{slug}` com campos em backticks. Além de slug, datas, cover, repo, demo, tags e textos pt/en:

- `status`: `idea` | `design` | `building` | `paused` | `live` | `done` → pill no card («Em desenvolvimento», «Concluído», etc.). `vazio` = sem pill.
- `featured`: true no máximo em 3 projetos.

---

## 13. SEO

| Campo | Valor |
|-------|--------|
| `seo.title.pt` | vazio |
| `seo.title.en` | vazio |
| `seo.description.pt` | vazio |
| `seo.description.en` | vazio |
| `footer.rights.pt` | © {year} |
| `footer.rights.en` | © {year} |

---

## 14. Privacidade (não publicar)

Listar o que **não** deve ir para o site desta pessoa (morada, DOB, documentos, etc.).
