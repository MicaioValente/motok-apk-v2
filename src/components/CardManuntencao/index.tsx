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
    console.log('veiculoId', veiculoId)
    const [ veiculo, setVeiculo] = useState<Veiculo>({} as Veiculo)
    const [ manutencoes, setManutencoes] = useState<Manutencao[]>([] as Manutencao[])
    const [ dataInicio, setDataInicio] = useState<any>()
    const [ dataEntrega, setEntrega] = useState<any>()
    const navigation = useNavigation<any>()

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
        api.get(`manutencoes`).then(
            function (response){
                setManutencoes(response.data)
                console.log('33333', manutencoes)
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
    
    function dataProximaManutencao(){
    
    }


    return (<S.Container>
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

                <S.ContainerText>
                    <S.Text>Próxima Manutenção</S.Text>
                    <S.TextBold>{dataInicio ? moment(dataInicio).format('DD/MM/YYYY') : "Sem Manutenção"}</S.TextBold>
                </S.ContainerText>
                <S.ContainerText>
                    <S.Text>Dia para retirada</S.Text>
                    <S.TextBold>{dataEntrega ? moment(dataEntrega).format('DD/MM/YYYY') : "Sem Manutenção"}</S.TextBold>
                </S.ContainerText>
                <S.ContainerBoleto onPress={() => {navigation.navigate('NovaManuntencao', {motoId: veiculoId})}}>
                    <S.TitleButton>solicitar nova manutenção</S.TitleButton>
                </S.ContainerBoleto>    

            </S.Content>
        </S.Container>)
}

export default CardManuntencao;