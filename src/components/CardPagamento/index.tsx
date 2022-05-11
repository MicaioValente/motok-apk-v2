import React from 'react';
import * as S from './styles';

import { deg } from 'react-native-linear-gradient-degree';

const CardPagamento = ({modalVisible, setModalVisible, user, idPrint}: any) => {



    return (
        <S.Container>
            <S.Sino onPress={() => setModalVisible(!modalVisible)} />
            <S.Content>
             <S.ContainerSpacer/>
                <S.Gradient
                    colors={["#FE1D16", "#FD3C14", "#FA7311"]}
                    locations={[0.06, 0.26, 0.92]}  {...deg(68)}
                    style={{alignSelf: 'center',}}
                   >
                       <S.ContainerIcon>
                            <S.Boleto />
                       </S.ContainerIcon>
                </S.Gradient>
                {user.aprovacaoId === 3 ? 
                (
                    <>
                        <S.Text>Aguarde seu Perfil ser aprovado para contratar</S.Text>
                        <S.Text>um plano</S.Text>    
                    </>
                ): user.planoId ? 
                (
                    <>
                    <S.Text>Olá, {user.nomeCliente}!</S.Text>
                    <S.Text>Acompanhe seu plano e </S.Text>
                    <S.Text>gere boletos para pagamento.</S.Text>
                    </>
                ) : (
                    <>
                        <S.Text>Olá, {user.nomeCliente}!</S.Text>
                        <S.Text>Você ainda não possui Plano !</S.Text>
                        <S.Text>Escolha um Plano abaixo</S.Text>
                        {/* <S.Text>gere boletos para pagamento.</S.Text> */}
                    </>
                )}
                {console.log(user.nomeCliente)}
            </S.Content>

        </S.Container>)
}

export default CardPagamento;