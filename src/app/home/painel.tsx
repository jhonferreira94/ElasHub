import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Card } from '@/components/ui';
import { Tokens } from '@/constants/tokens';

const STATS = [
  { id: '1', value: '2', label: 'Planos ativos' },
  { id: '2', value: '8', label: 'Ferramentas concluídas' },
  { id: '3', value: '12', label: 'Dias seguidos' },
  { id: '4', value: '60%', label: 'Progresso médio' },
];

export default function PainelScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Seu painel</Text>
        <Text style={styles.subtitle}>Um resumo da sua evolução.</Text>

        <View style={styles.grid}>
          {STATS.map((stat) => (
            <Card key={stat.id} style={styles.statCard}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Tokens.space.md,
    marginTop: Tokens.space.sm,
  },
  statCard: {
    width: '47.5%',
    gap: Tokens.space.xs,
  },
  statValue: {
    fontSize: Tokens.typography.h1.fontSize,
    fontWeight: '700',
    color: Tokens.color.primary,
  },
  statLabel: {
    fontSize: Tokens.typography.caption.fontSize,
    color: Tokens.color.textSoft,
  },
});
