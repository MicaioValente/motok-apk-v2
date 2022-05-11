import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";


export const Wrapper = styled.View`
    margin-top: ${RFValue(20)}px;
    margin-left: ${RFValue(20)}px;
    width:  ${RFValue(70)}px;
    margin-left: auto;
`

export const WrapperContent = styled.View`
    height: ${RFValue(52)}px;
    flex-direction: row;
`

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: ${RFValue(50)}px;
    width: ${RFValue(62)}px;
    border-radius: 10px;
`

export const ContainerLine = styled.View`
    background-color: #F14902;
    bottom: ${RFValue(-3)}px;
    position: absolute;
    width: ${RFValue(70)}px;
    height: ${RFValue(52)}px;
    border-radius: 10px;
`

export const Input = styled.TextInput`
    width: ${RFValue(70)}px;
    background-color: #3F3F46;
    height: ${RFValue(52)}px;
    border-radius: 10px;
    font-family: "Teko_400Regular";
    font-size: ${RFValue(20)}px;
    justify-content: center ;
    text-align: center;
`

export const InputTeste = styled.TextInput`
    width: ${RFValue(70)}px;
    background-color: #3F3F46;
    height: ${RFValue(52)}px;
    border-radius: 10px;
    font-family: "Teko_400Regular";
    font-size: ${RFValue(20)}px;
`

export const ContainerTextBottom = styled.View`
   
`

export const Title = styled.Text`
    font-family: "Teko_400Regular";
    font-size: ${RFValue(22)}px;
    color: #FFFFFF;
    text-align: center;
`

export const ContainerTitle = styled.View`

`
