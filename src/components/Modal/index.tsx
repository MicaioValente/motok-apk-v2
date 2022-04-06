import React, { useState } from 'react';
import * as S from './styles';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

export default function ModalComponent({ children, modalVisible, setModalVisible }: any) {

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
                    {children}
                </S.ContainerContent>

            </S.ContainerModal>
        </Modal>

    )
}
