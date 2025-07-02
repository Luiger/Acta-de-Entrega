import React from 'react';
import { View, StyleSheet } from 'react-native';
import ModuleCard from '../components/ModuleCard';
import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <ModuleCard
          title="Compliance"
          subtitle="Servidor público saliente"
          hashtag="#UniversitasLegal"
          onPress={() => router.push('/compliance')}
        />
        <ModuleCard
          title="Elaboración"
          subtitle="Servidor público entrante"
          hashtag="#UniversitasLegal"
          onPress={() => router.push('/elaboracion')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default HomeScreen;
