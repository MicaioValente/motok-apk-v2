import React, { useEffect } from 'react';
import { CardProps } from '../CardPerfil';
import * as S from './styles';

const CardStatusCadastro = ({navigation, user}: CardProps) => {

   
    
    return (
        <S.Container>
            <S.Content>
                <S.ContianerStatus color={'#FBBF24'}>
                    <S.StatusReprovado >Perfil em Análise</S.StatusReprovado>
                    <S.IconClose />
                </S.ContianerStatus>  
                <S.StatusTextContainer >
                    <S.Dot />
                    <S.StatusText>O Seu perfil esta sendo analisado pela nossa equipe.</S.StatusText>
                </S.StatusTextContainer>  
                {/* <S.ContainerBottom>
                    <S.TitleButton>Corrigir Cadastro</S.TitleButton>
                </S.ContainerBottom>  */}
            </S.Content>
        </S.Container>)
}

export default CardStatusCadastro;