import React, { useEffect, useRef, useState } from 'react';
import * as S from './styles';
import Carousel from 'react-native-snap-carousel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../service/api';
import { useNavigation } from '@react-navigation/native';

type cardProps = {
    nome_plano:string,
    preco_plano: string,
    primeiro: boolean,
    pagamento: string,
    valor_semanal: string,
    valor_caucao: string,
    detalhes:string[]  
    fake?: boolean
}

type CarouselType = {
    item: Planos
    index: number
}
export type Planos = {
    appClientesMotoks: string
    datecreate: string
    datemodified: string
    descricaoPlano:  string
    idPlanos: number
    nomePlano: string
    observacaoPlano: string
    pagamento: string
    precoPlano: string
    valorCaucao: string
    valorSemanal: string
  }
  
export default function CarroselPlanos({navigation, route, home}: any) {
  const [ data, setData ] = useState<Planos[]>([] as Planos[])
  const navigate = useNavigation<any>()
  let Detalhes = ['Manutenção preventiva.', 'Suporte e resgate.', 'Seguro contra terceiros.', 'Isenção de IPVA e Licenciamento.']
  useEffect(() => {
    async function getPlanos() {
      // const planos = await AsyncStorage.getItem('planos');
      await api.get(`Planos/ativos`)
      .then(async response => {
        setData(response.data)
        await AsyncStorage.setItem('planos', JSON.stringify(response.data))
      }).catch(function (error) {
      });
     }
    getPlanos()
  }, []);

  const carouselRef = useRef(null);
  const _renderItem = ({item, index}: CarouselType) => {
    return (
      <>
        <S.ContainerCard key={index} >
            <S.Card onPress={() => home ?  navigate.navigate('ContratarPlano', {planoSelecionado: item}) : navigate.navigate('SignIn')}>
                <S.TitleCard >{item.nomePlano}</S.TitleCard>
                <S.ContainerValue>
                    <S.TextContentCardValueLeft>R$</S.TextContentCardValueLeft>
                    <S.ContentCardValue>{item.precoPlano}</S.ContentCardValue>
                    <S.TextContentCardValueRight>/Dia</S.TextContentCardValueRight>
                </S.ContainerValue>
                <S.TitleCobranca>{'Cobrança ' + item.pagamento}</S.TitleCobranca>
                <S.ContainerContentCobranca>
                    <S.TextCobranca>Semanal</S.TextCobranca>
                    <S.ValueCobranca>{`R$ ${item.valorSemanal}`}</S.ValueCobranca>
                </S.ContainerContentCobranca>
                <S.ContainerContentCobranca>
                    <S.TextCobranca>Valor do caução</S.TextCobranca>
                    <S.ValueCobranca>{`R$ ${item.valorCaucao}`}</S.ValueCobranca>
                </S.ContainerContentCobranca>
            </S.Card>
            <S.ContainerText>

              <S.TextoDetalhes>Detalhes</S.TextoDetalhes>
                  {Detalhes.map((item, index) => (
                    
                    <S.ContainerTextDot>
                      <S.TextDot />
                      <S.SubTexteDetalhes key={index}> {item}</S.SubTexteDetalhes>
                  </S.ContainerTextDot>
                  ))}
            </S.ContainerText>
        </S.ContainerCard>
      </>
    )
  }
  return (
    <S.Container>
      <S.ContainerCarrousel >
        <S.ContentCarrousel >
            <Carousel
              layout={"default"}
              ref={carouselRef}
              data={data}
              sliderWidth={320}
              itemWidth={245}
              sliderHeight={320}
              itemHeight={320}
              renderItem={_renderItem}
                />
        </S.ContentCarrousel>
      </S.ContainerCarrousel>
    </S.Container>
  );
}
