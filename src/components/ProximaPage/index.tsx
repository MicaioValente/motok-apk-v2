import { useNavigation } from '@react-navigation/native';
import React from 'react';
import * as S from './styles';

type ProximaPage = {
    rota: string
    title: string
    color: string
    BGcolor: string
    Icon?: any
}

const ProximaPage = ({rota, title, color, BGcolor, Icon}:ProximaPage ) => {
    const navigation = useNavigation()
    return (
        <S.Container  BGcolor={BGcolor} onPress={() => navigation.navigate(rota)}>
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