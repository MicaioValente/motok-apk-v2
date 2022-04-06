import React, { useState } from 'react';
import * as S from './styles'

export type InputAuto = {
    title: string
    placeholder: string
    nome: string
}
export default function InputAuto({title, placeholder, nome}: InputAuto) {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <S.Wrapper>
            <S.Title>{title}</S.Title>
            <S.WrapperContent>
                <S.Container>
                {isFocused ? <S.ContainerLine /> : null}

                    <S.Input 
                        placeholderTextColor="#E4E4E755" 
                        placeholder={placeholder}
                        name={nome} 
                        onBlur={() => setIsFocused(false)}
                        onFocus={() => setIsFocused(true)}
                        />
                </S.Container>
            </S.WrapperContent>
        </S.Wrapper>
    )
}
