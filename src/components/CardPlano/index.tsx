import React from 'react';
import * as S from './styles';

const CardSinistro: React.FC = () => {
    return (
        <S.Container>
            <S.Content>
                <S.ContainerIcon>
                    <S.Plano />
                </S.ContainerIcon>


                <S.ContainerText>
                    <S.Text>Plano Atual</S.Text>
                    <S.TextBold>Mensal</S.TextBold>
                </S.ContainerText>
                <S.ContainerText>
                    <S.Text>Valor Diário</S.Text>
                    <S.TextBold>R$ 50,00</S.TextBold>
                </S.ContainerText>
                <S.ContainerText>
                    <S.Text>Motos comtratadas</S.Text>
                    <S.TextBold>1</S.TextBold>
                </S.ContainerText>

                <S.ContainerBoleto>
                    <S.TitleBoleto>Boleto disponível</S.TitleBoleto>
                        <S.DiasDePlano>1 Mês e 24 Dias</S.DiasDePlano>
                </S.ContainerBoleto>    

            </S.Content>
        </S.Container>)
}

export default CardSinistro;