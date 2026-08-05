# Portfólio Pessoal

Portfólio estático (HTML5 + CSS3 + JavaScript vanilla), pronto para hospedar no GitHub Pages e preparado para migração futura a React/Next.js.

## Estrutura

```
/
├── index.html
├── 404.html
├── manifest.json
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── css/style.css      # todos os tokens de design e estilos
│   ├── js/data.js         # conteúdo do site (edite aqui)
│   ├── js/main.js         # renderização e interações
│   ├── images/            # foto de perfil, capas de projeto, og-cover
│   ├── icons/favicon.svg
│   └── fonts/
├── components/            # reservado para futura extração de componentes
└── projects/               # reservado para projects.json futuro
```

## Como personalizar

1. **Conteúdo**: edite `assets/js/data.js` — nome, cargo, tecnologias, projetos, timeline, certificações, objetivos e contato. É a única fonte de dados do site.
2. **Textos do herói e cabeçalho**: edite diretamente em `index.html` (nome, cargo, descrição, links de GitHub/LinkedIn/currículo).
3. **Foto de perfil**: substitua `assets/images/foto-perfil.jpg`.
4. **Currículo**: adicione o PDF em `assets/curriculo.pdf`.
5. **Usuário do GitHub**: altere `githubUsername` em `data.js` (usado nas estatísticas e cards do GitHub) e os links `github.com/seuusuario` no `index.html`.
6. **Cor de destaque**: altere a variável `--accent` (e `--accent-soft`, `--accent-text`) em `assets/css/style.css`.

## Publicar no GitHub Pages

1. Crie um repositório `seuusuario.github.io` (ou outro nome, ajustando a base URL).
2. Envie estes arquivos para a branch `main`.
3. Em **Settings → Pages**, selecione a branch `main` e a pasta raiz.
4. Atualize `sitemap.xml`, `robots.txt` e as meta tags Open Graph em `index.html` com a URL final.

## Migração futura para React/Next.js

- Cada seção do `index.html` corresponde a um futuro componente (`Hero`, `About`, `Stack`, `Projects`, `Timeline`, `Stats`, `Certifications`, `Roadmap`, `Objectives`, `Contact`).
- `data.js` já está no formato de objetos/arrays — pode ser importado quase sem alterações como dados estáticos ou convertido em `projects.json` / `stack.json`.
- `main.js` separa renderização por função (`initStack`, `initProjects`, etc.) — cada uma mapeia para um componente com estado próprio.

## Licença

MIT.
