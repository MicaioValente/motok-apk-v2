import React, { useState } from 'react';
import * as S from './style'

export type InputEndereco = {
    setUser?: Function 
    name: string 
    placeholder?: string
}

export default function InputRegister({setUser, name}: InputEndereco) {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <S.Wrapper>
            <S.Title>CEP</S.Title>
            <S.WrapperContent>
                <S.Container>
                {isFocused ? <S.ContainerLine /> : null}

                    <S.Input 
                        mask="99999-999"
                        placeholderTextColor="#E4E4E755" 
                        keyboardType="numeric"
                        placeholder="Insira o CEP" 
                        style={{color: '#fff'}}
                        onChangeText={(text:string) => setUser(name, text)}
                        onBlur={() => setIsFocused(false)}
                        onFocus={() => setIsFocused(true)}
                        />
                </S.Container>
            </S.WrapperContent>
        </S.Wrapper>
    )
}
