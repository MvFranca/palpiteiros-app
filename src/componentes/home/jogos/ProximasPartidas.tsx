import { StyleSheet, TextStyle } from "react-native";
import { View } from "react-native";
import { theme } from "../../../theme";
import { Title } from "../../../screens/home/styles";
import { Container, Separator } from "./styles";

const ProximasPartidas = () => {


    return ( 
        <Container>
            <View>
                <Title style={{fontSize: 20, fontWeight: "bold"}}>
                    Próximas Partidas
                </Title>

                <Separator/>
            </View>
            {/* <SectionList >

            </SectionList> */}
        </Container>
     );
}
 
export default ProximasPartidas;