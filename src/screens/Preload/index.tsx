import React, { useEffect } from 'react';
import * as S from './styles'
import {LinearGradient} from 'expo-linear-gradient';
import { deg } from 'react-native-linear-gradient-degree';
import Logo from '../../assets/logo.svg';
import SubTitle from '../../components/SubText'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../service/api';

export type User = {
    nomeCliente: string
    telefoneCliente: string
    token: string
    planoId: number
    idCliente: number
    aprovacaoId: number
    ativo: number
} 

const Preload = () => {
    const navigation = useNavigation();
    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('user');
            if(token && JSON.parse(token).token){
                navigation.navigate('SignIn');
            }else{
                navigation.navigate('Presentation');
            }
            await api.get(`Planos/ativos`)
              .then(async response => {
                await AsyncStorage.setItem('planos', JSON.stringify(response.data))
              }).catch(function (error) {
              });
            }
        checkToken();
    }, []);

    return <LinearGradient
        colors={["#FE1D16", "#FD3C14", "#FA7311"]}
        locations={[0.06, 0.26, 0.92]}  {...deg(68)}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
        <S.Container>
            <S.containerImage>
                <Logo />
            </S.containerImage>
            <S.ContainerText>
                <S.Title>MOTOK</S.Title>
                <S.SubTitle>MOTO RENTAL</S.SubTitle>
                {/* <S.SubTitle>MOTO RENTAL</S.SubTitle> */}
            </S.ContainerText>
        </S.Container>
        <SubTitle color={"#1B191A"} />
    </LinearGradient>
}

export default Preload;
