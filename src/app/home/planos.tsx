import { FileText } from 'lucide-react-native';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Center } from '@/components/ui/center';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

const PROGRESS = 60;

const TOOLS = [
  {
    id: '1',
    title: 'Planilha de Fluxo de Caixa',
    status: 'Concluída · ★ 4.5',
    statusClass: 'text-success-700',
    action: 'Ver meu envio',
  },
  {
    id: '2',
    title: 'Modelo de Precificação',
    status: 'Em andamento',
    statusClass: 'text-warning-700',
    action: 'Continuar',
  },
  {
    id: '3',
    title: 'Checklist de Metas',
    status: 'Pendente',
    statusClass: 'text-typography-500',
    action: 'Baixar modelo',
  },
];

export default function PlanosScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top']}>
      <Box className="flex-1 bg-background-50">
        <ScrollView
          contentContainerStyle={{ padding: 24, paddingBottom: 112, gap: 16 }}
          showsVerticalScrollIndicator={false}
        >
          <Heading size="xl" className="text-typography-900">
            Meu plano
          </Heading>

          <Card className="rounded-2xl border border-outline-200 bg-background-0 p-4">
            <VStack space="md">
              <HStack className="items-center justify-between">
                <Text size="md" bold className="flex-1 text-typography-900">
                  Organização Financeira
                </Text>
                <Text size="md" bold className="text-primary-500">
                  {PROGRESS}%
                </Text>
              </HStack>
              <Progress value={PROGRESS} size="sm" className="bg-background-200">
                <ProgressFilledTrack className="bg-primary-500" />
              </Progress>
              <Text size="sm" className="text-typography-500">
                3 de 5 ferramentas concluídas
              </Text>
            </VStack>
          </Card>

          <Heading size="md" className="mt-2 text-typography-900">
            Ferramentas
          </Heading>

          <VStack space="lg">
            {TOOLS.map((tool) => (
              <Card
                key={tool.id}
                className="rounded-2xl border border-outline-200 bg-background-0 p-4"
              >
                <VStack space="lg">
                  <HStack space="md" className="items-center">
                    <Center className="h-12 w-12 rounded-xl bg-primary-50">
                      <Icon as={FileText} className="h-6 w-6 text-primary-500" />
                    </Center>
                    <VStack space="xs" className="flex-1">
                      <Text size="md" bold className="text-typography-900">
                        {tool.title}
                      </Text>
                      <Text size="sm" bold className={tool.statusClass}>
                        {tool.status}
                      </Text>
                    </VStack>
                  </HStack>
                  <Button size="lg" className="rounded-xl bg-primary-50">
                    <ButtonText className="text-primary-500 data-[hover=true]:text-primary-600 data-[active=true]:text-primary-600">
                      {tool.action}
                    </ButtonText>
                  </Button>
                </VStack>
              </Card>
            ))}
          </VStack>
        </ScrollView>
      </Box>
    </SafeAreaView>
  );
}
