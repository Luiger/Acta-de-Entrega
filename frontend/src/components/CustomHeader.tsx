import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
import { IconSymbol } from '@/components/ui/IconSymbol';

const CustomHeader = () => {
  const navigation = useNavigation();
  const [hasNotifications, setHasNotifications] = useState(true); // Estado para simular notificaciones

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={openDrawer} style={styles.iconButton}>
          <IconSymbol name="line.3.horizontal" size={24} color="#000" />
        </TouchableOpacity>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Acta de Entrega</Text>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <IconSymbol name="magnifyingglass" size={24} color="#000" />
        </TouchableOpacity>
        <View>
          <TouchableOpacity style={styles.iconButton}>
            <IconSymbol name="bell" size={24} color="#000" />
          </TouchableOpacity>
          {hasNotifications && <View style={styles.notificationBadge} />}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#F8F8F8',
    borderBottomWidth: 1,
    borderBottomColor: '#E7E7E7',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginRight: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconButton: {
    padding: 5,
  },
  notificationBadge: {
    position: 'absolute',
    right: 5,
    top: 5,
    backgroundColor: 'red',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

export default CustomHeader;
