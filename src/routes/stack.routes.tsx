import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Text } from "react-native"

const stack = createNativeStackNavigator()

const StackNavigator = () => {
    return(
        <stack.Navigator initialRouteName="placar">
            <stack.Screen 
                name="placar"
                component={() => <Text>Placar</Text>}
                
            />
        </stack.Navigator>
    )
} 

export default StackNavigator