import React, { useEffect, useState } from 'react';
import api from '../../service/api';
import { Card } from '../CarroselPlanos/styles';
import * as S from './styles';
import { UserGetById } from './types';


type CardBoleto = {
    user: UserGetById
}
export type Plano = {
    idPlanos: number
    precoPlano: string
    pagamento: string
    descricaoPlano: string
    observacaoPlano: string
    valorSemanal: string
    valorCaucao: string
    ativo: string
    datecreate: string
    datemodified: string
    periodoContratacaoPlano: number
    appClientesMotoks: string
    nomePlano: string
}
const CardSinistro = ({user}: CardBoleto) => {
    const [ plano, setPlano ] = useState<Plano>({} as Plano)

    useEffect(() => {
        api.get(`planos/${user.idCliente}`).then(
            function (response){
                setPlano(response.data)
            }
        ).catch(
            function (response){
                console.log('error', response)
            }
        )
    }, [])

    return (
        <S.Container>
            <S.Content>
                <S.ContainerIcon>
                    <S.Plano />
                </S.ContainerIcon>
                <S.ContainerText>
                    <S.Text>Plano Atual</S.Text>
                    <S.TextBold>{plano.nomePlano}</S.TextBold>
                </S.ContainerText>
                <S.ContainerText>
                    <S.Text>Valor Diário</S.Text>
                    <S.TextBold>R$ {plano.precoPlano}</S.TextBold>
                </S.ContainerText>
                <S.ContainerText>
                    <S.Text>Motos contratadas</S.Text>
                    <S.TextBold>1</S.TextBold>
                </S.ContainerText>
{/* criado 02/04/2022 */}
{/* hoje 02/05/2022 */}
                <S.ContainerBoleto>
                    <S.TitleBoleto>Tempo com a Motok</S.TitleBoleto>
                        <S.DiasDePlano>{plano.periodoContratacaoPlano} Semanas</S.DiasDePlano>
                </S.ContainerBoleto>    

            </S.Content>
        </S.Container>)
}

export default CardSinistro;