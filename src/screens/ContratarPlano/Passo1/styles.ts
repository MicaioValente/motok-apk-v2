import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import PixIcon from '../../../assets/PixIcon.svg'
import BoletoSvg from '../../../assets/boletosvgcode.svg'
import CartaoSvg from '../../../assets/cartao.svg'
import Mastercard from '../../../assets/mastercard.svg'
import Visa from '../../../assets/visa.svg'


export const Container = styled.View`
    flex: 1;
    background-color: #1B191A;
`

export const Content = styled.ScrollView`
    padding-left: ${RFValue(30)}px;
    padding-right: ${RFValue(30)}px;
`


export const ContainerCard = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
`

export const Card = styled.View`
    background-color: #343438;
    border-radius: ${RFValue(20)}px;
    padding: ${RFValue(20)}px;
    width: ${RFValue(210)}px;
    align-items: center;
`

export const TitleCard = styled.Text`
    font-size: ${RFValue(28)}px;
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
export const ContainerCaucao = styled.TouchableOpacity`
    width: 85%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding:  ${RFValue(10)}px ${RFValue(20)}px;
    border-radius: ${RFValue(20)}px;
    margin-bottom: ${RFValue(10)}px;
    border: 1px solid ${({selecionado}: any) => selecionado ? '#F14902' :'#343438'} ;
    background-color: #343438;
`

export const TextCaucao = styled.Text`
    color: #D4D4D8;
    font-family: 'Teko_400Regular';
    font-size: ${RFValue(24)}px;
`
export const ValueCaucao = styled.Text`
    color: #fff;
    font-family: 'Teko_500Medium';
    font-size: ${RFValue(28)}px;
`

export const Ball = styled.View`
    height: ${RFValue(20)}px;
    width: ${RFValue(20)}px;
    border-radius: ${RFValue(30)}px;
    border: 1px solid #fff;
    justify-content: center;
    align-items: center;
`
export const BallMenor = styled.View`
    height: ${RFValue(12)}px;
    width: ${RFValue(12)}px;
    border-radius: ${RFValue(30)}px;
    background-color: #F14902;
`

export const ContainerPagamento = styled.TouchableOpacity`
    width: 85%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding:  ${RFValue(10)}px ${RFValue(20)}px;
    border-radius: ${RFValue(20)}px;
    margin-bottom: ${RFValue(10)}px;
    background-color: #343438;
    border: 1px solid ${({selecionado}: any) => selecionado ? '#F14902' :'#343438'} ;
`

export const Pix = styled(PixIcon)`
` 

export const ValuePagamento = styled.Text`
    color: #fff;
    font-family: 'Teko_400Regular';
    margin-left: ${RFValue(10)}px;
    font-size: ${RFValue(24)}px;
`

export const Boleto = styled(BoletoSvg)`
` 

export const Cartao = styled(CartaoSvg)`
` 
export const ContainerPagamentoCards = styled.View`
    flex-direction: column;

`

export const MastercardSVG = styled(Mastercard)`
    margin-left: ${RFValue(10)}px;
`
export const VisaSVG = styled(Visa)``

export const Button = styled.TouchableOpacity`
    width: 90%;
    height: ${RFValue(49)}px;
    margin-top: ${RFValue(40)}px;
    bottom: ${RFValue(20)}px;
    margin-left: ${RFValue(30)}px;
    margin-right: ${RFValue(30)}px;

`
export const TextButton = styled.Text`
    color: #1B191A;
    font-family: "Teko_500Medium";
    font-size: ${RFValue(20)}px;
`