import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from '@/components/ui/form-control';
import { Heading } from '@/components/ui/heading';
import { EyeIcon, EyeOffIcon, Icon } from '@/components/ui/icon';
import { Input, InputField, InputSlot } from '@/components/ui/input';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
      <Box className="flex-1 bg-background-50">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 24, paddingTop: 24 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Image
            source={require('../../assets/images/logo-elashub.png')}
            style={{ width: 200, height: 140, alignSelf: 'center' }}
            resizeMode="contain"
            accessibilityLabel="Logo ElasHub"
          />

          <Heading size="2xl" className="mt-4 text-center text-typography-900">
            Bem-vinda ao ElasHub
          </Heading>
          <Text size="md" className="mt-2 text-center text-typography-500">
            Ferramentas práticas para crescer seu negócio com orientação e foco.
          </Text>

          <VStack space="lg" className="mt-6">
            <FormControl>
              <FormControlLabel>
                <FormControlLabelText className="text-typography-900">
                  E-mail
                </FormControlLabelText>
              </FormControlLabel>
              <Input
                size="xl"
                className="rounded-[14px] border-outline-200 bg-background-100"
              >
                <InputField
                  placeholder="seu@email.com"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoComplete="email"
                  value={email}
                  onChangeText={setEmail}
                />
              </Input>
            </FormControl>

            <VStack space="sm">
              <FormControl>
                <FormControlLabel>
                  <FormControlLabelText className="text-typography-900">
                    Senha
                  </FormControlLabelText>
                </FormControlLabel>
                <Input
                  size="xl"
                  className="rounded-[14px] border-outline-200 bg-background-100"
                >
                  <InputField
                    placeholder="Sua senha"
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                    value={password}
                    onChangeText={setPassword}
                  />
                  <InputSlot
                    className="pr-4"
                    onPress={() => setShowPassword((v) => !v)}
                    accessibilityRole="button"
                    accessibilityLabel={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                  >
                    <Icon
                      as={showPassword ? EyeOffIcon : EyeIcon}
                      className="text-typography-500"
                    />
                  </InputSlot>
                </Input>
              </FormControl>
              <Pressable
                accessibilityRole="button"
                className="self-end"
                hitSlop={8}
                onPress={() => router.push('/recuperar-senha')}
              >
                <Text size="sm" className="text-typography-500">
                  Esqueci minha senha
                </Text>
              </Pressable>
            </VStack>
          </VStack>
        </ScrollView>

        <VStack space="lg" className="px-6 pt-3">
          <Button
            size="xl"
            action="primary"
            className="rounded-[14px]"
            onPress={() => router.replace('/home')}
          >
            <ButtonText>Entrar</ButtonText>
          </Button>
          <Pressable
            accessibilityRole="button"
            onPress={() => router.push('/cadastro')}
            className="self-center py-1"
            hitSlop={8}
          >
            <Text size="md" className="text-typography-500">
              Ainda não tem conta?{' '}
              <Text size="md" bold className="text-primary-500">
                Criar conta
              </Text>
            </Text>
          </Pressable>
          <Pressable accessibilityRole="button" className="self-center py-1" hitSlop={8}>
            <Text size="md" bold className="text-primary-500">
              Acessar como mentora
            </Text>
          </Pressable>
        </VStack>
      </Box>
    </SafeAreaView>
  );
}
