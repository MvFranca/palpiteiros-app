import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Text } from "react-native"
import TabRoutes from "./tab.routes"

const stack = createNativeStackNavigator()

const StackNavigator = () => {
    return(
        <stack.Navigator initialRouteName="placar">

            
            <stack.Screen 
                name="tabroutes"
                component={TabRoutes}
                
            />
            <stack.Screen 
                name="placar"
                component={() => <Text>Placar</Text>}
                
            />
        </stack.Navigator>
    )
} 

export default StackNavigator