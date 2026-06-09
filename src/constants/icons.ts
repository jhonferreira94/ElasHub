import {
  BarChart3,
  Bell,
  Check,
  ChevronRight,
  ClipboardList,
  DollarSign,
  Download,
  Eye,
  EyeOff,
  Home,
  type LucideIcon,
  Plus,
  Search,
  Settings,
  Star,
  Target,
  Upload,
  User,
} from 'lucide-react-native';

/**
 * ElasHub — Mapa semântico de ícones (Lucide).
 *
 * Biblioteca oficial de ícones do produto: lucide-react-native.
 * Use sempre um nome semântico daqui em vez de importar o ícone direto,
 * para manter consistência entre telas e facilitar trocas futuras.
 */
export const Icons = {
  home: Home,
  plans: ClipboardList,
  dashboard: BarChart3,
  profile: User,

  search: Search,
  notification: Bell,
  settings: Settings,

  finance: DollarSign,
  goal: Target,
  check: Check,
  add: Plus,
  chevron: ChevronRight,

  download: Download,
  upload: Upload,
  rating: Star,

  showPassword: Eye,
  hidePassword: EyeOff,
} as const;

export type IconName = keyof typeof Icons;

export function getIcon(name: IconName): LucideIcon {
  return Icons[name];
}
