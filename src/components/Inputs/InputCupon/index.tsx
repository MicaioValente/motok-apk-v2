import React, { useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, View } from 'react-native';
import api from '../../../service/api';
import * as S from './style'
import ModalAlert from '../../ModalAlert';
import Spinner from 'react-native-loading-spinner-overlay';
import Loading from '../../Loading';

export default function InputCupon({step, setStep, setCupon} : any) {
    const [isFocused, setIsFocused] = useState(false);
    const [text, setText] = useState('');
    const [modal, setModal] = useState(false)
    const [modalSuccess, setModalSuccess] = useState(false)
    const [loading, setLoading] = useState(false);

    async function verifyCupon() {
        setLoading(!loading)

        await api.post(`Cupons/aplicar?codigo=${text}`)
        .then((response) => {
            setLoading(false)
            setCupon(response.data.valido)
            if(response.data.valido){
                setModalSuccess(!modalSuccess)
            }else{
                setModal(!modal)
            }
        }).catch((error) => {
            console.log('error', error)
        })
    }
    console.log('opopospdo', loading)
    

    return (<>
        <Loading loading={loading} setLoading={setLoading} mensage='Analisando Cupom' />
        <S.Wrapper>
            <S.WrapperContent>
                <S.Container>
                {isFocused ? <S.ContainerLine /> : null}

                    <S.Input 
                        placeholderTextColor="#E4E4E755" 
                        placeholder="CUPOMMOTOK-1" 
                        style={{color: '#fff'}}
                        onChangeText={text => setText(text)}
                        onBlur={() => setIsFocused(false)}
                        onFocus={() => setIsFocused(true)}
                        />
                </S.Container>
            </S.WrapperContent>
        </S.Wrapper>
        <S.ButtonAplicar onPress={() => verifyCupon()}>
            <S.TextButton style={{color: '#F14902'}}>APLICAR</S.TextButton>
        </S.ButtonAplicar>
        <ModalAlert modal={modalSuccess} setModal={setModalSuccess} text={'Cupom aplicado!'}/>
        <ModalAlert modal={modal} setModal={setModal} text={'Cupom não é valido!'}/>
        </>
    )
}
