import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../theme';

export const Container = styled.View`
  flex: 1;
  height: 100%;
  background-color: ${theme.colors.branco};
  flex-direction: column;
  padding: 0 20px;
`;

export const GeneralInfos = styled.View`
    height: 110;
    width: 100%;
    border-radius: 5px;
    
    background-color: ${theme.colors.vinhoEscuro};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const LeftGeneral = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 55%;
    gap: 10px;
`
export const RightGeneral = styled.View`

    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    border-left-width: 1px; /* Largura da borda esquerda */
    border-left-style: solid; /* Estilo da borda (solid, dashed, dotted, etc.) */
    border-left-color: ${theme.colors.dourado}; 
    padding: 10px;
    /* gap: 2px; */
    height: 100%;
    width: 45%;
    height: 100%;

`

export const RightGeneralChield = styled.TouchableOpacity`
    width: 50%;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* background-color: #fff; */
`

export const LogoGeneral = styled.Image`
        width: 60px;
         height: 76px;        
         /* border-radius: 5px; */
`

export const TextWhite = styled.Text`
    color: ${theme.colors.branco};
    justify-content: center;
    align-items: center;
`

export const Title = styled.Text`
    color: ${theme.colors.dourado};
`

export const InformationsTeam = styled.View`
    width: 100%;
    margin-top: 10px;
    /* gap: 6; */

    flex-direction: row;
    justify-content: space-between;
`