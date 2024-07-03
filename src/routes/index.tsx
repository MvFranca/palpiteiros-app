import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerRoutes } from './drawer.routes'; // ajuste o caminho conforme necessário
import { useRoute } from '@react-navigation/native';

export const Routes = () => {


  return (
    <NavigationContainer>
      <DrawerRoutes />
      {/* <StackNavigator /> */}
    </NavigationContainer>
  );
}
