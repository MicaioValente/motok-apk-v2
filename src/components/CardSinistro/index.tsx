import React from 'react';
import * as S from './styles';

const CardPlano: React.FC = () => {
    return (
        <S.Container>

            <S.Content>
                <S.ContainerIcon>
                    <S.Moto />
                </S.ContainerIcon>


                <S.ContainerText>
                    <S.Text>Placa</S.Text>
                    <S.TextBold>MKZ 9191</S.TextBold>
                </S.ContainerText>
                <S.ContainerText>
                    <S.Text>10</S.Text>
                    <S.TextBold>1995487</S.TextBold>
                </S.ContainerText>
            </S.Content>
        </S.Container>)
}

export default CardPlano;