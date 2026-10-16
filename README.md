# Depósito Moriá — Tend Tudo

Site estático em português, com as cores, fontes e estrutura da página original.

## Executar

Na raiz deste repositório:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Não exige instalação, Node.js ou build. Publique os arquivos estáticos mantendo os caminhos relativos e as maiúsculas das pastas.

- `index.html`: conteúdo, navegação, metadados e política de segurança.
- `CSS/css.css`: utilitários CSS compilados do Tailwind 3.4.17 e estilos personalizados, legíveis no final. O navegador não executa Tailwind. Edite o CSS diretamente; novas classes precisam de regras correspondentes nesse arquivo.
- `CSS/fonts.css` e `CSS/icons.css`: fontes e ícones locais.
- `JavaScript/javascript.js`: menu responsivo, foco e acessibilidade.
- `assets/`: fontes licenciadas e placeholders SVG locais.

As fontes Montserrat e Roboto foram obtidas dos pacotes oficiais Fontsource 5.2.8; os ícones são Font Awesome Free 6.4.0. As licenças estão em `assets/fonts/`.

## Imagens pendentes

O repositório original contém apenas o HTML: `logo-removebg-preview.jpg` e `image_038de4.jpg` não foram enviados. Foram mantidos placeholders com as cores usadas pelos fallbacks originais. Para utilizar as imagens reais, adicione os arquivos e substitua os caminhos das três imagens no HTML. Os SVGs atuais são placeholders, não a identidade visual oficial da loja.

## Validação

Conferir HTTP 200 para HTML, CSS, JavaScript, fontes e imagens. No navegador, verificar larguras 320, 390, 768, 1024 e 1440 px; menu móvel, Escape, fechamento ao selecionar uma seção, foco de teclado, navegação após redimensionar, ausência de rolagem horizontal e preferência por movimento reduzido. Sem JavaScript, os links do menu permanecem visíveis no celular.

O mapa é o único conteúdo incorporado externo. Depende de acesso a `maps.google.com` e seus serviços; há também um link para abrir a localização. Uma validação com mapa simulado não confirma acesso real ao Google Maps.

## Segurança e publicação

Não há dependências JavaScript de terceiros em execução nem formulários que coletem dados. Os links externos usam `noopener noreferrer`. A CSP no HTML restringe scripts, CSS, fontes e imagens aos arquivos locais e permite somente os domínios Google indicados para frames. Não adicione scripts ou handlers inline sem revisar a política. O mapa pode tratar dados do visitante conforme as políticas do Google.

Na hospedagem, habilite HTTPS e configure os cabeçalhos HTTP `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()` e `Content-Security-Policy: frame-ancestors 'none'`. O último deve ser combinado com a política do HTML se o servidor também enviar uma CSP completa. `frame-ancestors` requer cabeçalho HTTP e não funciona por meta tag. HSTS só deve ser habilitado após confirmar HTTPS no domínio e nos subdomínios envolvidos. Esses cabeçalhos dependem da hospedagem e não são aplicados pelo servidor de desenvolvimento Python.

Os arquivos CSS, JS e fontes podem receber cache na hospedagem, mas não use cache imutável sem versionar os nomes dos arquivos. Esta revisão não constitui certificação jurídica, de privacidade ou de segurança da hospedagem.
