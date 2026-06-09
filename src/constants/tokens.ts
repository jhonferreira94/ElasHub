/**
 * ElasHub — Design Tokens (fonte única de verdade)
 *
 * Tokens compartilhados entre o protótipo (Figma) e o código.
 * Sempre consuma daqui em vez de escrever hex "soltos" nas telas/componentes.
 *
 * Contraste verificado para WCAG 2.1 AA (texto normal >= 4.5:1):
 * - text.strong (#1F1B24) sobre surface (#FFFFFF) ............ ~16.5:1  AAA
 * - text.soft   (#6B6577) sobre surface (#FFFFFF) ............ ~5.6:1   AA
 * - text.soft   (#6B6577) sobre inputBg (#F7F5F9) ............ ~5.2:1   AA  (placeholder)
 * - white       (#FFFFFF) sobre brand.primary (#8E44AD) ...... ~5.9:1   AA
 * - successText (#1A7340) sobre surface/successTint ......... ~5.1:1   AA  (status/badge)
 * - warningText (#9A5E0A) sobre surface/warningTint ......... ~4.8:1   AA  (status/badge)
 * - errorText   (#B42318) sobre surface/errorTint ........... ~6.4:1   AA  (status/erro)
 *
 * Obs.: success (#2E9E5B), warning (#C77D11) e error (#D92D20) são p/ preenchimentos/ícones (>=3:1);
 * para TEXTO sobre claro use successText/warningText/errorText.
 */

/** Paleta crua — não use direto nas telas; prefira os tokens semânticos abaixo. */
export const Palette = {
  purple900: '#5E2D74',
  purple700: '#7A3C97',
  purple500: '#8E44AD',
  purple300: '#BD8ECE',
  purple100: '#E4D4E8',
  purple50: '#F2E2F1',

  ink900: '#1F1B24',
  ink500: '#6B6577',

  white: '#FFFFFF',
  offWhite: '#FAF8FB',
  fill100: '#F7F5F9',
  fill200: '#EDECF1',

  line200: '#E5E0EA',
  line100: '#ECE6F0',

  green500: '#2E9E5B',
  green700: '#1A7340',
  green50: '#EAF6EF',
  amber500: '#C77D11',
  amber700: '#9A5E0A',
  amber50: '#FBF1E0',
  red500: '#D92D20',
  red700: '#B42318',
  red50: '#FDECEA',
} as const;

/** Tokens semânticos — use estes nas telas e componentes. */
export const Tokens = {
  color: {
    /** Cor de marca / ações primárias. */
    primary: Palette.purple500,
    /** Estado pressionado/ativo da cor de marca. */
    primaryActive: Palette.purple700,
    /** Fundo tonal claro (badges, avatar, chips). */
    primaryTint: Palette.purple50,
    /** Tom intermediário (gráficos, barras inativas). */
    primaryTintAlt: Palette.purple100,
    /** Roxo médio (degradê de gráficos/ilustrações). */
    primaryMid: Palette.purple300,

    /** Texto principal. */
    textStrong: Palette.ink900,
    /** Texto secundário e placeholders (AA-safe). */
    textSoft: Palette.ink500,
    /** Texto sobre superfícies de marca. */
    textOnPrimary: Palette.white,

    /** Fundo da tela. */
    background: Palette.offWhite,
    /** Superfície de cards/contêineres. */
    surface: Palette.white,
    /** Fundo de campos de formulário. */
    inputBg: Palette.fill100,
    /** Trilho de progresso / preenchimentos neutros. */
    track: Palette.fill200,

    /** Borda padrão (cards, inputs). */
    border: Palette.line200,
    /** Borda sutil (tab bar, divisores leves). */
    borderSubtle: Palette.line100,

    /** Sucesso (status "Concluída"). */
    success: Palette.green500,
    successTint: Palette.green50,
    /** Verde para texto/ícone sobre claro (AA). */
    successText: Palette.green700,
    /** Atenção (status "Em andamento"). */
    warning: Palette.amber500,
    warningTint: Palette.amber50,
    /** Âmbar para texto/ícone sobre claro (AA). */
    warningText: Palette.amber700,
    /** Erro (falha de envio, validação). */
    error: Palette.red500,
    errorTint: Palette.red50,
    /** Vermelho para texto/ícone sobre claro (AA). */
    errorText: Palette.red700,
  },

  /** Raio de canto. */
  radius: {
    sm: 8,
    md: 12,
    lg: 14,
    xl: 16,
    xxl: 20,
    pill: 22,
    round: 999,
  },

  /** Escala de espaçamento (4pt). */
  space: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
  },

  /** Papéis tipográficos (família Inter). */
  typography: {
    h1: { fontSize: 26, lineHeight: 32, fontWeight: '700' },
    h2: { fontSize: 22, lineHeight: 28, fontWeight: '700' },
    h3: { fontSize: 20, lineHeight: 26, fontWeight: '700' },
    section: { fontSize: 17, lineHeight: 22, fontWeight: '700' },
    bodyStrong: { fontSize: 15, lineHeight: 22, fontWeight: '600' },
    body: { fontSize: 15, lineHeight: 22, fontWeight: '400' },
    label: { fontSize: 13, lineHeight: 16, fontWeight: '600' },
    caption: { fontSize: 13, lineHeight: 16, fontWeight: '400' },
  },
} as const;

export type ColorToken = keyof typeof Tokens.color;
export type RadiusToken = keyof typeof Tokens.radius;
export type SpaceToken = keyof typeof Tokens.space;
export type TypographyToken = keyof typeof Tokens.typography;
