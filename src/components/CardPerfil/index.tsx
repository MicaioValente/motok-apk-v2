import React from 'react';
import * as S from './styles';

import { deg } from 'react-native-linear-gradient-degree';
import { UserGetById } from '../CardPlano/types';
import { userCPF } from '../../screens/RegisterCPF/service';

export type CardProps = {
    user: UserGetById
    navigation?: any
}

function userEmAnalise(aprovacaoId: number){

    if(aprovacaoId === 3){
        return true
    }
}
function userAprovado(aprovacaoId: number){

    if(aprovacaoId === 1){
        return true
    }
}

function userReprovado(aprovacaoId: number){
    if(aprovacaoId === 2){
        return true
    }
}
function userTemVeiculo(user: any){
    console.log('user', user)
    // if(user){

    // }
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
                { userEmAnalise(user.aprovacaoId) &&
                <>
                    <S.Text >{`Olá ${user.nomeCliente} Aguarde o retorno da nossa equipe `}</S.Text>
                    <S.Text>{`No app ou por email `}</S.Text>
                </>
                }
                {userAprovado(user?.aprovacaoId) &&  <>
                    <S.Text >{`Olá ${user.nomeCliente} `}</S.Text>
                    {/* <S.Text >{`Você ainda não possui nenhum veiculo`}</S.Text> */}
                </>
                }
                {userTemVeiculo(user) 
                }
                {userReprovado(user?.aprovacaoId) &&
                    <S.Text >{`Olá ${user.nomeCliente} Seu perfil foi Rejeitado`}</S.Text>
                }
            </S.Content>

        </S.Container>)
}

export default CardPerfil;