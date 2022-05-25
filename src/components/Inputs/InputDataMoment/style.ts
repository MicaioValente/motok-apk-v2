import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { MaskedTextInput } from "react-native-mask-text";

export const Wrapper = styled.View`
    margin-top: ${RFValue(20)}px;
`

export const WrapperContent = styled.TouchableOpacity`
    width: 100%;
    height: ${RFValue(49)}px;
`

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    background-color: #3F3F46;
    width: 100%;
    height:${({ border }) => (border ? (RFValue(49)) : RFValue(52))}px;
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
    margin-left: ${RFValue(10)}px;
`
export const MaskInput = styled(MaskedTextInput)`
     flex: 1;
    background-color: #3F3F46;
    height: ${RFValue(49)}px;
    border-radius: 10px;
    font-family: "Teko_400Regular";
    font-size: ${RFValue(20)}px;
    padding-left: ${RFValue(10)}px;
`