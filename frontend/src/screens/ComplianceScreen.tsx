import React from 'react';
import { View, StyleSheet } from 'react-native';
import SubmoduleButton from '../components/SubmoduleButton';
import { useRouter } from 'expo-router';

const ComplianceScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <SubmoduleButton
        title="Complaince Acta de Entrega"
        onPress={() => router.push('/compliance-acta-entrega')}
      />
      <SubmoduleButton
        title="Panel de Actas"
        onPress={() => router.push('/panel-actas')}
      />
      <SubmoduleButton
        title="Repositorio Legal"
        onPress={() => router.push('/repositorio-legal')}
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

export default ComplianceScreen;
