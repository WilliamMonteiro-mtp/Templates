# Rascunhos de projetos pessoais

> **Não publicar.** Este ficheiro é só análise e preparação.  
> Nada daqui entra na secção 12 de `conteudo/dados.md` nem no site até autorização explícita.  
> **Capas:** não gerar PNG/SVG novos por agora. Só quando o utilizador pedir. Sem capa = `cover: vazio`.

Quando um rascunho estiver pronto e autorizado, copiar o bloco `### project.{slug}` para `dados.md`.

---

## Como usar

Para cada ideia, descrever (mesmo em bullets informais):

- O que resolve e para quem
- Stack prevista (sem inflacionar)
- O que já existe vs o que ainda vais construir
- Se pode ter repo / demo públicos

A análise abaixo avalia: encaixa no portefólio, riscos (trabalho de empresa, confidencialidade), campos em falta para o case study (problema, abordagem, resultado).

---

## Fila

### ideia.1 — Empregos e casas em Cabo Verde

**Estado:** **publicado** — bloco `### project.cv-empregos` na secção 12 de `dados.md`. Editar lá, não aqui.

**Título provisório:** CV Empregos  
**Slug proposto (só se for para o site mais tarde):** `cv-empregos` (a confirmar)

**Resumo (ideia do autor):** software para encontrar empregos e casas em Cabo Verde, com escolha de ilha e depois filtros por zona, preço, etc. O mockup actual foca **emprego** (candidato vs empresa); habitação fica para mais tarde. O visual pode mudar.

---

#### O que tem de forte

- Problema **real e local**: o mercado é informal (grupos de Facebook, WhatsApp, boca-a-boca). Um sítio com ilha → zona → preço é mais claro do que um feed genérico.
- A **ilha como primeiro passo** é o diferencial. Cabo Verde não é um país «contínuo»: aceitar uma vaga noutra ilha implica mudar de casa.

> Não afirmar no site como funcionam plataformas concorrentes sem as ter verificado. O argumento assenta na geografia do arquipélago, não em comparações.
- Encaixa no portefólio: origem em Mindelo, stack web + dados + filtros. Não é um clone genérico de «todo app».
- Dá para mostrar um case study clássico: problema → abordagem (taxonomia ilha/zona, filtros) → resultado (mesmo que a v1 seja só um ilha).

#### O risco principal: são dois produtos

Casas e empregos partilham a geografia (ilha, concelho, zona) mas **não** o resto:

| | Habitação | Emprego |
|--|-----------|---------|
| Filtros | preço, tipologia, renda vs venda, mobília | salário, contrato, área, presencial |
| Anunciante | senhorio / agência | empresa / recrutador |
| Ciclo de vida | visita, caução | CV, entrevista |
| Dados | plantas, fotos | descrição da vaga |

Fazer os dois na v1 dilui o produto e o case study. Recomendação: **uma vertical na v1**, a outra no mesmo produto mais tarde, com o mesmo mapa de ilhas/zonas.

O mockup já escolheu **emprego primeiro** — faz sentido. Habitação no mesmo produto, mais tarde, a reutilizar ilha/zona.

#### O risco que mata o projeto se não estiver pensado: dados

Sem anúncios, a app é um filtro vazio. Fontes possíveis, da mais honesta para a mais frágil:

1. **Utilizadores publicam** (precisa de contas, moderação, arranque frio).
2. **Parceiros** (imobiliárias, empresas) — lento para um projeto pessoal.
3. **Importar/agregar** sites públicos — atenção a termos de uso, scraping e dados pessoais.
4. **Dados de demonstração** só para o portefólio — válido na v0, mas o case study tem de o dizer.

Para o portefólio, uma v0 com **dados de exemplo** (2–3 ilhas, zonas reais, preços fictícios mas plausíveis) já prova o UX. A v1 «de verdade» precisa de um plano de origem dos anúncios.

#### Design (rascunho visual)

Ficheiro: `conteudo/projetos/refs/cv-empregos-mockup.png` (não vai para o site). **Pode mudar** — trata-se de direcção, não de UI final.

