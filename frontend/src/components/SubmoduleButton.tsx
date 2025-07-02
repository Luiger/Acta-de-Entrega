import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

interface SubmoduleButtonProps {
  title: string;
  onPress: () => void;
}

const SubmoduleButton = ({ title, onPress }: SubmoduleButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 8,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default SubmoduleButton;
