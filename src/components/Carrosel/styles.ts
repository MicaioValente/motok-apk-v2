import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';

export const Container = styled.View`
    height: ${RFValue(420)}px;
    flex-direction: row;
    margin-bottom: 15px;
    
`;
// export const Container333 = styled.View``
export const ContainerCarrousel = styled.SafeAreaView`
    flex: 1;
`
export const ContentCarrousel = styled.View`
    flex: 1; 
    flex-direction: row;
    justify-content: center;
`
export const ContainerCard = styled.View`
    width: 100%;
    height: ${RFPercentage(100)};

`

export const Card = styled.TouchableOpacity`
    background-color: #343438;
    border-radius: ${RFValue(20)}px;
    padding: ${RFValue(20)}px;
    height: ${RFValue(270)}px;
    width: ${RFValue(210)}px;
    margin-left: ${RFValue(40)}px;
    align-items: center;
`

export const TitleCard = styled.Text`
    font-size: ${RFValue(24)}px;
    font-family: 'Teko_700Bold';
    text-transform: uppercase;
    color: #f14902;
`

export const ContainerValue = styled.View`
    flex-direction: row;
    height: ${RFValue(100)}px;
    width:${RFValue(125)}px;
`

export const ContentCardValue = styled.Text`
    font-size: ${RFValue(112)}px;
    font-family: 'Teko_400Regular';
    text-transform: uppercase;
    margin-left: ${RFValue(5)}px;
    margin-top: ${RFValue(-20)}px;
    color: #f14902;
`

export const TextContentCardValueLeft = styled.Text`
    margin-top: ${RFValue(40)}px;
    color: #fff;
`
export const TextContentCardValueRight = styled.Text`
    margin-top: ${RFValue(65)}px;
    color: #fff;
`

export const TitleCobranca = styled.Text`
    margin-top: ${RFValue(10)}px;
    font-size: ${RFValue(18)}px;
    font-family: 'Teko_700Bold';
    color: #fff;
`

export const ContainerContentCobranca = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin-top: ${RFValue(7)}px;

`

export const TextCobranca = styled.Text`
    color: #D4D4D8;
    font-family: 'Teko_400Regular';
    font-size: ${RFValue(18)}px;
`

export const ValueCobranca = styled.Text`
    color: #fff;
    font-family: 'Teko_500Medium';
    font-size: ${RFValue(18)}px;
`

export const TextoDetalhes = styled.Text`
    color: #fff;
    font-family: 'Teko_400Regular';
    font-size: ${RFValue(20)}px;
    margin-top: ${RFValue(10)}px;
    margin-right: ${RFValue(65)}px;
    margin-left: auto;
`

export const SubTexteDetalhes = styled.Text`
    color: #D4D4D8;
    font-family: 'Teko_400Regular';
    font-size: ${RFValue(20)}px;
    margin-top: ${RFValue(5)}px;
`

export const TextDot = styled.View`
    height: ${RFValue(5)}px;
    width: ${RFValue(3)}px;
    background-color: #D4D4D8;
    margin-right: ${RFValue(10)}px;
`

export const ContainerTextDot = styled.View`
    flex-direction: row;
    align-items: center;
`
