import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

interface ModuleCardProps {
  title: string;
  subtitle: string;
  hashtag: string;
  onPress: () => void;
}

const ModuleCard = ({ title, subtitle, hashtag, onPress }: ModuleCardProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        {/* Placeholder for the background image */}
        <View style={styles.imagePlaceholder} />
        <View style={styles.textOverlay}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <Text style={styles.hashtag}>{hashtag}</Text>
        </View>
      </View>
      <Text style={styles.footerTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 160,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 10,
  },
  imageContainer: {
    height: 180,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: 'hidden',
  },
  imagePlaceholder: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#003366', // Dark blue placeholder
  },
  textOverlay: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  hashtag: {
    color: '#FFFFFF',
    fontSize: 12,
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  footerTitle: {
    padding: 10,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default ModuleCard;
