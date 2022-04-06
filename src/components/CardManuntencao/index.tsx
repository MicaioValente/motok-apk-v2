import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { deg } from 'react-native-linear-gradient-degree';
import * as S from './styles';


const CardManuntencao = () => {
    return (<S.Container>
            <S.Content>
                <S.ContainerIcon>
                    <S.Barras />
                </S.ContainerIcon>
                <S.Text>Precisa de ajuda sobre manutenções? Ligue para nossa oficina credenciada ou faça o agendamento abaixo.</S.Text>


                <S.ContainerTextNumber>
                    <S.TextBoldNumber>{'(00) 3333-3333'}</S.TextBoldNumber>
                    <S.ContainerIconNumber>
                        <S.Copiar />
                    </S.ContainerIconNumber>
                </S.ContainerTextNumber>

                <S.ContainerText>
                    <S.Text>Próxima Manutenção</S.Text>
                    <S.TextBold>01/02/2022</S.TextBold>
                </S.ContainerText>
                <S.ContainerText>
                    <S.Text>Dia para retirada</S.Text>
                    <S.TextBold>15/02/2022</S.TextBold>
                </S.ContainerText>
                <S.ContainerBoleto>
                    <S.TitleButton>solicitar nova manutenção</S.TitleButton>
                </S.ContainerBoleto>    

            </S.Content>
        </S.Container>)
}

export default CardManuntencao;