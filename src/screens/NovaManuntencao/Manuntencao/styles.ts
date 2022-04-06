import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.ScrollView`
    background-color: #1B191A;
    padding-left: ${RFValue(30)}px;
    padding-right: ${RFValue(30)}px;
`

export const Content = styled.View`
    flex: 1;
    padding-left: ${RFValue(30)}px;
    padding-right: ${RFValue(30)}px;
`

export const Button = styled.TouchableOpacity`
    width: 100%;
    height: ${RFValue(49)}px;
    margin-top: ${RFValue(40)}px;
    bottom: ${RFValue(20)}px;

`
export const TextButton = styled.Text`
    color: #1B191A;
    font-family: "Teko_500Medium";
    font-size: ${RFValue(20)}px;
`

export const ContainerSegundaParte = styled.View`

`