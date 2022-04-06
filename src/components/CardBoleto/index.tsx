import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { deg } from 'react-native-linear-gradient-degree';
import * as S from './styles';

type CardBoleto = {
    status: 'disponivel' | 'pago' | 'atrasado'
}

const CardBoleto = ({status}: CardBoleto) => {
    const [ colorStatus, setColorStatus ] = useState('')

    useEffect(() => {
        if(status === 'disponivel'){
            setColorStatus('rgba(241, 73, 2, 1)')
        }else if(status === 'pago'){
            setColorStatus('rgba(20, 184, 166, 1)')
        }else if(status === 'atrasado'){
            setColorStatus('rgba(220, 38, 38, 1)')
        }
    }, [status])

    function colorIconCoin() {
        if(status === 'disponivel'){
            return <S.MoedaDisp />
        }else if(status === 'pago'){
           return <S.MoedaPago />
        }else if(status === 'atrasado'){
            return <S.MoedaNPago />
        }
    }
    function colorIconCalendar() {
        if(status === 'disponivel'){
            return <S.Calendario />
        }else if(status === 'pago'){
           return <S.calendarioPago />
        }else if(status === 'atrasado'){
            return <S.CalendarioNPago />
        }
    }
    return (<S.Container>
            <S.Content>
                <S.ContainerIcon>
                    <S.Barras />
                </S.ContainerIcon>


                <S.ContainerText>
                    <S.Text>Último Pagamento</S.Text>
                    <S.TextBold>Nenhum</S.TextBold>
                </S.ContainerText>

                <S.ContainerBoleto>
                    <S.TextBoldBoleto color={colorStatus}>Boleto disponível</S.TextBoldBoleto>
                    <S.ContainerTextBoleto>
                        {colorIconCoin()}
                        <S.TextBoleto>R$ 315,00</S.TextBoleto>
                    </S.ContainerTextBoleto>
                    <S.ContainerTextBoleto>
                        {colorIconCalendar()}
                        <S.TextBoleto>30/01/2022</S.TextBoleto>
                    </S.ContainerTextBoleto>
                        <S.BoletoCodigo>34191.79001 01043.510047 91020.150008 9 88920026000</S.BoletoCodigo>
                    <S.ContainerArrow>
                        <LinearGradient
                            colors={["#FE1D16", "#FD3C14", "#FA7311"]}
                            locations={[0.06, 0.26, 0.92]}  {...deg(68)}
                            style={{ flex: 1, justifyContent: "center", alignItems: "center", borderRadius: 10, flexDirection: 'row' }} >

                            <S.CopiarTex>copiar código de barras</S.CopiarTex><S.Copiar />
                        </LinearGradient>
                    </S.ContainerArrow>

                </S.ContainerBoleto>    

            </S.Content>
        </S.Container>)
}

export default CardBoleto;