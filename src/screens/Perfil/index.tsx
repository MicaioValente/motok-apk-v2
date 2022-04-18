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


const Perfil: React.FC = () => {
    const [ user, setUser] = useState<User>({} as User)
    const [ planoComprado, setPlanoComprado] = useState<any>()
    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('user');
            const userId = JSON.parse(token) 
            async function getUserById(){
                console.log(555, userId)
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
                console.log('seto')
                setPlanoComprado(planJson)
            }
        }
        getPlano()
    }, [])
    return (
        <S.Scroll>
            <S.Container>
                <CardPerfil user={user}/>
                
                {user?.aprovacaoId === 3 &&
                    <CardStatusCadastro user={user}/>
                }

                    {planoComprado?.item.idPlanos &&
                        <CardRetireSuaMotok user={user} /> 
                    }
                {user?.planoId != null ? 
                    <>
                        <CardSinistro />
                        <CardManuntencao/>
                    </> 
                    : !planoComprado?.item.idPlanos ?
                    <>
                        <CardSemPlano user={user}/>
                    </>
                    : null
                 }
                <View style={{marginTop: user?.planoId != null ? 20 : '100%'}}>
                    <ProximaPage rota='home' title='Alterar Dados Cadastrais' BGcolor='rgba(72, 55, 46, 0.6)' color='rgba(241, 73, 2, 1)'/>
                    <ProximaPage  rota='SignIn' title='Sair da Conta' BGcolor='rgba(72, 46, 46, 0.6)' color='rgba(220, 38, 38, 1)' Icon={SairAppSVG}/> 
                </View>
            </S.Container>
        </S.Scroll>
    )
}

export default Perfil