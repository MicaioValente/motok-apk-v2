import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { MaskedTextInput } from "react-native-mask-text";

export const Wrapper = styled.View`
`

export const WrapperContent = styled.View`
    width: ${RFValue(200)}px;
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

export const ButtonAplicar = styled.TouchableOpacity`
    background-color: #000;
    height: ${RFValue(49)}px;
    width: ${RFValue(100)}px;
    border-radius: ${RFValue(10)}px;
    margin-left: ${RFValue(20)}px;
    align-items: center;
    justify-content: center;

`
export const TextButton = styled.Text`
    color: #1B191A;
    font-family: "Teko_500Medium";
    font-size: ${RFValue(20)}px;
`
export const TextContainerLeft = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: "Teko_700Bold";
    color: #ffff;
`