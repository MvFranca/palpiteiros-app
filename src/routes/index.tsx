import { NavigationContainer } from "@react-navigation/native"
import TabRoutes from "./tab.routes"
import { Drawer } from "./drawer.routes"

export const Routes = () => {
    return(
        <NavigationContainer>
            <TabRoutes/>
        </NavigationContainer>
    )
}