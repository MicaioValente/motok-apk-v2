import HeaderRegister from '../../components/HeaderRegister'
import { useNavigation } from '@react-navigation/native';
import * as S from './styles'
import React, { useEffect, useState } from 'react';
import Manuntencao from './Manuntencao'
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface userCPF {
	nome: string,
	motivo: string,
	data: string,
	dia_manu: string,
	mes_manu: string,
	ano_manu: string,
}

const RegisterCPF: React.FC = ({route} : any) => {
    const [userCPF, setUserCPF] = useState({} as userCPF)
    const [veiculoId, setVeiculoId] = useState()
    
    function setUser(nome, value, name){
        setUserCPF({
            ...userCPF,
                [nome]: value    
        })

    }
    useEffect(() => {
        const GetVeiculo = async() => {
            const token = await AsyncStorage.getItem('user');
            const { veiculoId } = JSON.parse(token) 
            setVeiculoId(veiculoId)
        }
        GetVeiculo()
    }, [])

    return (
        <S.Container>
            <HeaderRegister step={1} route={'Home'} title={'SOLICITAR NOVA MANUNTENÇÂO'} />
            <Manuntencao route={route} setUser={setUser} />
        </S.Container>
    )
}

export default RegisterCPF 
