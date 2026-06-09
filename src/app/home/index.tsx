import { useRouter } from 'expo-router';
import { ArrowRight } from 'lucide-react-native';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Card, Icon } from '@/components/ui';
import { Tokens } from '@/constants/tokens';

const PROGRESS = 0.6;

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Bom dia,</Text>
            <Text style={styles.name}>Marina</Text>
          </View>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>M</Text>
          </View>
        </View>

        <Card variant="brand" style={styles.devCard}>
          <View style={styles.devBadge}>
            <Text style={styles.devBadgeText}>DEVOCIONAL DO DIA</Text>
          </View>
          <Text style={styles.devTitle}>Coragem para recomeçar</Text>
          <Text style={styles.devBody}>
            “Tudo posso naquele que me fortalece.” Hoje, dê o primeiro passo no que
            você vem adiando.
          </Text>
          <Pressable
            accessibilityRole="button"
            style={styles.devLink}
            hitSlop={8}
          >
            <Text style={styles.devLinkText}>Ler reflexão completa</Text>
            <ArrowRight size={18} color={Tokens.color.textOnPrimary} strokeWidth={2.5} />
          </Pressable>
        </Card>

        <Card style={styles.planCard}>
          <View style={styles.planTop}>
            <Text style={styles.planTitle}>Plano: Organização Financeira</Text>
            <Text style={styles.planPercent}>60%</Text>
          </View>
          <View style={styles.track}>
            <View style={[styles.fill, { width: `${PROGRESS * 100}%` }]} />
          </View>
          <Text style={styles.planCaption}>3 de 5 ferramentas concluídas</Text>
        </Card>

        <Text style={styles.sectionTitle}>Acesso rápido</Text>
        <View style={styles.quickRow}>
          <Pressable
            accessibilityRole="button"
            style={styles.quickCard}
            onPress={() => router.push('/home/planos')}
          >
            <Icon name="goal" size={28} color={Tokens.color.primary} />
            <Text style={styles.quickLabel}>Tópicos e metas</Text>
          </Pressable>
          <Pressable
            accessibilityRole="button"
            style={styles.quickCard}
            onPress={() => router.push('/home/planos')}
          >
            <Icon name="plans" size={28} color={Tokens.color.primary} />
            <Text style={styles.quickLabel}>Meus planos</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Tokens.color.background,
  },
  content: {
    padding: Tokens.space.xxl,
    gap: Tokens.space.xl,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  greeting: {
    fontSize: Tokens.typography.body.fontSize,
    color: Tokens.color.textSoft,
  },
  name: {
    fontSize: Tokens.typography.h2.fontSize,
    fontWeight: '700',
    color: Tokens.color.textStrong,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: Tokens.radius.round,
    backgroundColor: Tokens.color.primaryTint,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: Tokens.typography.section.fontSize,
    fontWeight: '700',
    color: Tokens.color.primary,
  },
  devCard: {
    gap: Tokens.space.md,
  },
  devBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.22)',
    borderRadius: Tokens.radius.round,
    paddingVertical: Tokens.space.xs + 1,
    paddingHorizontal: Tokens.space.md,
  },
  devBadgeText: {
    fontSize: Tokens.typography.label.fontSize,
    fontWeight: '700',
    color: Tokens.color.textOnPrimary,
    letterSpacing: 0.5,
  },
  devTitle: {
    fontSize: Tokens.typography.h2.fontSize,
    fontWeight: '700',
    color: Tokens.color.textOnPrimary,
  },
  devBody: {
    fontSize: Tokens.typography.body.fontSize,
    lineHeight: Tokens.typography.body.lineHeight,
    color: 'rgba(255,255,255,0.9)',
  },
  devLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Tokens.space.sm,
    marginTop: Tokens.space.xs,
  },
  devLinkText: {
    fontSize: Tokens.typography.bodyStrong.fontSize,
    fontWeight: '700',
    color: Tokens.color.textOnPrimary,
  },
  planCard: {
    gap: Tokens.space.md,
  },
  planTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  planTitle: {
    flex: 1,
    fontSize: Tokens.typography.bodyStrong.fontSize,
    fontWeight: '700',
    color: Tokens.color.textStrong,
  },
  planPercent: {
    fontSize: Tokens.typography.bodyStrong.fontSize,
    fontWeight: '700',
    color: Tokens.color.primary,
  },
  track: {
    height: 8,
    borderRadius: Tokens.radius.round,
    backgroundColor: Tokens.color.track,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: Tokens.radius.round,
    backgroundColor: Tokens.color.primary,
  },
  planCaption: {
    fontSize: Tokens.typography.caption.fontSize,
    color: Tokens.color.textSoft,
  },
  sectionTitle: {
    fontSize: Tokens.typography.section.fontSize,
    fontWeight: '700',
    color: Tokens.color.textStrong,
  },
  quickRow: {
    flexDirection: 'row',
    gap: Tokens.space.lg,
  },
  quickCard: {
    flex: 1,
    gap: Tokens.space.xl,
    padding: Tokens.space.lg,
    borderRadius: Tokens.radius.xl,
    backgroundColor: Tokens.color.primaryTint,
    minHeight: 120,
    justifyContent: 'space-between',
  },
  quickLabel: {
    fontSize: Tokens.typography.bodyStrong.fontSize,
    fontWeight: '700',
    color: Tokens.color.textStrong,
  },
});
