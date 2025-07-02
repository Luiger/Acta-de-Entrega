import React from 'react';
import { View, StyleSheet } from 'react-native';
import SubmoduleButton from '../components/SubmoduleButton';
import { useRouter } from 'expo-router';

const ElaboracionScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <SubmoduleButton
        title="Acta de Entrega Saliente Pro"
        onPress={() => router.push('/acta-saliente')}
      />
      <SubmoduleButton
        title="Acta de Entrega Entrante Pro"
        onPress={() => router.push('/acta-entrante')}
      />
      <SubmoduleButton
        title="Acta de Entrega Máxima Autoridad Pro"
        onPress={() => router.push('/acta-maxima-autoridad')}
      />
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
});

export default ElaboracionScreen;
