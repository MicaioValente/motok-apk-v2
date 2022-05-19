import React, { useEffect, useState } from 'react';
import * as S from './styles'
import { useNavigation } from '@react-navigation/native';
import ContainerLoginCap from '../../components/ContainerLoginCap'
import ContainerLoginBike from '../../components/ContainerLoginBike'
import CarroselPlanos from '../../components/CarroselPlanos'
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../service/api';
import { BackHandler } from 'react-native'
import ModalAlert from '../../components/ModalAlertVersion';
import ModalComponent from '../../components/Modal';
import { URL } from '../../service/url';
const ShowPlans = ({route}: any) => {
    const navigation = useNavigation();
    const [teste, setTeste] = useState(true)
    const [ modal, setModal] = useState(false)
    const [ version, setVersion ] = useState<number>(1)
    const [ modalVersion, setModalVersion] = useState(false)

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
      //   useEffect(() => {
      //     const versao = 22
      //     const checkVersion = async () => {
      //         await api.get(`appversions/${1}`)
      //           .then(async response => {
      //               console.log(response.data.version  == versao)
      //             setVersion(response.data.version)
      //             if(response.data.version == versao){
      //                 return
      //             }else{  
      //               setModal(true)
  
      //             }
  
      //           }).catch(function (error) {
      //             console.log(999999, error)
  
      //           });
      //         }
      //         checkVersion();
      // }, []);
    useEffect(() => {
        const versao = 22
        const checkVersion = async () => {
            await api.get(`appversions/${1}`)
              .then(async response => {
                console.log('responseeee', response.data.version)
                console.log(1, parseInt(response.data.version) == versao)
                if(response.data.version == versao){
                    return
                }else{  
                  setModalVersion(true)

                }

              }).catch(function (error) {
                console.log(999999, error)

              });
            }
            checkVersion();
    }, []);

    return (
          <>
                <ModalAlert modal={modalVersion} setModal={setModalVersion} text={`Você precisa atulizar o app`}/>

            <S.Container>
                {/* <ModalAlert modal={modal} setModal={setModal} text={'Você precisa atulizar o app'}/> */}
                <ContainerLoginCap route={route} navigation={navigation}/>
                <ContainerLoginBike route={route} navigation={navigation}/>
                <S.Text>planos disponíveis</S.Text>
                <CarroselPlanos home={false} route={route} navigation={navigation}/>
            </S.Container>
            {
              URL === 'https://apimotok.workdb.com.br/api/' &&
            <ModalComponent modalVisible={teste} setModalVisible={setTeste}>
              <S.TextContainerLeft>Esta é versão e apenas para testes</S.TextContainerLeft>
              <S.TextContainerLeft onPress={() => setTeste(!teste)} style={{ marginLeft: 'auto',marginTop: -20, color: '#F14902'}}>OK!</S.TextContainerLeft>
            </ModalComponent>
            }
          </>
        )

}

export default ShowPlans;