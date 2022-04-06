import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Image } from 'react-native'

export const Container = styled.View`
    align-items: center;
    margin-bottom: auto;
    margin-top: ${RFValue(60)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(28)}px;
    font-family: "Teko_700Bold";
    text-transform: uppercase;
    color: #F14902;
`;
export const Aviso = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: "Teko_400Regular";
    color: #A1A1AA;
    margin-bottom: ${RFValue(7)}px;
`

export const MotoImage = styled(Image)`
    width: ${RFValue(300)}px;
    height: ${RFValue(300)}px;
`
export const ContainerMoto = styled.View`
    align-items: center;
    margin-bottom: ${RFValue(33)}px;

`

export const ContainerDescription = styled.View`
    align-items: center;
    
`

export const Description = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: "Teko_400Regular";
    color: #fff;
    margin-bottom: ${RFValue(7)}px;
`
