import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";



export const Container = styled.View`
    flex: 1;
    background-color: #1B191A;

    padding-top: 25px;
    
`

export const Button = styled.TouchableOpacity`
    width: 100%;
    height: ${RFValue(49)}px;

`
export const TextButton = styled.Text`
    color: #1B191A;
    font-family: "Teko_500Medium";
    font-size: ${RFValue(20)}px;
`