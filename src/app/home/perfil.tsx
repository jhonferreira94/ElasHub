import { useRouter } from 'expo-router';
import { ChevronRight } from 'lucide-react-native';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button, Card } from '@/components/ui';
import { Tokens } from '@/constants/tokens';

const OPTIONS = ['Editar perfil', 'Notificações', 'Privacidade', 'Ajuda'];

export default function PerfilScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.profile}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>M</Text>
          </View>
          <Text style={styles.name}>Marina Souza</Text>
          <Text style={styles.email}>marina@email.com</Text>
        </View>

        <Card style={styles.menu}>
          {OPTIONS.map((option, index) => (
            <Pressable
              key={option}
              accessibilityRole="button"
              style={[styles.row, index < OPTIONS.length - 1 && styles.rowDivider]}
            >
              <Text style={styles.rowLabel}>{option}</Text>
              <ChevronRight size={20} color={Tokens.color.textSoft} strokeWidth={2} />
            </Pressable>
          ))}
        </Card>

        <Button title="Sair" variant="secondary" onPress={() => router.replace('/')} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Tokens.color.background },
  content: { padding: Tokens.space.xxl, gap: Tokens.space.xl },
  profile: { alignItems: 'center', gap: Tokens.space.xs, paddingTop: Tokens.space.lg },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: Tokens.radius.round,
    backgroundColor: Tokens.color.primaryTint,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Tokens.space.sm,
  },
  avatarText: {
    fontSize: Tokens.typography.h1.fontSize,
    fontWeight: '700',
    color: Tokens.color.primary,
  },
  name: {
    fontSize: Tokens.typography.h3.fontSize,
    fontWeight: '700',
    color: Tokens.color.textStrong,
  },
  email: {
    fontSize: Tokens.typography.body.fontSize,
    color: Tokens.color.textSoft,
  },
  menu: { padding: 0, overflow: 'hidden' },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Tokens.space.lg,
    paddingHorizontal: Tokens.space.lg,
  },
  rowDivider: {
    borderBottomWidth: 1,
    borderBottomColor: Tokens.color.borderSubtle,
  },
  rowLabel: {
    fontSize: Tokens.typography.bodyStrong.fontSize,
    color: Tokens.color.textStrong,
  },
});
