import React, { useState } from 'react';
import * as S from './styles'
import Counter from '../../../components/Counter'
import { deg } from 'react-native-linear-gradient-degree';
import InputRegister from '../../../components/Inputs/InputRegister'
import InputData from '../../../components/Inputs/InputData'
import {LinearGradient} from 'expo-linear-gradient';
import { ToastAndroid } from 'react-native';
import { userCPF } from '../service';

export type StepProps = {
    setStep: Function
    step: number
    setUser: Function
    register?: boolean
    userCPF: userCPF
    title?: string
}

export default function RegisterCPFStep1({step, setStep, setUser, userCPF }: StepProps) {
    const [segundaParte, setSegundaParte] = useState(false)

    function situacao() {
        if (segundaParte) {
            if(
                userCPF.cpfCliente 
                && userCPF.nomeCliente 
                && userCPF.emailCliente 
                && userCPF.senhaCliente
                && userCPF.nomeMae
                && userCPF.nomePai
                && userCPF.diaNascimento
                && userCPF.mesNascimento
                && userCPF.anoNascimento
                ){
                    setStep(2)
                    return
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
            <InputRegister mask={'999.999.999-99'} border={true} placeholder="Informe seu CPF" label="Informe seu CPF" name="cpfCliente" setUser={setUser} />
            {segundaParte &&
            <>
                <S.ContainerSegundaParte >
                    <InputRegister border={false} placeholder="Nome Completo" label="Nome"  name="nomeCliente" setUser={setUser} />
                    <InputRegister border={false} placeholder="Informe seu email" label="Email"  name="emailCliente" setUser={setUser} />
                    <InputRegister border={false} placeholder="Informe sua senha" label="Senha"  name="senhaCliente" setUser={setUser} />
                    <InputRegister border={false} placeholder="Nome da Mãe" label="Nome da Mãe"  name="nomeMae" setUser={setUser} />
                    <InputRegister border={false} placeholder="Nome do Pai" label="Nome do Pai"  name="nomePai" setUser={setUser} />
                    <InputData label="Data de Nascimento" setUser={setUser} />
                    <S.Button segundaParte={segundaParte} onPress={() => situacao()} >
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
            }
            {!segundaParte && 
            <S.Button segundaParte={segundaParte} onPress={() => situacao()} >
                <LinearGradient
                    colors={["#FE1D16", "#FD3C14", "#FA7311"]}
                    locations={[0.06, 0.26, 0.92]}  {...deg(68)}
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10
                    }}>
                    <S.TextButton >{segundaParte ? "PRÓXIMO2" : "CONTINUAR"}</S.TextButton>
                </LinearGradient>
            </S.Button>
            }
        </S.Container>

    )
}
