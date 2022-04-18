import React, { useEffect } from 'react';
import { CardProps } from '../CardPerfil';
import * as S from './styles';

const CardSemPlano = ({navigation, user}: CardProps) => {

   
    
    return (
        <S.Container>
            <S.Content>
                <S.ContianerStatus color={'#090'}>
                    <S.StatusReprovado >Plano em Análise</S.StatusReprovado>
                    <S.IconClose />
                </S.ContianerStatus>  
                <S.StatusTextContainer >
                    <S.Dot />
                    <S.StatusText>Você já adquiriu um plano</S.StatusText>
                </S.StatusTextContainer>  
                <S.StatusTextContainer >
                    <S.Dot />
                    <S.StatusText>Venha ate a motok e retire sua Motok</S.StatusText>
                </S.StatusTextContainer> 
                <S.StatusTextContainer >
                    <S.Dot />
                    <S.StatusText>R. Dr. Alexandre Gutierrez - Água Verde, Curitiba - PR, 81240-030</S.StatusText>
                </S.StatusTextContainer> 
                {/* <S.ContainerBottom>
                    <S.TitleButton>Corrigir Cadastro</S.TitleButton>
                </S.ContainerBottom>  */}
            </S.Content>
        </S.Container>)
}

export default CardSemPlano;