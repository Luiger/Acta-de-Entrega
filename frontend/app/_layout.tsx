import { Stack } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(drawer)" />
          <Stack.Screen name="acta-saliente" />
          <Stack.Screen name="acta-entrante" />
          <Stack.Screen name="acta-maxima-autoridad" />
          <Stack.Screen name="compliance-acta-entrega" />
          <Stack.Screen name="panel-actas" />
          <Stack.Screen name="repositorio-legal" />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
