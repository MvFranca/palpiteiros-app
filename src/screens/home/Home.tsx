import { Button, Image, ImageProps, SafeAreaView, Text, View } from "react-native";
import { theme } from "../../theme";

import { Container, GeneralInfos,InformationsTeam,LeftGeneral,LogoGeneral,RightGeneral, RightGeneralChield, Title, TextWhite} from "./styles"
import { TouchableOpacity } from "react-native-gesture-handler";
import HomeStatistic from "../../componentes/home/estatisticas";
import ProximasPartidas from "../../componentes/home/jogos/ProximasPartidas";

const Home = () => {


    return ( 
        <Container>
           
        <GeneralInfos>

            <LeftGeneral>
                <LogoGeneral source={require("../../assets/logo.png")} />

                <View>
                    <TextWhite>
                        Pauπteiros
                    </TextWhite>
                    {/* <TextWhite >
                        Fundado em 01/02/2024 
                    </TextWhite> */}
                </View>

            </LeftGeneral>
           
            <RightGeneral>
                
                <RightGeneralChield>
                    <Title>
                        Jogos
                    </Title>
                    <TextWhite>
                        <Image />
                        20
                    </TextWhite>
                </RightGeneralChield>

                <RightGeneralChield>
                    <Title>
                        Títulos
                    </Title>
                    <TextWhite>
                        <Image />
                        20
                    </TextWhite>
                </RightGeneralChield>

                <RightGeneralChield>
                    <Title>
                        Vitórias
                    </Title>
                    <TextWhite>
                        <Image />
                        20
                    </TextWhite>
                </RightGeneralChield>
                
                <RightGeneralChield>
                    <Title>
                        Torneios
                    </Title>
                    <TextWhite>
                        <Image />
                        20
                    </TextWhite>
                </RightGeneralChield>

            </RightGeneral>

        </GeneralInfos>

        <InformationsTeam>
            <HomeStatistic
                title="Última partida"
                src={require("../../assets/bola.png")}
                info={20}
            />
            <HomeStatistic
                title="Última partida"
                src={require("../../assets/bola.png")}
                info={20}
            />
            <HomeStatistic
                title="Última partida"
                src={require("../../assets/bola.png")}
                info={20}
            />
        </InformationsTeam>

         <ProximasPartidas>

         </ProximasPartidas>

        </Container>
     );
}
 
export default Home;