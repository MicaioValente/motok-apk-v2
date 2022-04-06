import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const View = styled.View`
    flex-direction: row;
`


export const Wrapper = styled.View`
    margin-top: ${RFValue(20)}px;
`

export const WrapperContent = styled.View`
    height: ${RFValue(52)}px;
    flex-direction: row;
`

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: ${RFValue(52)}px;
    border-radius: 10px;
`

export const ContainerLine = styled.View`
    background-color: #F14902;
    bottom: ${RFValue(-3)}px;
    position: absolute;
    width: 100%;
    height: ${RFValue(52)}px;
    border-radius: 10px;
`

export const Input = styled.TextInput`
    width: ${RFValue(220)}px;
    background-color: #3F3F46;
    height: ${RFValue(52)}px;
    border-radius: 10px;
    font-family: "Teko_400Regular";
    font-size: ${RFValue(20)}px;
    padding-left: ${RFValue(10)}px;
`

export const InputTeste = styled.TextInput`
    width: ${RFValue(60)}px;
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
    margin-left: ${RFValue(8)}px;
`

export const ContainerTitle = styled.View`
   flex-direction: row;
   justify-content: space-between;
`
