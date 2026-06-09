# ElasHub

App mobile para apoiar mulheres empreendedoras na evolução do seu negócio: conteúdos por
tópico, planos de evolução, ferramentas práticas (como planilhas) e um painel de
acompanhamento.

Este repositório guarda o **aplicativo** (feito em Expo / React Native) e o **design system**
do produto (cores, tipografia, espaçamentos, componentes e ícones). O desenho das telas vive
em um protótipo no Figma; o código aqui é a base que transforma esse protótipo em app de
verdade.

---

## Índice

- [O que é o ElasHub](#o-que-é-o-elashub)
- [Tecnologias](#tecnologias)
- [Como rodar o projeto](#como-rodar-o-projeto)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Design System](#design-system)
  - [Tokens (a fonte da verdade)](#tokens-a-fonte-da-verdade)
  - [Cores](#cores)
  - [Tipografia](#tipografia)
  - [Espaçamento e cantos](#espaçamento-e-cantos)
  - [Componentes prontos](#componentes-prontos)
  - [Ícones](#ícones)
- [Telas do produto](#telas-do-produto)
- [Acessibilidade](#acessibilidade)
- [Scripts disponíveis](#scripts-disponíveis)

---

## O que é o ElasHub

O ElasHub é um aplicativo pensado para ser simples e acolhedor. A ideia central é:

1. A pessoa escolhe um **tópico** que quer melhorar (por exemplo, finanças do negócio).
2. O app monta um **plano de evolução** com passos.
3. Em cada passo há **ferramentas** práticas (como uma planilha de fluxo de caixa) com
   instruções de "como usar".
4. Um **painel** mostra o progresso ao longo do tempo.

Tudo isso seguindo boas práticas de design (clareza, contraste, toques fáceis de acertar) e
acessibilidade.

---

## Tecnologias

- **Expo** (SDK 56) — facilita rodar o app no Android, iOS e Web com um comando só.
- **React Native** — a base do app para celular.
- **Expo Router** — navegação entre telas baseada em arquivos (cada arquivo vira uma rota).
- **TypeScript** — JavaScript com tipos, ajuda a evitar erros.
- **lucide-react-native** — biblioteca oficial de ícones do produto.

---

## Como rodar o projeto

Você precisa do **Node.js** instalado.

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o app:

   ```bash
   npx expo start
   ```

3. No terminal aparecem as opções para abrir:
   - no **Android** (`a`),
   - no **iOS** (`i`),
   - no **navegador / Web** (`w`),
   - ou no app **Expo Go** lendo o QR Code com o celular.

---

## Estrutura de pastas

```
elashub/
├─ src/
│  ├─ app/                 # Telas/rotas (Expo Router — navegação por arquivos)
│  │  ├─ _layout.tsx       # Layout raiz (tema claro/escuro + abas)
│  │  ├─ index.tsx         # Tela inicial
│  │  └─ explore.tsx       # Tela de exemplo
│  ├─ components/
│  │  ├─ ui/               # Componentes do design system (reutilizáveis)
│  │  │  ├─ button.tsx     # Botão (primário, secundário, fantasma) + estado "loading"
│  │  │  ├─ input.tsx      # Campo de formulário + alternar senha
│  │  │  ├─ card.tsx       # Cartão de conteúdo
│  │  │  ├─ badge.tsx      # Selo de status (ex.: "Em andamento", "Concluída")
│  │  │  ├─ icon.tsx       # Componente de ícone (usa o mapa semântico)
│  │  │  ├─ screen-header.tsx  # Cabeçalho de tela com botão voltar
│  │  │  └─ index.ts       # "Barril": exporta todos os componentes acima
│  │  └─ ...               # Outros componentes utilitários
│  ├─ constants/
│  │  ├─ tokens.ts         # ⭐ Design tokens (cores, tipografia, espaços, raios)
│  │  ├─ icons.ts          # Mapa semântico de ícones (Lucide)
│  │  └─ theme.ts          # Tema base do template (claro/escuro)
│  └─ hooks/               # Hooks reutilizáveis (ex.: esquema de cor)
├─ assets/                 # Imagens, ícones do app, splash
├─ app.json               # Configuração do Expo (nome, ícones, plugins)
├─ package.json           # Dependências e scripts
└─ tsconfig.json          # Configuração do TypeScript
```

---

## Design System

O coração do produto é o design system. A regra de ouro é: **nunca escreva uma cor "solta"
(hex) nas telas** — sempre use os tokens. Assim, se um dia a cor mudar, muda em um lugar só.

### Tokens (a fonte da verdade)

Arquivo: [src/constants/tokens.ts](src/constants/tokens.ts)

Ele tem duas partes:

- `Palette` — a paleta "crua" (não use direto nas telas).
- `Tokens` — os nomes **semânticos** (use estes). Exemplo: em vez de `#8E44AD`, use
  `Tokens.color.primary`.

### Cores

| Token semântico         | Cor       | Para que serve                                  |
| ----------------------- | --------- | ----------------------------------------------- |
| `primary`               | `#8E44AD` | Cor da marca / ações principais                 |
| `primaryActive`         | `#7A3C97` | Botão pressionado                               |
| `primaryTint`           | `#F2E2F1` | Fundo suave (selos, avatar, chips)              |
| `textStrong`            | `#1F1B24` | Texto principal                                 |
| `textSoft`              | `#6B6577` | Texto secundário e placeholders                 |
| `background`            | `#FAF8FB` | Fundo da tela                                   |
| `surface`               | `#FFFFFF` | Cartões e contêineres                           |
| `border`                | `#E5E0EA` | Borda padrão de cartões e campos                |
| `success` / `successText` | `#2E9E5B` / `#1A7340` | Status "Concluída" (fundo/ícone e texto) |
| `warning` / `warningText` | `#C77D11` / `#9A5E0A` | Status "Em andamento" (fundo/ícone e texto) |
| `error` / `errorText`   | `#D92D20` / `#B42318` | Erros e falhas (fundo/ícone e texto)    |

> Dica de acessibilidade: as cores "fortes" (como `success`, `warning`, `error`) servem para
> preenchimentos e ícones. Para **texto** sobre fundo claro, use as variantes `...Text`
> (mais escuras), que passam no contraste mínimo recomendado.

### Tipografia

Família **Inter**. Papéis de texto prontos em `Tokens.typography`:

`h1`, `h2`, `h3`, `section`, `bodyStrong`, `body`, `label`, `caption` — cada um já vem com
tamanho, altura de linha e peso definidos.

### Espaçamento e cantos

- Espaçamentos seguem uma escala de 4 em 4 (`Tokens.space`): `xs` 4, `sm` 8, `md` 12,
  `lg` 16, `xl` 20, `xxl` 24.
- Cantos arredondados (`Tokens.radius`): de `sm` (8) até `round` (totalmente arredondado).

### Componentes prontos

Ficam em [src/components/ui](src/components/ui) e são importados pelo "barril"
[src/components/ui/index.ts](src/components/ui/index.ts):

- **Button** — variantes `primary`, `secondary` e `ghost`, com estado de carregamento.
- **Input** + **PasswordToggle** — campo de formulário com borda visível e botão de
  mostrar/ocultar senha.
- **Card** — cartão de conteúdo.
- **Badge** — selo de status (cores certas para contraste).
- **Icon** — ícone semântico.
- **ScreenHeader** — cabeçalho com botão de voltar.

### Ícones

Arquivo: [src/constants/icons.ts](src/constants/icons.ts)

Usamos a biblioteca **Lucide**. Em vez de importar o ícone direto, use um **nome semântico**
(ex.: `home`, `plans`, `dashboard`, `profile`, `search`, `finance`, `goal`, `download`,
`upload`, `showPassword`, `hidePassword`). Isso mantém tudo consistente e facilita trocar um
ícone no futuro.

---

## Telas do produto

O protótipo completo das telas está no Figma. As principais telas são:

1. Login
2. Cadastro
3. Home (início)
4. Tópicos (lista de assuntos)
5. Detalhe do tópico
6. Ferramentas do plano
7. Painel (acompanhamento)
8. Perfil
9. Detalhe da ferramenta (com "como usar")

Além das telas principais, há **estados** de tela já desenhados para cobrir situações reais:

- **Vazio** — quando uma busca não traz resultados ou ainda não existe um plano.
- **Erro** — por exemplo, quando o envio de uma planilha falha (com opção "Tentar novamente").

---

## Acessibilidade

O produto segue a recomendação **WCAG 2.1 nível AA**:

- Texto comum com contraste de pelo menos **4.5:1**.
- Ícones e elementos de interface com pelo menos **3:1**.
- Áreas de toque grandes o suficiente para acertar com o dedo.
- Estados claros para carregando, vazio, erro e sucesso.

Os contrastes principais já foram verificados e estão documentados no topo do arquivo de
tokens.

---

## Scripts disponíveis

| Comando             | O que faz                                  |
| ------------------- | ------------------------------------------ |
| `npm start`         | Inicia o Expo                              |
| `npm run android`   | Abre no Android                            |
| `npm run ios`       | Abre no iOS                                |
| `npm run web`       | Abre no navegador                          |
| `npm run lint`      | Verifica problemas no código              |
| `npm run reset-project` | Reseta para um projeto em branco       |

---

Feito com cuidado, seguindo design system e acessibilidade. 💜
