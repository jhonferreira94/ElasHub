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
 * - white       (#FFFFFF) sobre brand.primary (#196D44) ...... ~6.3:1   AA
 * - brandDark   (#0E1630) sobre accent/lima (#DCEF13) ....... ~13.9:1  AAA (realce "Elas")
 * - accentText  (#4E5506) sobre surface (#FFFFFF) ........... ~8.0:1   AA  (lima como texto)
 * - successText (#1A7340) sobre surface/successTint ......... ~5.1:1   AA  (status/badge)
 * - warningText (#9A5E0A) sobre surface/warningTint ......... ~4.8:1   AA  (status/badge)
 * - errorText   (#B42318) sobre surface/errorTint ........... ~6.4:1   AA  (status/erro)
 *
 * Obs.: success (#2E9E5B), warning (#C77D11) e error (#D92D20) são p/ preenchimentos/ícones (>=3:1);
 * para TEXTO sobre claro use successText/warningText/errorText.
 *
 * Marca: o verde vibrante do logo (#2BB673) e a lima (#DCEF13) reprovam contraste com texto
 * branco/ícone sobre claro; por isso `primary` (que carrega texto/ícone) usa o verde profundo
 * #196D44, e a lima (`accent`) é usada como realce/fundo sempre com texto escuro (brandDark/ink).
 * Atenção: success (#2E9E5B) e primary (#196D44) são verdes próximos — diferencie status por
 * tonalidade + ícone/badge tonal, nunca só pela cor.
 */

/** Paleta crua — não use direto nas telas; prefira os tokens semânticos abaixo. */
export const Palette = {
  // Marca — Verde (Gestão / Crescimento)
  brandGreen50: '#EBF9F1',
  brandGreen100: '#CEF0DD',
  brandGreen300: '#6CCD97',
  brandGreen400: '#3FB275',
  brandGreen500: '#2BB673',
  brandGreen600: '#1D8953',
  brandGreen700: '#196D44',
  brandGreen800: '#165737',

  // Marca — Lima (destaque "Elas" / Hub)
  lime50: '#FBFEBD',
  lime300: '#DCEF13',
  lime500: '#A6B604',
  lime800: '#4E5506',

  // Marca — Azul Noturno (fundos escuros / marca profunda)
  navy50: '#F4F5F8',
  navy500: '#3F5080',
  navy700: '#263152',
  navy800: '#0E1630',

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
    /** Cor de marca / ações primárias (verde profundo, AA com texto branco). */
    primary: Palette.brandGreen700,
    /** Estado pressionado/ativo da cor de marca. */
    primaryActive: Palette.brandGreen800,
    /** Fundo tonal claro (badges, avatar, chips). */
    primaryTint: Palette.brandGreen50,
    /** Tom intermediário (gráficos, barras inativas). */
    primaryTintAlt: Palette.brandGreen100,
    /** Verde médio (degradê de gráficos/ilustrações). */
    primaryMid: Palette.brandGreen300,
    /** Verde vibrante do logo — realce decorativo (sem texto branco/ícone sobre claro). */
    primaryBright: Palette.brandGreen500,

    /** Lima de destaque ("Elas"/Hub) — realce/fundo, sempre com texto escuro. */
    accent: Palette.lime300,
    /** Lima legível como texto/ícone sobre fundo claro (AA). */
    accentText: Palette.lime800,
    /** Azul-noturno da marca — fundos escuros / superfícies profundas. */
    brandDark: Palette.navy800,
    /** Texto/ícone claro sobre superfícies brandDark. */
    textOnDark: Palette.white,

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
