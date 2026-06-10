'use client';
import { vars } from 'nativewind';

/**
 * Tokens ElasHub sobre a estrutura do Gluestack UI.
 *
 * Paleta da marca (rebrand verde):
 * - primary   = verde gestão/crescimento (500 = #196D44, AA com texto branco)
 * - secondary = lima de destaque "Elas"/Hub (300 = #DCEF13; texto AA = 800 #4E5506)
 * - tertiary  = azul-noturno da marca (800 = #0E1630)
 * - typography/outline/background derivados dos neutros ink/offWhite/line do DS.
 *
 * Regra WCAG mantida do DS: success/warning/error 500 = preenchimento/ícone (>=3:1);
 * para TEXTO sobre claro use o grau 700 (successText/warningText/errorText).
 */
export const config = {
  light: vars({
    /* Primary — Verde da marca */
    '--color-primary-0': '245 252 248',
    '--color-primary-50': '235 249 241',
    '--color-primary-100': '206 240 221',
    '--color-primary-200': '108 205 151',
    '--color-primary-300': '43 182 115',
    '--color-primary-400': '29 137 83',
    '--color-primary-500': '25 109 68',
    '--color-primary-600': '22 87 55',
    '--color-primary-700': '18 70 44',
    '--color-primary-800': '14 54 35',
    '--color-primary-900': '10 42 27',
    '--color-primary-950': '6 29 18',

    /* Secondary — Lima de destaque */
    '--color-secondary-0': '253 255 217',
    '--color-secondary-50': '251 254 189',
    '--color-secondary-100': '243 250 142',
    '--color-secondary-200': '233 245 79',
    '--color-secondary-300': '220 239 19',
    '--color-secondary-400': '193 211 12',
    '--color-secondary-500': '166 182 4',
    '--color-secondary-600': '138 151 5',
    '--color-secondary-700': '108 118 6',
    '--color-secondary-800': '78 85 6',
    '--color-secondary-900': '58 63 5',
    '--color-secondary-950': '38 42 3',

    /* Tertiary — Azul noturno */
    '--color-tertiary-0': '248 249 252',
    '--color-tertiary-50': '244 245 248',
    '--color-tertiary-100': '226 229 238',
    '--color-tertiary-200': '195 201 220',
    '--color-tertiary-300': '151 162 194',
    '--color-tertiary-400': '107 121 161',
    '--color-tertiary-500': '63 80 128',
    '--color-tertiary-600': '51 65 105',
    '--color-tertiary-700': '38 49 82',
    '--color-tertiary-800': '14 22 48',
    '--color-tertiary-900': '11 17 38',
    '--color-tertiary-950': '7 11 26',

    /* Error */
    '--color-error-0': '254 245 244',
    '--color-error-50': '253 236 234',
    '--color-error-100': '250 211 207',
    '--color-error-200': '245 169 161',
    '--color-error-300': '239 127 115',
    '--color-error-400': '228 85 70',
    '--color-error-500': '217 45 32',
    '--color-error-600': '198 40 25',
    '--color-error-700': '180 35 24',
    '--color-error-800': '143 28 19',
    '--color-error-900': '107 21 14',
    '--color-error-950': '71 14 9',

    /* Success */
    '--color-success-0': '244 251 247',
    '--color-success-50': '234 246 239',
    '--color-success-100': '207 235 218',
    '--color-success-200': '164 219 188',
    '--color-success-300': '121 202 158',
    '--color-success-400': '79 184 125',
    '--color-success-500': '46 158 91',
    '--color-success-600': '36 137 78',
    '--color-success-700': '26 115 64',
    '--color-success-800': '20 90 50',
    '--color-success-900': '14 66 36',
    '--color-success-950': '8 43 23',

    /* Warning */
    '--color-warning-0': '253 248 239',
    '--color-warning-50': '251 241 224',
    '--color-warning-100': '246 222 184',
    '--color-warning-200': '238 194 135',
    '--color-warning-300': '227 165 84',
    '--color-warning-400': '213 145 47',
    '--color-warning-500': '199 125 17',
    '--color-warning-600': '176 110 14',
    '--color-warning-700': '154 94 10',
    '--color-warning-800': '122 74 8',
    '--color-warning-900': '90 55 6',
    '--color-warning-950': '59 36 4',

    /* Info */
    '--color-info-0': '236 248 254',
    '--color-info-50': '199 235 252',
    '--color-info-100': '162 221 250',
    '--color-info-200': '124 207 248',
    '--color-info-300': '87 194 246',
    '--color-info-400': '50 180 244',
    '--color-info-500': '13 166 242',
    '--color-info-600': '11 141 205',
    '--color-info-700': '9 115 168',
    '--color-info-800': '7 90 131',
    '--color-info-900': '5 64 93',
    '--color-info-950': '3 38 56',

    /* Typography — neutros ink */
    '--color-typography-0': '255 255 255',
    '--color-typography-50': '250 248 251',
    '--color-typography-100': '237 236 241',
    '--color-typography-200': '216 213 222',
    '--color-typography-300': '182 177 190',
    '--color-typography-400': '148 140 153',
    '--color-typography-500': '107 101 119',
    '--color-typography-600': '87 81 99',
    '--color-typography-700': '68 63 79',
    '--color-typography-800': '50 45 59',
    '--color-typography-900': '31 27 36',
    '--color-typography-950': '21 18 26',

    /* Outline — bordas do DS (100 = sutil, 200 = padrão) */
    '--color-outline-0': '253 253 254',
    '--color-outline-50': '244 242 247',
    '--color-outline-100': '236 230 240',
    '--color-outline-200': '229 224 234',
    '--color-outline-300': '210 203 217',
    '--color-outline-400': '169 161 178',
    '--color-outline-500': '107 101 119',
    '--color-outline-600': '87 81 99',
    '--color-outline-700': '68 63 79',
    '--color-outline-800': '50 45 59',
    '--color-outline-900': '31 27 36',
    '--color-outline-950': '21 18 26',

    /* Background — 0 = surface, 50 = fundo de tela, 100 = inputs, 200 = track */
    '--color-background-0': '255 255 255',
    '--color-background-50': '250 248 251',
    '--color-background-100': '247 245 249',
    '--color-background-200': '237 236 241',
    '--color-background-300': '216 213 222',
    '--color-background-400': '169 161 178',
    '--color-background-500': '142 142 142',
    '--color-background-600': '116 116 116',
    '--color-background-700': '83 82 82',
    '--color-background-800': '65 64 64',
    '--color-background-900': '39 38 37',
    '--color-background-950': '18 18 18',

    /* Background Special — tints de status do DS */
    '--color-background-error': '253 236 234',
    '--color-background-warning': '251 241 224',
    '--color-background-success': '234 246 239',
    '--color-background-muted': '247 245 249',
    '--color-background-info': '235 248 254',

    /* Focus Ring Indicator  */
    '--color-indicator-primary': '25 109 68',
    '--color-indicator-info': '83 153 236',
    '--color-indicator-error': '180 35 24',
  }),
  dark: vars({
    '--color-primary-0': '166 166 166',
    '--color-primary-50': '175 175 175',
    '--color-primary-100': '186 186 186',
    '--color-primary-200': '197 197 197',
    '--color-primary-300': '212 212 212',
    '--color-primary-400': '221 221 221',
    '--color-primary-500': '230 230 230',
    '--color-primary-600': '240 240 240',
    '--color-primary-700': '250 250 250',
    '--color-primary-800': '253 253 253',
    '--color-primary-900': '254 249 249',
    '--color-primary-950': '253 252 252',

    /* Secondary  */
    '--color-secondary-0': '20 20 20',
    '--color-secondary-50': '23 23 23',
    '--color-secondary-100': '31 31 31',
    '--color-secondary-200': '39 39 39',
    '--color-secondary-300': '44 44 44',
    '--color-secondary-400': '56 57 57',
    '--color-secondary-500': '63 64 64',
    '--color-secondary-600': '86 86 86',
    '--color-secondary-700': '110 110 110',
    '--color-secondary-800': '135 135 135',
    '--color-secondary-900': '150 150 150',
    '--color-secondary-950': '164 164 164',

    /* Tertiary */
    '--color-tertiary-0': '84 49 18',
    '--color-tertiary-50': '108 61 19',
    '--color-tertiary-100': '130 73 23',
    '--color-tertiary-200': '180 98 26',
    '--color-tertiary-300': '215 117 31',
    '--color-tertiary-400': '231 129 40',
    '--color-tertiary-500': '251 157 75',
    '--color-tertiary-600': '253 180 116',
    '--color-tertiary-700': '254 209 170',
    '--color-tertiary-800': '255 233 213',
    '--color-tertiary-900': '255 242 229',
    '--color-tertiary-950': '255 250 245',

    /* Error */
    '--color-error-0': '83 19 19',
    '--color-error-50': '127 29 29',
    '--color-error-100': '153 27 27',
    '--color-error-200': '185 28 28',
    '--color-error-300': '220 38 38',
    '--color-error-400': '230 53 53',
    '--color-error-500': '239 68 68',
    '--color-error-600': '249 97 96',
    '--color-error-700': '229 91 90',
    '--color-error-800': '254 202 202',
    '--color-error-900': '254 226 226',
    '--color-error-950': '254 233 233',

    /* Success */
    '--color-success-0': '27 50 36',
    '--color-success-50': '20 83 45',
    '--color-success-100': '22 101 52',
    '--color-success-200': '32 111 62',
    '--color-success-300': '42 121 72',
    '--color-success-400': '52 131 82',
    '--color-success-500': '72 151 102',
    '--color-success-600': '102 181 132',
    '--color-success-700': '132 211 162',
    '--color-success-800': '162 241 192',
    '--color-success-900': '202 255 232',
    '--color-success-950': '228 255 244',

    /* Warning */
    '--color-warning-0': '84 45 18',
    '--color-warning-50': '108 56 19',
    '--color-warning-100': '130 68 23',
    '--color-warning-200': '180 90 26',
    '--color-warning-300': '215 108 31',
    '--color-warning-400': '231 120 40',
    '--color-warning-500': '251 149 75',
    '--color-warning-600': '253 173 116',
    '--color-warning-700': '254 205 170',
    '--color-warning-800': '255 231 213',
    '--color-warning-900': '255 244 237',
    '--color-warning-950': '255 249 245',

    /* Info */
    '--color-info-0': '3 38 56',
    '--color-info-50': '5 64 93',
    '--color-info-100': '7 90 131',
    '--color-info-200': '9 115 168',
    '--color-info-300': '11 141 205',
    '--color-info-400': '13 166 242',
    '--color-info-500': '50 180 244',
    '--color-info-600': '87 194 246',
    '--color-info-700': '124 207 248',
    '--color-info-800': '162 221 250',
    '--color-info-900': '199 235 252',
    '--color-info-950': '236 248 254',

    /* Typography */
    '--color-typography-0': '23 23 23',
    '--color-typography-50': '38 38 39',
    '--color-typography-100': '64 64 64',
    '--color-typography-200': '82 82 82',
    '--color-typography-300': '115 115 115',
    '--color-typography-400': '140 140 140',
    '--color-typography-500': '163 163 163',
    '--color-typography-600': '212 212 212',
    '--color-typography-700': '219 219 220',
    '--color-typography-800': '229 229 229',
    '--color-typography-900': '245 245 245',
    '--color-typography-950': '254 254 255',

    /* Outline */
    '--color-outline-0': '26 23 23',
    '--color-outline-50': '39 38 36',
    '--color-outline-100': '65 65 65',
    '--color-outline-200': '83 82 82',
    '--color-outline-300': '115 116 116',
    '--color-outline-400': '140 141 141',
    '--color-outline-500': '165 163 163',
    '--color-outline-600': '211 211 211',
    '--color-outline-700': '221 220 219',
    '--color-outline-800': '230 230 230',
    '--color-outline-900': '243 243 243',
    '--color-outline-950': '253 254 254',

    /* Background */
    '--color-background-0': '18 18 18',
    '--color-background-50': '39 38 37',
    '--color-background-100': '65 64 64',
    '--color-background-200': '83 82 82',
    '--color-background-300': '116 116 116',
    '--color-background-400': '142 142 142',
    '--color-background-500': '162 163 163',
    '--color-background-600': '213 212 212',
    '--color-background-700': '229 228 228',
    '--color-background-800': '242 241 241',
    '--color-background-900': '246 246 246',
    '--color-background-950': '255 255 255',

    /* Background Special */
    '--color-background-error': '66 43 43',
    '--color-background-warning': '65 47 35',
    '--color-background-success': '28 43 33',
    '--color-background-muted': '51 51 51',
    '--color-background-info': '26 40 46',

    /* Focus Ring Indicator  */
    '--color-indicator-primary': '247 247 247',
    '--color-indicator-info': '161 199 245',
    '--color-indicator-error': '232 70 69',
  }),
};