O que o ecrã já decide bem:

- Nome **CV Empregos**; cores próximas da bandeira (azul, vermelho, branco).
- Pesquisa no centro: Categoria, Ilha, Zonas, Tipo de horário → Procurar.
- Dois papéis: **Candidato** e **Empresa** (registo e login separados).
- Ilhas listadas (Santo Antão, São Vicente, São Nicolau, Sal, Boa Vista, …).
- Categorias de trabalho (agricultura, arquitectura, construção, …) e horário (part-time, full-time, estágio).

O que convém no próximo desenho (sem bloquear a v0):

- **Zona depende da ilha.** Sem ilha escolhida, zonas vazias ou desactivadas. No mockup o menu de zonas parece repetir ilhas — no produto as zonas são concelhos/bairros *dentro* da ilha.
- Falta **lista de resultados** e ficha da vaga; o case study precisa desses ecrãs, não só da home.
- Preço/salário não está neste mockup; se quiseres filtro de remuneração, entra depois.
- Login duplicado (candidato vs empresa) é claro; uma só página com escolha de papel também chega.
- A bandeira grande à direita era só decoração. Na capa publicada esse espaço passou a mostrar o **selector de ilha** (contagem de vagas por ilha + zonas da ilha escolhida); a bandeira ficou reduzida ao emblema do logótipo.

Para o portefólio, um mockup destes **já conta como artefacto** (PNG ou protótipo). Continua a não ir para `dados.md` até autorizares.

#### Âmbito sugerido para v0 (portefólio)

1. Escolher ilha (Santiago, São Vicente, Sal, … — as habitadas).
2. Depois: concelho/zona, intervalo de preço, tipo (T0–T4 **ou** tipo de vaga, conforme a vertical).
3. Lista de resultados + ficha do anúncio.
4. Uma ilha bem feita (ex.: São Vicente) vale mais do que nove ilhas a meio.

Fora da v0: pagamentos, chat, mapa 3D, app nativa, login social. Isso é produto comercial, não case study.

#### Stack (alinhada ao que já usas — não inflacionar)

Ainda não fechada. Hipótese honesta:

- Web: TypeScript, React (já no portefólio)
- API: FastAPI ou ASP.NET
- Dados: PostgreSQL
- Filtros: query na API, não «magia» no cliente com milhares de cards
- Mapa: opcional na v0; lista + zona chega. Mapa na v1 se acrescentar.

Não prometer ML, matching «inteligente» nem scraping se não fores construir isso.

#### Encaixa no site?

Sim, **quando existir um artefacto** (repo, demo, ou pelo menos ecrãs reais). Agora é só ideia: **não copiar para `dados.md`**.

Campos do case study ainda `vazio` até haver abordagem e resultado reais. Inventar outcome («já ajuda mil pessoas») seria lorem.

#### Decisões em aberto

- [x] Vertical v0: **emprego** (habitação depois) — inferido do mockup
- [x] Nome de trabalho: **CV Empregos** (pode mudar)
- [ ] Primeira ilha a tratar a sério (o mockup lista várias)
- [ ] Origem das vagas (demo vs reais)
- [ ] Web only na v0?
- [ ] Lista de resultados + ficha da vaga (ainda não no mockup)

#### Campos (já copiados para `dados.md`)

Capa: ficheiro do autor `capas_projetos/cv-empregos.png` → `public/projetos/cv-empregos/cover-3.png` (mesmo frame 1600×1000 do ML Selector: `node scripts/frame-cover.mjs …`).

Ao mudar o desenho, **incrementar o número no nome** (`cover-3.png`, …) e actualizar `cover` em `dados.md`. Browsers e CDN guardam a imagem por URL; manter o mesmo nome faz aparecer a versão antiga.

Snapshot dos campos publicados:

