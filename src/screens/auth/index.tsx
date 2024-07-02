import { Button, Image, ImageProps, View } from "react-native";

import {styles} from "./styles"


const Home = () => {

    return ( 
        <View style={styles.container}>

            <View style={styles.left}>
                <Image 
                source={require("../../assets/logo.png")} 
                
                />
            </View>

            <View style={styles.right}>
                <Image 
                source={require("../../assets/fiska.png")} 
                
                />

            </View>


            {/* <Link /> */}
        </View>
     );
}
 
export default Home;