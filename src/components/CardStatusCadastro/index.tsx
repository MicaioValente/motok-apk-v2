import { useNavigation, useNavigationState } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { CardProps } from '../CardPerfil';
import * as S from './styles';

const CardStatusCadastro = ({user, aprovado, reprovado, analise}: any) => {
    const navigation = useNavigation<any>()
    const motivo = user?.dscMotivoReprovacao?.split('//')
    return (<>
        {reprovado ? 
            <S.Container>
                <S.Content>
                    <S.ContianerStatus style={{backgroundColor: '#F87171'}}>
                        <S.StatusReprovado >Perfil Rejeitado</S.StatusReprovado>
                        <S.IconClose />
                    </S.ContianerStatus>  
                    <S.StatusTextContainer >
                        <S.Dot />
                        <S.StatusText>O Seu perfil esta foi rejeitado pela nossa equipe.</S.StatusText>
                    </S.StatusTextContainer>
                    <S.StatusTextContainer >
                        <S.Dot />
                        <S.StatusText>{motivo[0]}</S.StatusText>
                    </S.StatusTextContainer>
                    {motivo[1] == 2 ? 
                        <S.StatusTextContainer >
                            <S.Dot />
                            <S.StatusText>Reeviar Comprovante de Residência</S.StatusText>
                        </S.StatusTextContainer> 
                    :motivo[1] == 1 ?
                        <S.StatusTextContainer >
                            <S.Dot />
                            <S.StatusText>Reeviar CNH</S.StatusText>
                        </S.StatusTextContainer>
                    :motivo[1] == 3 ?
                        <S.StatusTextContainer >
                            <S.Dot />
                            <S.StatusText>Reeviar Comprovante de Residência e CNH</S.StatusText>
                        </S.StatusTextContainer>
                    :null  
                    }
                    <S.ContainerBottom onPress={() => navigation.navigate('Reupload')}>
                        <S.TitleButton>Corrigir Cadastro</S.TitleButton>
                    </S.ContainerBottom> 
                </S.Content>
            </S.Container>
        : analise ? 
            <S.Container>
                <S.Content>
                    <S.ContianerStatus style={{backgroundColor: '#FBBF24'}}>
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
            </S.Container>
        : aprovado ? null : null
        }
    </>
    )
}

export default CardStatusCadastro;