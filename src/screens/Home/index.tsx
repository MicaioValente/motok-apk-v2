import React, { useEffect, useState } from 'react';
import * as S from './styles'
import CardPagamento from '../../components/CardPagamento'
import CardBoleto from '../../components/CardBoleto';
import CardPlano from '../../components/CardPlano';
import CardStatusCadastro from '../../components/CardStatusCadastro';
import ProximaPage from '../../components/ProximaPage';
import ModalNotificacoes from '../../components/ModalNotificacoes'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../Preload';
import CarroselPlanos from '../../components/CarroselPlanos';
import CardSemPlano from '../../components/CardSemPlano';
import CardRetireSuaMotok from '../../components/CardRetireSuaMotok';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import api from '../../service/api';


const Home: React.FC = () => {
    const [modalNotificacoes, setModalVisible] = useState(false)
    const [ user, setUser] = useState<User>({} as User)
    const [ planoComprado, setPlanoComprado] = useState<any>()
    console.log(user)
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
                setPlanoComprado(planJson)
            }
        }
        getPlano()
    }, [])
    return (<>
        <ModalNotificacoes modalVisible={modalNotificacoes} setModalVisible={setModalVisible} idCliente={10} ></ModalNotificacoes>
            <S.Scroll>
                <S.Container>
                    <CardPagamento user={user} modalVisible={modalNotificacoes} setModalVisible={setModalVisible}/>
                    {user.planoId ? 
                        (
                            <>
                                <CardBoleto status="disponivel"/>
                                <CardPlano />
                                <CardStatusCadastro user={user}/>
                                <ProximaPage rota='home' title='Alterar Plano' BGcolor='rgba(72, 55, 46, 0.6)' color='rgba(241, 73, 2, 1)'/>
                                <ProximaPage  rota='home' title='Cancelar Plano' BGcolor='rgba(72, 46, 46, 0.6)' color='rgba(220, 38, 38, 1)'/>
                            </>
                        ): user.aprovacaoId === 3 ?
                            <CardStatusCadastro user={user}/>
                        :
                        <>
                        {planoComprado?.item.idPlanos ?
                            <CardRetireSuaMotok user={user} />
                        : 
                        !planoComprado?.idPlanos ?
                        <>
                            <CardSemPlano user={user} />
                            <CarroselPlanos home={true}/>
                        </>
                        : null
                        }
                        </>
                    }
                </S.Container>
            </S.Scroll>
    </>
    )
}

export default Home