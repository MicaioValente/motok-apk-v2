import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    background-color: #1B191A;
`

export const Content = styled.View`
    flex: 1;
    padding-left: ${RFValue(30)}px;
    padding-right: ${RFValue(30)}px;
    padding-bottom: ${RFValue(10)}px;
`

export const ContainerBottom = styled.View`
    flex-direction: row;
    margin-top: auto;
    align-items: center;
    justify-content: space-between;
`

export const Button = styled.TouchableOpacity`
    width: ${RFValue(200)}px;
    height: ${RFValue(52)}px;

`
export const TextButton = styled.Text`
    color: #1B191A;
    font-family: "Teko_500Medium";
    font-size: ${RFValue(20)}px;
`

export const ContainerSegundaParte = styled.View`

`

export const ContainerPhoneNumber = styled.View`
    flex-direction: row;
`
export const ButtonPhoneNumber = styled.TouchableOpacity`
    width: 100%;
    position: absolute;
    bottom: 0;
    height: ${RFValue(49)}px;
    bottom: ${RFValue(20)}px;

`



export const ContainerButtomLeft = styled.View`
    margin-left:${RFValue(15)}px;
`

export const TextButtonLeft = styled.Text`
    color: #F14902;
    font-family: "Teko_500Medium";
    font-size: ${RFValue(20)}px;
`