import React, { useState } from 'react';
import { userCPF } from '../../../screens/RegisterCPF/service';
import * as S from './style'

export type InputDataProps = {
    label: string
    setUser: Function
    value: userCPF
}

export default function InputData({ label, setUser, value }: InputDataProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [isFocused2, setIsFocused2] = useState(false);
    const [isFocused3, setIsFocused3] = useState(false);
    return (
        <S.Wrapper>
            <S.Title>{label}</S.Title>
            <S.WrapperContent>
                <S.Container>
                {isFocused ? <S.ContainerLine /> : null}
                    <S.Input 
                        placeholderTextColor="#E4E4E755" 
                        style={{color: '#fff'}}
                        placeholder="Dia" 
                        keyboardType='numeric'
                        maxLength={2}
                        onChangeText={(text: string) => setUser('diaNascimento',text )}
                        onBlur={() => {setIsFocused(false)}}
                        onFocus={() => setIsFocused(true)}
                        value={value.diaNascimento}
                    />
                </S.Container>
                <S.Container>
                {isFocused2 ? <S.ContainerLine /> : null}
                    <S.Input  
                        placeholderTextColor="#E4E4E755" 
                        placeholder="Mês"
                        style={{color: '#fff'}}
                        keyboardType='numeric'
                        maxLength={2}
                        onChangeText={(text: string) => setUser('mesNascimento',text )}
                        onBlur={() => {setIsFocused2(false)}}
                        value={value.mesNascimento}
                        onFocus={() => setIsFocused2(true)}
                    />
                </S.Container>
                <S.Container>
                {isFocused3 ? <S.ContainerLine /> : null}
                    <S.Input  
                        placeholderTextColor="#E4E4E755" 
                        placeholder="Ano"
                        style={{color: '#fff'}}
                        keyboardType='numeric'
                        value={value.anoNascimento}
                        maxLength={4}
                        onChangeText={(text: string) => setUser('anoNascimento',text )}
                        onBlur={() => {setIsFocused3(false)}}
                        onFocus={() => setIsFocused3(true)}
                    />
                </S.Container>
            </S.WrapperContent>
        </S.Wrapper>
    )
}
