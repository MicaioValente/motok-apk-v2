import React, { useState } from 'react';
import * as S from './styles';
import Header from '../../components/Header'
import { useNavigation } from '@react-navigation/native';
import CPForCNPJ from '../CPForCNPJ'

const RegisterCPForCNPJ: React.FC = () => {

    return (
        <S.Container>
            <Header/>
            <CPForCNPJ />
        </S.Container>
    )
}

export default RegisterCPForCNPJ;
