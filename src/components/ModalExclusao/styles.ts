import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


export const TitleModal = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: "Teko_700Bold";
    color: #fff;
    margin-top: ${RFValue(10)}px;
`

export const SubTitleModal = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: "Teko_300Light";
    margin-top: ${RFValue(10)}px;
    color: #D4D4D8;
`

export const ContainerButtonModal = styled.View`
    width: 100%;
    height: ${RFValue(34)}px;
    margin-top: ${RFValue(10)}px;
    flex-direction: row;
    justify-content: space-between;
`