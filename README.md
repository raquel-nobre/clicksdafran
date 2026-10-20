# Clicks da Fran — site de fotografia

Site estático em HTML, CSS e JavaScript, organizado em páginas separadas para facilitar manutenção.

## Estrutura

- `index.html`: página inicial
- `newborn.html`, `gestante.html`, `familia.html`: páginas de cada tipo de ensaio
- `css/style.css`: estilos compartilhados
- `js/main.js`: menu mobile, links de contato e galeria ampliável (lightbox)
- `assets/images/`: imagens da página inicial e galerias por categoria

## Antes de publicar

1. **Troque as imagens provisórias pelas fotos reais.** Os arquivos em `assets/images/newborn/`, `assets/images/gestante/` e `assets/images/familia/` são placeholders gerados para mostrar a composição da galeria. Substitua cada JPG mantendo os nomes `01.jpg` até `09.jpg`, ou atualize os caminhos no HTML. Troque também os SVGs ilustrativos usados na página inicial por imagens da sua marca/portfólio, mantendo os nomes ou alterando os `src` correspondentes.
2. Abra `js/main.js` e preencha `whatsappNumber` com o número completo, somente dígitos, incluindo país e DDD (ex.: `5561999999999`). O Instagram está configurado como `clicksdafran`; ajuste se necessário.
3. Revise textos, descrição, links e informações de atendimento antes de publicar.
4. Teste localmente abrindo `index.html` no navegador. Para desenvolvimento, a extensão Live Server do VS Code também funciona bem.

## Publicar no GitHub Pages

1. Envie os arquivos e pastas para a raiz do repositório GitHub (não envie apenas o ZIP).
2. Em **Settings → Pages**, escolha a branch usada pelo projeto e a pasta `/ (root)`.
3. Salve e aguarde o GitHub Pages publicar.
4. Para usar o domínio próprio, configure-o em **Settings → Pages → Custom domain** e aplique no provedor do domínio os registros DNS indicados pelo GitHub.

As páginas usam caminhos relativos, então funcionam tanto em domínio próprio quanto em um repositório publicado pelo GitHub Pages.
