import { StyleSheet, TextStyle } from "react-native";
import { View } from "react-native";
import { theme } from "../../../../theme";
import { Title } from "../../../../screens/home/styles";
import { Container, Separator } from "./styles";
import Partida from "../partidas";
import { ScrollView } from "react-native-gesture-handler";

const ProximasPartidas = () => {


    return ( 
        <Container>
            <View>
                <Title style={{fontSize: 20, fontWeight: "bold"}}>
                    Próximas Partidas
                </Title>

                <Separator/>
            </View>

            <ScrollView>

                <Partida />
                
                <Partida />

                <Partida />
                
                <Partida />
                
                <Partida />

                <Partida />
                
                <Partida />

            </ScrollView>
        </Container>
     );
}
 
export default ProximasPartidas;