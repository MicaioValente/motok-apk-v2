import React, { useState } from 'react';
import * as S from './styles';
import Modal from "../Modal";
export type ModalComponent = {
    modalOpenCamera:  boolean
    setModalOpenCamera: Function
}

export default function ModalCameraOrFile({ modalOpenCamera, setModalOpenCamera }: ModalComponent) {

    return (
        <Modal
            modalVisible={true}
            setModalVisible={setModalOpenCamera}
        >

            <S.Camera />
            <S.Imagem />
        </Modal>
    )
}
