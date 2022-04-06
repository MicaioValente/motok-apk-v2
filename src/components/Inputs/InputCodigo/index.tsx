import React, { useState } from 'react';
import * as S from './style'

export type InputDataProps = {
    label: string

}

export default function InputCodigo({ label, ...props }: InputDataProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [isFocused2, setIsFocused2] = useState(false);
    const [isFocused3, setIsFocused3] = useState(false);
    const [isFocused4, setIsFocused4] = useState(false);

    return (
        <S.Wrapper>
            <S.Title>{label}</S.Title>
            <S.WrapperContent>
                <S.Container>
                {isFocused ? <S.ContainerLine /> : null}
                <S.Input 
                    placeholderTextColor="#E4E4E755" 
                    placeholder="-" 
                    {...props} 
                    onBlur={() => setIsFocused(false)}
                    onFocus={() => setIsFocused(true)}
                />
                </S.Container>
                <S.Container>
                {isFocused2 ? <S.ContainerLine /> : null}
                <S.Input 
                    placeholderTextColor="#E4E4E755" 
                    placeholder="-" 
                    {...props} 
                    onBlur={() => setIsFocused2(false)}
                    onFocus={() => setIsFocused2(true)}
                />
                </S.Container>
                <S.Container>
                {isFocused3 ? <S.ContainerLine /> : null}
                <S.Input 
                    placeholderTextColor="#E4E4E755" 
                    placeholder="-" 
                    {...props} 
                    onBlur={() => setIsFocused3(false)}
                    onFocus={() => setIsFocused3(true)}
                />
                </S.Container>
                <S.Container>
                {isFocused4 ? <S.ContainerLine /> : null}
                <S.Input 
                    placeholderTextColor="#E4E4E755" 
                    placeholder="-" 
                    {...props} 
                    onBlur={() => setIsFocused4(false)}
                    onFocus={() => setIsFocused4(true)}
                />
                </S.Container>
            </S.WrapperContent>
        </S.Wrapper>
    )
}