```
### project.cv-empregos
- slug: cv-empregos
- featured: false
- yearStart: 2026
- yearEnd: vazio
- cover: vazio
- repo: vazio
- demo: vazio
- tags: TypeScript, React, PostgreSQL
- kicker.pt: Projeto pessoal
- kicker.en: Personal project
- title.pt: CV Empregos
- title.en: CV Empregos
- role.pt: Produto e desenvolvimento
- role.en: Product and development
- summary.pt: Pesquisa de emprego em Cabo Verde por categoria, ilha, zona e tipo de horário.
- summary.en: Job search in Cape Verde by category, island, zone and working hours.
- problem.pt: vazio
- problem.en: vazio
- approach.pt: vazio
- approach.en: vazio
- outcome.pt: vazio
- outcome.en: vazio
```

---

### ideia.2 — CV Casas (habitação)

**Estado:** **publicado** com `status: idea` — bloco `### project.cv-casas` na secção 12 de `dados.md`. Ainda não iniciado.

**Relação com o CV Empregos:** produto **separado**. Partilha a geografia (ilha → zona); filtros, anunciante e ciclo de vida são outros (arrendar/comprar, tipologia, preço). Não misturar no mesmo case study.

**Resumo:** casas e apartamentos em Cabo Verde, ilha primeiro, depois zona, tipologia e preço. Procura actual: redes sociais e páginas no Facebook.

**Análise:** mesmo argumento geográfico do emprego, sem comparações a plataformas. O risco dos dados (origem dos anúncios) aplica-se igual.

**Sem capa, de propósito.** `cover`: `vazio` → o card usa o padrão geométrico do tema. Como o projeto ainda não arrancou, um mockup daria a ideia errada de trabalho feito. Quando houver ecrãs reais, gerar a capa e apontar `cover` para ela.

---

### ideia.3 — ML Selector

**Estado:** **publicado** com `status: done` — `### project.ml-selector`. Capa: ficheiro do autor em `capas_projetos/ml_selector.png` → `public/projetos/ml-selector/cover-1.png` (não gerada).

**No site:** não nomear a base de dados real, o servidor, nem a empresa. Frontend genérico; copy fala só de «base de dados relacional» e consultas de leitura.

**O que é:** pergunta em português → seletor semântico local (tabelas) → LLM gera SELECT → backend só executa leitura → grelha no React. Também existe app Tauri.

**Detalhe técnico confirmado no código (para manter a copy honesta):**

- Embeddings locais: `paraphrase-multilingual-MiniLM-L12-v2` (sentence-transformers), similaridade de cosseno contra descrição + DDL de cada tabela do dicionário; fallback só por palavras-chave se as bibliotecas ML não carregarem.
- Heurísticas por cima: sinónimos PT, intenção por domínio, tabelas canónicas, reforço para vistas, penalização de `aux`/`log`/`hist`/`audit`.
- Peso do score com ML ativo: 35% semântica, 45% palavras-chave, 20% intenção; corte dinâmico escolhe **1 a 3** tabelas (não cinco) conforme a distância entre o 1.º e o 2.º lugar.
- Geração: `gpt-oss:120b` servido por Ollama (`LLM_BASE_URL` por omissão `https://ollama.com/v1/`, cliente OpenAI), `temperature=0`, um pedido por tabela em paralelo, SQL corrigido/validado para leitura.
- Feedback: `POST /api/feedback` grava `feedback_log.jsonl` (prompt, tabela, SQL, útil, tabela sugerida) e a `FeedbackMemory` recarrega e reajusta o ranking por sobreposição de tokens da pergunta. Não há re-treino do modelo de embeddings — a copy não deve dizer «treinar o modelo».
- Não publicar no site: nomes reais de tabelas, prefixos internos, motor da base de dados, empresa.

**Não publicar o repo tal como está** enquanto o backend tiver credenciais ou nomes internos no código.

---

### ideia.4 — Document Generator / DocBuilder

**Estado:** rascunho — **não publicado**. Esteve em `dados.md` e foi retirado: para o site, o produto ainda está demasiado incompleto. Código em `C:\Users\william.monteiro\projetos\document_generator_platform`. Título público escolhido: **DocBuilder**.

