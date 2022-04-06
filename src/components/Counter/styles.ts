import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    margin-top: ${RFValue(16)}px;
    width: 100%;
    align-items: center;
`

export const Content = styled.View`
    background-color: white;
`

export const Title = styled.Text`
    color:  #FA7311;
    font-size: 28px;
    font-family: "Teko_700Bold";

`

export const SubTitle = styled.Text`
    color:  #FFFFFF;
    font-size: 24px;
    font-family: "Teko_400Regular";

`