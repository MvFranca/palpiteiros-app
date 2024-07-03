import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabRoutes from './tab.routes'; // ajuste o caminho conforme necessário
import { theme } from '../theme';
import { Feather } from '@expo/vector-icons';
import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export const DrawerRoutes = () => {

  
  return (
    <Drawer.Navigator 
    screenOptions={  
      {
        title: 'Paupiteiros', 
        headerStyle: {
        backgroundColor: theme.colors.vinhoEscuro,
        },
        headerTintColor: theme.colors.branco,
      }
      
    }>
      <Drawer.Screen
        name="tabroutes"
        component={TabRoutes}
        options={{
          drawerIcon: () => <Feather name="home" color={theme.colors.dourado} size={24} />,
        }}
      />
      {/* Adicione mais screens conforme necessário */}
    </Drawer.Navigator>
  );
}
