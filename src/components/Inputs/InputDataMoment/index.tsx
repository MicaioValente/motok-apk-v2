import React, { useState } from 'react';
import * as S from './style';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { Platform } from 'react-native';

export type InputRegisterProps = {
    label: string
    placeholder: string
    border: boolean
    setUser: Function
    name: string
    value: string
    mask?: string | null
}

export default function InputDataMoment({ label, setUser, name}: InputRegisterProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [valueInput, setValueInput] = useState('');

    
    function onChange(event: any, selectedDate: any) {
        if (event?.type === 'dismissed') {
            setDate(date);
            return;
        }
        const dateMoment = moment(selectedDate)
        setValueInput(dateMoment.format('DD/MM/YYYY'))
        setUser(name, dateMoment.format('DD/MM/YYYY'))
        setShow(!show);
        setDate(selectedDate);
    };
  
    const showDatepicker = () => {
        setShow(!show);
    };
  
    return (
        <S.Wrapper onPress={ showDatepicker}>
            <S.Title>{label}</S.Title>
            <S.WrapperContent>

                {show ? (
                    <DateTimePicker
                        value={date}
                        mode={'date'}
                        is24Hour={true}
                        onChange={(event:any, selectedDate:any) => {
                            setShow(Platform.OS === 'ios'),
                            onChange(event, selectedDate)
                        }}
                    />
                ): null}

                <S.Container>
                    {/* <S.Input
                        keyboardType="numeric"
                        onChangeText={(text: string) => setUser(name, text)}
                        placeholderTextColor="#E4E4E755" 
                        placeholder={placeholder} 
                        style={{color: '#fff'}}
                        onFocus={() => showDatepicker()}
                        onBlur={() => setIsFocused(false)}
                        value={valueInput}
                    /> */}
                    <S.Title style={{color: valueInput ? '#fff' : '#E4E4E755'}}> 
                        {valueInput ? valueInput : 'Data de Vencimento'}
                    </S.Title>
                </S.Container>
                
            </S.WrapperContent>
        </S.Wrapper>
    )
}

