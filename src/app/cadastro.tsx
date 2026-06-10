import { useRouter } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from '@/components/ui/checkbox';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from '@/components/ui/form-control';
import { Heading } from '@/components/ui/heading';
import { CheckIcon, EyeIcon, EyeOffIcon, Icon } from '@/components/ui/icon';
import { Input, InputField, InputSlot } from '@/components/ui/input';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

export default function CadastroScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [accepted, setAccepted] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
      <Box className="flex-1 bg-background-50">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 24, paddingTop: 12 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Voltar"
            onPress={() => router.back()}
            className="h-11 w-11 items-center justify-center self-start rounded-full"
            hitSlop={8}
          >
            <Icon as={ChevronLeft} size="xl" className="text-typography-900" />
          </Pressable>

          <Heading size="2xl" className="mt-4 text-typography-900">
            Criar sua conta
          </Heading>
          <Text size="md" className="mt-1 text-typography-500">
            Comece sua jornada empreendedora hoje.
          </Text>

          <VStack space="lg" className="mt-6">
            <FormControl>
              <FormControlLabel>
                <FormControlLabelText className="text-typography-900">
                  Nome completo
                </FormControlLabelText>
              </FormControlLabel>
              <Input
                size="xl"
                className="rounded-[14px] border-outline-200 bg-background-100"
              >
                <InputField
                  placeholder="Ex.: Marina Souza"
                  autoCapitalize="words"
                  value={name}
                  onChangeText={setName}
                />
              </Input>
            </FormControl>

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
                  placeholder="você@email.com"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoComplete="email"
                  value={email}
                  onChangeText={setEmail}
                />
              </Input>
            </FormControl>

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
                  placeholder="Mínimo 8 caracteres"
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

            <Checkbox
              size="md"
              value="termos"
              isChecked={accepted}
              onChange={setAccepted}
              className="mt-1 items-start"
            >
              <CheckboxIndicator className="mt-0.5 h-6 w-6 rounded-lg border-typography-500 data-[checked=true]:border-primary-500 data-[checked=true]:bg-primary-500">
                <CheckboxIcon as={CheckIcon} className="text-typography-0" />
              </CheckboxIndicator>
              <CheckboxLabel className="ml-3 flex-1 text-sm leading-[18px] text-typography-500">
                Li e aceito os Termos de Uso e a Política de Privacidade
              </CheckboxLabel>
            </Checkbox>
          </VStack>
        </ScrollView>

        <VStack space="lg" className="px-6 pt-3">
          <Button
            size="xl"
            action="primary"
            className="rounded-[14px]"
            isDisabled={!accepted}
            onPress={() => router.replace('/home')}
          >
            <ButtonText>Criar conta</ButtonText>
          </Button>
          <Pressable
            accessibilityRole="button"
            onPress={() => router.back()}
            className="self-center py-1"
            hitSlop={8}
          >
            <Text size="md" className="text-typography-500">
              Já tem conta?{' '}
              <Text size="md" bold className="text-primary-500">
                Entrar
              </Text>
            </Text>
          </Pressable>
        </VStack>
      </Box>
    </SafeAreaView>
  );
}
