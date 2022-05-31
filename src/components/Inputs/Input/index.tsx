import React, { useState } from 'react';
import * as S from './style'

export type InputProps = {
    iconLeft: string
    iconRight: string
    placeholder: string
    nome: string
    setUser: Function

}

export default function Input({ placeholder, iconRight, iconLeft,nome, setUser }: InputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');

    function setUserCpfOrCnpj(text: string) {
        setText(text)
        if(nome === 'cpf'){
            if(text.length > 14){
                setUser('cnpj', text)
                return
            }
            if(text.length <= 14){

                setUser('cpf', text)

                return
            }
            return
        }
        setUser(nome, text)
    }

    return(
     <S.Wrapper>
            {isFocused ? <S.ContainerLine /> : null}
        <S.Container>
            <S.Touch>
                <S.Icon color="#E4E4E7" name={iconLeft} size={20} />
            </S.Touch>
            {nome === 'cpf' ? (
                <>
                    <S.InputMask
                        placeholderTextColor="#E4E4E755"  
                        style={{color: '#fff'}}
                        mask={["999.999.999-99", "99.999.999/9999-99"]}
                        keyboardType="numeric"
                        placeholder={placeholder}
                        value={text} 
                        text={text}
                        onChangeText={(text: string) => setUserCpfOrCnpj(text)}
                        onBlur={() => setIsFocused(false)}
                        onFocus={() => setIsFocused(true)}
                        />
                    <S.Touch onPress={() => setText('')}>
                    </S.Touch>
                </>
            ):(
                <>
                    <S.Input 
                        placeholderTextColor="#E4E4E755"  
                        style={{color: '#fff'}}
                        placeholder={placeholder} 
                        onChangeText={(text: string) => setUser(nome, text)}
                        onBlur={() => setIsFocused(false)}
                        onFocus={() => setIsFocused(true)}
                        secureTextEntry={!show}
                        />
                    <S.Touch onPress={() => setShow(!show)}>
                        <S.Icon color="#9CA3AF" name={!show ? 'eye-off' : iconRight } size={20} />
                    </S.Touch>
                </>

            )}
        </S.Container>
    </S.Wrapper>
    )
}
