import styled from "styled-components/native";
import { theme } from "../../../../theme";


export const PartidaContainer = styled.TouchableOpacity`

    width: 100%;
    
    margin-top: 20px;
    gap: 10px;
`

export const PartidaDados = styled.TouchableOpacity`

    width: 100%;
    height: 60px;
    
    padding: 13px;

    border-radius: 5px;

    background-color: ${theme.colors.vinhoEscuro};

    justify-content: space-between;
    align-items: center;
    flex-direction: row;

`