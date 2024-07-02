import { createDrawerNavigator } from "@react-navigation/drawer"
import TabRoutes from "./tab.routes"
import { theme } from "../theme"

import {Feather} from "@expo/vector-icons"

const drawer = createDrawerNavigator()


export const Drawer = () => {
    return(

        <drawer.Navigator>

        <drawer.Screen 

            name="Home"
            component={TabRoutes}
            
            options={{
                drawerIcon: () => <Feather name="home" color={theme.colors.dourado} size={24}  />
            }}
        />

        </drawer.Navigator>

    )
}