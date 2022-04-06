import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {LinearGradient} from 'expo-linear-gradient';

export const Container = styled.View`
    align-items: center;
    margin-top: ${RFValue(20)}px;
    margin-top: 20px;
    height: ${RFValue(100)}px;
    justify-content: flex-end;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 40px;

`;

export const Title = styled.Text`
    font-family: 'Teko_400Regular';
    font-size: ${RFValue(20)}px;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: ${RFValue(35)}px;
`

export const ContainerArrow = styled.TouchableOpacity`
    height: ${RFValue(34)}px;
    width: ${RFValue(200)}px;
    border-radius: ${RFValue(10)}px;
    position: absolute;
    bottom: ${RFValue(-15)}px;
    
`

export const Icon = styled(MaterialCommunityIcons)`
`

export const ContainerStep = styled.TouchableOpacity`
    margin-bottom: ${RFValue(15)}px;
    flex-direction: row;
    width: ${RFValue(167)}px;
    justify-content: space-around;

`
export const  ContainerLinearGradient = styled(LinearGradient)`
`

export const StepC = styled.TouchableOpacity`
    width: ${RFValue(35)}px;
    height: ${RFValue(12)}px;
    border-radius: ${RFValue(20)}px;
    background-color: ${({color}) => color ? '#F14902' : '#353133'};

`
