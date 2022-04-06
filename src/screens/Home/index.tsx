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


const Home: React.FC = () => {
    const [modalNotificacoes, setModalVisible] = useState(false)
    const [ user, setUser] = useState<User>({} as User)
    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('user');
            if(token){
                setUser(JSON.parse(token))

            }
        }
        checkToken();
    }, []);
    
    return (<>
        <ModalNotificacoes modalVisible={modalNotificacoes} setModalVisible={setModalVisible} idCliente={10} ></ModalNotificacoes>
            <S.Scroll>
                <S.Container>
                    <CardPagamento user={user} modalVisible={modalNotificacoes} setModalVisible={setModalVisible}/>
                    {user.planoId ? 
                    (
                        <>
                            {/* <CardBoleto status="disponivel"/>
                            <CardPlano />
                            <CardStatusCadastro user={user}/>
                            <ProximaPage rota='home' title='Alterar Plano' BGcolor='rgba(72, 55, 46, 0.6)' color='rgba(241, 73, 2, 1)'/>
                            <ProximaPage  rota='home' title='Cancelar Plano' BGcolor='rgba(72, 46, 46, 0.6)' color='rgba(220, 38, 38, 1)'/> */}
                        </>
                    ):(
                        <>
                        <CardSemPlano user={user} />
                        <CarroselPlanos />
                        </>
                    )}
                    
                </S.Container>
            </S.Scroll>
    </>
    )
}

export default Home