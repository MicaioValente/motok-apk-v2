import React, { useState } from 'react';
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

const SignIn: React.FC = () => {
    const navigation = useNavigation();
    const [userLogin, setUserLogin] = useState({})
    const [modal, setModal] = useState(false)


    function setUser(nome: string, value: any){
        setUserLogin({
            ...userLogin,
                [nome]: value    
        })

    }
    async function loginUser() {
        await api.post('login', userLogin)
        .then(async function (response) {
            await AsyncStorage.setItem('user', JSON.stringify(response.data))
            navigation.navigate('Home', { user: response.data})

        })
        .catch(function (error) {
            setModal(!modal)
        });
        
        
    }
    
    return (
        <>
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
            </S.Content>
            <SubTitle color='#F14902' />
        </S.Container>
        <ModalComponent modalVisible={modal} setModalVisible={setModal}>
            <S.TextContainerLeft>Login ou Senha estão errados</S.TextContainerLeft>
            <S.TextContainerLeft onPress={() => setModal(!modal)} style={{ marginLeft: 'auto', marginTop: 30, color: '#F14902'}}>OK!</S.TextContainerLeft>
        </ModalComponent>
        </>
    )
    

}

export default SignIn;