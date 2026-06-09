import { Eye, EyeOff } from 'lucide-react-native';
import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  type TextInputProps,
  View,
} from 'react-native';

import { Tokens } from '@/constants/tokens';

export type InputProps = TextInputProps & {
  label?: string;
  /** Texto de erro; quando presente, aplica estilo de erro e papel de alerta. */
  error?: string;
  /** Elemento à direita dentro do campo (ex.: botão "mostrar senha"). */
  trailing?: React.ReactNode;
};

export function Input({
  label,
  error,
  trailing,
  style,
  onFocus,
  onBlur,
  ...rest
}: InputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.field}>
      {label ? <Text style={styles.label}>{label}</Text> : null}

      <View
        style={[
          styles.inputWrap,
          focused && styles.inputWrapFocused,
          !!error && styles.inputWrapError,
        ]}
      >
        <TextInput
          style={[styles.input, style]}
          placeholderTextColor={Tokens.color.textSoft}
          onFocus={(e) => {
            setFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            onBlur?.(e);
          }}
          accessibilityLabel={label}
          {...rest}
        />
        {trailing}
      </View>

      {error ? (
        <Text style={styles.error} accessibilityRole="alert">
          {error}
        </Text>
      ) : null}
    </View>
  );
}

/** Botão de alternância usado como `trailing` em campos de senha. */
export function PasswordToggle({
  visible,
  onToggle,
}: {
  visible: boolean;
  onToggle: () => void;
}) {
  return (
    <Pressable
      onPress={onToggle}
      accessibilityRole="button"
      accessibilityLabel={visible ? 'Ocultar senha' : 'Mostrar senha'}
      hitSlop={8}
    >
      {visible ? (
        <EyeOff size={20} color={Tokens.color.textSoft} strokeWidth={2} />
      ) : (
        <Eye size={20} color={Tokens.color.textSoft} strokeWidth={2} />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  field: {
    gap: Tokens.space.sm,
  },
  label: {
    fontSize: Tokens.typography.label.fontSize,
    fontWeight: '600',
    color: Tokens.color.textStrong,
  },
  inputWrap: {
    minHeight: 52,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Tokens.space.sm,
    backgroundColor: Tokens.color.inputBg,
    borderWidth: 1,
    borderColor: Tokens.color.border,
    borderRadius: Tokens.radius.lg,
    paddingHorizontal: Tokens.space.lg,
  },
  inputWrapFocused: {
    borderColor: Tokens.color.primary,
  },
  inputWrapError: {
    borderColor: Tokens.color.warning,
  },
  input: {
    flex: 1,
    fontSize: Tokens.typography.bodyStrong.fontSize,
    color: Tokens.color.textStrong,
    paddingVertical: Tokens.space.md,
  },
  error: {
    fontSize: Tokens.typography.caption.fontSize,
    color: Tokens.color.warning,
  },
});
