import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Placar from "../placar";
import { PartidaContainer, PartidaDados } from "./styles";
import { TextWhite } from "../../estatisticas/styles";

const Partida = () => {
    return ( 
        <PartidaContainer>

            <Text style={{fontWeight: "bold"}}>
                3 de junho de 2024
            </Text>

            <PartidaDados>
                <TextWhite>
                    19:30
                </TextWhite>
                <Placar />
                <TextWhite>
                    Campo - IFAL
                </TextWhite>
            </PartidaDados>

        </PartidaContainer>
     );
}
 
export default Partida;