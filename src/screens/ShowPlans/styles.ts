import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: #1B191A;
    align-items: center;
    justify-content: center;
`

export const Text = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: "Teko_400Regular";
    text-transform: uppercase;
    color: #D4D4D8;
    margin-top:${RFValue(10)}px;
    margin-bottom: ${RFValue(5)}px;
    margin-right: auto;
    margin-left: ${RFValue(40)}px;
`

