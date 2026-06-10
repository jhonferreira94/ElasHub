import { Tabs } from 'expo-router';

import { Icons } from '@/constants/icons';
import { Tokens } from '@/constants/tokens';

const HomeIcon = Icons.home;
const PlansIcon = Icons.plans;
const DashboardIcon = Icons.dashboard;
const ProfileIcon = Icons.profile;

export default function HomeTabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: Tokens.color.primary,
        tabBarInactiveTintColor: Tokens.color.textSoft,
        tabBarStyle: {
          position: 'absolute',
          left: 24,
          right: 24,
          bottom: 16,
          height: 64,
          borderRadius: 22,
          backgroundColor: Tokens.color.surface,
          borderTopWidth: 0,
          borderWidth: 1,
          borderColor: Tokens.color.borderSubtle,
          paddingTop: 8,
          paddingBottom: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => <HomeIcon size={24} color={color} strokeWidth={2} />,
        }}
      />
      <Tabs.Screen
        name="planos"
        options={{
          title: 'Planos',
          tabBarIcon: ({ color }) => <PlansIcon size={24} color={color} strokeWidth={2} />,
        }}
      />
      <Tabs.Screen
        name="painel"
        options={{
          title: 'Painel',
          tabBarIcon: ({ color }) => <DashboardIcon size={24} color={color} strokeWidth={2} />,
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <ProfileIcon size={24} color={color} strokeWidth={2} />,
        }}
      />
    </Tabs>
  );
}
