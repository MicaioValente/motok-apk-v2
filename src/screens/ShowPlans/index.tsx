import React from 'react';
import * as S from './styles'
import { useNavigation } from '@react-navigation/native';
import ContainerLoginCap from '../../components/ContainerLoginCap'
import ContainerLoginBike from '../../components/ContainerLoginBike'
import CarroselPlanos from '../../components/CarroselPlanos'
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../service/api';

const ShowPlans = ({route}: any) => {
    const navigation = useNavigation();
    
    // async function getNotificacoes() {
    //     const token = await AsyncStorage.getItem('apiToken')
        // var config = {
        //     method: 'get',
        //     url: 'https://api.motok.com.br/v2/planos/listar/',
        //     headers: { 
        //       'Authorization': 'Bearer dG9rZW5fX193b3JrZGJfX19tb3Rva19fX2FjZXNzb19fX3BhcmFfX19vX19fYXBsaWNhdGl2bw==', 
        //       'Content-Type': 'application/x-www-form-urlencoded'
        //     },
        //     data : data
        //   };

        // await api.get(`planos/listar`,config)
        //     .then(async function (response) {
        //     })
        //     .catch(function (error) {
        //     });
        // }
        // getNotificacoes()

    return (
            <S.Container>
                <ContainerLoginCap route={route} navigation={navigation}/>
                <ContainerLoginBike route={route} navigation={navigation}/>
                <S.Text>planos disponíveis</S.Text>
                <CarroselPlanos home={false} route={route} navigation={navigation}/>
            </S.Container>
        )

}

export default ShowPlans;