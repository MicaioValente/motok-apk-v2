import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';
import CapaceteSVG from '../../assets/capacetecard.svg'
import SinoSVG from '../../assets/sino.svg'



export const Container = styled.View`
    /* width: ${RFValue(310)}px; */
    justify-content: flex-end;
    align-items: flex-end;

`;  

export const Content = styled.View`
    width: ${RFValue(310)}px;
    background-color: #343438;
    padding: ${RFValue(40)}px ${RFValue(20)}px ${RFValue(20)}px ${RFValue(20)}px;
    border-radius: ${RFValue(20)}px;
    align-items: center;
    justify-content: flex-end;
    margin-left: auto;
    margin-right: auto;
`;

export const Gradient = styled(LinearGradient)`
    width: ${RFValue(71)}px;
    height: ${RFValue(71)}px;
    border-radius: ${RFValue(71)}px;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: ${RFValue(-35)}px;
`

export const ContainerIcon = styled.View`
    width: ${RFValue(55)}px;
    height: ${RFValue(55)}px;
    border-radius: ${RFValue(55)}px;
    background-color: rgba(52, 52, 56, 0.8);
    align-items: center;
    justify-content: center;
`;

export const Capacete = styled(CapaceteSVG)``

export const Sino = styled(SinoSVG)`
    margin-bottom: ${RFValue(10)}px;

`
export const Text = styled.Text`
    color: #D4D4D8;
    align-items: center;
    font-family: "Teko_500Medium";
    font-size: ${RFValue(18)}px;
    text-align: center;
`
