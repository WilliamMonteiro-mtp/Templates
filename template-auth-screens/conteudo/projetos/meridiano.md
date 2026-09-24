# Meridiano — notas de verificação

> Publicado: `### project.meridiano` em `conteudo/dados.md` (secção 12). Editar lá, não aqui.
> Código: `C:\Users\william.monteiro\p_projetos\world-cities` (nome técnico: world-cities; nome na UI: Meridiano).

Estas notas existem para a copy do site não crescer para além do que o código faz.

## Confirmado no código

- **Números:** 50 248 localidades carregadas (3 linhas do dataset descartadas por id repetido ou coordenadas inválidas), 241 países, 250 capitais nacionais, 424 registos sem população.
- **Backend:** FastAPI, Pydantic, sem base de dados. Dados em memória (`CityStore`) com índices por id, ISO3 e pesquisa sem acentos. API só de leitura (CORS limitado a GET/HEAD/OPTIONS), limite de 120 pedidos por minuto por IP. 20 testes de API a passar.
- **Frontend:** Next.js 15 (App Router), React 19, TypeScript, Tailwind, TanStack Query, Leaflet + markercluster, lucide-react.
- **Páginas:** início, explorar, cidade, mapa, países, país, rankings, capitais, skills, sobre.
- **Dados:** SimpleMaps World Cities (Basic) sob CC BY 4.0; mosaicos OpenStreetMap via CARTO. Atribuições visíveis no rodapé, na página sobre e no mapa.

## Não afirmar no site

- «50 mil pontos no mapa»: o mapa mundial mostra uma **amostra** acima de um mínimo de população. As áreas geográficas exactas só são usadas nas fichas de cidade e de país.
- IA ou assistente em linguagem natural: existe em `docs/ia.md` como fase futura, **não** está implementado.
- PostgreSQL, pipeline ETL, Docker, CI/CD, deploy em produção, autenticação: nada disto existe.
- Testes end-to-end ou testes de frontend: só há testes da API.
- Recharts, react-hook-form e zod estão nas dependências mas **não são usados** — não entram nas tags.

## Estado

`status: done`. Sem `repo` nem `demo`: a pasta não tem repositório git nem deploy público. Só pt-PT na aplicação.
