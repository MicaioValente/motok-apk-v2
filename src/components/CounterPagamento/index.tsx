import React from 'react';
import * as S from './styles'

export type StepProps = {
    setStep: Function
    step: number
    Label: string
    title?: string
}

export default function CounterPagamento({ step, title, Label }: StepProps) {
    return (
        <S.Container>
            <S.Title>{title ? title :  `Passo ${step}/3` }</S.Title>
            <S.SubTitle>{Label}</S.SubTitle>
        </S.Container>
    )
}
