# Template Analytics Dashboard (DATAVIEW) 📊

Este template é um dashboard analítico altamente denso, construído para aplicações de dados profundas (Data SaaS, Business Intelligence ou painéis de controlo de alta performance). Construído nativamente com Next.js 15, React e Tailwind CSS v4.

## 🎨 Arquitetura de Design & Estética (Dark Mode Premium)

O design adota um modo escuro rigoroso que minimiza o cansaço visual, maximizando simultaneamente a perceção e o destaque dos dados críticos. 

*   **Paleta de Cores (`globals.css`):**
    *   Fundo principal (Void): `#14161F` (Cinza muito escuro azulado)
    *   Cartões de conteúdo (Card): `#1D212B`
    *   Realces (Accents): 
        *   Verde (`#25C193`) para tendências positivas e lucros.
        *   Roxo (`#8B5CF6`) e Azul (`#3B82F6`) para categorização de dados.
        *   Laranja (`#F97316`) para avisos e métricas secundárias.
*   **Tipografia:** Inter / System Sans, desenhada para uma leitura nítida e técnica. 
*   **Densidade da UI:** Extremamente alta (fonte `text-sm` a `text-[9px]`), desenhada para ecrãs de trabalho e focada em apresentar a maior quantidade de dados de forma hierarquicamente organizada, em vez de recorrer a scroll.

## 🚀 Funcionalidades Principais

1.  **Sidebar de Navegação Extensiva:** Menu com dois níveis de hierarquia (Geral vs Workspace), separador de ferramentas, definições e perfil de utilizador fixado na base.
2.  **Cabeçalho Funcional:** Barra de pesquisa embutida flexível, alertas integrados e filtros de tempo globais ("Last 30 days").
3.  **Gráficos Estilizados e Simulados via SVG:**
    *   *Line & Area Charts:* Rendimento e crescimento ao longo do tempo usando preenchimentos gradientes transparentes e linhas nítidas.
    *   *Donut Charts:* Alocação de tráfego por canal com valores consolidados centrais.
    *   *Sankey Diagram:* Representação complexa de fluxo de aquisição de clientes.
    *   *Scatter Plot (Dispersão):* Visualização de valor e custo de aquisição.
    *   *Mapas de Calor (Heatmap):* Mapa mundo de topologia com destaques regionais para vendas globais.
4.  **Tabelas de Alta Performance:** Grelhas estruturadas com micro-filtros em linha, apresentando rácios de conversão com indicadores geométricos.
5.  **Micro-interações:**
    *   Links que mudam de cor suavemente (transições CSS).
    *   Painéis interativos que destacam a navegação no menu à esquerda e linhas de lista (`hover:bg-[var(--card-hover)]`).

## 🛠️ Tecnologias Utilizadas

*   **Next.js:** (App Router + Server Components base).
*   **Tailwind CSS:** Variáveis nativas definidas no `globals.css`.
*   **Lucide React:** Iconografia de interface otimizada.
*   **SVGs em Linha:** Grande parte dos gráficos é gerada via markup puro HTML/SVG no componente para um tempo de renderização instântaneo, sem necessidade de bibliotecas louras como o Chart.js (completamente personalizável a qualquer biblioteca terceira se desejado).

## 🏃 Como Correr Localmente

Gere o ambiente de desenvolvimento local na porta especificada:

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar.

## ⚙️ Modificações Customizadas (Cheat Sheet)

*   Para alterar o logotipo "DATAVIEW", procure a secção `<aside>` do ficheiro `src/components/Portfolio.tsx`.
*   Para ajustar o tom geral do Dashboard Escuro (ex. mais preto puro ou mais azul naval), refine o valor da variável `--void` em `src/app/globals.css`.
