import React, { useState } from 'react';
import * as S from './styles'
import Counter from '../../../components/Counter'
import { deg } from 'react-native-linear-gradient-degree';
import InputRegister from '../../../components/Inputs/InputRegister'
import InputData from '../../../components/Inputs/InputDataCNPJ'
import {LinearGradient} from 'expo-linear-gradient';
import { userCNPJ } from '../service';
import { ToastAndroid } from 'react-native';

export type StepProps = {
    setStep: Function
    step: number
    postUser?: Function
    setUser: Function
    userCNPJ: userCNPJ
}

export default function RegisterCNPJStep1({ userCNPJ, step, setStep, setUser }: StepProps) {
    const [segundaParte, setSegundaParte] = useState(true)
    // const [segundaParte, setSegundaParte] = useState(false)

    function situacao() {
        if (segundaParte) {
            if(
                userCNPJ.cnpjCliente 
                && userCNPJ.nomeCliente 
                && userCNPJ.emailCliente 
                && userCNPJ.senhaCliente
                && userCNPJ.InscricaoEstadualCliente
                && userCNPJ.DataAberturaEmpresaCliente
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
    console.log('usercnpj', userCNPJ)
    return (
    <S.Content>
        <Counter Label={"Dados empresariais"} setStep={setStep} step={step} />
        <InputRegister value={userCNPJ.cnpjCliente} mask={'99.999.999/9999-99'} border={true} placeholder="Informe seu CNPJ" label="Informe seu CNPJ" name="cnpjCliente" setUser={setUser}/>
        {segundaParte &&
            <S.ContainerSegundaParte>
                <InputRegister value={userCNPJ.nomeCliente} name="nomeCliente" setUser={setUser} border={false} placeholder="Nome Empresarial" label="Nome Empresarial" />
                <InputRegister value={userCNPJ.emailCliente} border={false} placeholder="Informe seu email" label="Email"  name="emailCliente" setUser={setUser} />
                <InputRegister value={userCNPJ.senhaCliente} border={false} placeholder="Informe sua senha" label="Senha"  name="senhaCliente" setUser={setUser} />
                <InputRegister value={userCNPJ.InscricaoEstadualCliente} name="InscricaoEstadualCliente" setUser={setUser} border={false} placeholder="Inscrição Estadual" label="Inscrição Estadual" />
                {/* <InputRegister mask={'99-99-9999'} name="DataAberturaEmpresaCliente" setUser={setUser} border={false} placeholder="Ex. 10-10-2010" label="Data Abertura" /> */}
                <InputData value={userCNPJ.DataAberturaEmpresaCliente} name="DataAberturaEmpresaCliente" setUser={setUser} label="Data de Abertura" placeholder="Data de Abertura"/>
            </S.ContainerSegundaParte>
        }
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
    </S.Content>
    )
}
