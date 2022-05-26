import React, { useState } from 'react';
import * as S from './styles'
import Counter from '../../../components/Counter'
import { deg } from 'react-native-linear-gradient-degree';
import InputRegister from '../../../components/Inputs/InputRegister'
import InputData from '../../../components/Inputs/InputData'
import {LinearGradient} from 'expo-linear-gradient';
import { ToastAndroid } from 'react-native';
import { userCPF } from '../service';
import { cpf } from 'cpf-cnpj-validator'; 
import InputDataMoment from '../../../components/Inputs/InputDataMoment';

export type StepProps = {
    setStep: Function
    step: number
    setUser: Function
    register?: boolean
    userCPF: userCPF
    title?: string
    postUser?: Function
}

export default function RegisterCPFStep1({step, setStep, setUser, userCPF, postUser}: StepProps) {
    const [segundaParte, setSegundaParte] = useState(true)
    // const [segundaParte, setSegundaParte] = useState(userCPF.nomeCliente)

    function situacao() {
        postUser()
        return
        if (segundaParte) {
            if(
                userCPF.cpfCliente 
                && userCPF.nomeCliente 
                && userCPF.emailCliente 
                && userCPF.senhaCliente
                && userCPF.nomeMae
                && userCPF.nomePai
                && userCPF.dataNascimento
                // && userCPF.mesNascimento
                // && userCPF.anoNascimento
                ){
                    if(cpf.isValid(userCPF.cpfCliente)){
                        setStep(2)
                        return
                    }else{
                        ToastAndroid.show('cpf não é válido', ToastAndroid.LONG);

                    }
                    
                }else{
                    ToastAndroid.show('Prencha todos os Campos', ToastAndroid.LONG);
                }
            return

        }
        setSegundaParte(true)
    }


    return (
        <S.Container >
            <Counter Label={"Dados Pessoais"} setStep={setStep} step={step} />
            <InputRegister value={userCPF.cpfCliente} mask={'999.999.999-99'} border={true} placeholder="Informe seu CPF" label="Informe seu CPF" name="cpfCliente" setUser={setUser} />
            {segundaParte || userCPF.nomeCliente ? 
            <>
                <S.ContainerSegundaParte >
                    <InputRegister value={userCPF.nomeCliente} border={false} placeholder="Nome Completo" label="Nome"  name="nomeCliente" setUser={setUser} />
                    <InputRegister value={userCPF.emailCliente} border={false} placeholder="Informe seu email" label="Email"  name="emailCliente" setUser={setUser} />
                    <InputRegister value={userCPF.senhaCliente} border={false} placeholder="Informe sua senha" label="Senha"  name="senhaCliente" setUser={setUser} />
                    <InputRegister value={userCPF.nomeMae} border={false} placeholder="Nome da Mãe" label="Nome da Mãe"  name="nomeMae" setUser={setUser} />
                    <InputRegister value={userCPF.nomePai} border={false} placeholder="Nome do Pai" label="Nome do Pai"  name="nomePai" setUser={setUser} />
                    <InputData  value={userCPF.dataNascimento} placeholder={'Data de Nascimento'} label={'Data de Nascimento'} setUser={setUser} />
                    {/* <InputDataMoment value={userCPF.ValidadeCarteira} border={true} placeholder={'Data de Nascimento'} label={'Data de Nascimento'} setUser={setUser} name={'nomePai'}/> */}
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
                            <S.TextButton >{segundaParte ? "PRÓXIMO" : "CONTINUAR"}</S.TextButton>
                        </LinearGradient>
                    </S.Button>
                </S.ContainerSegundaParte>
            </>
            : null}
            {!segundaParte && 
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
                    <S.TextButton >{segundaParte ? "PRÓXIMO" : "CONTINUAR"}</S.TextButton>
                </LinearGradient>
            </S.Button>
            }
        </S.Container>

    )
}
