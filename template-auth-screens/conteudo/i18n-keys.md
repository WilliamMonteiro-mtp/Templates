# Chaves i18n (chrome)

Só labels de interface em `src/content/pt.json` / `en.json`.

**Pessoa (nome, bios, jobs, projetos, SEO):** `conteudo/dados.md` — não duplicar neste JSON.


```
nav.home
nav.about
nav.experience
nav.skills
nav.work
nav.awards
nav.education
nav.contact
nav.menu

lang.pt
lang.en
lang.switchTo

hero.kicker
hero.name
hero.role
hero.lead
hero.ctaPrimary
hero.ctaSecondary
hero.availability

about.title
about.body
about.origin
about.languagesLabel

slot.photoPending
slot.availabilityTbd
slot.availabilityOpen
slot.availabilityEmployed
slot.availabilitySelective
slot.phonePending
slot.whatsappPending
slot.socialPending
slot.cvPending

stats.years
stats.projects
stats.awards

experience.title
experience.current
experience.items[].company
experience.items[].role
experience.items[].period
experience.items[].location
experience.items[].bullets[]

skills.title
skills.groups[].title
skills.groups[].items[]

work.title
work.emptyTitle
work.emptyBody
work.emptyCta
work.featured
work.back
work.problem
work.approach
work.outcome
work.links
work.repo
work.demo
work.role
work.period
work.kicker
work.items[]          → secção 12 de dados.md

awards.title
awards.items[].date
awards.items[].title
awards.items[].org

education.title
education.degree
education.school
education.period
education.place

contact.title
contact.lead
contact.emailLabel
contact.phoneLabel
contact.whatsappLabel
contact.locationLabel
contact.socialLabel
contact.form.name
contact.form.email
contact.form.message
contact.form.submit
contact.form.success
contact.form.error

footer.rights
footer.built

seo.title
seo.description
```

Empresas e nomes: `dados.md` (iguais nos dois idiomas). Datas: formatar na app a partir de ISO.
