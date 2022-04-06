import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import EngrenagensSVG from '../../assets/Engrenagens.svg'
import SinoSVG from '../../assets/sino.svg'
import CopiarSVG from '../../assets/copiarColorido.svg'
import CalendarioPagoSVG from '../../assets/calendarioPago.svg'
import CalendarioNPagoSVG from '../../assets/calendarioNPago.svg'
import CalendarioDisponivelSVG from '../../assets/calendario.svg'
import MoedaDisponivelSVG from '../../assets/moeda.svg'
import MoedaNPagoSVG from '../../assets/moedaNPago.svg'
import MoedaPagoSVG from '../../assets/moedaPago.svg'


export const Container = styled.View`
    width: ${RFValue(310)}px;
    margin-top: ${RFValue(20)}px;
    justify-content: flex-start;
    align-items: flex-start;

`;  

export const Content = styled.View`
    width: ${RFValue(310)}px;
    background-color: #343438;
    padding: ${RFValue(20)}px;
    border-radius: ${RFValue(20)}px;
    align-items: center;
`;


// export const Gradient = styled(LinearGradient)`
//     width: ${RFValue(71)}px;
//     height: ${RFValue(71)}px;
//     border-radius: ${RFValue(71)}px;
//     align-items: center;
//     justify-content: center;
//     position: absolute;
//     top: ${RFValue(-35)}px;
    
    
//     /* margin-bottom: ${RFValue(-35)}px; */


// `
export const ContainerIcon = styled.View`
    width: ${RFValue(55)}px;
    height: ${RFValue(55)}px;
    border-radius: ${RFValue(55)}px;
    background-color: rgba(241, 73, 2, 0.1);
    align-items: center;
    margin-bottom: ${RFValue(10)}px;
    justify-content: center;
`;

export const Barras = styled(EngrenagensSVG)``

export const Sino = styled(SinoSVG)`
    margin-bottom: ${RFValue(10)}px;

`
export const ContainerText = styled.View`
    flex-direction: row;
    margin-top: ${RFValue(10)}px;
    width: 85%;
    justify-content: space-between;
`

export const ContainerTextNumber = styled.View`
    flex-direction: row;
`

export const Text = styled.Text`
    color: #D4D4D8;
    align-items: center;
    font-family: "Teko_400Regular";
    font-size: ${RFValue(18)}px;

`
export const TextBold = styled.Text`
    color: #fff;
    align-items: center;
    font-family: "Teko_600SemiBold";
    font-size: ${RFValue(18)}px;

`

export const TextBoldNumber = styled.Text`
    color: #fff;
    align-items: center;
    font-family: "Teko_600SemiBold";
    font-size: ${RFValue(24)}px;

`


export const ContainerBoleto = styled.View`
    background-color: #1B1B1B;
    width: 100%;
    /* height: ${RFValue(78)}px; */
    margin-top: ${RFValue(10)}px;
    border-radius: ${RFValue(10)}px;
    padding: ${RFValue(10)}px ${RFValue(20)}px ${RFValue(10)}px ${RFValue(20)}px;
    align-items: center;
`
export const TextBoldBoleto = styled.Text`
    color: ${({color}) => color ?  color : '#ffff'} ;
    font-family: "Teko_500Medium";
    font-size: ${RFValue(20)}px;
    text-transform: uppercase;
    /* padding: ${RFValue(10)}px ${RFValue(20)}px ${RFValue(20)}px ${RFValue(20)}px; */

`


export const ContainerTextBoleto = styled.View`
    flex-direction: row;
    margin-top: ${RFValue(10)}px;
    width: 85%;
    justify-content: space-between;
`
export const TextBoleto = styled.Text`
    color: #fff;
    align-items: center;
    font-family: "Teko_600SemiBold";
    font-size: ${RFValue(18)}px;

`

export const MoedaNPago = styled(MoedaNPagoSVG)`
`
export const MoedaPago = styled(MoedaPagoSVG)`
`

export const MoedaDisp = styled(MoedaDisponivelSVG)`
`


export const Calendario = styled(CalendarioDisponivelSVG)``

export const CalendarioNPago = styled(CalendarioNPagoSVG)``

export const calendarioPago = styled(CalendarioPagoSVG)``

export const BoletoCodigo = styled.Text`
    color: #fff;
    align-items: center;
    font-family: "Teko_400Regular";
    font-size: ${RFValue(20)}px;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: ${RFValue(20)}px 0 ;
    padding: 0 ${RFValue(10)}px;
`


export const ContainerIconNumber = styled.View`
    height: ${RFValue(31)}px;
    width: ${RFValue(31)}px;
    border-radius: ${RFValue(20)}px;
    background-color: #473633;
    align-items: center;
    margin-left: ${RFValue(10)}px;
    justify-content: center;
`

export const Copiar = styled(CopiarSVG)``


  export const TitleButton = styled.Text`
    color: #F14902;
    font-family: "Teko_400Regular";
    font-size: ${RFValue(18)}px;
    text-transform: uppercase;
    /* padding: ${RFValue(10)}px ${RFValue(20)}px ${RFValue(20)}px ${RFValue(20)}px; */

`
