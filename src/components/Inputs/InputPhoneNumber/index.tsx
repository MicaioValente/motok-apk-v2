import React, { useState } from 'react';
import * as S from './style'
export type InputRegisterProps = {
    label: string
    placeholder: string
    border: boolean
    setUser: Function
    value: string
}

export default function InputPhoneNumber({ border, placeholder, label, setUser, value }: InputRegisterProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [text, setText] = useState(value);

    return (
        <S.Wrapper>
            <S.Title>{label}</S.Title>
            <S.WrapperContent>
                <S.Container border={border}>
                {isFocused ? <S.ContainerLine /> : null}
                    <S.Input 
                        placeholderTextColor="#E4E4E755" 
                        placeholder={placeholder} 
                        keyboardType='numeric'
                        style={{color: '#fff'}}
                        onChangeText={(text: string) => {setUser('telefoneCliente', text), setText(text)}}
                        onBlur={() => setIsFocused(false)}
                        onFocus={() => setIsFocused(true)}
                        value={ text ? text.replace(/[^\d]/g, "").replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3") : ""}
                        maxLength={15}
                    />
                </S.Container>
            </S.WrapperContent>
        </S.Wrapper>
    )
}
