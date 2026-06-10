import { useRouter } from 'expo-router';
import { ChevronRight } from 'lucide-react-native';
import { Fragment } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Avatar, AvatarFallbackText } from '@/components/ui/avatar';
import { Box } from '@/components/ui/box';
import { Card } from '@/components/ui/card';
import { Divider } from '@/components/ui/divider';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

const OPTIONS = ['Editar perfil', 'Notificações', 'Ajuda e suporte'];

export default function PerfilScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top']}>
      <Box className="flex-1 bg-background-50">
        <ScrollView
          contentContainerStyle={{ padding: 24, paddingBottom: 112, gap: 16 }}
          showsVerticalScrollIndicator={false}
        >
          <Heading size="xl" className="text-typography-900">
            Perfil
          </Heading>

          <Card className="rounded-2xl border border-outline-200 bg-background-0 p-4">
            <HStack space="lg" className="items-center">
              <Avatar size="lg" className="bg-primary-50">
                <AvatarFallbackText className="text-primary-500">
                  Marina Souza
                </AvatarFallbackText>
              </Avatar>
              <VStack space="xs">
                <Heading size="md" className="text-typography-900">
                  Marina Souza
                </Heading>
                <Text size="sm" className="text-typography-500">
                  Mentorada · ElasHub
                </Text>
              </VStack>
            </HStack>
          </Card>

          <Heading size="md" className="mt-2 text-typography-900">
            Conta
          </Heading>

          <Card className="overflow-hidden rounded-2xl border border-outline-200 bg-background-0 p-0">
            {OPTIONS.map((option) => (
              <Fragment key={option}>
                <Pressable accessibilityRole="button" className="px-4 py-4">
                  <HStack className="items-center justify-between">
                    <Text size="md" className="text-typography-900">
                      {option}
                    </Text>
                    <Icon as={ChevronRight} size="md" className="text-typography-500" />
                  </HStack>
                </Pressable>
                <Divider className="bg-outline-100" />
              </Fragment>
            ))}
            <Pressable
              accessibilityRole="button"
              className="px-4 py-4"
              onPress={() => router.replace('/')}
            >
              <Text size="md" bold className="text-error-600">
                Sair
              </Text>
            </Pressable>
          </Card>
        </ScrollView>
      </Box>
    </SafeAreaView>
  );
}
