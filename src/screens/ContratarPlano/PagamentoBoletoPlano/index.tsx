import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { View } from 'react-native';
import { deg } from 'react-native-linear-gradient-degree';
import { RFValue } from 'react-native-responsive-fontsize';
import api from '../../../service/api';
import * as S from './styles';
import * as Clipboard from 'expo-clipboard';
import Loading from '../../../components/Loading';
import ModalAlert from '../../../components/ModalAlert';
import CardBoleto from '../../../components/CardBoleto';
import { User } from '../../Preload';
import * as Linking from 'expo-linking';
export type Boleto = {
    codigoPagamento: string 
    formaPagamento: string 
    dataEmissao: string 
    dataVencimento: string 
    statusPagamento: string 
    boletoUrl: string 
    valor: number 
    barCode: string 
    imagemBase64QrCode: string 
    codigoCopiaEColaPix: string 
    client: User 
    idPagamento: string
}
const PagamentoBoleto = ({ step, setStep, plano, formaDePagamento, cupon, user}: any) => {
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(false)
    const [modalAviso, setModalAviso] = useState(false)
    const [boleto, setBoleto] = useState<Boleto>({} as Boleto)

    async function getBoletoUser() {
        setLoading(true)
        console.log(formaDePagamento)
        let dataRequest = {
            formaPagamento: 0,
            clientId: user.idCliente,
            planoId: plano.idPlanos,
            temCupom: cupon
        }

        api.post('boleto', dataRequest).then(function (response){
            console.log(response.data)
            setLoading(false)
            setBoleto(response.data)
            // Linking.openURL(response.data.boletoUrl)

        }).catch(function (response){
            setLoading(false)
            setModal(true)
            console.log('errorrrr', response)
        })
    }

    function valorDescontadoDiaria() {
        if(cupon){
            const planoSplit = plano.valorSemanal.split(',')
            const diaSplit = plano.precoPlano.split(',')
            const centavos = (parseInt(planoSplit[1]) - parseInt(diaSplit[1]))
            let reais = (parseInt(planoSplit[0]) - parseInt(diaSplit[0]))
            let depoisDaVirgula
            if(centavos < 0){
                depoisDaVirgula = 100 + centavos
                reais = reais - 1
            }
            return `${reais},${depoisDaVirgula}`
        }
        return `${plano.valorSemanal}`

    }

    function nextStep() {
        console.log(formaDePagamento.plano.forma === 'boleto' && boleto.barCode)
        if(formaDePagamento.plano.forma === 'boleto' && boleto.barCode){
            setStep(step + 1)
        }else{
            setModalAviso(true)
        }
    }
    return (<>
    {plano && formaDePagamento.plano.forma === 'boleto' && <>
            <ModalAlert modal={modal} setModal={setModal} text={'houve um erro ao gerar o boleto!'}/>
            <ModalAlert modal={modalAviso} setModal={setModalAviso} text={'Gere o boleto primeiro'}/>
            <Loading loading={loading} setLoading={setLoading} mensage='Gerando Boleto' />
        
            <S.Scroll>
                <S.ContainerCard >
                    <S.TextCobranca 
                        style={{
                            marginTop: RFValue(20), 
                            marginRight: 'auto', 
                            marginBottom: RFValue(20), 
                            marginLeft: RFValue(20)}}>
                                VALOR PARA PAGAMENTO
                    </S.TextCobranca>
                        <S.ContainerCaucao>
                            <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                                <S.TextCaucao>Plano</S.TextCaucao>
                                <S.ValueCaucao>{valorDescontadoDiaria()}</S.ValueCaucao>
                            </View> 
                        </S.ContainerCaucao>
                    <S.Button style={{marginTop: 20}} onPress={() => getBoletoUser()} >
                        <LinearGradient
                            colors={["#FE1D16", "#FD3C14", "#FA7311"]}
                            locations={[0.06, 0.26, 0.92]}  {...deg(68)}
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 10
                            }}>
                            <S.TextButton>Gerar Boleto Plano</S.TextButton>
                        </LinearGradient>
                    </S.Button>

                    {boleto.boletoUrl ? 
                        <>
                            <S.ContainerCaucao  onPress={() => Linking.openURL(boleto.boletoUrl)}>
                                <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <S.ValueCaucao>{`Baixar PDF`}</S.ValueCaucao>
                                    <S.ContainerIconNumber> 
                                        <S.Icon name='download' size={25} color="#F14902"/>
                                    </S.ContainerIconNumber>
                                </View>
                            </S.ContainerCaucao>
                            <S.ContainerCaucao onPress={() => Clipboard.setString(boleto.barCode)}>
                                <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <S.ValueCaucao >{`${boleto.barCode}`}</S.ValueCaucao>
                                    <S.ContainerIconNumber onPress={() => Clipboard.setString('mail@mail.com')}> 
                                        <S.Copiar />
                                    </S.ContainerIconNumber>
                                </View>
                            </S.ContainerCaucao>
                            <View style={{height: 150}}/>
                        </>
                        :
                        <View style={{height: 390}}/>
                    }
                    <S.Button onPress={() => nextStep()} style={{marginTop: 40}}>
                        <S.ButtonAplicar  onPress={() => setStep(step - 1)}>
                            <S.TextButton style={{color: '#F14902'}}>VOLTAR</S.TextButton>
                        </S.ButtonAplicar>
                            <LinearGradient
                                colors={["#FE1D16", "#FD3C14", "#FA7311"]}
                                locations={[0.06, 0.26, 0.92]}  {...deg(68)}
                                style={{
                                    flex: 1,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: 10
                                }}>
                                <S.TextButton>CONFIRMAR PAGAMENTO</S.TextButton>
                            </LinearGradient>
                    </S.Button>
                </S.ContainerCard>
            </S.Scroll>

        </>}
    {plano && formaDePagamento.plano.forma === 'pix' && <>
    <S.Scroll>

    <S.ContainerCard >
                <S.TextCobranca 
                    style={{
                        marginTop: RFValue(20), 
                        marginRight: 'auto', 
                        marginBottom: RFValue(20), 
                        marginLeft: RFValue(20)}}>
                            VALOR PARA PAGAMENTO
                </S.TextCobranca>
                    <S.ContainerCaucao>
                        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <S.TextCaucao>Plano</S.TextCaucao>
                            <S.ValueCaucao>{valorDescontadoDiaria()}</S.ValueCaucao>
                        </View>
                    </S.ContainerCaucao>
                    <S.TextCobranca 
                        style={{
                            marginTop: RFValue(20), 
                            marginRight: 'auto', 
                            // marginBottom: RFValue(10), 
                            marginLeft: RFValue(40)}}>
                            NOME
                    </S.TextCobranca>
                    <S.ValueCaucao style={{fontSize: RFValue(24)}}>{`Motok Locação de Motocicletas`}</S.ValueCaucao>
                    <S.TextCobranca 
                        style={{
                            marginTop: RFValue(20), 
                            marginRight: 'auto', 
                            // marginBottom: RFValue(10), 
                            marginLeft: RFValue(40)}}>
                            CNPJ
                    </S.TextCobranca>
                    <S.ValueCaucao style={{fontSize: RFValue(24)}}>{`09.163.375/0001-47`}</S.ValueCaucao>

                    <S.TextCobranca
                        style={{
                            marginTop: RFValue(20), 
                            marginRight: 'auto', 
                            marginBottom: RFValue(20), 
                            marginLeft: RFValue(20)}}>
                            CHAVE DO PIX
                    </S.TextCobranca>
                        
                    <S.ContainerCaucao>
                        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <S.ValueCaucao>{`09163375000147`}</S.ValueCaucao>
                            <S.ContainerIconNumber onPress={() => Clipboard.setString('mail@mail.com')}> 
                                <S.Copiar />
                            </S.ContainerIconNumber>
                        </View>
                    </S.ContainerCaucao>
                    <S.TextCobranca 
                        style={{
                            marginTop: RFValue(20), 
                            marginRight: 'auto', 
                            marginBottom: RFValue(20), 
                            marginLeft: RFValue(20)}}>
                            INFORMAÇÕES
                    </S.TextCobranca>
                        <View style={{width: '100%', paddingLeft: 20,  paddingRight: 20}}>
                            <S.ContainerTextDot>
                                <S.TextDot />
                                <S.SubTexteDetalhes>O PIX é rápido e funciona 24 horas todos os dias da semana.</S.SubTexteDetalhes>
                            </S.ContainerTextDot>
                            <S.ContainerTextDot>
                                <S.TextDot />
                                <S.SubTexteDetalhes>Após a confirmação do pagamento do caução</S.SubTexteDetalhes>
                            </S.ContainerTextDot>
                        </View>
            
                <S.Button onPress={() => setStep(step + 1)}>
                    <S.ButtonAplicar  onPress={() => setStep(step - 1)}>
                        <S.TextButton style={{color: '#F14902'}}>VOLTAR</S.TextButton>
                    </S.ButtonAplicar>
                        <LinearGradient
                            colors={["#FE1D16", "#FD3C14", "#FA7311"]}
                            locations={[0.06, 0.26, 0.92]}  {...deg(68)}
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 10
                            }}>
                            <S.TextButton>CONFIRMAR PAGAMENTO</S.TextButton>
                        </LinearGradient>
                </S.Button>
            </S.ContainerCard>
            </S.Scroll>
    </>}

    </> )
}

export default PagamentoBoleto;
