import React, { useState } from 'react';
import { InputEndereco } from '../InputCep';
import * as S from './style'

export default function InputCidade({setUser, name}: InputEndereco) {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <S.Wrapper>
            <S.ContainerTitle>
                <S.Title>Cidade</S.Title>
            </S.ContainerTitle>
            <S.WrapperContent>
                <S.Container>
                {isFocused ? <S.ContainerLine /> : null}
                    <S.Input 
                        placeholderTextColor="#E4E4E755" 
                        placeholder="Insira a cidade" 
                        style={{color: '#fff'}}
                        onChangeText={text => setUser(name, text)}
                        onBlur={() => setIsFocused(false)}
                        onFocus={() => setIsFocused(true)}
                        />
                </S.Container>
            </S.WrapperContent>
        </S.Wrapper>

    )
}
