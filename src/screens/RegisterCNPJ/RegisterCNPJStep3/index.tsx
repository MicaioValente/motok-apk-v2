import React, { useState } from 'react';
import * as S from './styles';
import Counter from '../../../components/Counter';
import { deg } from 'react-native-linear-gradient-degree';
import InputCep from '../../../components/Inputs/InputCep';
import InputRegister from '../../../components/Inputs/InputRegister';
import InputRua from '../../../components/Inputs/InputRua';
import InputNumero from '../../../components/Inputs/InputNumero';
import { RFValue } from 'react-native-responsive-fontsize';
import {LinearGradient} from 'expo-linear-gradient';
import { StepProps } from '../RegisterCNPJStep1';
import Select from '../../../components/Inputs/Select';
import { ToastAndroid } from 'react-native';

export default function RegisterCNPJStep3({ userCNPJ, step, setStep, setUser }: StepProps) {

    function situacao() {
        if(userCNPJ.cepEnderecoCliente && 
            userCNPJ.estatoClienteId &&
            userCNPJ.cidadeClienteId && 
            userCNPJ.bairroEnderecoCliente && 
            userCNPJ.ruaEnderecoCliente && 
            userCNPJ.numEnderecoCliente && 
            userCNPJ.complementoEnderecoCliente 
            ){

            setStep(4)
        }else{
            ToastAndroid.show('Prencha todos os Campos', ToastAndroid.LONG);

        }
    }

    return <S.Content>
        <Counter Label={"Dados empresariais"} setStep={setStep} step={step} />
        <S.ContainerTerceiraParte>
            <InputCep  name="cepEnderecoCliente" setUser={setUser} />
           
            {/* <S.Row>
                <InputCidade name="cidadeClienteId" setUser={setUser} />
                <InputEstado name="estatoClienteId" setUser={setUser}/>
            </S.Row> */}
            <Select setUser={setUser} border={false} />
            <InputRegister name="bairroEnderecoCliente" setUser={setUser} border={false} placeholder="Insira seu bairro" label="Bairro" />
            <S.Row>
                <InputRua placeholder={'Insira a rua'} name="ruaEnderecoCliente" setUser={setUser} />
                <InputNumero  name="numEnderecoCliente" setUser={setUser}/>
            </S.Row>
            <InputRegister setUser={setUser} name={'complementoEnderecoCliente'} border={false} placeholder="Complemento Endereço" label="Complemento" />

        </S.ContainerTerceiraParte >
        <S.ContainerBottom>

            <S.ContainerButtomLeft >
                <S.TextButtonLeft>VOLTAR</S.TextButtonLeft>
            </S.ContainerButtomLeft>
            <S.Button onPress={() => situacao()} >
                <LinearGradient
                    colors={["#FE1D16", "#FD3C14", "#FA7311"]}
                    locations={[0.06, 0.26, 0.92]}  {...deg(68)}
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: RFValue(10)
                    }}>
                    <S.TextButton >PRÓXIMO</S.TextButton>
                </LinearGradient>
            </S.Button>
        </S.ContainerBottom>
    </S.Content >
}
