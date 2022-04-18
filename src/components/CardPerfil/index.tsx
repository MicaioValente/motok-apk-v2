import React from 'react';
import * as S from './styles';

import { deg } from 'react-native-linear-gradient-degree';
import { User } from '../../screens/Preload';

export type CardProps = {
    user: User
    navigation?: any
}

const CardPerfil = ({user}: CardProps) => {
    return (
        <S.Container>
            <S.Sino />
            <S.Content>
                <S.Gradient
                    colors={["#FE1D16", "#FD3C14", "#FA7311"]}
                    locations={[0.06, 0.26, 0.92]}  {...deg(68)}
                    style={{alignSelf: 'center',}}
                   >
                       <S.ContainerIcon>
                            <S.Capacete />
                       </S.ContainerIcon>
                </S.Gradient>
                {/* <S.Text>Agende manutenções e sinistros para sua</S.Text> */}
                {user?.aprovacaoId === 3  &&
                <>
                    <S.Text >{`Olá ${user.nomeCliente} Aguarde o retorno da nossa equipe `}</S.Text>
                    <S.Text>{`No app ou por email `}</S.Text>
                </>
                }
                {user?.aprovacaoId === 1  &&
                    <S.Text >{`Olá ${user.nomeCliente} `}</S.Text>
                }
            </S.Content>

        </S.Container>)
}

export default CardPerfil;