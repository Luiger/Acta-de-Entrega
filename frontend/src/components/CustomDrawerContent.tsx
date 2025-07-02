import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawerContent = (props: any) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.headerContainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>Acta de Entrega</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.footerContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/50' }} // Placeholder for user image
          style={styles.userImage}
        />
        <View>
          <Text style={styles.userName}>Nombre de Usuario</Text>
          <Text style={styles.userEmail}>usuario@email.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerContainer: {
    borderTopWidth: 1,
    borderTopColor: '#E7E7E7',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 14,
    color: 'gray',
  },
});

export default CustomDrawerContent;
