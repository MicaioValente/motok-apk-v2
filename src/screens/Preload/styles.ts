import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    align-items: center;
`

export const containerImage = styled.View`

`


export const Image = styled.Image`


`


export const ContainerText = styled.View`
    align-items: flex-end;

`


export const Title = styled.Text`
    font-size: ${RFValue(46)}px;
    font-family: "Teko_700Bold";
    color: #1B191A;
    flex-direction: column;
    height: 55px;
`


export const SubTitle = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: "Teko_500Medium";
    color: #343438;

`
