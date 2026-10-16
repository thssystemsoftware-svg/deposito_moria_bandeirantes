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

## Imagens

`assets/logo-moria.svg` é uma marca vetorial criada para esta página, com nome legível e fundo transparente; cabeçalho e rodapé compartilham o mesmo arquivo e proporção. `assets/deposito-moria.webp` é uma ilustração gerada para a seção sobre a loja, não uma fotografia do estabelecimento real. O arquivo mantém a proporção 4:3 e tem dimensões declaradas no HTML para reservar espaço. As imagens não dependem de serviços externos.

## Vercel Web Analytics

A inicialização está em `JavaScript/javascript.js`, sem código inline incompatível com a CSP. Em HTTPS (exceto loopback), carrega `/_vercel/insights/script.js`; a CSP permite requisições para a mesma origem, incluindo `/_vercel/insights/view`. Para HTML estático, não é necessário instalar `@vercel/analytics` nem criar scripts npm de build/lint que apenas imprimam mensagens. A implementação considera a branch `vercel/install-vercel-web-analytics-kofzo3`, sem reintroduzir o HTML antigo dessa branch.

Na Vercel, habilite Web Analytics no projeto e faça um novo deploy. Verifique a carga do script e o envio de pageviews na aba Network e no painel. Testes com endpoint simulado confirmam a integração e a CSP, mas não comprovam coleta real no projeto. Em outras hospedagens, remova ou substitua a integração para evitar requisições aos endpoints exclusivos da Vercel.

## Localização

Endereço confirmado: R. Mal. Hermes da Fonseca, 510, Jardim Sabara, Londrina - PR, 86188-120. O mapa incorporado e o link usam a mesma consulta completa. O resultado geográfico depende do Google; não há Place ID confirmado e uma consulta por endereço não garante um ponto cadastrado no Google Business.

## Validação

Conferir HTTP 200 para HTML, CSS, JavaScript, fontes e imagens. No navegador, verificar larguras 320, 390, 768, 1024 e 1440 px; menu móvel, Escape, fechamento ao selecionar uma seção, foco de teclado, navegação após redimensionar, ausência de rolagem horizontal e preferência por movimento reduzido. Sem JavaScript, os links do menu permanecem visíveis no celular.

O mapa é o único conteúdo incorporado externo. Depende de acesso a `maps.google.com` e seus serviços; há também um link para abrir a localização. Uma validação com mapa simulado não confirma acesso real ao Google Maps.

## Segurança e publicação

Não há formulários. Na Vercel, o script de Web Analytics fornecido pela plataforma coleta métricas de visita; verifique sua política de privacidade conforme os serviços usados. Os links externos usam `noopener noreferrer`. A CSP no HTML restringe scripts, CSS, fontes e imagens aos arquivos locais e permite somente os domínios Google indicados para frames. Não adicione scripts ou handlers inline sem revisar a política. O mapa pode tratar dados do visitante conforme as políticas do Google.

`vercel.json` já configura na Vercel os cabeçalhos HTTP `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()` e `Content-Security-Policy: frame-ancestors 'none'`. Em outras hospedagens, aplique os mesmos cabeçalhos. O último deve ser combinado com a política do HTML se o servidor também enviar uma CSP completa. `frame-ancestors` requer cabeçalho HTTP e não funciona por meta tag. HSTS só deve ser habilitado após confirmar HTTPS no domínio e nos subdomínios envolvidos. Esses cabeçalhos dependem da hospedagem e não são aplicados pelo servidor de desenvolvimento Python.

Os arquivos CSS, JS e fontes podem receber cache na hospedagem, mas não use cache imutável sem versionar os nomes dos arquivos. Esta revisão não constitui certificação jurídica, de privacidade ou de segurança da hospedagem.
