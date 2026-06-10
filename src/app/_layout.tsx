import '@/global.css';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { Tokens } from '@/constants/tokens';

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light">
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: Tokens.color.background },
          }}
        />
      </SafeAreaProvider>
    </GluestackUIProvider>
  );
}
