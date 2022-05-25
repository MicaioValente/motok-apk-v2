import React, { useEffect, useState, useCallback } from 'react';
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
import { UserGetById } from '../../components/CardPlano/types';
import { View, RefreshControl} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Home: React.FC = () => {
    const [modalNotificacoes, setModalVisible] = useState(false)
    const [ user, setUser] = useState<UserGetById>({} as UserGetById)
    const [ planoComprado, setPlanoComprado] = useState<any>()
    const [refreshing, setRefreshing] = useState(false);
    const [trigger, setTrigger] = useState(false)


    useEffect(() => {
        console.log(1111111)

        const checkToken = async () => {

        console.log(22222)
            


            const token = await AsyncStorage.getItem('user');
            const {idCliente} = JSON.parse(token) 
            const user = JSON.parse(token) 

            async function getUserById(){
                api.get(`clientes/${idCliente}`).then(function (response ){
                    // api.get(`clientes/${userId.idCliente}`).then(function (response ){
                    delete response.data.arquivoBase64DocCarteira
                    delete response.data.arquivoBase64DocResidencia

                    setUser(response.data)
                    setRefreshing(false);
                    
                }).catch(function (error){
                    console.log(error)
                    setRefreshing(false);

                })
               
            }
            getUserById()
        }
        checkToken();
    }, [trigger]);

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

    function userReprovado(aprovacaoId: number){
        if(aprovacaoId === 2){
            return true
        }
    }

    function userEmAnalise(aprovacaoId: number){
        if(aprovacaoId === 3){
            return true
        }
    }

    function userAprovado(aprovacaoId: number){
        if(aprovacaoId === 1){
            return true
        }
    }

    function userTemMotoCadastrada(){
        return false
    }

    const onRefresh = () => {
        setRefreshing(true);
        setTrigger(!trigger);

    };

    return (<>
        <ModalNotificacoes modalVisible={modalNotificacoes} setModalVisible={setModalVisible} idCliente={10} ></ModalNotificacoes>
            <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
            <S.Scroll
                refreshControl={<RefreshControl progressBackgroundColor={'#fff'}refreshing={refreshing} onRefresh={onRefresh} />}
            >
                <S.Container>
                    <CardPagamento user={user} modalVisible={modalNotificacoes} setModalVisible={setModalVisible}/>
                    {userTemMotoCadastrada() ? 
                        null
                        : userReprovado(user.aprovacaoId) ? 
                            <CardStatusCadastro user={user} reprovado={true}/>
                            :
                                userEmAnalise(user.aprovacaoId) ?
                                    <CardStatusCadastro analise={true}  user={user}/>
                                    : userAprovado(user.aprovacaoId) ?
                                        user.planoId ? 
                                            (
                                                <>
                                                    <CardBoleto idUser={user.idCliente}/>
                                                    <CardPlano  user={user} />
                                                    <CardStatusCadastro user={user}/>
                                                    <View style={{marginTop: user?.planoId != null ? 18 : '100%'}}>
                                                        <ProximaPage rota='home' title='Alterar Plano' BGcolor='rgba(72, 55, 46, 0.6)' color='rgba(241, 73, 2, 1)'/>
                                                        <ProximaPage  rota='home' title='Cancelar Plano' BGcolor='rgba(72, 46, 46, 0.6)' color='rgba(220, 38, 38, 1)'/>
                                                    </View>
                                                </>
                                            )
                                        :planoComprado?.idPlanos ?
                                            <CardRetireSuaMotok user={user} />
                                        :!planoComprado?.idPlanos ? 
                                            <>
                                                <CardSemPlano user={user} />
                                                <CarroselPlanos home={true}/>
                                            </>
                                        : null 
                        : null
                    }
                    <View style={{height: 30, width: 34}}/>
                </S.Container>
            </S.Scroll>
            </SafeAreaView>
    </>
    )
}

export default Home
