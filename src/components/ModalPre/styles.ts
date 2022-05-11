import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';



export const SubTitleModalPre = styled.Text`
    width: 100%;
    font-size: ${RFValue(18)}px;
    font-family: "Teko_300Light";
    margin-top: ${RFValue(10)}px;
    color: #fff;

`

export const Row = styled.View`
    width: 100%;
    margin-right: auto;
    height: ${RFValue(25)}px;
    flex-direction: row;
    align-items: center;
`


export const Ball = styled.View`
    background-color: #FA7311;
    height: ${RFValue(10)}px;
    width: ${RFValue(10)}px;
    margin-right: ${RFValue(15)}px;
    border-radius: 20px;

`
export const ContainerTextRow = styled.View`

`

export const TextRow = styled.Text`
    font-family: "Teko_400Regular";
    font-size: ${RFValue(16)}px;
    color: #E4E4E7;
`

export const TextRowBold = styled.Text`
    font-family: "Teko_600SemiBold";
    font-size: ${RFValue(16)}px;
    color: #E4E4E7;
`

export const ContainerButtonPre = styled.TouchableOpacity`
    background-color: #18181B;
    width: 100%;
    height: ${RFValue(34)}px;
    border-radius: ${RFValue(10)}px;
    justify-content: center;
    align-items: center;
`

export const ContainerButtonModal = styled.View`
    width: 100%;
    height: ${RFValue(34)}px;
    margin-top: ${RFValue(10)}px;
    flex-direction: row;
    justify-content: space-between;
`
