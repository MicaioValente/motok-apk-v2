import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";


export const ContainerScroll = styled.ScrollView`
    background-color: #1B191A;


`

export const Container = styled.View`
    flex: 1;
    height: 100%;
    padding-top: 40px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const ContainerBottom = styled.View`
    width: 100%;
    flex-direction: row;
    margin-top: 100px;
    justify-content: space-around;
    align-items: center;

`

export const ContainerButtomLeft = styled.TouchableOpacity`
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
