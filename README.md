# ContaCerta — site institucional

Site institucional independente do aplicativo ContaCerta. Next.js App Router, TypeScript, Tailwind CSS, Framer Motion e Lucide React. Conteúdo em português brasileiro, layout responsivo e tema baseado na preferência do sistema.

## Executar e compilar

Requer Node.js 22 ou superior.

```sh
npm ci
npm run dev
npm run build
npm run typecheck
```

`npm run build` gera uma exportação estática em `out/`. Sirva essa pasta por HTTP para visualizar o resultado ou publique-a em um serviço de arquivos estáticos. `next start` não é usado na exportação estática; para desenvolvimento, use `npm run dev`.

As páginas `/`, `/contato/`, `/politica-de-privacidade/` e `/termos-de-uso/` são geradas na compilação, com metadados próprios. Sitemap e robots.txt também são exportados. A imagem Open Graph PNG foi gerada estaticamente com Next.js; o arquivo final está em `public/opengraph-image.png` e a fonte visual em `design/opengraph-source.tsx`. Assim, a imagem é entregue com uma extensão PNG reconhecida em hospedagens estáticas. A fonte Geist é distribuída pelo próprio projeto, sem requisições ao Google Fonts.

## Organização

- `app/`: rotas, layout, estilos, metadata, Open Graph, sitemap e robots.
- `components/layout/`: cabeçalho, menu mobile e rodapé.
- `components/sections/`: hero, benefícios, funcionalidades, etapas, privacidade, download e FAQ.
- `components/mockups/`: telas ilustrativas coerentes com os recursos do aplicativo.
- `components/ui/`: identidade, animações, botões de loja, formulário e layout de documentos.
- `lib/config.ts`: URLs e canais de contato configuráveis.
- `lib/content.ts`: navegação e perguntas frequentes.
- `public/`: símbolo vetorial próprio do ContaCerta, usado com `next/image`.

Os mockups são HTML/CSS e ícones vetoriais: não dependem de imagens grandes, não são controles do aplicativo e identificam os dados como ilustrativos. Não há avaliações, depoimentos, preços ou números de usuários inventados.

## Lojas, domínio e contato

Copie `.env.example` para `.env.local` e configure apenas os campos disponíveis:

```env
NEXT_PUBLIC_SITE_URL=https://seu-dominio-real.example
NEXT_PUBLIC_GOOGLE_PLAY_URL=
NEXT_PUBLIC_APP_STORE_URL=
NEXT_PUBLIC_CONTACT_EMAIL=
NEXT_PUBLIC_CONTACT_ENDPOINT=
```

O domínio do exemplo acima é apenas uma indicação de configuração; substitua pelo domínio efetivo e recompile. Sem configuração, os metadados usam `http://localhost:3000`, correspondente ao desenvolvimento local. Antes de publicar, defina o domínio real e recompile. Este projeto não altera o endereço do aplicativo mobile.

As URLs das lojas aceitam somente HTTPS nos domínios `play.google.com` e `apps.apple.com`. Campos vazios ou inválidos mantêm os botões desativados e identificados como **Em breve**, sem links falsos. A alteração exige recompilar e publicar novamente.

O proprietário informou que ainda não há URLs de lojas nem canal de contato. Assim, o formulário atual **copia uma mensagem localmente e não envia dados**. Se o navegador não permitir a cópia automática, o texto fica disponível para seleção e cópia manual.

Quando configurado:

- `NEXT_PUBLIC_CONTACT_ENDPOINT`: envia POST JSON `{ name, email, message }`, com `Accept: application/json`, tempo limite de 12 segundos e confirmação somente após uma resposta HTTP de sucesso. O endpoint deve aceitar CORS para o domínio do site e implementar validação, limites de uso e entrega real. Não coloque chaves secretas em variáveis `NEXT_PUBLIC_*`.
- Sem endpoint, mas com `NEXT_PUBLIC_CONTACT_EMAIL`: abre o cliente de e-mail com a mensagem preenchida. O usuário precisa confirmar o envio no cliente; o site não apresenta uma confirmação falsa de entrega.
- Endpoint e e-mail vazios: botão **Copiar mensagem**, com aviso explícito de que não há envio.

O conteúdo da Política de Privacidade e dos Termos de Uso é revisável e descreve a implementação atual. Identificação do responsável, canais de atendimento e condições definitivas precisam ser completados e revisados antes do lançamento público. Ao ativar um serviço de contato, atualize também a política com o serviço e as condições efetivas.

## Design e acessibilidade

Fundo branco e cinza `#F5F5F7`, azul `#007AFF`, verde de confirmação, tipografia Geist e hierarquia ampla. As seções seguem uma narrativa de produto: entender o benefício, ver os recursos, conhecer a rotina, entender a privacidade e acompanhar a disponibilidade nas lojas.

Menu mobile com estado expandido e fechamento por Escape, FAQ com elementos `details`/`summary`, rótulos de formulário, foco visível, link para pular ao conteúdo e suporte a `prefers-reduced-motion`. O conteúdo permanece visível sem animações quando JavaScript está desabilitado. Tema claro/escuro via `prefers-color-scheme`.

`next/image` é usado para a identidade vetorial. Como a hospedagem é estática, a configuração usa `unoptimized: true`; não há dependência do serviço de otimização do Next. Novas imagens raster devem ser fornecidas em dimensões adequadas e formatos eficientes.

WCAG 2.2 AA é o objetivo de implementação, sem alegação de auditoria ou certificação formal.

## Validação realizada

Build de produção e TypeScript aprovados. Foram verificadas as quatro páginas, metadata e imagem Open Graph, sitemap, robots e referências internas. Na prévia foram exercitados o menu mobile, fechamento com Escape, FAQ com mouse e teclado, e a cópia de mensagem sem envio externo. O layout foi conferido em larguras de celular, tablet e desktop.

Código-fonte vinculado ao repositório `git@github.com:Tiago061/contacertasite.git`. O site não foi publicado em uma hospedagem; versionar o código no GitHub não ativa a publicação do site.
