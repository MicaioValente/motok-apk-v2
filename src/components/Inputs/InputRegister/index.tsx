import React, { useState } from 'react';
import * as S from './style'

export type InputRegisterProps = {
    label: string
    placeholder: string
    border: boolean
    setUser: Function
    name: string
    mask?: string | null
    value: string
}

export default function InputRegister({ border, placeholder, label, setUser, name, mask, value}: InputRegisterProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [text, setText] = useState('');


    function setUserAndSetIsFocused() {
        const dataArray = text.split('-') 
        const data = dataArray[1] + '-' + dataArray[0] + '-' + dataArray[2]
        setUser(name, data )
        setIsFocused(false)
    }

    function setDataAnd(text:string) {
        setText(text)
        setUser(name, text, null )
    }
    return (
        <S.Wrapper>
            <S.Title>{label}</S.Title>
            <S.WrapperContent>

                <S.Container border={border}>
                {isFocused ? <S.ContainerLine /> : null}
                {mask ?(
                    <S.MaskInput
                        mask={mask}
                        keyboardType="numeric"
                        onChangeText={(text: string) =>  setDataAnd(text)}
                        placeholderTextColor="#E4E4E755" 
                        placeholder={placeholder} 
                        style={{color: '#fff'}}
                        onBlur={() => name === 'DataAberturaEmpresaCliente' ? setUserAndSetIsFocused() : setIsFocused(false)}
                        onFocus={() => setIsFocused(true)}
                        value={value} 
                    />
                ) : (
                    <S.Input 
                        onChangeText={(text: string) => setUser(name, text, null )}
                        placeholderTextColor="#E4E4E755" 
                        placeholder={placeholder} 
                        style={{color: '#fff'}}
                        autoCapitalize='none'
                        onBlur={() => setIsFocused(false)}
                        onFocus={() => setIsFocused(true)}
                        value={value} 
                    />
                )}
                </S.Container>
            </S.WrapperContent>
        </S.Wrapper>
    )
}
