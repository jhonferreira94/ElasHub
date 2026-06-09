import { StyleSheet, View, type ViewProps } from 'react-native';

import { Tokens } from '@/constants/tokens';

export type CardProps = ViewProps & {
  /** 'outline' = superfície branca com borda (padrão). 'brand' = superfície de marca. */
  variant?: 'outline' | 'brand';
};

export function Card({ variant = 'outline', style, ...rest }: CardProps) {
  return (
    <View
      style={[
        styles.base,
        variant === 'outline' && styles.outline,
        variant === 'brand' && styles.brand,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: Tokens.radius.xl,
    padding: Tokens.space.lg,
  },
  outline: {
    backgroundColor: Tokens.color.surface,
    borderWidth: 1,
    borderColor: Tokens.color.border,
  },
  brand: {
    backgroundColor: Tokens.color.primary,
  },
});
