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
import { Input, InputField } from '@/components/ui/input';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

export default function RecuperarSenhaScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');

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

          <Heading size="2xl" className="mt-4 text-typography-900">
            Recuperar senha
          </Heading>
          <Text size="md" className="mt-2 text-typography-500">
            Digite seu e-mail e enviaremos um link para você criar uma nova senha.
          </Text>

          <VStack space="lg" className="mt-6">
            <FormControl>
              <FormControlLabel>
                <FormControlLabelText className="text-typography-900">
                  E-mail
                </FormControlLabelText>
              </FormControlLabel>
              <Input size="xl" className="rounded-xl border-outline-200 bg-background-100">
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
          </VStack>
        </ScrollView>

        <VStack space="lg" className="px-6 pb-2 pt-3">
          <Button size="xl" action="primary" className="rounded-[14px]">
            <ButtonText>Enviar link</ButtonText>
          </Button>
          <Pressable
            accessibilityRole="button"
            onPress={() => router.back()}
            className="self-center py-1"
            hitSlop={8}
          >
            <Text size="md" bold className="text-primary-500">
              Voltar para o login
            </Text>
          </Pressable>
        </VStack>
      </Box>
    </SafeAreaView>
  );
}
