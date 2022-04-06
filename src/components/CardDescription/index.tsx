import React from 'react';
import * as S from './styles';


const CardDescription = (setStep) => {
    return (
        <S.Container >
            <S.ContainerItem>
                <S.ChaveSvg />
                    <S.Title>manuntenção</S.Title>
                        <S.SubTitle>A manutenção preventiva é por nossa conta, não se</S.SubTitle>
                        <S.SubTitle> preocupe! Precisando é só nos avisar!</S.SubTitle>
            </S.ContainerItem>
            <S.ContainerItem>
                <S.SeguroSvg />
                    <S.Title>seguro</S.Title>
                        <S.SubTitle>Seguro contra roubo, furto e colisão, inclusive para terceiros.</S.SubTitle>
            </S.ContainerItem>
            <S.ContainerItem>
                <S.ImpostoSvg />
                    <S.Title>imposto</S.Title>
                        <S.SubTitle>Sem impostos anuais! O IPVA e todas as outras taxas,</S.SubTitle>
                        <S.SubTitle> também são por nossa conta.</S.SubTitle>
            </S.ContainerItem>
            <S.ContainerItem>
                <S.RastreioSvg />
                    <S.Title>rasteamento</S.Title>
                        <S.SubTitle>Sua MOTOK onde ela estiver!</S.SubTitle>
            </S.ContainerItem>
        </S.Container>
    )
}

export default CardDescription;