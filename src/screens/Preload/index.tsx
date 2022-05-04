import React, { useEffect } from 'react';
import * as S from './styles'
import {LinearGradient} from 'expo-linear-gradient';
import { deg } from 'react-native-linear-gradient-degree';
import Logo from '../../assets/logo.svg';
import SubTitle from '../../components/SubText'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../service/api';
import * as Updates from 'expo-updates';

export type User = {
    nomeCliente: string
    telefoneCliente: string
    token: string
    planoId: number
    idCliente: number
    aprovacaoId: number
    ativo: number
    veiculoId: number
} 

const Preload = () => {
    const navigation = useNavigation<any>();
    useEffect(() => {
        // const triggerUpdateCheck = async () => {
        //     try{
        //         const update = await Updates.checkForUpdateAsync()
        //         if(update.isAvailable){
        //             await Updates.fetchUpdateAsync()
        //             await Updates.reloadAsync()
        //             Alert.alert('Atualização', 'Seu Aplicativo está desatualizado')
        //         }else{
        //             console.log('else do update')
        //         }
        //     } catch (error) {
        //         console.log('error check update', error)
        //     }
        // }
        // triggerUpdateCheck()

        reactToUpdates()
        
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('user');
            if(token && JSON.parse(token).token){
                navigation.navigate('ShowPlans');
            }else{
                navigation.navigate('Presentation');
            }
            await api.get(`Planos/ativos`)
              .then(async response => {
                await AsyncStorage.setItem('planos', JSON.stringify(response.data))
              }).catch(function (error) {
              });
            }
        checkToken();
    }, []);

    const reactToUpdates = async () => {
        Updates.addListener((event: any) => {
            if(event.type === Updates.UpdateEventType.UPDATE_AVAILABLE){
                Updates.reloadAsync()
            }
        })
    }

    // useEffect(() => {
    //     registerForPushNotification().then(token=>console.log(1, token));
    // }, [])
    
    // async function registerForPushNotification(){
    //     const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    //     if (status != 'granted') {
    //         const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    //         // finalStatus = status;
    //     }
    //     if (status !== 'granted') {
    //         alert('Failed to get push token for push notification!');
    //         return;
    //     }
    //     const token = (await Notifications.getExpoPushTokenAsync()).data;
    //     return token
    // }



    // useEffect(() =>{
    //     getTokenNotification()
    // }, [])
    // const getTokenNotification = async () => {
    //     const status = await messaging().requestPermission()

    //     const enable = status === 1 || status === 2

    //     if(enable) {
    //         let tokenFcm = await messaging().getToken()
    //         console.log('token ', tokenFcm)

    //         messaging().onTokenRefresh(newToken => {
    //             console.log('novo token ', newToken)
    //         })

    //         const unsubscribe = messaging().onMessage(async remoteMessage => {
    //             Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    //           });
          
    //           return unsubscribe;
    //     }
    // }

    
    return (
            <LinearGradient
                colors={["#FE1D16", "#FD3C14", "#FA7311"]}
                locations={[0.06, 0.26, 0.92]}  {...deg(68)}
                style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
                <S.Container>
                    <S.containerImage>
                        <Logo />
                    </S.containerImage>
                    <S.ContainerText>
                        <S.Title>MOTOK</S.Title>
                        <S.SubTitle>MOTO RENTAL</S.SubTitle>
                        {/* <S.SubTitle>MOTO RENTAL</S.SubTitle> */}
                    </S.ContainerText>
                </S.Container>
                <SubTitle color={"#1B191A"} />
            </LinearGradient>
    )

}

export default Preload;
