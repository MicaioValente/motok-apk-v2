import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { deg } from 'react-native-linear-gradient-degree';
import api from '../../service/api';
import CardPlano, { Veiculo } from '../CardSinistro';
import * as S from './styles';
import * as Clipboard from 'expo-clipboard';
import { ToastAndroid } from 'react-native'
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';


export type Manutencao = {
    idManutencao: number
    nomeManutencao: string
    descricaoManutencao: string
    idMoto: number
    dataEntrada: string
    dataEntrega: string
    marcaModelo: string
    placa: string
    idVeiculo: number
    sinistro: {
        idSinistro: number
        nomeSinistro: string
        descricaoSinistro: string
        }
}

const CardManuntencao = ({user, veiculoId}: CardPlano) => {
    const [ veiculo, setVeiculo] = useState<Veiculo>({} as Veiculo)
    const [ manutencoes, setManutencoes] = useState<Manutencao[]>([] as Manutencao[])
    const [ dataInicio, setDataInicio] = useState<any>()
    const [ dataEntrega, setEntrega] = useState<any>()
    const navigation = useNavigation<any>()
    console.log('manutencoes', manutencoes)

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
        api.get(`Manutencoes/moto/${veiculoId}`).then(
            function (response){
                setManutencoes(response.data)

                let result: Manutencao[] = response.data.filter((e: Manutencao, i: number) => {
                    if(e.idMoto === veiculoId){
                        return e.dataEntrada
                        // return moment(e.dataEntrada).format('DD/MM/YYYY')
                    }
                })
                setDataInicio(result[0].dataEntrada)
                setEntrega(result[0].dataEntrega)
            }
        ).catch(
            function (error){
                console.log(error)
            }
        )
    }, [])
    

    return (
    <S.Container>
        {veiculoId ?
            <S.Content>
                <S.ContainerIcon>
                    <S.Barras />
                </S.ContainerIcon>
                <S.Text>Precisa de ajuda sobre manutenções? Ligue para nossa oficina credenciada ou faça o agendamento abaixo.</S.Text>


                <S.ContainerTextNumber>
                    <S.TextBoldNumber>{'(11) 97595-1981'}</S.TextBoldNumber>
                    <S.ContainerIconNumber onPress={() => {Clipboard.setString('(11) 97595-1981') ,ToastAndroid.show('Código Copiado', ToastAndroid.LONG)}}>
                        <S.Copiar />
                    </S.ContainerIconNumber>
                </S.ContainerTextNumber>

                
                {
                    dataInicio && dataEntrega ?
                    dataInicio === dataEntrega ?
                    <>
                        <S.ContainerText>
                            <S.Text>Próxima Manutenção</S.Text>
                            <S.TextBold>{dataInicio ? moment(dataInicio).format('DD/MM-HH:mm') : "XXXXX"}</S.TextBold>
                        </S.ContainerText> 
                        <S.ContainerText>
                            <S.Text>Dia para retirada</S.Text>
                            <S.TextBold>{'A Combinar'}</S.TextBold>
                        </S.ContainerText>
                    </>
                    :
                    <>
                        <S.ContainerText>
                            <S.Text>Próxima Manutenção</S.Text>
                            <S.TextBold>{dataInicio ? moment(dataInicio).format('DD/MM-HH:mm') : "XXXXX"}</S.TextBold>
                        </S.ContainerText> 
                        <S.ContainerText>
                            <S.Text>Dia para retirada</S.Text>
                            <S.TextBold>{dataEntrega ? moment(dataEntrega).format('DD/MM, HH:mm') : "XXXXX"}</S.TextBold>
                        </S.ContainerText> 
                    </> 
                    : null
                }
                <S.ContainerBoleto onPress={() => {navigation.navigate('NovaManuntencao', {motoId: veiculoId})}}>
                    <S.TitleButton>solicitar nova manutenção</S.TitleButton>
                </S.ContainerBoleto> 
                   

            </S.Content> :
            <></>
        }
        </S.Container>)
}

export default CardManuntencao;