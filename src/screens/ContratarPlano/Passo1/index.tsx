import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { deg } from 'react-native-linear-gradient-degree';
import { RFValue } from 'react-native-responsive-fontsize';
import Counter from '../../../components/Counter';
import CounterPagamento from '../../../components/CounterPagamento';
import * as S from './styles';
 
const Passo1 = ({ step, setStep, plano, formaDePagamento, setFormaDePagamento}: any) => {
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
            // setForm({
            //     ...form,
            //     [nome11]: {
            //         ...form[nome11],
            //         correta: checked
            //     }
            // })
            setFormaDePagamento(
                {...formaDePagamento, 
                    caucao: {...formaDePagamento.caucao, 
                        forma: 'pix'
                    },
                })
        }else if(name == 'boleto'){
            setPix(false)
            setBoleto(!boleto)
            setCartao(false)
            setFormaDePagamento(
                {...formaDePagamento, 
                    caucao: {...formaDePagamento.caucao, 
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
            setFormaDePagamento(
                {...formaDePagamento, 
                    caucao: {...formaDePagamento.caucao, 
                        parcelas: 1
                    },
                })
        }else if(name == 'duas'){
            setAvista(false)
            setDuas(!duas)
            setTres(false)
            setFormaDePagamento(
                {...formaDePagamento, 
                    caucao: {...formaDePagamento.caucao, 
                        parcelas: 2
                    },
                })
        }else{
            setAvista(false)
            setDuas(false)
            setTres(!tres)
            setFormaDePagamento(
                {...formaDePagamento, 
                    caucao: {...formaDePagamento.caucao, 
                        parcelas: 3
                    },
                })
        }
    }

    return (<>
    {plano && <>
    <CounterPagamento Label={'Pagamento do Caução'} step={step} setStep={setStep}/>
        <S.ContainerCard >
            <S.TextCobranca style={{marginTop: RFValue(20), marginRight: 'auto', marginBottom: RFValue(20), marginLeft: RFValue(20)}}>PLANO ESCOLHIDO</S.TextCobranca>
                <S.Card >
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
                </S.Card>
            <S.TextCobranca style={{marginTop: RFValue(20), marginRight: 'auto', marginBottom: RFValue(20), marginLeft: RFValue(20)}}>VALOR PARA PAGAMENTO</S.TextCobranca>
                <S.ContainerCaucao>
                    <S.TextCaucao>Caução</S.TextCaucao>
                    <S.ValueCaucao>R$ 600,00</S.ValueCaucao>
                </S.ContainerCaucao>
            <S.TextCobranca style={{marginTop: RFValue(20), marginRight: 'auto', marginBottom: RFValue(20), marginLeft: RFValue(20)}}>FORMA DE PAGAMENTO DO CAUÇÃO</S.TextCobranca>
            
            
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
                <S.ValueCaucao>R$ 600,00</S.ValueCaucao>
                <S.Ball>
                    {avista &&
                        <S.BallMenor/>
                    }
                </S.Ball>
            </S.ContainerCaucao> 
            <S.ContainerCaucao onPress={() => setPagamento('duas')} selecionado={duas}>
                <S.TextCaucao>2x </S.TextCaucao>
                <S.ValueCaucao>R$ 300,00</S.ValueCaucao>
                <S.Ball>
                    {duas &&
                        <S.BallMenor/>
                    }
                </S.Ball>
            </S.ContainerCaucao>
            <S.ContainerCaucao onPress={() => setPagamento('tres')} selecionado={tres}>
                <S.TextCaucao>3x </S.TextCaucao>
                <S.ValueCaucao>R$ 200,00</S.ValueCaucao>
                <S.Ball>
                    {tres &&
                        <S.BallMenor/>
                    }
                </S.Ball>
            </S.ContainerCaucao>
            <S.Button onPress={() => setStep(step+ 1)}>
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

export default Passo1;
