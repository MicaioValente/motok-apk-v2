import React, { useState } from 'react';
import * as S from './style'
import { MaskedTextInput} from "react-native-mask-text";
export type InputRegisterProps = {
    label: string
    placeholder: string
    border: boolean
    setUser: Function
    name: string
    mask?: string | null
}

export default function InputDataMoment({ border, placeholder, label, setUser, name, mask}: InputRegisterProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [text, setText] = useState('');



    function setUserAndSetIsFocused() {
        const dataArray = text.split('-') 
        const data = dataArray[1] + '-' + dataArray[0] + '-' + dataArray[2]
        setUser(name, data )
        setIsFocused(false)
    }
    return (
        <S.Wrapper>
            <S.Title>{label}</S.Title>
            <S.WrapperContent>

                <S.Container border={border}>
                {isFocused ? <S.ContainerLine /> : null}
                <S.MaskInput
                    mask={mask}
                    keyboardType="numeric"
                    onChangeText={(text: string) => setText(text)}
                    placeholderTextColor="#E4E4E755" 
                    placeholder={placeholder} 
                    style={{color: '#fff'}}
                    onBlur={() => setUserAndSetIsFocused()}
                    onFocus={() => setIsFocused(true)} 
                />
    
                </S.Container>
            </S.WrapperContent>
        </S.Wrapper>
    )
}
