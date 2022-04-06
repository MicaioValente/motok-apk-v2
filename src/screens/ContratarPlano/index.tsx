import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import HeaderRegister from '../../components/HeaderRegister';
import * as S from './styles';

export default function RegisterCPFStep4() {

    return (
        <>
            <S.Container>
                <S.ContainerScroll>
                <HeaderRegister title={'CONTRATAR PLANO'}/>
                    <S.ContainerCard >
                        <S.TextCobranca style={{marginTop: RFValue(20), marginRight: 'auto', marginBottom: RFValue(20), marginLeft: RFValue(20)}}>PLANO ESCOLHIDO</S.TextCobranca>
                        <S.Card >
                            <S.TitleCard >PLANO ANUAL</S.TitleCard>
                            <S.ContainerValue>
                                <S.TextContentCardValueLeft>R$</S.TextContentCardValueLeft>
                                <S.ContentCardValue>45</S.ContentCardValue>
                                <S.TextContentCardValueRight>/DIA</S.TextContentCardValueRight>
                            </S.ContainerValue>
                            <S.TitleCobranca>Cobrança semanal</S.TitleCobranca>
                            <S.ContainerContentCobranca>
                                <S.TextCobranca>Semanal</S.TextCobranca>
                                <S.ValueCobranca>{`R$ 315,00`}</S.ValueCobranca>
                            </S.ContainerContentCobranca>
                            <S.ContainerContentCobranca>
                                <S.TextCobranca>Valor do caução</S.TextCobranca>
                                <S.ValueCobranca>{`R$ 600,00`}</S.ValueCobranca>
                            </S.ContainerContentCobranca>
                        </S.Card>
                        <S.TextCobranca style={{marginTop: RFValue(20), marginRight: 'auto', marginBottom: RFValue(20), marginLeft: RFValue(20)}}>VALOR PARA PAGAMENTO</S.TextCobranca>
                    <S.ContainerCaucao>
                        <S.TextCaucao>Caução</S.TextCaucao>
                        <S.ValueCaucao>1x R$ 600,00</S.ValueCaucao>
                        <S.Ball><S.BallMenor/></S.Ball>
                    </S.ContainerCaucao>
                    <S.ContainerCaucao>
                        <S.TextCaucao>Caução</S.TextCaucao>
                        <S.ValueCaucao>2x R$ 300,00</S.ValueCaucao>
                        <S.Ball><S.BallMenor/></S.Ball>
                    </S.ContainerCaucao>
                    <S.ContainerCaucao>
                        <S.TextCaucao>Caução</S.TextCaucao>
                        <S.ValueCaucao>3x R$ 200,00</S.ValueCaucao>
                        <S.Ball><S.BallMenor/></S.Ball>
                    </S.ContainerCaucao>
                    <S.TextCobranca style={{marginTop: RFValue(20), marginRight: 'auto', marginBottom: RFValue(20), marginLeft: RFValue(20)}}>VALOR PARA PAGAMENTO</S.TextCobranca>
                    <S.ContainerPagamento>
                        <S.Pix/>
                        <S.ValuePagamento>PIX</S.ValuePagamento>
                        <S.Ball style={{marginLeft: 'auto'}}><S.BallMenor/></S.Ball>
                    </S.ContainerPagamento>
                    <S.ContainerPagamento>
                        <S.Boleto />
                        <S.ValuePagamento>BOLETO</S.ValuePagamento>
                        <S.Ball style={{marginLeft: 'auto'}}><S.BallMenor/></S.Ball>
                    </S.ContainerPagamento>
                    <S.ContainerPagamento>
                        <S.Cartao />
                        <S.ContainerPagamentoCards>
                            <S.ValuePagamento>BOLETO</S.ValuePagamento>
                            <S.ContainerPagamentoCards style={{flexDirection: 'row'}}>
                                <S.MastercardSVG/>
                                <S.VisaSVG />
                            </S.ContainerPagamentoCards>
                        </S.ContainerPagamentoCards>

                        <S.Ball style={{marginLeft: 'auto'}}><S.BallMenor/></S.Ball>
                    </S.ContainerPagamento>
                    <S.TextCobranca style={{marginTop: RFValue(20), marginRight: 'auto', marginBottom: RFValue(20), marginLeft: RFValue(20)}}>POSSUI CUPOM DE DESCONTO?</S.TextCobranca>
                    </S.ContainerCard>
                </S.ContainerScroll>
            </S.Container>
        </>
    )
}
