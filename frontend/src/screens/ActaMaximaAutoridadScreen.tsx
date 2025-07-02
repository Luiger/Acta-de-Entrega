import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ActaMaximaAutoridadScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Acta de Entrega Máxima Autoridad Pro</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default ActaMaximaAutoridadScreen;
