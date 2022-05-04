import React from 'react';
import * as S from './styles'
import Counter from '../../../components/Counter'
import { deg } from 'react-native-linear-gradient-degree';
import InputCep from '../../../components/Inputs/InputCep'
import InputRegister from '../../../components/Inputs/InputRegister'
import InputRua from '../../../components/Inputs/InputRua'
import InputNumero from '../../../components/Inputs/InputNumero'
import { RFValue } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';
import { StepProps } from '../RegisterCPFStep1';
import Select from '../../../components/Inputs/Select';
import { ToastAndroid } from 'react-native'
export default function RegisterCPFStep3({ userCPF, step, setStep, setUser }: StepProps) {
    function situacao() {
        if(userCPF.cepEnderecoCliente && 
            userCPF.estatoClienteId &&
            userCPF.cidadeClienteId && 
            userCPF.bairroEnderecoCliente && 
            userCPF.ruaEnderecoCliente && 
            userCPF.numEnderecoCliente && 
            userCPF.complementoEnderecoCliente 
            ){

            setStep(4)
        }else{
            ToastAndroid.show('Prencha todos os Campos', ToastAndroid.LONG);

        }
    }

    return <S.Content>
        <S.Wrapper>
            <Counter Label={"Dados Pessoais"} setStep={setStep} step={step} />
            <S.ContainerTerceiraParte>
                <InputCep setUser={setUser} name={'cepEnderecoCliente'} />
                <Select setUser={setUser} border={false} />
                <InputRegister setUser={setUser} name={'bairroEnderecoCliente'} border={false} placeholder="Insira seu bairro" label="Bairro" />
                <S.Row>
                    <InputRua placeholder={'Insira a rua'} setUser={setUser} name={'ruaEnderecoCliente'} />
                    <InputNumero setUser={setUser} name={'numEnderecoCliente'} />
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
        </S.Wrapper>
    </S.Content >
}
