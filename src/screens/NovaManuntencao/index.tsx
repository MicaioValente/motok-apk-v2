import HeaderRegister from '../../components/HeaderRegister'
import { useNavigation } from '@react-navigation/native';
import * as S from './styles'
import React, { useState } from 'react';
import Manuntencao from './Manuntencao'

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
    function setUser(nome, value, name){

        setUserCPF({
            ...userCPF,
                [nome]: value    
        })

    }

    return (
        <S.Container>
            <HeaderRegister step={1} route={'Home'} title={'SOLICITAR NOVA MANUNTENÇÂO'} />
            <Manuntencao route={route} setUser={setUser} />
        </S.Container>
    )
}

export default RegisterCPF 
