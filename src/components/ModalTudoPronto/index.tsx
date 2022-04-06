import React, { useState } from 'react';
import * as S from './styles';
import Modal from "../Modal";
import { StyleSheet, Text } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';
export type ModalComponent = {
    modalVisibleSuccess:  boolean
    setModalVisibleSuccess: Function
    navigation: any
}

export default function ModalTudoPronto({ modalVisibleSuccess, setModalVisibleSuccess, navigation }: ModalComponent) {

    function closeAndRedirect(){
        navigation.navigate('CadastroFinalizado')
        setModalVisibleSuccess(!modalVisibleSuccess)

    }
    return (
        <Modal
            modalVisible={modalVisibleSuccess}
            setModalVisible={setModalVisibleSuccess}
        >
            <S.Pronto />
            <S.TextRowBold>Tudo Pronto</S.TextRowBold>
            <S.SubTitleModalPre>Suas informações serão analisadas pela equipe. Você pode acompanhar o status do seu cadastro pelo seu <S.TextRowBold>perfil</S.TextRowBold>.</S.SubTitleModalPre>
            <S.ContainerButtonModal>
                <S.ContainerButtonPre onPress={() => closeAndRedirect()}>
                        <Text style={styles.TextButtonModal}>FECHAR</Text>
                </S.ContainerButtonPre>
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
