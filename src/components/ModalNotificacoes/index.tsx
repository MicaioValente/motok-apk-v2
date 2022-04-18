import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { Modal } from "react-native";
import api from '../../service/api';

export default function ModalComponent({ idCliente, modalVisible, setModalVisible }: any) {
        const [ notificacoes, setNotificacoes] = useState<[]>([])


        useEffect(() => {
            async function getNotificacoes() {
                await api.get(`notificacoes/${idCliente}`)
                    .then(async function (response) {
                        setNotificacoes(response.data)
                    })
                    .catch(function (error) {
                        console.log('setToken error3', error)
                    });
                }
                getNotificacoes()

        }, [])

        let dates = [
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
                setModalVisible(!modalVisible);
            }}
        >
            <S.ContainerModal onPress={() => { setModalVisible(!modalVisible) }}>
                <S.ContainerContent>
                    <S.ContainerArrow>
                        <S.ContentArrow>
                            <S.CopiarTex>notificações</S.CopiarTex><S.Copiar />
                        </S.ContentArrow>
                    </S.ContainerArrow>
                    <S.TitleDates>Abriu 2022</S.TitleDates>
                    {dates.map(item => 
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
