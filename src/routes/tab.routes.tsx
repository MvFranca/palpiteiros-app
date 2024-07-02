import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Home from "../screens/home/Home"
import Escalacao from "../screens/escalação/index"
import Apostas from "../screens/apostas";
import Estatisticas from "../screens/estatisticas";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Entypo } from '@expo/vector-icons';

import { theme } from "../theme";


const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen 
                name="home"
                component={Home}
                options={{
                    tabBarIcon: () => <AntDesign name="home" size={24}  color={theme.colors.dourado} />,
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
    )
}