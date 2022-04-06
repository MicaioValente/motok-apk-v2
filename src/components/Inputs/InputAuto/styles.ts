import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";


export const Wrapper = styled.View`
    margin-top: ${RFValue(20)}px;
    width: 100%;
`

export const WrapperContent = styled.View`
    width: 100%;
    height: ${RFValue(49)}px;
`

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: #3F3F46;
    width: 100%;
    height: ${RFValue(49)}px;
    border-radius: 10px;
`

export const ContainerLine = styled.View`
    background-color: #F14902;
    bottom: ${RFValue(-3)}px;
    position: absolute;
    width: 100%;
    height: ${RFValue(49)}px;
    border-radius: 10px;
`

export const Input = styled.TextInput`
    flex: 1;
    background-color: #3F3F46;
    height: ${RFValue(49)}px;
    border-radius: 10px;
    font-family: "Teko_400Regular";
    font-size: ${RFValue(20)}px;
    padding-left: ${RFValue(10)}px;
`

export const ContainerTextBottom = styled.View`
   
`

export const Title = styled.Text`
    font-family: "Teko_400Regular";
    font-size: ${RFValue(22)}px;
    color: #FFFFFF;
    margin-left: ${RFValue(8)}px;
`