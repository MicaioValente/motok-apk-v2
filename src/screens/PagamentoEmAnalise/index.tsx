import React from 'react';
import * as S from './styles';
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { deg } from 'react-native-linear-gradient-degree';
import { RFValue } from 'react-native-responsive-fontsize';
 
//  voce receberá uma notificação no aplicativo.

export default function PagamentoEmAnalise() {
    const navigation = useNavigation()
    return (
        <S.Container>
            <S.Icon />
            <S.Title>PAGAMENTO EM ANÁLISE!</S.Title>
            <S.ContainerSubTiitle>
                <S.SubTitle>Assim que o pagamento do caução for</S.SubTitle>
                <S.SubTitle>confirmado você receberá uma</S.SubTitle>
                <S.SubTitle>notificação no aplicativo.</S.SubTitle>
                <S.SubTitle>Enquanto isso, você pode acompanhar no</S.SubTitle>
                <S.SubTitle>seu Plano.</S.SubTitle>

            </S.ContainerSubTiitle>
            <S.Button onPress={() => navigation.navigate('Presentation')}>
                    <LinearGradient
                        colors={["#FE1D16", "#FD3C14", "#FA7311"]}
                        locations={[0.06, 0.26, 0.92]}  {...deg(68)}
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: RFValue(10)
                        }}>
                        <S.TextButton >ir para o plano</S.TextButton>
                    </LinearGradient>
                </S.Button>
        </S.Container>
    )}