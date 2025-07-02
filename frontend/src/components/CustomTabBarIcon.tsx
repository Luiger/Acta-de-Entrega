import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IconSymbol, IconSymbolName } from '@/components/ui/IconSymbol';

interface CustomTabBarIconProps {
  name: IconSymbolName;
  label: string;
  focused: boolean;
}

const CustomTabBarIcon = ({ name, label, focused }: CustomTabBarIconProps) => {
  return (
    <View style={styles.container}>
      {focused ? (
        <View style={styles.focusedContainer}>
          <IconSymbol name={name} size={24} color="#000000" />
        </View>
      ) : (
        <>
          <IconSymbol name={name} size={24} color="#FFFFFF" />
          <Text style={styles.label}>{label}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  // Contenedor principal que fuerza la altura y el centrado vertical
  container: {
    height: 50, // Ocupa toda la altura de la barra
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Estilo para el botón cuando está seleccionado (la píldora)
  focusedContainer: {
    width: 60,
    height: 36,
    borderRadius: 18, // Para forma de píldora
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Estilo para la etiqueta de texto cuando no está seleccionado
  label: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 2,
  },
});

export default CustomTabBarIcon;
