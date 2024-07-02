import styled from "styled-components/native";
import { theme } from "./index";

interface textObject{
    TextWhite: any,
    Title: any
}


const TextWhite =  styled.View`
color: ${theme.colors.branco};
justify-content: center;
align-items: center;
`

const Title = styled.Text`
color: ${theme.colors.dourado};
`

export const texts:textObject = {

    TextWhite,
    Title
}