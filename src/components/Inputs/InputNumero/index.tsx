import React from 'react';
import { InputEndereco } from '../InputCep';
import * as S from './style'


export default function InputNumero({setUser, name, value}: InputEndereco) {
    return (<S.Wrapper>
        <S.ContainerTitle>
            <S.Title>Número</S.Title>
        </S.ContainerTitle>
        <S.WrapperContent>
            <S.Container>
                <S.Input 
                    placeholderTextColor="#E4E4E755" 
                    placeholder="Ex. 1234" 
                    keyboardType='numeric'
                    style={{color: '#fff'}}
                    onChangeText={text => setUser(name, text)}
                    value={value}
                />
            </S.Container>
        </S.WrapperContent>
    </S.Wrapper>
    )
}
