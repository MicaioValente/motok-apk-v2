import { useNavigation, useNavigationState } from '@react-navigation/native';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import api from '../../service/api';
import { Manutencao } from '../CardManuntencao';
import { CardProps } from '../CardPerfil';
import { UserGetById } from '../CardPlano/types';
import * as S from './styles';



type CardPlano = {
    user: UserGetById
    veiculoId: number
}

const CardManutencaoPendente = ({user, veiculoId}: CardPlano) => {
    const navigation = useNavigation<any>()
    const [ manutencoes, setManutencoes] = useState<Manutencao[]>([] as Manutencao[])

    useEffect(() => {
        api.get(`Manutencoes/moto/${veiculoId}`).then(
            function (response){
                setManutencoes(response.data)
                console.log('response', response.data)

            }
        ).catch(
            function (error){
                console.log(error)
            }
        )
    }, [])
    return (
        <>
        {manutencoes && 
            manutencoes.map((e, i) => {
                return (
                    <S.Container>
                        <S.Content>
                            <S.ContianerStatus style={{backgroundColor: '#F87171'}}>
                                <S.StatusReprovado >Manutençāo pendente </S.StatusReprovado>
                                <S.IconClose />
                            </S.ContianerStatus>  
                            <S.StatusTextContainer >
                                <S.Dot />
                                <S.StatusText>Você tem 1 manutençāo marcada para dia</S.StatusText>
                            </S.StatusTextContainer>
                            <S.StatusTextContainer >
                                <S.Dot />
                                <S.StatusText>Entrada {moment(e.dataEntrada).format('DD/MM/YYYY HH:mm')}</S.StatusText>
                            </S.StatusTextContainer>
                            <S.StatusTextContainer >
                                <S.Dot />
                                <S.StatusText>Retirada {moment(e.dataEntrega).format('DD/MM/YYYY HH:mm')}</S.StatusText>
                            </S.StatusTextContainer>
                            {/* <S.StatusTextContainer >
                                <S.Dot />
                                <S.StatusText>aaaaa</S.StatusText>
                            </S.StatusTextContainer> */}
                            
                            {/* <S.ContainerBottom onPress={() => navigation.navigate('Reupload')}>
                                <S.TitleButton>Corrigir Cadastro</S.TitleButton>
                            </S.ContainerBottom>  */}
                        </S.Content>
                    </S.Container>
                )
            })
        }
        </>
    )
}

export default CardManutencaoPendente;