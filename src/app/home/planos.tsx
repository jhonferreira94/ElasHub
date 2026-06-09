import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Badge, Card } from '@/components/ui';
import { Tokens } from '@/constants/tokens';

const PLANS = [
  { id: '1', title: 'Organização Financeira', progress: '3 de 5 ferramentas', tone: 'warning' as const, status: 'Em andamento' },
  { id: '2', title: 'Marketing nas redes', progress: '5 de 5 ferramentas', tone: 'success' as const, status: 'Concluída' },
];

export default function PlanosScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Meus planos</Text>
        <Text style={styles.subtitle}>Acompanhe a evolução de cada plano.</Text>

        <View style={styles.list}>
          {PLANS.map((plan) => (
            <Card key={plan.id} style={styles.planCard}>
              <View style={styles.planTop}>
                <Text style={styles.planTitle}>{plan.title}</Text>
                <Badge label={plan.status} tone={plan.tone} />
              </View>
              <Text style={styles.planCaption}>{plan.progress}</Text>
            </Card>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Tokens.color.background },
  content: { padding: Tokens.space.xxl, gap: Tokens.space.lg },
  title: {
    fontSize: Tokens.typography.h2.fontSize,
    fontWeight: '700',
    color: Tokens.color.textStrong,
  },
  subtitle: {
    fontSize: Tokens.typography.body.fontSize,
    color: Tokens.color.textSoft,
    marginTop: -Tokens.space.sm,
  },
  list: { gap: Tokens.space.md, marginTop: Tokens.space.sm },
  planCard: { gap: Tokens.space.md },
  planTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Tokens.space.md,
  },
  planTitle: {
    flex: 1,
    fontSize: Tokens.typography.bodyStrong.fontSize,
    fontWeight: '700',
    color: Tokens.color.textStrong,
  },
  planCaption: {
    fontSize: Tokens.typography.caption.fontSize,
    color: Tokens.color.textSoft,
  },
});
