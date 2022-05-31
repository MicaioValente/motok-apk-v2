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
    const [ modalVersion, setModalVersion] = useState(false)

    useEffect(() => {
        const versao = 27
        const checkVersion = async () => {
            await api.get(`appversions/${1}`)
              .then(async response => {
                if(response.data.version == versao){
                    return
                }else{  
                  setModalVersion(true)

                }

              }).catch(function (error) {

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