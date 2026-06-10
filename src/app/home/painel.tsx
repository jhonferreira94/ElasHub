import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Avatar, AvatarFallbackText } from '@/components/ui/avatar';
import { Box } from '@/components/ui/box';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

const STATS = [
  { id: '1', value: '8', label: 'Ferramentas concluídas' },
  { id: '2', value: '2', label: 'Planos ativos' },
];

const WEEK = [
  { id: 'seg', day: 'S', height: 40, active: false },
  { id: 'ter', day: 'T', height: 64, active: false },
  { id: 'qua', day: 'Q', height: 48, active: false },
  { id: 'qui', day: 'Q', height: 84, active: false },
  { id: 'sex', day: 'S', height: 56, active: false },
  { id: 'sab', day: 'S', height: 100, active: true },
  { id: 'dom', day: 'D', height: 32, active: false },
];

const ACTIVE_PLANS = [
  { id: '1', title: 'Organização Financeira', progress: 60 },
  { id: '2', title: 'Estratégia de Vendas', progress: 30 },
];

export default function PainelScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top']}>
      <Box className="flex-1 bg-background-50">
        <ScrollView
          contentContainerStyle={{ padding: 24, paddingBottom: 112, gap: 16 }}
          showsVerticalScrollIndicator={false}
        >
          <HStack className="items-center justify-between">
            <VStack>
              <Heading size="xl" className="text-typography-900">
                Olá, Marina
              </Heading>
              <Text size="sm" className="text-typography-500">
                Veja seu progresso esta semana
              </Text>
            </VStack>
            <Avatar size="md" className="bg-primary-50">
              <AvatarFallbackText className="text-primary-500">Marina</AvatarFallbackText>
            </Avatar>
          </HStack>

          <HStack space="md">
            {STATS.map((stat) => (
              <Card
                key={stat.id}
                className="flex-1 rounded-2xl border border-outline-200 bg-background-0 p-4"
              >
                <VStack space="xs">
                  <Heading size="2xl" className="text-primary-500">
                    {stat.value}
                  </Heading>
                  <Text size="sm" className="text-typography-500">
                    {stat.label}
                  </Text>
                </VStack>
              </Card>
            ))}
          </HStack>

          <Card className="rounded-2xl border border-outline-200 bg-background-0 p-4">
            <VStack space="lg">
              <Text size="md" bold className="text-typography-900">
                Atividade da semana
              </Text>
              <HStack className="items-end justify-between px-1">
                {WEEK.map((bar) => (
                  <VStack key={bar.id} space="sm" className="items-center">
                    <Box
                      className={`w-6 rounded-lg ${bar.active ? 'bg-primary-500' : 'bg-primary-100'}`}
                      style={{ height: bar.height }}
                    />
                    <Text
                      size="xs"
                      bold={bar.active}
                      className={bar.active ? 'text-primary-500' : 'text-typography-500'}
                    >
                      {bar.day}
                    </Text>
                  </VStack>
                ))}
              </HStack>
            </VStack>
          </Card>

          <Heading size="md" className="mt-2 text-typography-900">
            Planos ativos
          </Heading>

          <VStack space="md">
            {ACTIVE_PLANS.map((plan) => (
              <Card
                key={plan.id}
                className="rounded-2xl border border-outline-200 bg-background-0 p-4"
              >
                <VStack space="md">
                  <HStack className="items-center justify-between">
                    <Text size="md" bold className="flex-1 text-typography-900">
                      {plan.title}
                    </Text>
                    <Text size="md" bold className="text-primary-500">
                      {plan.progress}%
                    </Text>
                  </HStack>
                  <Progress value={plan.progress} size="sm" className="bg-background-200">
                    <ProgressFilledTrack className="bg-primary-500" />
                  </Progress>
                </VStack>
              </Card>
            ))}
          </VStack>
        </ScrollView>
      </Box>
    </SafeAreaView>
  );
}
