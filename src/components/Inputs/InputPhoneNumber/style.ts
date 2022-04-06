import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";


export const Wrapper = styled.View`
    margin-top: ${RFValue(20)}px;
`

export const WrapperContent = styled.View`
    width: 100%;
    height: ${RFValue(52)}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: #3F3F46;
    height:${({ border }) => (border ? (RFValue(49)) : RFValue(52))}px;
    width: 100%;
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

export const ContainerLine = styled.View`
    background-color: #F14902;
    bottom: ${RFValue(-3)}px;
    position: absolute;
    width: 100%;
    height: ${RFValue(49)}px;
    border-radius: 10px;
`


export const ContainerTextBottom = styled.View`
   
`

export const Title = styled.Text`
    font-family: "Teko_400Regular";
    font-size: ${RFValue(22)}px;
    color: #FFFFFF;
    margin-left: ${RFValue(8)}px;
`

export const SubTitle = styled.Text`
    font-family: "Teko_400Regular";
    font-size: ${RFValue(22)}px;
    color: #FFFFFF;
    margin-left: ${RFValue(8)}px;
    margin-top: ${RFValue(8)}px;
    margin-bottom: ${RFValue(-12)}px;
`

export const Button = styled.TouchableOpacity`
    width: ${RFValue(100)}px;
    height: ${RFValue(52)}px;
    margin-top: ${({ segundaParte }) => segundaParte ? "auto" : "40px"};
    bottom: ${RFValue(20)}px;

`

export const TextButton = styled.Text`
    color: #1B191A;
    font-family: "Teko_500Medium";
    font-size: ${RFValue(18)}px;
`
