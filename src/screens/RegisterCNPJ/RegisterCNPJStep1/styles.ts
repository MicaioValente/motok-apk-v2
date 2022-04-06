import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

let variavel = "20px"


export const Container = styled.View`
    flex: 1;
    background-color: #1B191A;
`

export const Content = styled.ScrollView`
    padding-left: ${RFValue(30)}px;
    padding-right: ${RFValue(30)}px;
`

export const Button = styled.TouchableOpacity`
    width: 100%;
    height: ${RFValue(49)}px;
    margin-top:40px;
    bottom: ${RFValue(20)}px;

`
export const TextButton = styled.Text`
    color: #1B191A;
    font-family: "Teko_500Medium";
    font-size: ${RFValue(20)}px;
`

export const ContainerSegundaParte = styled.View`

`