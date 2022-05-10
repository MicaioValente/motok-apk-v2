import React, { useEffect, useState } from 'react';
import SubTitle from '../../components/SubText'
import * as S from './styles'
import Logo from '../../assets/logoCor.svg'
import Input from '../../components/Inputs/Input'
import {LinearGradient} from 'expo-linear-gradient';
import { deg } from 'react-native-linear-gradient-degree';
import { useNavigation } from '@react-navigation/native';
import api from '../../service/api';
import ModalComponent from '../../components/Modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PaymentCoordinator from '../../service/payment'
import Loading from '../../components/Loading';
import axios from 'axios';
import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native'
const SignIn: React.FC = () => {
    const navigation = useNavigation<any>();
    const [userLogin, setUserLogin] = useState({})
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [token, setToken] = useState<any>()

    function setUser(nome: string, value: any){
        setUserLogin({
            ...userLogin,
                [nome]: value    
        })
    }

    async function loginUser() {
        setLoading(true)
        // PaymentCoordinator.start(obj)
        // return
        await api.post('login', userLogin)
            .then(async function (response) {
                console.log(response.data.idCliente)
            setLoading(false)
            await AsyncStorage.setItem('user', JSON.stringify(response.data))
            await postTokenAndUser(response.data.idCliente)
            navigation.navigate('Home', { user: response.data})

        })
        .catch(function (error) {
            setLoading(false)
            setModal(!modal)
        });
    }
    
    async function postTokenAndUser(id:number) {
        api.put(`Clientes/alterarIdFirebase/${token}/cliente/${id}`).then(function (response) {
            console.log(response)
        }).catch(function (error) {
            console.log(error)
        })
    }

    useEffect(() =>{
        getTokenNotification()
    }, [])
    const getTokenNotification = async () => {
        const status = await messaging().requestPermission()

        const enable = status === 1 || status === 2

        if(enable) {
            let tokenFcm = await messaging().getToken()
            console.log('token ', tokenFcm)
            setToken(tokenFcm)

            messaging().onTokenRefresh(newToken => {
                console.log('newToken ', newToken)
                setToken(tokenFcm)
            })

            // const unsubscribe = messaging().onMessage(async remoteMessage => {
            //     Alert.alert('Uma Nova chave Unica new FCM message arrived!', JSON.stringify(remoteMessage));
            //   });
          
            //   return unsubscribe;
        }
    }
    return (
        <>
        <Loading loading={loading} setLoading={setLoading} mensage='Entrando' />
        <S.Container>
            <S.Content>
                <S.containerImage>
                    <Logo />
                </S.containerImage>
                <S.ContainerText>
                    <S.Title>MOTOK</S.Title>
                    <S.SubTitle>MOTO RENTAL</S.SubTitle>
                </S.ContainerText>
                <S.ContainerForm>
                    <Input nome={'cpf'} setUser={setUser} iconLeft='account-outline' iconRight='close-circle-outline' placeholder='CPF ou CNPJ' />
                    <Input nome={'senha'} setUser={setUser} iconLeft='lock-open-outline' iconRight='eye' placeholder='Senha' />
                </S.ContainerForm>
                <S.ContainerTextBottom>
                    <S.ContainerLeft>
                        <S.TextContainerLeft>acessar conta</S.TextContainerLeft>
                    </S.ContainerLeft>
                    <S.ContainerArrow onPress={() => loginUser()}>
                        <LinearGradient
                            colors={["#FE1D16", "#FD3C14", "#FA7311"]}
                            locations={[0.06, 0.26, 0.92]}  {...deg(68)}
                            style={{ flex: 1, justifyContent: "center", alignItems: "center", borderRadius: 10 }} >
                            <S.Icon name="arrow-right" size={40} color="#1B191A" />
                        </LinearGradient>
                    </S.ContainerArrow>
                </S.ContainerTextBottom>
                {/* <S.ContainerLeft>
                    <S.TextContainerLeft>Cadastra-se</S.TextContainerLeft>
                </S.ContainerLeft> */}

            </S.Content>
            <SubTitle color='#F14902' />
        </S.Container>
        <ModalComponent modalVisible={modal} setModalVisible={setModal}>
            <S.TextContainerLeft>CPF ou Senha estão errados</S.TextContainerLeft>
            <S.TextContainerLeft onPress={() => setModal(!modal)} style={{ marginLeft: 'auto', marginTop: 30, color: '#F14902'}}>OK!</S.TextContainerLeft>
        </ModalComponent>
        </>
    )
    

}

export default SignIn;