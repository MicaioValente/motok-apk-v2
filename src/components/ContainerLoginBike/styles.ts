import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
    border-radius: ${RFValue(20)}px;
    flex-direction: row;
    align-items: center;
    margin-top:${RFValue(15)}px;
    overflow: hidden;
    width: ${RFValue(320)}px;
    background-color: #343438;
    height: ${RFValue(82)}px;
`;

export const Imagem = styled.Image`
    position: absolute;
    left: ${RFValue(-10)}px;
    opacity: 0.5;
    /* width: ${RFValue(152)}px;
    height: ${RFValue(152)}px; */
`;


export const ContainerDescription = styled.View`
    height: ${RFValue(92)}px;
    justify-content: center;
    position: absolute;
    right: ${RFValue(85)}px;
`


export const Text = styled.Text`
    font-family: "Teko_400Regular";
    font-size: ${RFValue(16)}px;
    color: #fff;

    `

export const TextBold = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: "Teko_700Bold";
    text-transform: uppercase;
    color: #fff;
    margin-top: ${RFValue(5)}px;
    margin-bottom: ${RFValue(5)}px;
`

export const ContainerArrow = styled.TouchableOpacity`
    width: ${RFValue(40)}px;
    height: ${RFValue(34)}px;
    border-radius: ${RFValue(10)}px;
    position: absolute;
    right: ${RFValue(20)}px;
`

export const  ContainerLinearGradient = styled(LinearGradient)`
`

export const Icon = styled(MaterialCommunityIcons)`
`