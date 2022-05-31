import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import CopiarSVG from '../../assets/close.svg'


export const ContainerModal = styled.TouchableOpacity`
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    margin-top: ${RFValue(22)}px;
    background-color: #00000055;
`

export const ContainerContent = styled.View`
    width: 100%;
    height: ${RFValue(500)}px;
    background-color: #1B1B1B;
    border-radius: ${RFValue(20)}px;
    padding: ${RFValue(20)}px ${RFValue(40)}px;
`
export const ContainerArrow = styled.View`
    height: ${RFValue(35)}px;
    width: 100%;
    border-radius: ${RFValue(10)}px;

`

export const ContentArrow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    
`


export const CopiarTex = styled.Text`
    align-items: center;
    font-family: "Teko_500Medium";
    font-size: ${RFValue(18)}px;
    margin-right: ${RFValue(10)}px;
    color: #F14902;
    text-transform: uppercase;

`

export const Copiar = styled(CopiarSVG)``


export const ContainerDates = styled.View`
    flex-direction: row;
`
export const TitleDates = styled.Text`
    font-family: "Teko_600SemiBold";
    font-size: ${RFValue(18)}px;
    margin-right: ${RFValue(10)}px;
    color: #fff;
    text-transform: uppercase;
`

export const ContainerDate = styled.View`
    width: 100%;
    height: ${RFValue(70)}px;
    background-color: #343438;
    border-radius: ${RFValue(10)}px;
    padding: ${RFValue(10)}px;
    margin-bottom: ${RFValue(10)}px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const TitleDate = styled.Text`
    font-family: "Teko_500Medium";
    font-size: ${RFValue(18)}px;
    color: #D4D4D8;
    /* width: 80%; */
    text-align: center;
`

export const ContainerDateHoraDia = styled.View`
    width: ${RFValue(40)}px;
    height: ${RFValue(52)}px;
    background-color: #1B1B1B;
    border-radius: ${RFValue(10)}px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const TitleDia = styled.Text`
font-family: "Teko_600SemiBold";
font-size: ${RFValue(22)}px;
color: #fff;

`

export const TitleHora = styled.Text`
font-family: "Teko_400Regular";
font-size: ${RFValue(12)}px;
color: #D4D4D8;

`
