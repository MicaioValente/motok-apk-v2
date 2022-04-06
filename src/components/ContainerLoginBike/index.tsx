import React from 'react';
import * as S from './styles';
import { deg } from 'react-native-linear-gradient-degree';

const CardRegisterCR = ({route, navigation}: any) => {
    return (
        <S.Container>
            <S.Imagem source={require('../../assets/moto2.png')} />

            <S.ContainerDescription>
                <S.Text>Quer ser <S.TextBold>MOTOK?</S.TextBold></S.Text>
                <S.Text>Faça já seu cadastro.</S.Text>
            </S.ContainerDescription>

            <S.ContainerArrow  onPress={() => navigation.navigate('Register')}>
                <S.ContainerLinearGradient
                    colors={["#FE1D16", "#FD3C14", "#FA7311"]}
                    locations={[0.06, 0.26, 0.92]}  {...deg(68)}
                    style={{ flex: 1, justifyContent: "center", alignItems: "center", borderRadius: 10 }} >

                    <S.Icon name="arrow-right" size={35} color="#1B191A" />
                </S.ContainerLinearGradient>
            </S.ContainerArrow>
        </S.Container>
        )
}

export default CardRegisterCR;