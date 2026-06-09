import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button, Icon, Input } from '@/components/ui';
import { Tokens } from '@/constants/tokens';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logo}>
          <Icon name="goal" size={44} color={Tokens.color.textOnPrimary} />
        </View>

        <Text style={styles.title}>Bem-vinda ao ElasHub</Text>
        <Text style={styles.subtitle}>
          Ferramentas práticas para crescer seu negócio com orientação e foco.
        </Text>

        <View style={styles.form}>
          <Input
            label="E-mail"
            placeholder="seu@email.com"
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            value={email}
            onChangeText={setEmail}
          />

          <View style={styles.passwordBlock}>
            <Input
              label="Senha"
              placeholder="Sua senha"
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
            <Pressable accessibilityRole="button" hitSlop={8} style={styles.forgot}>
              <Text style={styles.forgotText}>Esqueci minha senha</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button title="Entrar" onPress={() => router.replace('/home')} />
        <Pressable
          accessibilityRole="button"
          onPress={() => router.push('/cadastro')}
          style={styles.signup}
          hitSlop={8}
        >
          <Text style={styles.signupText}>
            Ainda não tem conta? <Text style={styles.signupLink}>Criar conta</Text>
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
    paddingTop: Tokens.space.xxl,
  },
  logo: {
    width: 96,
    height: 96,
    borderRadius: Tokens.radius.xxl,
    backgroundColor: Tokens.color.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Tokens.space.xl,
  },
  title: {
    fontSize: Tokens.typography.h1.fontSize,
    lineHeight: Tokens.typography.h1.lineHeight,
    fontWeight: '700',
    color: Tokens.color.textStrong,
  },
  subtitle: {
    marginTop: Tokens.space.sm,
    fontSize: Tokens.typography.body.fontSize,
    lineHeight: Tokens.typography.body.lineHeight,
    color: Tokens.color.textSoft,
  },
  form: {
    marginTop: Tokens.space.xxl,
    gap: Tokens.space.lg,
  },
  passwordBlock: {
    gap: Tokens.space.sm,
  },
  toggle: {
    fontSize: Tokens.typography.label.fontSize,
    fontWeight: '700',
    color: Tokens.color.primary,
  },
  forgot: {
    alignSelf: 'flex-end',
  },
  forgotText: {
    fontSize: Tokens.typography.caption.fontSize,
    color: Tokens.color.textSoft,
  },
  footer: {
    paddingHorizontal: Tokens.space.xxl,
    paddingTop: Tokens.space.md,
    gap: Tokens.space.lg,
  },
  signup: {
    alignSelf: 'center',
    paddingVertical: Tokens.space.xs,
  },
  signupText: {
    fontSize: Tokens.typography.body.fontSize,
    color: Tokens.color.textSoft,
  },
  signupLink: {
    color: Tokens.color.primary,
    fontWeight: '700',
  },
});
