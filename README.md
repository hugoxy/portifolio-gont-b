# Victor G. Rocha — Currículo

Currículo profissional estático, publicado em [curriculo.gonti.com.br](https://curriculo.gonti.com.br).
HTML5 + CSS3 + JavaScript vanilla — **zero dependências, zero build step, zero CDN de terceiros**
(exceto a fonte do Google Fonts). Sobe direto no GitHub Pages.

Mesma linguagem visual do site institucional [gonti.com.br](https://gonti.com.br): os dois
compartilham tokens, camadas de CSS e padrões de componente.

## ✨ O que tem aqui

**Visual**
- Design system em CSS puro com `@layer`, custom properties e `color-mix()`
- Tema claro/escuro com persistência e sincronia automática com o sistema operacional
- Fundo animado (blobs em gradiente + grade com máscara radial)
- Glassmorphism no header, cards e painéis
- **Cubo 3D** em CSS puro (`preserve-3d`) nas frentes de atuação, com rotação automática,
  controles por aba e painel de texto sincronizado
- **Inclinação 3D** com perspectiva nos cartões de certificação, seguindo o cursor
- Cards com _spotlight_ que acompanha o cursor
- Linha do tempo da experiência com atividades recolhíveis, marquee da stack e terminal simulado
- Barra de progresso de leitura, scrollspy na navegação e botão "voltar ao topo"

**Engenharia**
- Ícones em sprite SVG inline — sem requisição externa, sem FOUC
- Tema aplicado antes da primeira pintura (script inline no `<head>`), sem flash
- `IntersectionObserver` para reveals, contadores e scrollspy; scroll com `requestAnimationFrame`
- **Durações calculadas em tempo de execução** a partir das datas de início/fim — o currículo
  não envelhece sozinho entre um deploy e outro
- Respeito total a `prefers-reduced-motion` e folha de estilo de impressão dedicada
- Acessibilidade: skip link, landmarks, `aria-expanded`, `focus-visible`, contraste e navegação por teclado

**Distribuição — por link, não por busca**
- `noindex, nofollow` no `<head>` e `Disallow: /` no `robots.txt`: a página é pública,
  mas fica fora dos índices de busca. **Os dois andam juntos** — reverter só um lado
  não recoloca a página no índice, e mantê-la fora depende de manter ambos.
- Sem `sitemap.xml` e sem JSON-LD (`Person`): existiam só para buscadores, e o JSON-LD
  ainda publicava nome, e-mail e telefone em formato legível por máquina.
- Open Graph e Twitter Card **mantidos** — não influenciam indexação e são o que
  gera a prévia decente quando você manda o link por WhatsApp, e-mail ou LinkedIn.
- `canonical` e `site.webmanifest` mantidos; `404.html` já nascia `noindex`.

## 🗂️ Estrutura

```
portifolio-gonti/
├── index.html            # página única
├── 404.html              # página de erro do GitHub Pages
├── assets/
│   ├── css/styles.css    # design system completo
│   ├── js/main.js        # todas as interações
│   └── images/
│       ├── logo-mark.svg          # marca (monograma V)
│       ├── favicon.svg            # favicon vetorial
│       ├── profile.jpg            # foto usada no cartão de perfil e no Open Graph
│       ├── GonTI_NoBG.png         # marca GonTI — apple-touch-icon e ícone do manifest
│       └── GonTI_NoBG_White.png   # marca GonTI, versão clara
├── CNAME                 # domínio customizado
├── robots.txt            # Disallow: / — ver "Distribuição" acima
├── site.webmanifest
├── .nojekyll             # publica os arquivos como estão
└── .github/workflows/deploy.yml   # publica a raiz no Pages, sem build
```

## 🔧 Rodar localmente

Abrir o `index.html` no navegador já funciona. Para um ambiente mais fiel
(caminhos absolutos do `404.html`, `manifest`, clipboard API):

```bash
# Python 3
python -m http.server 8080

# ou Node
npx serve -l 8080 .
```

Depois acesse `http://localhost:8080`.

> A API de clipboard (botões "Copiar") exige contexto seguro — funciona em
> `localhost` e em HTTPS. Há fallback para `execCommand` nos demais casos.

## 🌐 Deploy

Qualquer push na branch `main` publica automaticamente pelo workflow em
`.github/workflows/deploy.yml`, que envia a **raiz do repositório** como artefato.
Não há passo de build — se um `npm install` reaparecer ali, a mudança está errada
para este projeto.

- **Settings → Pages** → Source: `GitHub Actions`
- **Settings → Pages → Custom domain**: `curriculo.gonti.com.br` (o arquivo `CNAME` cuida disso)
- DNS: registro `CNAME` de `curriculo` → `hugoxy.github.io`

## 🎨 Customização

| O que mudar | Onde |
| --- | --- |
| Cores, sombras, tipografia, raios | bloco `@layer tokens` em `assets/css/styles.css` |
| Textos, experiências, certificações, contatos | `index.html` |
| Ícones | sprite `<svg class="sprite">` no final do `index.html` (padrão Feather, 24×24) |
| Marca | `<symbol id="i-logo">` no mesmo sprite + `assets/images/favicon.svg` e `logo-mark.svg` |
| Frases rotativas do hero | array `words` em `assets/js/main.js` |
| Faces do cubo 3D | `.cube__face` no `index.html` + painéis `.platform` correspondentes (mesma ordem) |
| Tecnologias da esteira | `.marquee__group` no `index.html` (**duplicar nos dois `<ul>`** — o loop depende disso) |
| Link do PDF do currículo | `href` dos dois botões "Baixar CV" no `index.html` |

> ⚠️ O sprite de ícones é ocultado por `.sprite` (dimensão zero), **nunca** por
> `display:none` — com `display:none` o gradiente da marca deixa de resolver dentro
> dos elementos `<use>` e o logo renderiza sem preenchimento.

### Cubo 3D e painéis: mantenha a ordem

A face `data-face="N"` do cubo é sincronizada com o painel `data-panel="N"` e com o
botão `data-face-btn="N"`. Ao adicionar ou remover uma frente, ajuste os três lugares
e o `translateZ` das faces em `styles.css` (metade da largura do cubo).

### Datas e durações

Cada período de trabalho carrega `data-start="AAAA-MM"` e, quando encerrado,
`data-end="AAAA-MM"`. O texto dentro de `<span data-duration>` é reescrito pelo JS
usando contagem inclusiva nas duas pontas — a mesma do LinkedIn, para o site não
divergir do perfil. O valor escrito no HTML é só o fallback sem JS; ao editar uma
data, atualize também esse texto.

O mesmo vale para os anos de carreira no bloco de números: o elemento com
`data-career-since="2018-04"` é recalculado a cada carregamento.

### Sobre os números

Os quatro números do topo (anos, empresas, clientes, certificações) são **contáveis
na própria página** — nenhum é estimativa. Ao incluir uma certificação ou um cliente
novo, ajuste o contador correspondente para que a nota abaixo continue verdadeira.
