import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { RFValue, } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
export type Color = {
    color: string
}

export default function SubTitle({ color }: Color) {
    const Text = styled.Text`
        font-weight: 400;
        font-size: ${RFValue(16)}px;
        color: ${color};
        bottom: ${RFValue(18)}px;
    `
    const Container = styled.View`
        position: absolute;
        bottom: ${RFValue(5)}px;
    `

    return <Container>
        <Text >Motok</Text>
    </Container>
}