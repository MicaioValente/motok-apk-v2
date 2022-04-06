import React from 'react';
import * as S from './styles'

export type StepProps = {
    setStep: Function
    step: number
    Label: string
}

export default function Counter({ step, setStep, Label }: StepProps) {
    return (
        <S.Container>
            <S.Title>Passo {step}/4</S.Title>
            <S.SubTitle>{Label}</S.SubTitle>
        </S.Container>
    )
}
