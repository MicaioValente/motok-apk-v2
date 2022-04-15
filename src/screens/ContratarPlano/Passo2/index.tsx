import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { View } from 'react-native';
import { deg } from 'react-native-linear-gradient-degree';
import { RFValue } from 'react-native-responsive-fontsize';
import Counter from '../../../components/Counter';
import CounterPagamento from '../../../components/CounterPagamento';
import InputCep from '../../../components/Inputs/InputCep';
import InputCupon from '../../../components/Inputs/InputCupon';
import * as S from './styles';
import Spinner from 'react-native-loading-spinner-overlay';

const Passo2 = ({ step, setStep, plano, formaDePagamento, setFormaDePagamento, setCupon}: any) => {
    const [pix, setPix] = useState(true)
    const [boleto, setBoleto] = useState(false)
    const [cartao, setCartao] = useState(false)
    const [avista, setAvista] = useState(true)
    const [duas, setDuas] = useState(false)
    const [tres, setTres] = useState(false)

    function setForma(name: string){
        if(name == 'pix'){
            setPix(!pix)
            setBoleto(false)
            setCartao(false)
            setFormaDePagamento(
                {...formaDePagamento, 
                    plano: {...formaDePagamento.plano, 
                        forma: 'pix'
                    },
                })
        }else if(name == 'boleto'){
            setPix(false)
            setBoleto(!boleto)
            setCartao(false)
            setFormaDePagamento(
                {...formaDePagamento, 
                    plano: {...formaDePagamento.plano, 
                        forma: 'boleto'
                    },
                })
        }else{
            setPix(false)
            setBoleto(false)
            setCartao(!cartao)
        }
    }
    function setPagamento(name: string){
        if(name == 'uma'){
            setAvista(!avista)
            setDuas(false)
            setTres(false)
        }else if(name == 'duas'){
            setAvista(false)
            setDuas(true)
            setTres(false)
        }else{
            setAvista(false)
            setDuas(false)
            setTres(true)
        }
    }

    return (<>
    {plano && <>
    <CounterPagamento Label={'Pagamento do Plano'} step={step} setStep={setStep}/>
        <S.ContainerCard >
            {/* <S.TextCobranca style={{marginTop: RFValue(20), marginRight: 'auto', marginBottom: RFValue(20), marginLeft: RFValue(20)}}>PLANO ESCOLHIDO</S.TextCobranca> */}
                {/* <S.Card >
                    <S.TitleCard >{plano.nomePlano}</S.TitleCard>
                    <S.ContainerValue>
                        <S.TextContentCardValueLeft>R$</S.TextContentCardValueLeft>
                        <S.ContentCardValue>{plano.precoPlano.split(',')[0]}</S.ContentCardValue>
                        <S.TextContentCardValueRight>/DIA</S.TextContentCardValueRight>
                    </S.ContainerValue>
                    <S.TitleCobranca>{plano.observacaoPlano.split(';')[0]}</S.TitleCobranca>
                    <S.ContainerContentCobranca>
                        <S.TextCobranca>Semanal</S.TextCobranca>
                        <S.ValueCobranca>{plano.valorSemanal}</S.ValueCobranca>
                    </S.ContainerContentCobranca>
                    <S.ContainerContentCobranca>
                        <S.TextCobranca>Valor do caução</S.TextCobranca>
                        <S.ValueCobranca>{plano.valorCaucao}</S.ValueCobranca>
                    </S.ContainerContentCobranca>
                </S.Card> */}
            <S.TextCobranca style={{marginTop: RFValue(20), marginRight: 'auto', marginBottom: RFValue(20), marginLeft: RFValue(20)}}>VALOR PARA PAGAMENTO</S.TextCobranca>
                <S.ContainerCaucao>
                    <S.TextCaucao>Plano</S.TextCaucao>
                    <S.ValueCaucao>{`R$ ${plano.valorSemanal}`}</S.ValueCaucao>
                </S.ContainerCaucao>
            <S.TextCobranca style={{marginTop: RFValue(20), marginRight: 'auto', marginBottom: RFValue(20), marginLeft: RFValue(20)}}>FORMA DE PAGAMENTO</S.TextCobranca>
            
            
                <S.ContainerPagamento onPress={() => setForma('pix')} selecionado={pix}>
                    <S.Pix/>
                    <S.ValuePagamento>PIX</S.ValuePagamento>
                    <S.Ball style={{marginLeft: 'auto'}}>
                    {pix &&
                        <S.BallMenor/>
                    }
                    </S.Ball>
                </S.ContainerPagamento>
                <S.ContainerPagamento onPress={() => setForma('boleto')} selecionado={boleto}>
                    <S.Boleto />
                    <S.ValuePagamento>BOLETO</S.ValuePagamento>
                    <S.Ball style={{marginLeft: 'auto'}}>
                    {boleto &&
                        <S.BallMenor/>
                        }
                    </S.Ball>
                </S.ContainerPagamento>
                {/* <S.ContainerPagamento onPress={() => setForma('cartao')} selecionado={cartao}>
                    <S.Cartao />
                    <S.ContainerPagamentoCards>
                        <S.ValuePagamento>BOLETO</S.ValuePagamento>
                        <S.ContainerPagamentoCards style={{flexDirection: 'row'}}>
                            <S.MastercardSVG/>
                            <S.VisaSVG />
                        </S.ContainerPagamentoCards>
                    </S.ContainerPagamentoCards>

                    <S.Ball style={{marginLeft: 'auto'}}>
                    {cartao &&
                        <S.BallMenor/>
                    }
                    </S.Ball>
                </S.ContainerPagamento> */}

            <S.TextCobranca style={{marginTop: RFValue(20), marginRight: 'auto', marginBottom: RFValue(20), marginLeft: RFValue(20)}}>CONDIÇÕES DE PAGAMENTO</S.TextCobranca>
            <S.ContainerCaucao onPress={() => setPagamento('uma')} selecionado={avista}>
                <S.TextCaucao>À Vista </S.TextCaucao>
                <S.ValueCaucao>{`R$ ${plano.valorSemanal}`}</S.ValueCaucao>
                <S.Ball>
                    {avista &&
                        <S.BallMenor/>
                    }
                </S.Ball>
            </S.ContainerCaucao> 
            <S.TextCobranca style={{marginTop: RFValue(20), marginRight: 'auto', marginBottom: RFValue(20), marginLeft: RFValue(20)}}>POSSUI CUPOM DE DESCONTO?</S.TextCobranca>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                <InputCupon setCupon={setCupon} setStep={setStep} step={step}/>
            </View>
            
           
            <S.Button onPress={() => setStep(step + 1)}>
                <LinearGradient
                    colors={["#FE1D16", "#FD3C14", "#FA7311"]}
                    locations={[0.06, 0.26, 0.92]}  {...deg(68)}
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10
                    }}>
                    <S.TextButton>Continuar</S.TextButton>
                </LinearGradient>
            </S.Button>
        </S.ContainerCard>
        </>}
    </> )
}

export default Passo2;
