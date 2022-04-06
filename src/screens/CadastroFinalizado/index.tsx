import React from 'react';
import * as S from './styles';
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { deg } from 'react-native-linear-gradient-degree';
import { RFValue } from 'react-native-responsive-fontsize';

export default function CadastroFinalizado() {
    const navigation = useNavigation()
    return (
            <S.Container>
                <S.Icon />
                <S.Title>tudo pronto</S.Title>
                <S.ContainerSubTiitle>
                    <S.SubTitle>Suas informações serão analisadas pela</S.SubTitle>
                    <S.SubTitle>equipe.</S.SubTitle>
                    <S.SubTitle>Você pode acompanhar o status do seu</S.SubTitle>
                    <S.SubTitle>cadastro pelo seu perfil.</S.SubTitle>
                </S.ContainerSubTiitle>
                <S.Button onPress={() => navigation.navigate('SignIn')}>
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