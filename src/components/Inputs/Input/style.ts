import styled from "styled-components/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import { MaskedTextInput } from "react-native-mask-text";

export const Wrapper = styled.View`
    width: ${RFValue(241)}px;
    height: ${RFValue(49)}px;
    margin-bottom: ${RFValue(42)}px;
`

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: #3F3F46;
    width: ${RFValue(241)}px;
    height: ${RFValue(49)}px;
    border-radius: ${RFValue(10)}px;
`

export const ContainerLine = styled.View`
    background-color: #F14902;
    bottom: ${RFValue(-3)}px;
    position: absolute;
    width: ${RFValue(241)}px;
    height: ${RFValue(49)}px;
    border-radius: ${RFValue(10)}px;
`

export const InputMask = styled(MaskedTextInput)`
    flex: 1;
    background-color: #3F3F46;
    height: ${RFValue(49)}px;
    border-radius: ${RFValue(10)}px;
    font-family: "Teko_400Regular";
    font-size: ${RFValue(20)}px;
`
export const Input = styled.TextInput`
    flex: 1;
    background-color: #3F3F46;
    height: ${RFValue(49)}px;
    border-radius: ${RFValue(10)}px;
    font-family: "Teko_400Regular";
    font-size: ${RFValue(20)}px;
`

export const Touch = styled.TouchableOpacity`
`

export const Icon = styled(MaterialCommunityIcons)`
    margin: ${RFValue(8)}px;
`

export const ContainerTextBottom = styled.View`
   
`

export const ContainerLeft = styled.View`
   
`