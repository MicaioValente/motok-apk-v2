import React, { useEffect, useState } from 'react';
import api from '../../service/api';
import { UserGetById } from '../CardPlano/types';
import * as S from './styles';

type CardPlano = {
    user: UserGetById
    veiculoId: number
}

export type Veiculo = {
    anoModelo: string
    chassi: string
    cliente: string
    datecreate: string
    datemodified: string
    idVeiculo: string
    marcaModelo: string
    placa: string
    renavam: string
    anoFabricacao: string

}
const CardPlano = ({user, veiculoId}: CardPlano) => {
    const [ veiculo, setVeiculo] = useState<Veiculo>({} as Veiculo)

    useEffect(() => {
        api.get(`veiculo/${veiculoId}`).then(
            function (response){
                setVeiculo(response.data)
            }
        ).catch(
            function (error){
                console.log(error)
            }
        )
    }, [])
    return (
        <S.Container>

            <S.Content>
                <S.ContainerIcon>
                    <S.Moto />
                </S.ContainerIcon>


                <S.ContainerText>
                    <S.Text>{veiculo.marcaModelo}</S.Text>
                    <S.TextBold>{veiculo.anoFabricacao}</S.TextBold>
                </S.ContainerText>
                <S.ContainerText>
                    <S.Text>Placa</S.Text>
                    <S.TextBold>{veiculo.placa}</S.TextBold>
                </S.ContainerText>
            </S.Content>
        </S.Container>)
}

export default CardPlano;