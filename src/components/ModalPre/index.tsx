import React, { useState } from 'react';
import * as S from './styles';
import Modal from "../Modal";
import { StyleSheet, Text } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';


export type ModalComponent = {
    modalVisiblePre:  boolean
    setModalVisiblePre: Function
}

export default function ModalComponent({ modalVisiblePre, setModalVisiblePre }: ModalComponent) {

    return (
        <Modal
            modalVisible={modalVisiblePre}
            setModalVisible={setModalVisiblePre}
        >
            <S.SubTitleModalPre>É recomendável que a imagem enviada possua os seguintes critérios:</S.SubTitleModalPre>
            <S.Row>
                <S.Ball />
                <S.ContainerTextRow>
                    <S.TextRowBold>Boa qualidade.</S.TextRowBold>
                </S.ContainerTextRow>
            </S.Row>
            <S.Row>
                <S.Ball />
                <S.ContainerTextRow>
                    <S.TextRow>Foto da carteira contendo <S.TextRowBold>frente e verso</S.TextRowBold></S.TextRow>
                </S.ContainerTextRow>
            </S.Row>
            <S.ContainerButtonModal>
                <S.ContainerButtonPre onPress={() => setModalVisiblePre(!modalVisiblePre)}>
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
