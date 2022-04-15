import React from "react";
import Spinner from 'react-native-loading-spinner-overlay';
import { ActivityIndicator, Text, Modal, StyleSheet, View } from 'react-native';
import * as S from './styles'
export type Loading = {
    loading: boolean
    mensage: string
    setLoading: Function
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
        alignItems: 'center',
      padding: 10
    }
  });

export default function Loading({loading, setLoading, mensage}: Loading){
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={loading}
            onRequestClose={() => {
                setLoading(!loading);
            }}
        >

            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator />
                <ActivityIndicator size="large" color="#FE1D16" />
                <S.TextLoading>{mensage}...</S.TextLoading>
            </View>
        </Modal>
    )
}