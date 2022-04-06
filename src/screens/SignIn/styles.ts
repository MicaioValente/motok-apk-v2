import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
    flex: 1;
    background-color: #1B191A;
    align-items: center;
    justify-content: center;
`


export const Content = styled.View`
    align-items: center;
    margin-bottom: ${RFValue(80)}px;
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
    color: #FD4114;
    flex-direction: column;
    height: ${RFValue(55)}px;
`


export const SubTitle = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: "Teko_700Bold";
    color: #FA7311;
`

export const ContainerForm = styled.View`
    align-items: center;
    margin-top: ${RFValue(80)}px;
    width: ${RFValue(400)}px;

`

export const ContainerTextBottom = styled.View`
    width: ${RFValue(241)}px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`

export const ContainerLeft = styled.View`
   
`

export const TextContainerLeft = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: "Teko_700Bold";
    color: #ffff;
`

export const ContainerArrow = styled.TouchableOpacity`
    height: ${RFValue(50)}px;
    width: ${RFValue(67)}px;
    border-radius: ${RFValue(10)}px;

`

export const Icon = styled(MaterialCommunityIcons)`
`