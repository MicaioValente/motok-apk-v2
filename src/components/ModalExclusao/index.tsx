import React, { useState } from 'react';
import * as S from './styles';
import Modal from "../Modal";
import { RFValue } from 'react-native-responsive-fontsize';
import LixeiraGrande from '../../assets/lixeiraGrande.svg';
import { StyleSheet, Text, Pressable } from "react-native";


export type ModalComponent = {
    modalVisible:  boolean
    setModalVisible: Function
    setPhoto: Function
    setUser: Function
    name: string
}

export default function ModalExclusao({ modalVisible, setModalVisible, setPhoto, setUser, name }: ModalComponent) {


    function excluirPhoto() {
        setUser(name, null)
        setPhoto(null)
        setModalVisible(!modalVisible)
    }
    return (
        <Modal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
        >
            <LixeiraGrande />
            <S.TitleModal>Exclusão</S.TitleModal>
            {name === 'docCarteiraMotorista' ? 
                <S.SubTitleModal>Deseja excluir a carteira de motorista atual?</S.SubTitleModal>
            :
                <S.SubTitleModal>Deseja excluir o comprovante de residência atual?</S.SubTitleModal>
            }
            <S.ContainerButtonModal>
                <Pressable style={[styles.ButtonModal]} onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.TextButtonModal}>NÃO</Text>
                </Pressable>
                <Pressable style={[styles.ButtonModal]} onPress={() => excluirPhoto()}>
                    <Text style={styles.TextButtonModal}>SIM</Text>
                </Pressable>
            </S.ContainerButtonModal>
        </Modal>
    )
}


const styles = StyleSheet.create({
    ButtonModal: {
        backgroundColor: "#18181B",
        width: RFValue(125),
        height: RFValue(34),
        borderRadius: RFValue(10),
        justifyContent: "center",
        alignItems: "center",
    },
    TextButtonModal: {
        fontFamily: "Teko_300Light",
        fontSize: RFValue(20),
        color: "#F14902"
    },
    ButtonPre: {
        backgroundColor: "#18181B",
        width: RFValue(258),
        height: RFValue(34),
        borderRadius: RFValue(10),
        justifyContent: "center",
        alignItems: "center",
    },
});
