import { type IconName, Icons } from '@/constants/icons';
import { Tokens } from '@/constants/tokens';

export type IconProps = {
  /** Nome semântico do ícone (ver src/constants/icons.ts). */
  name: IconName;
  /** Tamanho em px. Padrão: 24. */
  size?: number;
  /** Cor do traço. Padrão: textStrong. */
  color?: string;
  /** Espessura do traço. Padrão: 2. */
  strokeWidth?: number;
};

/**
 * Wrapper sobre os ícones Lucide. Sempre prefira este componente em vez de
 * importar o ícone direto, para manter tamanho/cor/traço consistentes.
 */
export function Icon({
  name,
  size = 24,
  color = Tokens.color.textStrong,
  strokeWidth = 2,
}: IconProps) {
  const LucideGlyph = Icons[name];
  return <LucideGlyph size={size} color={color} strokeWidth={strokeWidth} />;
}
