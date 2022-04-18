import React from 'react';
import * as S from './styles';
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { deg } from 'react-native-linear-gradient-degree';
import { RFValue } from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
//  voce receberá uma notificação no aplicativo.

export default function PagamentoEmAnalise(item: any) {
    const navigation = useNavigation()
    async function setPagamentoAndRedirect() {
        await AsyncStorage.setItem('comprado', JSON.stringify(item))
            navigation.reset({ routes: [{ name: 'Home' }] })
        
    }


    return (
        <S.Container>
            <S.Icon />
            <S.Title>PAGAMENTO EM ANÁLISE!</S.Title>
            <S.ContainerSubTiitle>
                {/* <S.SubTitle>Assim que o pagamento do caução for</S.SubTitle> */}
                {/* <S.SubTitle>confirmado você receberá uma</S.SubTitle>
                <S.SubTitle>notificação no aplicativo.</S.SubTitle> */}
                {/* <S.SubTitle>Enquanto isso, você pode acompanhar no</S.SubTitle>
                <S.SubTitle>seu Plano.</S.SubTitle> */}
                <S.SubTitle>O plano foi cadastrado com sucesso!</S.SubTitle>
                <S.SubTitle>é so levar os comprovante até a motok</S.SubTitle>
                <S.SubTitle>e retirar sua motok</S.SubTitle>


            </S.ContainerSubTiitle>
            <S.Button onPress={async() => await setPagamentoAndRedirect()}>
                    <LinearGradient
                        colors={["#FE1D16", "#FD3C14", "#FA7311"]}
                        locations={[0.06, 0.26, 0.92]}  {...deg(68)}
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: RFValue(10)
                        }}>
                        <S.TextButton >ir para o Perfil</S.TextButton>
                    </LinearGradient>
                </S.Button>
        </S.Container>
    )}