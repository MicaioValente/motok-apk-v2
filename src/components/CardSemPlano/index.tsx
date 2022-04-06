import React, { useEffect } from 'react';
import { CardProps } from '../CardPerfil';
import * as S from './styles';

const CardSemPlano = ({navigation, user}: CardProps) => {

   
    
    return (
        <S.Container>
            <S.Content>
                <S.ContianerStatus color={'#FBBF24'}>
                    <S.StatusReprovado >Sem plano</S.StatusReprovado>
                    <S.IconClose />
                </S.ContianerStatus>  
                <S.StatusTextContainer >
                    <S.Dot />
                    <S.StatusText>Você ainda não adquiriu nenhum plano</S.StatusText>
                </S.StatusTextContainer>  
                {/* <S.ContainerBottom>
                    <S.TitleButton>Corrigir Cadastro</S.TitleButton>
                </S.ContainerBottom>  */}
            </S.Content>
        </S.Container>)
}

export default CardSemPlano;