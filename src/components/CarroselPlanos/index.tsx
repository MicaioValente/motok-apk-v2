import React, { useEffect, useRef, useState } from 'react';
import * as S from './styles';
import Carousel from 'react-native-snap-carousel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../service/api';

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

type Carousel = {
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
  
export default function CarroselPlanos({navigation, route}: any) {
  const [ data, setData ] = useState<Planos[]>([] as Planos[])
  let Detalhes = ['Manutenção preventiva.', 'Suporte e resgate.', 'Seguro contra terceiros.', 'Isenção de IPVA e Licenciamento.']
  useEffect(() => {
    async function getPlanos() {
     const planos = await AsyncStorage.getItem('planos');
     if(planos){
       setData(JSON.parse(planos))
     }
    }
    getPlanos()
  }, []);

    const carouselRef = useRef(null);
    const _renderItem = ({item, index}: Carousel) => {
        return (
            <>
                {/* {!item.fake  && */}
                    <S.ContainerCard key={index}>
                        <S.Card >
                            <S.TitleCard >{item.nomePlano}</S.TitleCard>
                            <S.ContainerValue>
                                <S.TextContentCardValueLeft>R$</S.TextContentCardValueLeft>
                                <S.ContentCardValue>{item.precoPlano.split(',')[0]}</S.ContentCardValue>
                                <S.TextContentCardValueRight>/DIA</S.TextContentCardValueRight>
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
                                <S.TextoDetalhes>Detalhes</S.TextoDetalhes>
                                    {Detalhes.map((item, index) => (
                                        
                                    <S.ContainerTextDot>
                                        <S.TextDot />
                                        <S.SubTexteDetalhes key={index}> {item}</S.SubTexteDetalhes>
                                    </S.ContainerTextDot>
                                    ))}
                    </S.ContainerCard>
                {/* } */}
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
                //   onSnapToItem = { index => setState({...state,  activeIndex: index}) }
                   />
            </S.ContentCarrousel>
          </S.ContainerCarrousel>
          </S.Container>
        
        );
}
