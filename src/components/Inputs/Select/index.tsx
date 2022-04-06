import React, { useEffect, useState } from 'react';
import * as S from './style'
import {Picker} from '@react-native-picker/picker';
import api from '../../../service/api';

export type InputRegisterProps = {
    border: boolean
    setUser: Function
}

export type Estados = {
    id: Number
    nome: string
    uf: string
    ibge: Number
    pais: Number
    ddd: string
  }
  
  export type Cidades = {
    id: Number
    nome: string
    uf: string
    ibge: Number
  }
  

export default function Select({ border, setUser}: InputRegisterProps) {
    const [isFocused, setIsFocused] = useState(false);

    const [ estados, setEstados ] = useState<Estados[]>([] as Estados[])
    const [ cidades, setCidades ] = useState<Cidades[]>([] as Cidades[])
    const [ idEstado, setIdEstado] = useState<Number>(1)
    const [ idCidade, setIdCidade] = useState<Number>()
    useEffect(() => {
    api.get(`util/estados`)
        .then(async function (response) {
            setEstados(response.data)
        })
        .catch(function (error) {
            console.log('setToken error', error)
        });
    }, [])
    
    useEffect(() => {
        api.get(`util/cidades/${idEstado}`)
            .then(async function (response) {
                setCidades(response.data)
            })
            .catch(function (error) {
                console.log('setToken error', error)
            });
        }, [idEstado])

    function userlocal(name: string, value: Number){
        if(name == 'estatoClienteId' ){
           setIdEstado(value) 
           setUser(name, value)
           return
        }
        setIdCidade(value)
        setUser(name, value)

    }
        
    return (<>
        <S.Wrapper>
            <S.Title>Estado</S.Title>
            <S.WrapperContent>

                <S.Container border={border}>
                {isFocused ? <S.ContainerLine /> : null}
                <S.PickerStyled
                    dropdownIconColor={'#fff'}
                    selectedValue={idEstado}
                    onValueChange={(itemValue: number) => userlocal('estatoClienteId', itemValue)}
                    
                >
                    {estados.length > 0 &&
                      estados.map((item, index) => (
                        <Picker.Item value={item.id} label={item.nome} />
                      )) }
                </S.PickerStyled>
                </S.Container>
            </S.WrapperContent>
        </S.Wrapper>
        <S.Wrapper>
            <S.Title>Cidade</S.Title>
            <S.WrapperContent>

                <S.Container border={border}>
                {isFocused ? <S.ContainerLine /> : null}
                <S.PickerStyled
                    dropdownIconColor={'#fff'}
                    selectedValue={idCidade}
                    onValueChange={(itemValue: number) => userlocal('cidadeClienteId', itemValue)}
                >
                    {cidades.length > 0 &&
                      cidades.map((item, index) => (
                        <Picker.Item value={item.id} label={item.nome} />
                      )) }
                </S.PickerStyled>
                </S.Container>
            </S.WrapperContent>
        </S.Wrapper>
    </>

    )
}
