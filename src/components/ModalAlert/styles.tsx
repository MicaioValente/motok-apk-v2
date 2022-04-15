import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

export const TextContainerLeft = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: "Teko_700Bold";
    color: #ffff;
`

export const ContainerModal = styled.Pressable`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: ${RFValue(22)}px;
    background-color: #0000008d;
`

export const ContainerContent = styled.View`
    max-width: ${RFValue(300)}px;
    background-color: #343438;
    border-radius: ${RFValue(20)}px;
    padding: ${RFValue(20)}px;
    align-items: center;
`

