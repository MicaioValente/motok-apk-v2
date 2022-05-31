import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import FecharSVG from '../../assets/fechar.svg'

export const Container = styled.View`
    width: ${RFValue(310)}px;
    margin-top: ${RFValue(10)}px;
    /* margin-bottom: ${RFValue(20)}px; */
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
export const ContianerStatus = styled.View`
    background-color: ${({color}: any) => color};
    width: 100%;
    margin-top: ${RFValue(10)}px;
    border-radius: ${RFValue(10)}px;
    padding: ${RFValue(10)}px ${RFValue(20)}px ${RFValue(10)}px ${RFValue(20)}px;
    align-items: center;
    justify-content: space-between ;
    flex-direction: row;
`

export const StatusReprovado = styled.Text`
    color: #000;
    font-family: "Teko_500Medium";
    font-size: ${RFValue(18)}px;
    text-transform: uppercase;
`

export const ContainerBottom = styled.View`
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
export const TitleButton = styled.Text`
    color: #F14902;
    font-family: "Teko_400Regular";
    font-size: ${RFValue(18)}px;
    text-transform: uppercase;
    /* padding: ${RFValue(10)}px ${RFValue(20)}px ${RFValue(20)}px ${RFValue(20)}px; */

`

export const StatusTextContainer = styled.View`
    flex-direction: row;
    margin-top: ${RFValue(10)}px;
    align-items: center;
    width:  100%;
`


export const Dot = styled.View`
    background-color: #fff;
    height:  ${RFValue(5)}px;
    width:  ${RFValue(3)}px;
    margin-right: ${RFValue(10)}px;
`

export const StatusText = styled.Text`
    color: #fff;
    font-family: "Teko_500Medium";
    font-size: ${RFValue(16)}px;
    /* padding: ${RFValue(10)}px ${RFValue(20)}px ${RFValue(20)}px ${RFValue(20)}px; */

`

export const IconClose = styled(FecharSVG)``
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