import { useRouter } from 'expo-router';
import { Check } from 'lucide-react-native';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button, Input, ScreenHeader } from '@/components/ui';
import { Tokens } from '@/constants/tokens';

export default function CadastroScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [accepted, setAccepted] = useState(false);

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <ScreenHeader title="" onBack={() => router.back()} />

        <Text style={styles.title}>Criar sua conta</Text>
        <Text style={styles.subtitle}>Comece sua jornada empreendedora hoje.</Text>

        <View style={styles.form}>
          <Input
            label="Nome completo"
            placeholder="Ex.: Marina Souza"
            autoCapitalize="words"
            value={name}
            onChangeText={setName}
          />
          <Input
            label="E-mail"
            placeholder="você@email.com"
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            label="Senha"
            placeholder="Mínimo 8 caracteres"
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            value={password}
            onChangeText={setPassword}
            trailing={
              <Pressable
                onPress={() => setShowPassword((v) => !v)}
                accessibilityRole="button"
                accessibilityLabel={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                hitSlop={8}
              >
                <Text style={styles.toggle}>
                  {showPassword ? 'Ocultar' : 'Mostrar'}
                </Text>
              </Pressable>
            }
          />

          <Pressable
            onPress={() => setAccepted((v) => !v)}
            accessibilityRole="checkbox"
            accessibilityState={{ checked: accepted }}
            style={styles.termsRow}
            hitSlop={8}
          >
            <View style={[styles.checkbox, accepted && styles.checkboxChecked]}>
              {accepted ? (
                <Check size={16} color={Tokens.color.textOnPrimary} strokeWidth={3} />
              ) : null}
            </View>
            <Text style={styles.termsText}>
              Li e aceito os Termos de Uso e a Política de Privacidade
            </Text>
          </Pressable>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          title="Criar conta"
          disabled={!accepted}
          onPress={() => router.replace('/home')}
        />
        <Pressable
          accessibilityRole="button"
          onPress={() => router.back()}
          style={styles.login}
          hitSlop={8}
        >
          <Text style={styles.loginText}>
            Já tem conta? <Text style={styles.loginLink}>Entrar</Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Tokens.color.background,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: Tokens.space.xxl,
    paddingTop: Tokens.space.md,
  },
  title: {
    marginTop: Tokens.space.lg,
    fontSize: Tokens.typography.h1.fontSize,
    lineHeight: Tokens.typography.h1.lineHeight,
    fontWeight: '700',
    color: Tokens.color.textStrong,
  },
  subtitle: {
    marginTop: Tokens.space.xs,
    fontSize: Tokens.typography.body.fontSize,
    lineHeight: Tokens.typography.body.lineHeight,
    color: Tokens.color.textSoft,
  },
  form: {
    marginTop: Tokens.space.xxl,
    gap: Tokens.space.lg,
  },
  toggle: {
    fontSize: Tokens.typography.label.fontSize,
    fontWeight: '700',
    color: Tokens.color.primary,
  },
  termsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Tokens.space.md,
    marginTop: Tokens.space.xs,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: Tokens.radius.sm,
    borderWidth: 1.5,
    borderColor: Tokens.color.textSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: Tokens.color.primary,
    borderColor: Tokens.color.primary,
  },
  termsText: {
    flex: 1,
    fontSize: Tokens.typography.caption.fontSize,
    lineHeight: 18,
    color: Tokens.color.textSoft,
  },
  footer: {
    paddingHorizontal: Tokens.space.xxl,
    paddingTop: Tokens.space.md,
    gap: Tokens.space.lg,
  },
  login: {
    alignSelf: 'center',
    paddingVertical: Tokens.space.xs,
  },
  loginText: {
    fontSize: Tokens.typography.body.fontSize,
    color: Tokens.color.textSoft,
  },
  loginLink: {
    color: Tokens.color.primary,
    fontWeight: '700',
  },
});
