import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View } from 'react-native';
import { deg } from 'react-native-linear-gradient-degree';
import { RFValue } from 'react-native-responsive-fontsize';
import * as S from './styles';
 
const PagamentoCaucao = ({ step, setStep, plano}: any) => {
    return (<>
    {plano && <>
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
                            <S.ContainerIconNumber>
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
        </>}
    </> )
}

export default PagamentoCaucao;
