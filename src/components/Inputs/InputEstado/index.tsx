import React from 'react';
import { InputEndereco } from '../InputCep';
import * as S from './style'


export default function InputCidade({setUser, name}: InputEndereco) {
    return (<S.Wrapper>
        <S.ContainerTitle>
            <S.Title>Estado</S.Title>
        </S.ContainerTitle>
        <S.WrapperContent>
            <S.Container>
                <S.Input 
                    placeholderTextColor="#E4E4E755" 
                    placeholder="Ex. SP" 
                    onChangeText={text => setUser(name, text)}
                    style={{color: '#fff'}}
                    maxLength={2}
                    />
            </S.Container>
        </S.WrapperContent>
    </S.Wrapper>
    )
}
