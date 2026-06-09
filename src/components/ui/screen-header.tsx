import { ChevronLeft } from 'lucide-react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Tokens } from '@/constants/tokens';

export type ScreenHeaderProps = {
  title: string;
  /** Quando informado, exibe o botão de voltar. */
  onBack?: () => void;
};

export function ScreenHeader({ title, onBack }: ScreenHeaderProps) {
  return (
    <View style={styles.row}>
      {onBack ? (
        <Pressable
          onPress={onBack}
          accessibilityRole="button"
          accessibilityLabel="Voltar"
          hitSlop={8}
          style={({ pressed }) => [styles.back, pressed && styles.backPressed]}
        >
          <ChevronLeft size={22} color={Tokens.color.textStrong} strokeWidth={2} />
        </Pressable>
      ) : null}
      <Text style={styles.title} accessibilityRole="header">
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Tokens.space.md,
  },
  back: {
    width: 44,
    height: 44,
    borderRadius: Tokens.radius.round,
    borderWidth: 1,
    borderColor: Tokens.color.border,
    backgroundColor: Tokens.color.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backPressed: {
    opacity: 0.7,
  },
  title: {
    fontSize: Tokens.typography.h3.fontSize,
    fontWeight: '700',
    color: Tokens.color.textStrong,
  },
});
