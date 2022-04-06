import React from 'react';
import * as S from './styles';
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { deg } from 'react-native-linear-gradient-degree';
import { RFValue } from 'react-native-responsive-fontsize';


//  voce receberá uma notificação no aplicativo.

export default function ManutencaoAgendada() {
    const navigation = useNavigation()
    return (
        <S.Container>
            <S.Icon />
            <S.Title>MANUTENÇÃO AGENDADA!</S.Title>
            <S.ContainerSubTiitle>
                <S.SubTitle>Esteja presente em nossa sede no dia</S.SubTitle>
                <S.SubTitle>definido para enviar sua moto para</S.SubTitle>
                <S.SubTitle>manutenção.</S.SubTitle>
                <S.SubTitle>Quando a manutenção estiver concluída</S.SubTitle>
                <S.SubTitle>receberá uma notificação no</S.SubTitle>
                <S.SubTitle>aplicativo</S.SubTitle>
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
                        <S.TextButton >ir para o perfil</S.TextButton>
                    </LinearGradient>
                </S.Button>
        </S.Container>
    )}