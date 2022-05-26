import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { Modal } from "react-native";
import api from '../../service/api';
import moment from 'moment';

export default function ModalComponent({ idCliente, modalVisible, setModalVisible }: any) {
        const [ notificacoes, setNotificacoes] = useState<[]>([])


        useEffect(() => {
            async function getNotificacoes() {
              console.log('idCliente', idCliente)
                await api.get(`notificacoes/189`)
                    .then(async function (response) {
                        console.log(111, response.data)
                        setNotificacoes(response.data)
                    })
                    .catch(function (error) {
                        console.log('notificacoes ', error)
                    });
                }
                getNotificacoes()

        }, [])

        let dates: any = [
            // {dia: 27, hora: '13:48', descricao: 'Seu boleto foi gerado com vencimento para o dia 30/01/2022.'  },
            // {dia: 27, hora: '13:48', descricao: 'Seu boleto foi gerado com vencimento para o dia 30/01/2022.'  },
            // {dia: 27, hora: '13:48', descricao: 'Seu boleto foi gerado com vencimento para o dia 30/01/2022.'  },
            // {dia: 27, hora: '13:48', descricao: 'Seu boleto foi gerado com vencimento para o dia 30/01/2022.'  },
        ]


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
                    {dates.map((item: any) => 
                            <>
                                <S.ContainerDate>
                                    <S.ContainerDateHoraDia>
                                        <S.TitleDia>{item.dia}</S.TitleDia>
                                        <S.TitleHora>{item.hora}</S.TitleHora>
                                    </S.ContainerDateHoraDia>
                                    <S.TitleDate>{item.descricao}</S.TitleDate>
                                </S.ContainerDate>
                            </>
                    )}

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