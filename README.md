# Portfólio Alex Ferreira — Opção 1 funcional

Versão reconstruída da Opção 1, sem dependências de Bootstrap ou jQuery.

## Executar localmente

O site usa módulos JavaScript e `fetch`, portanto deve ser aberto por um servidor HTTP:

```bash
python3 -m http.server 4173
```

Depois acesse `http://localhost:4173`.

## Dados do portfólio

1. O site consulta primeiro a planilha Google configurada em `app.js`.
2. Se a consulta falhar ou ultrapassar seis segundos, carrega `data/portfolio.json`.
3. O fallback foi gerado a partir da planilha Excel do projeto original e contém 62 linhas válidas com título e link de vídeo.

Para acrescentar proporções de vídeo, a planilha pode receber a coluna `Aspect` ou `Formato`, usando valores como `16:9` ou `9:16`.

## Recursos implementados

- layout responsivo da Opção 1;
- português/inglês automático, com preferência manual persistente;
- portfólios Audiovisual e Programação;
- categorias e filtros avançados;
- modal acessível com player YouTube sem cookies;
- suporte a links por ID, `watch`, `youtu.be`, `embed` e Shorts;
- suporte a player 16:9 e 9:16;
- mapa seguro de ícones e fallback por iniciais;
- conteúdo externo montado com DOM seguro, sem interpolação em `innerHTML`;
- formulário funcional por `mailto`;
- cabeçalhos de segurança para Vercel;
- estados de falha da planilha, imagem e ausência de resultados.

## Observação

A interface está pronta para ser publicada como site estático na Vercel. Antes de substituir o site atual, revise textos, datas, links sociais e o número do WhatsApp.
