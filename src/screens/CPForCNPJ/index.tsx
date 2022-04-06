import React from 'react';
import * as S from './styles'
import CounterCPForCNPJ from '../../components/CPForCNPJ'
import { deg } from 'react-native-linear-gradient-degree';
import { useNavigation } from '@react-navigation/native';
import {LinearGradient} from 'expo-linear-gradient';

export default function CPForCNPJ() {
    const navigation = useNavigation()

    return (
        <S.Content>
            <CounterCPForCNPJ />
            <S.Button onPress={() => navigation.navigate('RegisterCPF')}>
                <LinearGradient
                    colors={["#FE1D16", "#FD3C14", "#FA7311"]}
                    locations={[0.06, 0.26, 0.92]}  {...deg(68)}
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10
                    }}>
                    <S.TextButton>CPF</S.TextButton>
                </LinearGradient>
            </S.Button>
            <S.Button onPress={() => navigation.navigate('RegisterCNPJ')}>
                <LinearGradient
                    colors={["#FE1D16", "#FD3C14", "#FA7311"]}
                    locations={[0.06, 0.26, 0.92]}  {...deg(68)}
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10
                    }}>
                    <S.TextButton>CNPJ</S.TextButton>
                </LinearGradient>
            </S.Button>
        </S.Content>
    )
}
