import React, { useState } from 'react';
import * as S from './styles'
import Counter from '../../../components/Counter'
import { deg } from 'react-native-linear-gradient-degree';
import InputRegister from '../../../components/Inputs/InputRegister'
import InputData from '../../../components/Inputs/InputData'
import {LinearGradient} from 'expo-linear-gradient';
import { StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
export type StepProps = {
    setStep?: Function
    step?: number
    setUser?: Function
    register?: boolean
    postUser?: Function
}

export default function RegisterCPFStep1({ step, setStep, setUser }: StepProps) {
    const [segundaParte, setSegundaParte] = useState(false)
    const navigation = useNavigation()

    function situacao() {
        if (segundaParte) {
            setStep(2)
            return
        }
        setSegundaParte(true)
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingLeft: RFValue(30),
            paddingRight: RFValue(30)
        },
        inner: {
          padding: 24,
          flex: 1,
          justifyContent: "space-around"
        },
        header: {
          fontSize: 36,
          marginBottom: 48
        },
        textInput: {
          height: 40,
          borderColor: "#000000",
          borderBottomWidth: 1,
          marginBottom: 36
        },
        btnContainer: {
          backgroundColor: "white",
          marginTop: 12
        }
      });
    return <S.Container >
                <InputRegister border={false} placeholder="Nome Completo" label="Nome"  name="nome" setUser={setUser} />
                <InputRegister border={false} placeholder="Informe seu email" label="Email"  name="email" setUser={setUser} />
                <InputData label="Data de Manuntenção" name="dia_nascimento" setUser={setUser} />
            <S.Button segundaParte={segundaParte} onPress={() => navigation.navigate('ManutencaoAgendada')} >
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
    </S.Container>
}
