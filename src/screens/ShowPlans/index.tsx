import React, { useEffect, seEffect, useState } from 'react';
import * as S from './styles'
import { useNavigation } from '@react-navigation/native';
import ContainerLoginCap from '../../components/ContainerLoginCap'
import ContainerLoginBike from '../../components/ContainerLoginBike'
import CarroselPlanos from '../../components/CarroselPlanos'
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../service/api';
import { BackHandler } from 'react-native'
import ModalAlert from '../../components/ModalAlertVersion';
const ShowPlans = ({route}: any) => {
    const navigation = useNavigation();
    const [ modal, setModal] = useState(false)
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
        
    useEffect(() => {
        const versao = 1
        const checkVersion = async () => {
            await api.get(`appversions/${versao}`)
              .then(async response => {
                if(response.data.version == versao){
                    return
                }else{  
                  setModal(true)

                }

              }).catch(function (error) {
                console.log(999999, error)

              });
            }
            checkVersion();
    }, []);

    return (
            <S.Container>
                <ModalAlert modal={modal} setModal={setModal} text={'Você precisa atulizar o app'}/>
                <ContainerLoginCap route={route} navigation={navigation}/>
                <ContainerLoginBike route={route} navigation={navigation}/>
                <S.Text>planos disponíveis</S.Text>
                <CarroselPlanos home={false} route={route} navigation={navigation}/>
            </S.Container>
        )

}

export default ShowPlans;