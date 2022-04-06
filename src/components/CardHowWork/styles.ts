import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Image } from 'react-native'
import Chave from '../../assets/chave.svg'
import Rastreio from '../../assets/rastreio.svg'
import Seguro from '../../assets/seguro.svg'
import Imposto from '../../assets/imposto.svg'

export const Container = styled.View`
    align-items: center;
    margin-bottom: auto;
    margin-top: ${RFValue(60)}px;
`;


export const ContainerItem = styled.View`
    flex-direction: column;
    align-items: center;
    margin-top: ${RFValue(60)}px;
`

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: "Teko_700Bold";
    text-transform: uppercase;
    color: #fff;
    margin-top: ${RFValue(5)}px;
    margin-bottom: ${RFValue(5)}px;
    
`;

export const SubTitle = styled.Text`
    font-family: "Teko_400Regular";
    font-size: ${RFValue(16)}px;
    color: #fff;

`
export const SubTitleBold = styled.Text`
    font-family: "Teko_600SemiBold";
    font-size: ${RFValue(16)}px;
    color: #fff;

`

export const ChaveSvg = styled(Chave)`
    margin-bottom: ${RFValue(5)}px;
`

export const SeguroSvg = styled(Seguro)`
    margin-bottom: ${RFValue(5)}px;

`

export const ImpostoSvg = styled(Imposto)`
    margin-bottom: ${RFValue(5)}px;

`

export const RastreioSvg = styled(Rastreio)`

`