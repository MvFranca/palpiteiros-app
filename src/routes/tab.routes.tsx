import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home'; // ajuste o caminho conforme necessário
import Escalacao from '../screens/escalação/index'; // ajuste o caminho conforme necessário
import Apostas from '../screens/apostas'; // ajuste o caminho conforme necessário
import Estatisticas from '../screens/estatisticas'; // ajuste o caminho conforme necessário
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Entypo } from '@expo/vector-icons';
import { theme } from '../theme';

const Tab = createBottomTabNavigator();

// Mapeamento de nomes de rota para títulos
export const screenOptionsByRoute = {
  home: 'Home',
  Escalacao: 'Escalação',
  Apostas: 'Apostas',
  Estatísticas: 'Estatísticas'
};

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: () => <AntDesign name="home" size={24} color={theme.colors.dourado} />,
          tabBarLabel: "Home"
        }}
      />

      <Tab.Screen
        name="Escalacao"
        component={Escalacao}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="soccer-field" size={24} color={theme.colors.dourado} />,
          tabBarLabel: "Escalação"
        }}
      />

      <Tab.Screen
        name="Apostas"
        component={Apostas}
        options={{
          tabBarIcon: () => <FontAwesome5 name="medal" size={20} color={theme.colors.dourado} />,
          tabBarLabel: "Apostas"
        }}
      />

      <Tab.Screen
        name="Estatísticas"
        component={Estatisticas}
        options={{
          tabBarIcon: () => <Entypo name="bar-graph" size={20} color={theme.colors.dourado} />,
          tabBarLabel: "Estatísticas"
        }}
      />
    </Tab.Navigator>
  );
}
