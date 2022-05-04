import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { View } from 'react-native';
import { deg } from 'react-native-linear-gradient-degree';
import { RFValue } from 'react-native-responsive-fontsize';
import Loading from '../../../components/Loading';
import ModalAlert from '../../../components/ModalAlert';
import api from '../../../service/api';
import * as S from './styles';
import * as Linking from 'expo-linking';
import { Boleto } from '../PagamentoBoletoPlano';
import * as Clipboard from 'expo-clipboard';
import { ToastAndroid } from 'react-native'

const PagamentoBoletoCaucao = ({ step, setStep, plano, formaDePagamento, setFormaDePagamento, user}: any) => {
    
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(false)
    const [boleto, setBoleto] = useState<Boleto>({} as Boleto)
    const [modalAviso, setModalAviso] = useState(false)

    async function getBoletoUser() {
        setLoading(true)
        let dataRequest = {
            formaPagamento: 0,
            clientId: user.idCliente,
            planoId: plano.idPlanos,
            temCupom: false,
            tipoCobranca: 1,
            quantidadeParcelas: formaDePagamento.caucao.parcelas
        }
        api.post('boleto/pagamentoContratacao', dataRequest).then(function (response){
            console.log(response)
            setLoading(false)
            setBoleto(response.data)
            // Linking.openURL(response.data.boletoUrl)

        }).catch(function (response){
            setLoading(false)
            setModal(true)
        })
    }

    function nextStep() {
        if(formaDePagamento.plano.forma === 'boleto' && boleto.barCode){
            setStep(step + 1)
        }else{
            setModalAviso(true)
        }
    }
    function planoCaucao(){
        if(formaDePagamento.caucao.parcelas === 1 ){
            return 'R$ 600,00'
        }else if(formaDePagamento.caucao.parcelas === 2){
            return '2x R$ 300,00'
        }else{
            return'3x R$ 200,00'
        }
    }


    return (<>
    {plano && formaDePagamento.caucao.forma === 'boleto' && <>
            <ModalAlert modal={modal} setModal={setModal} text={'houve um erro ao gerar o boleto!'}/>
            <Loading loading={loading} setLoading={setLoading} mensage='Gerando Boleto' />
            <ModalAlert modal={modalAviso} setModal={setModalAviso} text={'Gere o boleto primeiro'}/>
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
                            <S.TextCaucao>Caução</S.TextCaucao>
                            <S.ValueCaucao>{planoCaucao()}</S.ValueCaucao>
                        </View>
                    </S.ContainerCaucao>
                <S.Button style={{marginTop: 20}}  onPress={() => getBoletoUser()}>
                    <LinearGradient
                            colors={["#FE1D16", "#FD3C14", "#FA7311"]}
                            locations={[0.06, 0.26, 0.92]}  {...deg(68)}
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 10
                            }}>
                            <S.TextButton>Gerar Boleto Caução</S.TextButton>
                        </LinearGradient>
                </S.Button>

                {boleto.urlBoleto ? 
                        <>
                            <S.ContainerCaucao  onPress={() => Linking.openURL(boleto.urlBoleto)}>
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

                <S.Button onPress={() => nextStep()}>
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
        </>}
        {plano && formaDePagamento.caucao.forma === 'pix' && <>
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
                            <S.TextCaucao>Caução</S.TextCaucao>
                            <S.ValueCaucao>{`${plano.valorCaucao}`}</S.ValueCaucao>
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
                            <S.ContainerIconNumber onPress={() => {Clipboard.setString('09163375000147'),ToastAndroid.show('Código Copiado', ToastAndroid.LONG)}}>
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

export default PagamentoBoletoCaucao;