**No site, se um dia for autorizado:** não colar o JSON de exemplo do repo (tem texto de estágio sobre pacotes MSI/FlexApp/Intune — trabalho de empresa). Não afirmar PostgreSQL, TipTap, OAuth Google nem «várias normas bibliográficas» como se já existissem. Nome público possível: **DocBuilder** (é o que o dashboard mostra).

**O que é:** editor de documentos estruturados (capítulos, capa, índices) que grava JSON e gera PDF. Pensado para relatórios académicos, mas o plano é ser um gerador de vários tipos (CV, portefólio, manual, artigo).

**O que o código faz hoje (confirmado):**

- Frontend: React 18 + Vite + Tailwind, dashboard com lista de documentos, modal de templates, editor académico com sidebar de capítulos (`@dnd-kit`), blocos de texto/imagem/tabela/citação, editor de capa por posição, gestor de referências, gravar e descarregar PDF.
- Backend: FastAPI, documentos em ficheiros JSON em `backend/data/projects/` (não há PostgreSQL nem ORM). Geração de PDF com WeasyPrint: capa, índice geral, índice de figuras/tabelas, capítulos, citações no texto, lista de referências.
- Docker Compose: backend `8808`, frontend `5173`.
- Tipos no modal: trabalho académico, artigo, doc técnica, portefólio, CV, manual, livro, relatório empresarial.

**O que o plano promete e o código ainda não tem:**

- TipTap está no `package.json` e **não é importado**. O editor académico usa `textarea` e blocos próprios.
- Só o **Trabalho Académico** abre um editor. Os outros tipos mostram «Editor em Construção».
- O seletor de norma (APA, Vancouver, Harvard, Chicago, MLA, IEEE, ABNT, NP 405, ISO 690) existe na UI; o PDF formata referências **só em APA**.
- Sem autenticação, sem JWT, sem Google OAuth (só um guia markdown).
- CORS `allow_origins=["*"]`. Sem utilizadores: qualquer cliente na API lê e apaga todos os JSON.
- Sem live preview no ecrã; PDF por pedido HTTP.

**Encaixa no portefólio?** Ainda não. O problema é claro (Word/LaTeX para quem só quer um relatório bem paginado) e a stack é alinhada (React + FastAPI + PDF), mas com um só tipo de documento a funcionar, uma só norma no PDF, sem autenticação e sem pré-visualização, o card diria pouco mais do que «em desenvolvimento». Fica em espera.

**Riscos:**

- Overclaim: dizer «plataforma de documentos com 9 templates e 9 normas» quando 8 editores estão vazios e 8 normas não geram PDF.
- Confidencialidade: o único JSON de dados no repo tem texto de estágio (MSI, FlexApp, Intune). Não usar como demo pública.
- Repo público agora: API sem auth + JSON locais = não.
- Nome: título público escolhido é **DocBuilder**, o da UI.

**O que falta para valer um card:** pré-visualização do PDF ao lado do editor, mais de um tipo de documento com editor real, mais do que APA nas referências, autenticação na API e um documento de exemplo limpo (o atual tem texto de estágio) para servir de captura.

**Se e quando for publicado:** `status: building`, `yearStart: 2026`, `cover`/`repo`/`demo` vazios, `featured: false`. Campos a montar então; não duplicar aqui.

---

## Próximas ideias

_(continuar na conversa)_

<!--
### ideia.N — título provisório

**Estado:** rascunho | a construir | autorizado para o site

**Resumo:**

**Análise:**

**Campos propostos (não copiar para dados.md sem autorização):**

```
### project.slug
- slug:
- featured: false
- yearStart: 2026
- yearEnd: vazio
- cover: vazio
- repo: vazio
- demo: vazio
- tags:
- kicker.pt: Projeto pessoal
- kicker.en: Personal project
- title.pt:
- title.en:
- role.pt:
- role.en:
- summary.pt:
- summary.en:
- problem.pt:
- problem.en:
- approach.pt:
- approach.en:
- outcome.pt:
- outcome.en:
```
-->
