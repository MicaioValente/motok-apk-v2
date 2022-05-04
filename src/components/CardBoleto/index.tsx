import { LinearGradient } from 'expo-linear-gradient';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { deg } from 'react-native-linear-gradient-degree';
import { Boleto } from '../../screens/ContratarPlano/PagamentoBoletoPlano';
import api from '../../service/api';
import * as S from './styles';
import * as Clipboard from 'expo-clipboard';
import { ToastAndroid } from 'react-native'
import * as Linking from 'expo-linking';

type CardBoleto = {
    idUser: number
}
type semPlano = {
    valor: number, 
    dataVencimento:string, 
    code: string
}

const CardBoleto = ({idUser}: CardBoleto) => {
    const [ boleto, setBoleto ] = useState<Boleto>({} as Boleto)
    const [ colorStatus, setColorStatus ] = useState('')
    const [ labelBoletoStatus, setLabelBoletoStatus ] = useState('')
    const [ semBoletos, setSemBoletos ] = useState<semPlano | null>()
    console.log('boleto 111',boleto)
    console.log('idUser  111 ', idUser)
    useEffect(() => {
        api.get(`boleto/${idUser}`).then(
            function (response){
                console.log(999999, response.data)
                if(response.data.length > 0){
                    setBoleto(response.data[response.data.length - 1])
                    return
                }
                console.log(4444, response.data)
                    setSemBoletos({valor: 0, dataVencimento: 'Sem data', code: 'Sem código'})
                    return
            }
        ).catch(
            function (response){
                console.log('error', response)
            }
        )
    }, [])



    useEffect(() => {
        if(boleto?.statusPagamento === 'pending'){
            setLabelBoletoStatus('Boleto Disponível')
            setColorStatus('rgba(241, 73, 2, 1)')
        }else if(boleto?.statusPagamento === 'approved'){
            setLabelBoletoStatus('Boleto Pago')

            setColorStatus('rgba(20, 184, 166, 1)')
        }else if(boleto?.statusPagamento === 'cancelled'){
            setLabelBoletoStatus('Boleto Cancelado')
            setColorStatus('rgba(220, 38, 38, 1)')
        }
    }, [boleto])

    function colorIconCoin() {
        if(boleto?.statusPagamento === 'pending'){
            return <S.MoedaDisp />
        }else if(boleto?.statusPagamento === 'approved'){
           return <S.MoedaPago />
        }else if(boleto?.statusPagamento === 'cancelled'){
            return <S.MoedaNPago />
        }else if(semBoletos){
            return <S.MoedaNPago />
        }
    }
    function colorIconCalendar() {
        if(boleto?.statusPagamento === 'pending'){
            return <S.Calendario />
        }else if(boleto?.statusPagamento === 'approved'){
           return <S.calendarioPago />
        }else if(boleto?.statusPagamento === 'cancelled'){
            return <S.CalendarioNPago />
        }else if(semBoletos){
            return <S.CalendarioSem />
        }
    }

    function copiarCod(cod: string){
        if(semBoletos){
            ToastAndroid.show('Código Não disponível', ToastAndroid.LONG)
            return
        }
        console.log(cod)
        Clipboard.setString(cod)
        ToastAndroid.show('Código Copiado', ToastAndroid.LONG)
    }

    return (
        <S.Container>
            <S.Content>
                <S.ContainerIcon>
                    <S.Barras />
                </S.ContainerIcon>


                <S.ContainerText>
                    <S.Text>{semBoletos ? 'Sem Boletos Gerados' : 'Último Pagamento'}</S.Text>
                    <S.TextBold>Plano</S.TextBold>
                </S.ContainerText>

                <S.ContainerBoleto>
                    <S.TextBoldBoleto color={colorStatus}>{labelBoletoStatus}</S.TextBoldBoleto>
                    <S.ContainerTextBoleto>
                        {colorIconCoin()}
                        <S.TextBoleto>R$ {semBoletos ? semBoletos.valor : boleto?.valor}</S.TextBoleto>
                    </S.ContainerTextBoleto>
                    <S.ContainerTextBoleto>
                        {colorIconCalendar()}
                        <S.TextBoleto>{semBoletos ? moment().format('DD/MM/YYYY') : moment(boleto?.dataVencimento).format('DD/MM/YYYY')}</S.TextBoleto>
                    </S.ContainerTextBoleto>
                        <S.BoletoCodigo >{boleto?.barCode}</S.BoletoCodigo>
                    <S.ContainerArrow onPress={() => copiarCod(boleto?.barCode)}>
                        <LinearGradient
                            colors={["#FE1D16", "#FD3C14", "#FA7311"]}
                            locations={[0.06, 0.26, 0.92]}  {...deg(68)}
                            style={{ flex: 1, justifyContent: "center", alignItems: "center", borderRadius: 10, flexDirection: 'row' }} >
                            <S.CopiarTex>Copiar código de barras</S.CopiarTex><S.Copiar />
                        </LinearGradient>
                    </S.ContainerArrow>
                    <S.ContainerArrow style={{marginTop: 11}} onPress={() => {semBoletos ? ToastAndroid.show('Código Não disponível', ToastAndroid.LONG) :  Linking.openURL(boleto?.urlBoleto)}}>
                        <LinearGradient
                            colors={["#FE1D16", "#FD3C14", "#FA7311"]}
                            locations={[0.06, 0.26, 0.92]}  {...deg(68)}
                            style={{ flex: 1, justifyContent: "center", alignItems: "center", borderRadius: 10, flexDirection: 'row' }} >
                            <S.CopiarTex>Baixar Boleto</S.CopiarTex><S.download />
                        </LinearGradient>
                    </S.ContainerArrow>
                </S.ContainerBoleto>    
            </S.Content>
        </S.Container>)
}

export default CardBoleto;