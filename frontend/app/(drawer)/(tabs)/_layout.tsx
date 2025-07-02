import { Tabs } from 'expo-router';
import React from 'react';
import CustomTabBarIcon from '../../../src/components/CustomTabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // El header lo provee el Drawer
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#4169E1',
          height: 60,
          borderTopWidth: 0,
          justifyContent: 'space-around',
          alignItems: 'center',
        },
        tabBarItemStyle: {
          justifyContent: 'center',
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon focused={focused} name="house.fill" label="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="catalogo"
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon focused={focused} name="books.vertical.fill" label="Catálogo" />
          ),
        }}
      />
      <Tabs.Screen
        name="soporte"
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon focused={focused} name="lifepreserver.fill" label="Soporte" />
          ),
        }}
      />
      {/* Pantallas ocultas en la barra de pestañas pero navegables */}
      <Tabs.Screen name="compliance" options={{ href: null }} />
      <Tabs.Screen name="elaboracion" options={{ href: null }} />
    </Tabs>
  );
}
