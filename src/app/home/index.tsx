import { useRouter } from 'expo-router';
import { ArrowRight } from 'lucide-react-native';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Avatar, AvatarFallbackText } from '@/components/ui/avatar';
import { Box } from '@/components/ui/box';
import { Card } from '@/components/ui/card';
import { Center } from '@/components/ui/center';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Pressable } from '@/components/ui/pressable';
import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Icons } from '@/constants/icons';

const PROGRESS = 60;

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top']}>
      <Box className="flex-1 bg-background-50">
        <ScrollView
          contentContainerStyle={{ padding: 24, paddingBottom: 112, gap: 20 }}
          showsVerticalScrollIndicator={false}
        >
          <HStack className="items-center justify-between">
            <VStack>
              <Text size="sm" className="text-[13px] leading-4 text-typography-500">
                Bom dia,
              </Text>
              <Heading size="xl" className="text-[20px] leading-6 text-typography-900">
                Marina
              </Heading>
            </VStack>
            <Avatar size="md" className="bg-primary-50">
              <AvatarFallbackText className="text-primary-500">Marina</AvatarFallbackText>
            </Avatar>
          </HStack>

          <Card className="rounded-2xl bg-primary-500 p-5">
            <VStack space="md">
              <Box className="self-start rounded-full bg-background-0/20 px-3 py-1">
                <Text size="xs" bold className="text-[11px] tracking-wide text-typography-0">
                  DEVOCIONAL DO DIA
                </Text>
              </Box>
              <Heading size="xl" className="text-[19px] leading-[23px] text-typography-0">
                Coragem para recomeçar
              </Heading>
              <Text size="md" className="text-[14px] leading-[17px] text-typography-0/90">
                “Tudo posso naquele que me fortalece.” Hoje, dê o primeiro passo no que
                você vem adiando.
              </Text>
              <Pressable accessibilityRole="button" hitSlop={8}>
                <HStack space="sm" className="mt-1 items-center">
                  <Text size="md" bold className="text-[14px] text-typography-0">
                    Ler reflexão completa
                  </Text>
                  <Icon as={ArrowRight} size="md" className="text-typography-0" />
                </HStack>
              </Pressable>
            </VStack>
          </Card>

          <Card className="rounded-2xl border border-outline-200 bg-background-0 p-4">
            <VStack space="md">
              <HStack className="items-center justify-between">
                <Text size="md" bold className="flex-1 text-[15px] text-typography-900">
                  Plano: Organização Financeira
                </Text>
                <Text size="md" bold className="text-[15px] text-primary-500">
                  {PROGRESS}%
                </Text>
              </HStack>
              <Progress value={PROGRESS} size="sm" className="bg-background-200">
                <ProgressFilledTrack className="bg-primary-500" />
              </Progress>
              <Text size="sm" className="text-[13px] text-typography-500">
                3 de 5 ferramentas concluídas
              </Text>
            </VStack>
          </Card>

          <Heading size="md" className="text-[17px] text-typography-900">
            Acesso rápido
          </Heading>
          <HStack space="lg">
            <Pressable
              accessibilityRole="button"
              className="min-h-[120px] flex-1 justify-between rounded-2xl bg-primary-50 p-4"
              onPress={() => router.push('/home/planos')}
            >
              <Center className="h-11 w-11 rounded-full bg-background-0">
                <Icon as={Icons.goal} className="h-6 w-6 text-primary-500" />
              </Center>
              <Text size="md" className="text-[14px] font-semibold text-typography-900">
                Tópicos e metas
              </Text>
            </Pressable>
            <Pressable
              accessibilityRole="button"
              className="min-h-[120px] flex-1 justify-between rounded-2xl bg-primary-50 p-4"
              onPress={() => router.push('/home/planos')}
            >
              <Center className="h-11 w-11 rounded-full bg-background-0">
                <Icon as={Icons.plans} className="h-6 w-6 text-primary-500" />
              </Center>
              <Text size="md" className="text-[14px] font-semibold text-typography-900">
                Meus planos
              </Text>
            </Pressable>
          </HStack>
        </ScrollView>
      </Box>
    </SafeAreaView>
  );
}
