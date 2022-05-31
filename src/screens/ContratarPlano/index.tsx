import React, { useEffect, useState } from 'react';
import { Planos } from '../../components/CarroselPlanos';
import HeaderRegister from '../../components/HeaderRegister';
import Passo1 from './Passo1';
import Passo2 from './Passo2';
import Passo3 from './Passo3';
import * as S from './styles';
import PagamentoBoletoPlano from './PagamentoBoletoPlano';
import PagamentoBoletoCaucao from './PagamentoBoletoCaucao';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../Preload';
import CadastroFinalizado from '../CadastroFinalizado';
import PagamentoEmAnalise from '../PagamentoEmAnalise';

export type Route = {
    key: String
    name: String
    params: { planoSelecionado: Planos }
}


export type Pagamento = {
    navigation: any 
    route: Route
}
export default function ContratarPlano({navigation, route}: Pagamento) {
    const plano = route?.params?.planoSelecionado
    // const plano = {
    //     ativo: true,
    //     datecreate: "2022-04-18T12:58:18",
    //     datemodified: null,
    //     descricaoPlano: "Manutenção preventiva; Suporte e resgate; Seguro TOTAL;Isenção de IPVA e licenciamento; Cobrança semanal",
    //     idPlanos: 24,
    //     nomePlano: "PLANO MENSAL",
    //     observacaoPlano: "Cobrança semanal;Valor semanal: R$ 335,30;Valor da caução: R$ 600,00",
    //     pagamento: "Semanal",
    //     periodoContratacaoPlano: 2,
    //     precoPlano: "47,90",
    //     valorCaucao: "600,00",
    //     valorSemanal: "335,30",
    //   }
    const [step, setStep] = useState(1)
    const [ user, setUser] = useState<User>({} as User)
    const [ cupon, setCupon] = useState(false)
    const [ formaDePagamento, setFormaDePagamento ] = useState({caucao: {parcelas: 1, forma: 'pix'}, plano: {parcelas: 1, forma: 'pix'} })
    const [ boletoPlanoGerado, setBoletoPlanoGerado] = useState(false)
    const [ boletoCaucaoGerado, setBoletoCaucaoGerado] = useState(false)

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('user');
            if(token){
                setUser(JSON.parse(token))
            }
        }
        checkToken();
    }, []);
    function stepComponete(name: number) {
        switch (name) {
            case 1:
                return <Passo1 formaDePagamento={formaDePagamento} setFormaDePagamento={setFormaDePagamento} plano={plano} setStep={setStep} step={step}/>
            case 2:
                return <Passo2 setCupon={setCupon} formaDePagamento={formaDePagamento} setFormaDePagamento={setFormaDePagamento} plano={plano} setStep={setStep} step={step}/>
            case 3:
                return <Passo3  cupon={cupon} formaDePagamento={formaDePagamento} setFormaDePagamento={setFormaDePagamento} plano={plano} setStep={setStep} step={step} />
            case 4:
                return <PagamentoBoletoPlano setBoletoPlanoGerado={setBoletoPlanoGerado} cupon={cupon} user={user} formaDePagamento={formaDePagamento} setFormaDePagamento={setFormaDePagamento} plano={plano} setStep={setStep} step={step} />
            case 5:
                return <PagamentoBoletoCaucao setBoletoCaucaoGerado={setBoletoCaucaoGerado} user={user} formaDePagamento={formaDePagamento} setFormaDePagamento={setFormaDePagamento} plano={plano} setStep={setStep} step={step} />
            case 6:
                return <PagamentoEmAnalise user={user} plano={plano}/>
                default:
                return null
        }
    }

    return (
        <>
            <S.Container>
                <S.ContainerScroll>
                <HeaderRegister boletoPlanoGerado={boletoPlanoGerado} boletoCaucaoGerado={boletoCaucaoGerado} step={1} setStep={setStep} route={'Home'} title={'CONTRATAR PLANO'}/>
                {stepComponete(step)}
                </S.ContainerScroll>
            </S.Container>
        </>
    )
}
