import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';
import PlanoSVG from '../../assets/plano.svg'
import SinoSVG from '../../assets/sino.svg'
import MoedaSVG from '../../assets/moeda.svg'
import CalendarioSVG from '../../assets/calendario.svg'
import CopiarSVG from '../../assets/copiar.svg'


export const Container = styled.View`
    height: ${RFValue(265)}px;
    width: ${RFValue(300)}px;
    margin-top: ${RFValue(10)}px;
    /* margin-bottom: ${RFValue(25)}px; */
    justify-content: flex-start;
    align-items: flex-start;


`;  

export const Content = styled.View`
    width: ${RFValue(310)}px;
    background-color: #343438;
    padding: ${RFValue(20)}px;
    border-radius: ${RFValue(20)}px;
    align-items: center;
`;

export const ContainerIcon = styled.View`
    width: ${RFValue(55)}px;
    height: ${RFValue(55)}px;
    border-radius: ${RFValue(55)}px;
    background-color: rgba(241, 73, 2, 0.1);
    align-items: center;
    justify-content: center;
`;

export const Plano = styled(PlanoSVG)``

export const ContainerText = styled.View`
    flex-direction: row;
    width: 85%;
    justify-content: space-between;
`


export const Text = styled.Text`
    color: #D4D4D8;
    align-items: center;
    font-family: "Teko_400Regular";
    font-size: ${RFValue(18)}px;

`
export const TextBold = styled.Text`
    color: #D4D4D8;
    align-items: center;
    font-family: "Teko_600SemiBold";
    font-size: ${RFValue(18)}px;

`

export const ContainerBoleto = styled.View`
    background-color: #1B1B1B;
    width: 100%;
    /* height: ${RFValue(78)}px; */
    margin-top: ${RFValue(10)}px;
    border-radius: ${RFValue(10)}px;
    padding: ${RFValue(10)}px ${RFValue(20)}px ${RFValue(10)}px ${RFValue(20)}px;

    align-items: center;
`
export const TitleBoleto = styled.Text`
    color: #F14902;
    font-family: "Teko_400Regular";
    font-size: ${RFValue(18)}px;
    text-transform: uppercase;
    /* padding: ${RFValue(10)}px ${RFValue(20)}px ${RFValue(20)}px ${RFValue(20)}px; */

`

export const DiasDePlano = styled.Text`
    color: #fff;
    align-items: center;
    font-family: "Teko_600SemiBold";
    font-size: ${RFValue(24)}px;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: ${RFValue(10)}px;
`