import React, { useState } from 'react';
import * as S from './style';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

export type InputRegisterProps = {
    label: string
    placeholder: string
    border: boolean
    setUser: Function
    name: string
    value: string
    mask?: string | null
}

export default function InputDataMoment({ border, placeholder, label, setUser, name, mask, value}: InputRegisterProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [valueInput, setValueInput] = useState('');

    
    const onChange = (event: any, selectedDate: any) => {
        const dateMoment = moment(selectedDate)
        setValueInput(dateMoment.format('DD/MM/YYYY'))
        setUser(name, dateMoment.format('DD/MM/YYYY'))
        console.log('show')
        setShow(!show);
        setDate(selectedDate);
    };
  
    const showDatepicker = () => {
        console.log(222, show)
        setShow(!show);
    };
  
    return (
        <S.Wrapper>
            <S.Title>{label}</S.Title>
            <S.WrapperContent>

                {show ? (
                    <DateTimePicker
                        value={date}
                        mode={'date'}
                        is24Hour={true}
                        onChange={onChange}
                    />
                ): null}

                <S.Container border={border}>

                    <S.Input
                        keyboardType="numeric"
                        onChangeText={(text: string) => setUser(name, text)}
                        placeholderTextColor="#E4E4E755" 
                        placeholder={placeholder} 
                        style={{color: '#fff'}}
                        onFocus={() => showDatepicker()}
                        onBlur={() => setIsFocused(false)}
                        value={valueInput}
                    />

                </S.Container>
                
            </S.WrapperContent>
        </S.Wrapper>
    )
}
