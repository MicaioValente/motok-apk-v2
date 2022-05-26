import React, { useState } from 'react';
import * as S from './styles'
import Counter from '../../../components/Counter'
import { deg } from 'react-native-linear-gradient-degree';
import InputCodigo from '../../../components/Inputs/InputCodigo'
import InputPhoneNumber from '../../../components/Inputs/InputPhoneNumber'
import {LinearGradient} from 'expo-linear-gradient';
import { StepProps } from '../RegisterCPFStep1';
import { ToastAndroid } from 'react-native'


export default function RegisterCPFStep2({ userCPF, setStep, setUser, step}: StepProps) {

    function situacao() {
        if(userCPF.telefoneCliente){
            console.log(userCPF.telefoneCliente.length)
            if(userCPF.telefoneCliente.length < 10 ){
                ToastAndroid.show('Insira um número válido', ToastAndroid.LONG);
                return
            }
            setStep(3)
        }else{
            ToastAndroid.show('Prencha todos os Campos', ToastAndroid.LONG);
        }
    }

    return <S.Content>
        <Counter Label={"Validar o Número"} setStep={setStep} step={step} />
        <S.ContainerSegundaParte>
                        
            <InputPhoneNumber value={userCPF.telefoneCliente} setUser={setUser} border={false} placeholder="(12) 34567-89000" label="Informe seu telefone" />
            {/* <InputCodigo label="Código" /> */}
        </S.ContainerSegundaParte>
        <S.ContainerBottom>

            <S.ContainerButtomLeft >
                <S.TextButtonLeft onPress={() => setStep(step - 1)}>VOLTAR</S.TextButtonLeft>
            </S.ContainerButtomLeft>
            <S.Button onPress={() => situacao()} >
                <LinearGradient
                    colors={["#FE1D16", "#FD3C14", "#FA7311"]}
                    locations={[0.06, 0.26, 0.92]}  {...deg(68)}
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10
                    }}>
                    <S.TextButton >PRÓXIMO</S.TextButton>
                </LinearGradient>
            </S.Button>
        </S.ContainerBottom>
    </S.Content>
}
