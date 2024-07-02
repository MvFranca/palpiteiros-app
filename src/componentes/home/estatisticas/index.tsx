import { Image, ImageProps, Text } from "react-native"
import { View } from "react-native"
import { Estatistica, TextWhite,  } from "./styles";
import { theme } from "../../../theme";
import { Title } from "../../../screens/home/styles";

type props = {
    title: string;
    src: ImageProps;
    info: number;
}

const HomeStatistic = ({title, src, info}: props) => {

    // const {TextWhite, Title} = theme.texts


    return(
        <Estatistica>

            <Title>
                {
                    title
                }
            </Title>

            <View style={{flexDirection: "row", alignContent: "center", justifyContent: "center", gap: 5, height: 20}}>
                <Image source={src}/>
                <TextWhite >
                    {
                        String(info)
                    }
                </TextWhite>
            </View>
        </Estatistica>
    )
}

export default HomeStatistic