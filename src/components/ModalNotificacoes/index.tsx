import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { Modal } from "react-native";
import api from '../../service/api';
import moment from 'moment';
import { UserGetById } from '../CardPlano/types';


type NewType = {
  idNotificacao: number;
  nomeNotificacao: string;
  descricaoNotificacao: string;
  ativo: string;
  cliente: UserGetById;
};

export type Notificacoes = NewType
export default function ModalComponent({ idCliente, modalVisible, setModalVisible }: any) {
        const [ notificacoes, setNotificacoes] = useState<[]>([])
        const [ dates, setDates] = useState<Notificacoes[]>([] as Notificacoes[])


        useEffect(() => {
            async function getNotificacoes() {
                await api.get(`Notificacao`)
                    .then(async function (response) {
                        let DatesCliente = response.data.filter((item: Notificacoes) => item.cliente.idCliente == idCliente) 
                        setDates(DatesCliente)
                    })
                    .catch(function (error) {
                        console.log('notificacoes ', error)
                    });
                }
                getNotificacoes()

        }, [])

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(false);
            }}
        >
            <S.ContainerModal onPress={() => { setModalVisible(false) }}>
                <S.ContainerContent>
                    <S.ContainerArrow>
                        <S.ContentArrow>
                            <S.CopiarTex>notificações</S.CopiarTex><S.Copiar />
                        </S.ContentArrow>
                    </S.ContainerArrow>
                    <S.TitleDates>{getMonthName(parseInt(moment(new Date()).format('MM')))}</S.TitleDates>
                    {dates.map((item: Notificacoes, index: any) => 
                            <>
                                <S.ContainerDate key={index}>
                                    <S.TitleDate>{item.descricaoNotificacao}</S.TitleDate>
                                </S.ContainerDate>
                            </>
                    )}
                    {/* {dates.map((item: Notificacoes, index: any) => 
                            <>
                                <S.ContainerDate key={index}>
                                    <S.ContainerDateHoraDia>
                                        <S.TitleDia>10</S.TitleDia>
                                        <S.TitleHora>{'13:20'}</S.TitleHora>
                                    </S.ContainerDateHoraDia>
                                    <S.TitleDate>{item.descricaoNotificacao}</S.TitleDate>
                                </S.ContainerDate>
                            </>
                    )} */}

                </S.ContainerContent>

            </S.ContainerModal>
        </Modal>
    )
}

function getMonthName(mes: number){
    switch (mes) {
        case 1:
          return 'Janeiro'
        case 2:
          return 'Fevereiro'
        case 3:
          return 'Março'
        case 4:
          return 'Abril'
        case 5:
          return 'Maio'
        case 6:
          return 'Junho'
        case 7:
          return 'Julho'
        case 8:
          return 'Agosto'
        case 9:
          return 'Setembro'
        case 10:
          return 'Outubro'
        case 11:
          return 'Novembro'
        case 12:
          return 'Dezembro'
    }
}