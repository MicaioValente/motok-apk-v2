import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { View } from 'react-native';
import { deg } from 'react-native-linear-gradient-degree';
import { RFValue } from 'react-native-responsive-fontsize';
import CounterPagamento from '../../../components/CounterPagamento';
import * as S from './styles';
 
const Passo3 = ({ step, setStep, plano, formaDePagamento, cupon}: any) => {
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
        }else if(name == 'boleto'){
            setPix(false)
            setBoleto(!boleto)
            setCartao(false)
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
    console.log(cupon)

    return (<>
    {plano && <>
    <CounterPagamento Label={'Pagamento do Caução'} step={step} setStep={setStep}/>
        <S.ContainerCard >
            <S.TextCobranca 
                style={{
                    marginTop: RFValue(20), 
                    marginRight: 'auto', 
                    marginBottom: RFValue(20), 
                    marginLeft: RFValue(20)}}>
                        PLANO ESCOLHIDO
            </S.TextCobranca>
                <S.ContainerCaucao>
                    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <S.TextCaucao>Plano</S.TextCaucao>
                        <S.ValueCaucao>{`${plano.nomePlano}`}</S.ValueCaucao>
                    </View>
                    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <S.TextCaucao>Valor Dia</S.TextCaucao>
                        <S.ValueCaucao>{`R$ ${plano.precoPlano}`}</S.ValueCaucao>
                    </View>
                </S.ContainerCaucao>
                <S.TextCobranca 
                    style={{
                        marginTop: RFValue(20), 
                        marginRight: 'auto', 
                        marginBottom: RFValue(20), 
                        marginLeft: RFValue(20)}}>
                        PAGAMENTO DO CAUÇÃO
                 </S.TextCobranca>
                <S.ContainerCaucao>
                    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <S.TextCaucao>Caução</S.TextCaucao>
                        <S.ValueCaucao>{`R$ ${plano.valorCaucao}`}</S.ValueCaucao>
                    </View>
                    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <S.TextCaucao>Condição</S.TextCaucao>
                        {console.log('asdasd',formaDePagamento.caucao.parcelas)}
                        <S.ValueCaucao>{`${formaDePagamento.caucao.parcelas == 1 ? 'À VISTA' : formaDePagamento.caucao.parcelas == 2 ? '2x R$ 300,00' : '3x R$ 200,00'}`}</S.ValueCaucao>
                    </View>
                </S.ContainerCaucao>

                <S.TextCobranca 
                    style={{
                        marginTop: RFValue(20), 
                        marginRight: 'auto', 
                        marginBottom: RFValue(20), 
                        marginLeft: RFValue(20)}}>
                        PAGAMENTO DO PLANO
                 </S.TextCobranca>
                <S.ContainerCaucao>
                    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <S.TextCaucao>Plano</S.TextCaucao>
                        <S.ValueCaucao>{`R$ ${plano.valorSemanal}`}</S.ValueCaucao>
                    </View>
                    {cupon ?
                        <> 
                        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <S.TextCaucao>Cupom</S.TextCaucao>
                            <S.ValueCaucao>{`- R$ ${plano.precoPlano}`}</S.ValueCaucao>
                        </View>
                    </>
                    : <></>
                    }
                    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <S.TextCaucao>Condição</S.TextCaucao>
                        <S.ValueCaucao>{`À VISTA`}</S.ValueCaucao>
                    </View>
                </S.ContainerCaucao>
           
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
                    <S.TextButton>Finalizar</S.TextButton>
                </LinearGradient>
            </S.Button>
        </S.ContainerCard>
        </>}
    </> )
}

export default Passo3;
