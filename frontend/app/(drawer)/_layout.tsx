import { Drawer } from 'expo-router/drawer';
import CustomDrawerContent from '../../src/components/CustomDrawerContent';
import CustomHeader from '../../src/components/CustomHeader';

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props: any) => <CustomDrawerContent {...props} />}
      screenOptions={{
        header: () => <CustomHeader />,
      }}>
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Home',
          title: 'Acta de Entrega',
        }}
      />
      <Drawer.Screen
        name="contactos"
        options={{
          drawerLabel: 'Contactos',
          title: 'Contactos',
        }}
      />
      <Drawer.Screen
        name="acerca-de"
        options={{
          drawerLabel: 'Acerca de',
          title: 'Acerca de',
        }}
      />
    </Drawer>
  );
}
