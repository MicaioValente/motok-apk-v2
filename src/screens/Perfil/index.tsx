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




const Perfil: React.FC = () => {
    const [ user, setUser] = useState<User>({} as User)
    useEffect(() => {
        const getUser = async () => {
            const token = await AsyncStorage.getItem('user');
            if(token){
                setUser(JSON.parse(token))
            }
        }
        getUser();
    }, []);
   
    
    return (
        <S.Scroll>
            <S.Container>
                <CardPerfil user={user}/>
                
                {user?.aprovacaoId === 3 &&
                    <CardStatusCadastro user={user}/>
                }
                 {user?.planoId != null ? 
                    <>
                        <CardSinistro />
                        <CardManuntencao/>
                    </> 
                    :
                    <>
                        <CardSemPlano user={user}/>
                    </>
                 }
                <View style={{marginTop: user?.planoId != null ? 20 : '100%'}}>
                    <ProximaPage rota='home' title='Alterar Dados Cadastrais' BGcolor='rgba(72, 55, 46, 0.6)' color='rgba(241, 73, 2, 1)'/>
                    <ProximaPage  rota='home' title='Sair da Conta' BGcolor='rgba(72, 46, 46, 0.6)' color='rgba(220, 38, 38, 1)' Icon={SairAppSVG}/> 
                </View>
            </S.Container>
        </S.Scroll>
    )
}

export default Perfil