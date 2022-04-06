import React from 'react';
import * as S from './styles';


const CardHowWork = (setStep) => {
    return (
        <S.Container >
                    <S.Title>como funciona?</S.Title>
                        <S.SubTitle><S.SubTitleBold>Baixe o app na Play Store,</S.SubTitleBold> complete seu cadastro e</S.SubTitle>
                        <S.SubTitle>aguarde a análise e aprovação</S.SubTitle>
            <S.ContainerItem>
                        <S.SubTitle><S.SubTitleBold>Ter uma CNH definitiva válida </S.SubTitleBold>e de acordo com as </S.SubTitle>
                        <S.SubTitle>normas do DETRAN </S.SubTitle>
            </S.ContainerItem>
            <S.ContainerItem>
                        <S.SubTitle>Escolha o <S.SubTitleBold>melhor plano para seu bolso</S.SubTitleBold> e realize o </S.SubTitle>
                        <S.SubTitle>pagamento da 1º parcela + caução</S.SubTitle>
            </S.ContainerItem>
            <S.ContainerItem>
                    <S.Title>do que preciso?</S.Title>
                        <S.SubTitle>Morar em<S.SubTitleBold> Curitiba ou Região Metropolitana,</S.SubTitleBold> em até </S.SubTitle>
                        <S.SubTitle>30km de distância do centro de Curitiba (marco zero - Praça</S.SubTitle>
                        <S.SubTitle>Tiradentes).</S.SubTitle>
            </S.ContainerItem>
            <S.ContainerItem>
                        <S.SubTitle><S.SubTitleBold>Nossa base </S.SubTitleBold>- Agende o melhor dia e horário para você vir </S.SubTitle>
                        <S.SubTitle>até nossa sede para retirar sua MOTOK.</S.SubTitle>
        </S.ContainerItem>
            <S.ContainerItem>
                        <S.SubTitle><S.SubTitleBold>Não fazemos análise de crédito </S.SubTitleBold>nem consulta ao </S.SubTitle>
                        <S.SubTitle>Serasa/SPC, então, não se preocupe se tiver qualquer </S.SubTitle>
                        <S.SubTitle>problema com seu nome na praçav.</S.SubTitle>
            </S.ContainerItem>
        </S.Container>
    )
}

export default CardHowWork;