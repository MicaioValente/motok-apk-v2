import React from 'react';
import * as S from './styles';
import {LinearGradient} from 'expo-linear-gradient';

import { deg } from 'react-native-linear-gradient-degree';
import Lixeira from '../../assets/lixeira.svg';
import Residencia from '../../assets/residencia.svg'

interface cardMoto {
    nameBike: string
    image: string
    description: string[]
}

let FakeArrai = ['Menor consumo de combustível e maior potência.','Motor 160cc - gasolina', 'Freio CBS', 'Painel digital.']

const CardMoto = ({nameBike, image, description}: cardMoto) => {
    return (
        <S.Container>
            <S.ContainerMoto>
                <S.Title>honda cg 160 start 2022</S.Title>
                <S.MotoImage
                    source={require('../../assets/moto.png')}
                />
                <S.Aviso>Imagem meramente ilustrativa.</S.Aviso>
            </S.ContainerMoto>
            <S.ContainerDescription>
                {FakeArrai.map((item, index) => (
                    <S.Description key={index}>{item}</S.Description>
                ))}
            </S.ContainerDescription>


            
        </S.Container>)
}

export default CardMoto;