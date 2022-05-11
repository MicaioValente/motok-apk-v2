import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
`

export const Content = styled.View`
    width: 100%;
    padding: ${RFValue(20)}px ${RFValue(10)}px;
    flex-direction: row;
    align-items: center;
`

export const ContainerArrow = styled.TouchableOpacity`
    width: ${RFValue(40)}px;
    height: ${RFValue(34)}px;
    border-radius: ${RFValue(10)}px;
    justify-content: center;
    align-items: center;
    margin-right: ${RFValue(20)}px;

`

export const ContainerText = styled.View`

`

export const Title = styled.Text`
    font-family: "Teko_400Regular";
    font-size: ${RFValue(24)}px;
    color: #fff;
`

export const ContainerQuestion = styled.TouchableOpacity`
    width: ${RFValue(25)}px;
    height: ${RFValue(25)}px;
    border-radius: ${RFPercentage(50)}px;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    border: 2px solid #D4D4D8;
`

export const Icon = styled(Ionicons)`
`

export const UnderLine = styled.View`
    width: 100%;
    height: ${RFValue(2)}px;

`
