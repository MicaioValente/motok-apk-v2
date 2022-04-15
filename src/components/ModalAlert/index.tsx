import React from "react";
import * as S from './styles'
import ModalComponent from '../Modal';
import { Modal } from "react-native";

type ModalAlert = {
    setModal: Function
    modal: boolean
    text: string
}

export default function ModalAlert({modal, setModal, text}: ModalAlert) {


    return(
        <Modal
            animationType="fade"
            transparent={true}
            visible={modal}
            onRequestClose={() => {
                setModal(!modal);
            }}
        >
            <S.ContainerModal onPress={() => { setModal(!modal) }}>
                <S.ContainerContent>
                <S.TextContainerLeft>{text}</S.TextContainerLeft>
            <S.TextContainerLeft onPress={() => setModal(!modal)} style={{ marginLeft: 'auto', marginTop: 10, color: '#F14902'}}>OK!</S.TextContainerLeft>
                </S.ContainerContent>

            </S.ContainerModal>
        </Modal>
    )
    
}