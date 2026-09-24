# Data Dynamics Dashboard

Um template de dashboard premium desenvolvido com **Next.js**, **React**, e **Tailwind CSS**, com foco em visualização de dados dinâmica, design responsivo, temática dark premium (Deep Navy) e suporte completo para internacionalização (PT/EN).

## 🚀 Funcionalidades

- **Design Premium**: UI ultra-moderna focada no "Dark Mode" (fundo *Void*, realces néon).
- **Internacionalização (i18n)**: Suporte nativo para alternar entre Português (PT) e Inglês (EN) através de rotas `/pt` e `/en` utilizando um dicionário local leve.
- **Gráficos Dinâmicos**: Visualizações SVG desenhadas do zero para performance máxima (Network Graphs, Heatmaps, Bar/Line Charts).
- **Quatro Vistas Principais**:
  - `MarketTrendsView`: Análise de Sentimento, Receitas e Métricas Globais.
  - `SupplyChainView`: Atividade de *Pipelines*, *Hubs* IA, e Gráficos de Redes de Dados (Network Nodes) e Detecção de Anomalias.
  - `GeospatialHeatmapView`: Mapa global vetorial de alta performance para mostrar saturação de dados em tempo real.
  - `ClientBillingView`: Faturação, assinaturas e tabela complexa interativa com histórico.
- **Micro-interações e Transições**: Todos os componentes (desde gráficos a perfis de autor) contam com transições suaves e estados *hover*.
- **Personalização de Autor**: Badge "Criado por" atualizada com destaque visual personalizável.

## 🛠 Tecnologias

- **Framework**: Next.js 15 (App Router)
- **Estilos**: Tailwind CSS v4
- **Ícones**: Lucide React
- **Fonte**: Plus Jakarta Sans

## 📦 Estrutura de Ficheiros Relevantes

```bash
src/
├── app/
│   ├── [locale]/             # Rotas dinâmicas para internacionalização
│   │   ├── layout.tsx        # Shell de página com tipografia
│   │   └── page.tsx          # Wrapper principal e passagem de idioma
│   └── globals.css           # Variáveis CSS premium e design tokens
├── components/
│   ├── Portfolio.tsx         # Componente "Shell" do dashboard e Menu
│   └── views/                # Todos os sub-componentes / Dashboards
│       ├── ClientBillingView.tsx
│       ├── GeospatialHeatmapView.tsx
│       ├── MarketTrendsView.tsx
│       └── SupplyChainView.tsx
```

## ⚙️ Como executar

1. Instalar as dependências:
   ```bash
   npm install
   ```

2. Executar o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Abrir no navegador:
   Aceda a [http://localhost:3000](http://localhost:3000) (ou `http://localhost:3000/pt` / `http://localhost:3000/en`).
