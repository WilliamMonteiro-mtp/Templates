# Estrutura de pastas (alvo)

Quando houver app, ler pessoa de **`conteudo/dados.md`**.

```
portefolio/
  conteudo/
    dados.md               FONTE ÚNICA da pessoa
    dados.modelo.md        copiar para dados.md (outra pessoa)
    LEIA-ME.md
  design/                  genérico
  docs/plano.md
  public/media/  public/cv/  public/projetos/
  src/
    app/[locale]/...
    components/ui/         PortraitSlot, ContactList, ...
    lib/dados.ts           parse / mapeia dados.md
    content/pt.json        só chrome UI
```

```
conteudo/dados.md     →  todas as secções e slots
design/tokens.md      →  CSS
design/sitemap.md     →  rotas
```
