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
    trigger: boolean
}
type semPlano = {
    valor: number, 
    dataVencimento:string, 
    code: string
}

const CardBoleto = ({idUser, trigger}: CardBoleto) => {
    const [ boleto, setBoleto ] = useState<Boleto[]>([] as Boleto[])
    const [ semBoletos, setSemBoletos ] = useState<semPlano | null>()

    useEffect(() => {
        api.get(`boleto/${idUser}`).then(
            function (response){
                // let boletosCaucao =  response.data

                let boletosCaucao =  response.data.filter((item: Boleto, index: Number) => item.fimPagamento == 1)
                let boletosPendentes = boletosCaucao.filter((item: Boleto, index: Number) => item.statusPagamento == 'pending')

                let aaa = []
                if(boletosPendentes.length > 0){
                    setBoleto(boletosPendentes)
                    return
                }

                setBoleto([])
                setSemBoletos({valor: 0, dataVencimento: 'Sem data', code: 'Sem código'})
                return
            }
        ).catch(
            function (response){
                console.log('error', response)
            }
        )
    }, [trigger])

    function BoletoLabel(boleto: Boleto){
        if(boleto.statusPagamento === 'pending'){
            return 'Boleto Disponível'
        }else if(boleto?.statusPagamento === 'approved'){
            return 'Boleto Pago'
        }else if(boleto?.statusPagamento === 'cancelled'){
            return 'Boleto Cancelado'
        }

    }
    function BoletoStatusColor(boleto: Boleto){
        let Var1 = '#f14902'
        let Var2 = '#14b8a5'
        let Var3 = '#dc2626'
        let Var4 = '#dc2626'
        if(boleto.statusPagamento === 'pending'){
            // return 'rgb(241, 73, 2)'
            return '#f14902'
            // return 1
        }else if(boleto?.statusPagamento === 'approved'){
            // return 'rgb(20, 184, 166)'
            // return 2
            return '#14b8a5'
        }else if(boleto?.statusPagamento === 'cancelled'){
            // return 'rgb(220, 38, 38)'
            // return 3
            return '#dc2626'
        }
        return 4

    }

    function colorIconCoin(boleto: Boleto) {
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
    function colorIconCalendar(boleto: Boleto) {
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
        Clipboard.setString(cod)
        ToastAndroid.show('Código Copiado', ToastAndroid.LONG)
    }

    return (
    <>
        {boleto.map((Boleto: Boleto, index: number) => {
            BoletoLabel(Boleto)
            return (
                <S.Container key={index} >
                    <S.Content>
                        <S.ContainerIcon>
                            <S.Barras />
                        </S.ContainerIcon>


                        <S.ContainerText>
                            <S.Text>{semBoletos ? 'Sem Boletos Gerados' : 'Último Pagamento'}</S.Text>
                            <S.TextBold>Caução</S.TextBold>
                        </S.ContainerText>
                        {console.log(' BoletoStatusColor(Boleto)', BoletoStatusColor(Boleto))}
                        <S.ContainerBoleto>
                            <S.TextBoldBoleto style={{
                                color: BoletoStatusColor(Boleto)
                                }} >{BoletoLabel(Boleto)}</S.TextBoldBoleto>
                            <S.ContainerTextBoleto>
                                {colorIconCoin(Boleto)}
                                <S.TextBoleto>R$ {semBoletos ? semBoletos.valor : Boleto?.valor}</S.TextBoleto>
                            </S.ContainerTextBoleto>
                            <S.ContainerTextBoleto>
                                {colorIconCalendar(Boleto)}
                                <S.TextBoleto>{semBoletos ? moment().format('DD/MM/YYYY') : moment(Boleto?.dataVencimento).format('DD/MM/YYYY')}</S.TextBoleto>
                            </S.ContainerTextBoleto>
                                <S.BoletoCodigo >{Boleto?.barCode}</S.BoletoCodigo>
                            <S.ContainerArrow onPress={() => copiarCod(Boleto?.barCode)}>
                                <LinearGradient
                                    colors={["#FE1D16", "#FD3C14", "#FA7311"]}
                                    locations={[0.06, 0.26, 0.92]}  {...deg(68)}
                                    style={{ flex: 1, justifyContent: "center", alignItems: "center", borderRadius: 10, flexDirection: 'row' }} >
                                    <S.CopiarTex>Copiar código de barras</S.CopiarTex><S.Copiar />
                                </LinearGradient>
                            </S.ContainerArrow>
                            <S.ContainerArrow style={{marginTop: 11}} onPress={() => {semBoletos ? ToastAndroid.show('Código Não disponível', ToastAndroid.LONG) :  Linking.openURL(Boleto?.urlBoleto)}}>
                                <LinearGradient
                                    colors={["#FE1D16", "#FD3C14", "#FA7311"]}
                                    locations={[0.06, 0.26, 0.92]}  {...deg(68)}
                                    style={{ flex: 1, justifyContent: "center", alignItems: "center", borderRadius: 10, flexDirection: 'row' }} >
                                    <S.CopiarTex>Baixar Boleto</S.CopiarTex><S.download />
                                </LinearGradient>
                            </S.ContainerArrow>
                        </S.ContainerBoleto>    
                    </S.Content>
                </S.Container>
            )
        })}
        
        </>
        )
}

export default CardBoleto;