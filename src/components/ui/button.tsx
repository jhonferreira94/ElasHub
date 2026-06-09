import {
  ActivityIndicator,
  Pressable,
  type PressableProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Tokens } from '@/constants/tokens';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

export type ButtonProps = Omit<PressableProps, 'children'> & {
  title: string;
  variant?: ButtonVariant;
  loading?: boolean;
  /** Conteúdo opcional à esquerda do texto (ícone). */
  leading?: React.ReactNode;
};

export function Button({
  title,
  variant = 'primary',
  loading = false,
  leading,
  disabled,
  style,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: !!isDisabled, busy: loading }}
      disabled={isDisabled}
      style={(state) => [
        styles.base,
        variant === 'primary' && styles.primary,
        variant === 'secondary' && styles.secondary,
        variant === 'ghost' && styles.ghost,
        state.pressed && !isDisabled && styles.pressed,
        isDisabled && styles.disabled,
        typeof style === 'function' ? style(state) : style,
      ]}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? Tokens.color.textOnPrimary : Tokens.color.primary} />
      ) : (
        <View style={styles.content}>
          {leading}
          <Text
            style={[
              styles.label,
              variant === 'primary' ? styles.labelOnPrimary : styles.labelOnLight,
            ]}
          >
            {title}
          </Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: 52,
    borderRadius: Tokens.radius.xl,
    paddingVertical: Tokens.space.lg,
    paddingHorizontal: Tokens.space.xxl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Tokens.space.sm,
  },
  primary: {
    backgroundColor: Tokens.color.primary,
  },
  secondary: {
    backgroundColor: Tokens.color.surface,
    borderWidth: 1,
    borderColor: Tokens.color.border,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  pressed: {
    opacity: 0.85,
  },
  disabled: {
    opacity: 0.5,
  },
  label: {
    fontSize: Tokens.typography.bodyStrong.fontSize + 1,
    fontWeight: '700',
  },
  labelOnPrimary: {
    color: Tokens.color.textOnPrimary,
  },
  labelOnLight: {
    color: Tokens.color.primary,
  },
});
