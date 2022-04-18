import { useNavigation } from '@react-navigation/native';
import React from 'react';
import * as S from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ProximaPage = {
    rota: string
    title: string
    color: string
    BGcolor: string
    Icon?: any
}

const ProximaPage = ({rota, title, color, BGcolor, Icon}:ProximaPage ) => {
    const navigation = useNavigation()

    function sairOuRedirect() {
        if(rota === 'SignIn'){
            sair()
        }
        navigation.navigate(rota)
    }
    async function sair (){
        await AsyncStorage.removeItem('user')
        await AsyncStorage.removeItem('comprado')

        navigation.navigate(rota)

    }
    return (
        <S.Container  BGcolor={BGcolor} onPress={() => sairOuRedirect()}>
            <S.TextBold color={color}>{title}</S.TextBold>
            {Icon && 
                <Icon/>
            }
            {!Icon && 
                <S.SetaEsquerda />
            }
        </S.Container>
    )
}

export default ProximaPage;