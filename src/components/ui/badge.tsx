import { StyleSheet, Text, View } from 'react-native';

import { Tokens } from '@/constants/tokens';

type BadgeTone = 'success' | 'warning' | 'neutral';

export type BadgeProps = {
  label: string;
  tone?: BadgeTone;
};

export function Badge({ label, tone = 'neutral' }: BadgeProps) {
  return (
    <View style={[styles.base, toneBg[tone]]}>
      <Text style={[styles.label, toneFg[tone]]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    alignSelf: 'flex-start',
    paddingVertical: Tokens.space.xs + 1,
    paddingHorizontal: Tokens.space.md,
    borderRadius: Tokens.radius.round,
  },
  label: {
    fontSize: Tokens.typography.label.fontSize,
    fontWeight: '600',
  },
});

const toneBg = StyleSheet.create({
  success: { backgroundColor: Tokens.color.successTint },
  warning: { backgroundColor: Tokens.color.warningTint },
  neutral: { backgroundColor: Tokens.color.track },
});

const toneFg = StyleSheet.create({
  success: { color: Tokens.color.successText },
  warning: { color: Tokens.color.warningText },
  neutral: { color: Tokens.color.textSoft },
});
