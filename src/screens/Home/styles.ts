import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    margin-top: ${RFValue(40)}px;
    padding:  ${RFValue(20)}px;
`

export const Scroll = styled.ScrollView`
    background-color: #1B191A;
`
