import React, { useEffect, useState } from 'react';
import * as S from './styles'
import CardPerfil from '../../components/CardPerfil'
import CardManuntencao from '../../components/CardManuntencao';
import CardSinistro from '../../components/CardSinistro';
import CardStatusCadastro from '../../components/CardStatusCadastro';
import CardSemPlano from '../../components/CardSemPlano';
import ProximaPage from '../../components/ProximaPage';
import SairAppSVG from '../../assets/sairApp.svg'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../Preload';
import { View } from 'react-native';
import CardRetireSuaMotok from '../../components/CardRetireSuaMotok';
import api from '../../service/api';
import { UserGetById } from '../../components/CardPlano/types';
import CardManutencaoPendente from '../../components/CardManutencaoPendente';


type Perfil = {
    userUp: UserGetById
}
const Perfil = ({userUp} : Perfil) => {
    const [ user, setUser] = useState<UserGetById>({} as UserGetById)
    const [ planoComprado, setPlanoComprado] = useState<any>()
    const [ veiculoId, setVeiculoId] = useState<any>()

    useEffect(() => {
        const GetVeiculo = async() => {
            const token = await AsyncStorage.getItem('user');
            const { veiculoId } = JSON.parse(token) 
            setVeiculoId(veiculoId)
        }
        GetVeiculo()
    }, [])
    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('user');
            const userId = JSON.parse(token) 
            console.log(userId)
            async function getUserById(){
                api.get(`clientes/${userId.idCliente}`).then(function (response ){
                    delete response.data.arquivoBase64DocCarteira
                    delete response.data.arquivoBase64DocResidencia
                    setUser(response.data)
                    
                }).catch(function (error){
                    console.log(333, error)
                })
            }
            getUserById()
        }
        checkToken();
    }, []);

    useEffect(() => {
        async function getPlano() {
            const plano = await AsyncStorage.getItem('comprado')
            const planJson = JSON.parse(plano)
            if(planJson != null && planJson != undefined){
                setPlanoComprado(planJson)
            }
        }
        getPlano()
    }, [])

    function userEmAnalise(aprovacaoId: number){

        if(aprovacaoId === 3){
            return true
        }
    }
    function userReprovado(aprovacaoId: number){
        if(aprovacaoId === 2){
            return true
        }
    }

    return (
        <S.Scroll>
            <S.Container>
                <CardPerfil user={userUp}/>
                {userReprovado(user.aprovacaoId) ? 
                        <CardStatusCadastro user={user} reprovado={true}/>
                        :
                userEmAnalise(user?.aprovacaoId) ?
                    <CardStatusCadastro user={user}/> : null
                }

                    {planoComprado?.idPlanos &&
                        <CardRetireSuaMotok user={user} /> 
                    }
                {user?.planoId != null ? 
                    <>
                        <CardSinistro user={user} veiculoId={veiculoId}/>
                        <CardManutencaoPendente user={user} veiculoId={veiculoId}/>
                        <CardManuntencao user={user} veiculoId={veiculoId}/>
                    </> 
                    : !planoComprado?.idPlanos && userEmAnalise(user?.aprovacaoId)?
                    <>
                        <CardSemPlano user={user}/>
                    </>
                    : null
                 }
                 
                <View style={{marginTop: user?.planoId != null ? 20 : '100%'}}>
                    <ProximaPage rota='home' title='Alterar Dados Cadastrais' BGcolor='rgba(72, 55, 46, 0.6)' color='rgba(241, 73, 2, 1)'/>
                    <ProximaPage  rota='SignIn' title='Sair da Conta' BGcolor='rgba(72, 46, 46, 0.6)' color='rgba(220, 38, 38, 1)' Icon={SairAppSVG}/> 
                </View>
                <View style={{height: 30, width: 34}}/>

            </S.Container>
        </S.Scroll>
    )
}

export default Perfil