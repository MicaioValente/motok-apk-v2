import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";


export const ContainerScroll = styled.ScrollView`
    background-color: #1B191A;

`

export const Container = styled.View`
    flex: 1;
    background-color: #1B191A;
    align-items: center;
`

export const ContainerBottom = styled.View`
    width: 100%;
    flex-direction: row;
    margin-top: auto;
    justify-content: space-around;
    align-items: center;
    margin-top: ${RFValue(30)}px;

`

export const ContainerButtomLeft = styled.View`
    margin-left: ${RFValue(15)}px;

`

export const TextButtonLeft = styled.Text`
    color: #F14902;
    font-family: "Teko_500Medium";
    font-size: ${RFValue(20)}px;
`

export const Button = styled.TouchableOpacity`
    width: ${RFValue(200)}px;
    height: ${RFValue(52)}px;
`

export const TextButton = styled.Text`
    color: #1B191A;
    font-family: "Teko_500Medium";
    font-size: ${RFValue(20)}px;
`
