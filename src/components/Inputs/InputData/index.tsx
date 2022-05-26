import React, { useState } from 'react';
import * as S from './style';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

export type InputRegisterProps = {
    label: string
    placeholder: string
    setUser: Function
    value: string
    mask?: string | null
}

export default function InputData({placeholder, label, setUser, value}: InputRegisterProps) {

    const [isFocused, setIsFocused] = useState(false);
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [valueInput, setValueInput] = useState('');

    
    const onChange = (event: any, selectedDate: any) => {
        if (event?.type === 'dismissed') {
            setDate(date);
            return;
        }
        const dateMoment = moment(selectedDate)
        setValueInput(dateMoment.format('DD/MM/YYYY'))
        setUser('dataNascimento', dateMoment.toISOString())
        // console.log('diaNascimento', dateMoment.format('DD'))
        // setUser('diaNascimento', dateMoment.format('DD'))
        // setUser('mesNascimento', dateMoment.format('MM'))
        // setUser('anoNascimento', dateMoment.format('YYYY'))
        setShow(!show);
        setDate(selectedDate);
    };
  
    const showDatepicker = () => {
        setShow(!show);
    };
  
    return (
        <S.Wrapper onPress={showDatepicker}> 
            <S.Title>{label}</S.Title>
            <S.WrapperContent>
                {show ? (
                    <DateTimePicker
                        value={date ? date : new Date()}
                        mode={'date'}
                        is24Hour={true}
                        onChange={onChange}
                        maximumDate={new Date()}
                    />
                ): null}

                <S.Container>
                    <S.Title style={{color: value ? '#fff' : '#E4E4E755'}}> 
                        {value ? moment(value).format('DD/MM/YYYY') : 'Data de Nascimento'}
                    </S.Title>
                </S.Container>
                
            </S.WrapperContent>
        </S.Wrapper>
    )
}





// import React, { useState } from 'react';
// import { userCPF } from '../../../screens/RegisterCPF/service';
// import * as S from './style'

// export type InputDataProps = {
//     label: string
//     setUser: Function
//     value: userCPF
// }

// export default function InputData({ label, setUser, value }: InputDataProps) {
//     const [isFocused, setIsFocused] = useState(false);
//     const [isFocused2, setIsFocused2] = useState(false);
//     const [isFocused3, setIsFocused3] = useState(false);
//     return (
//         <S.Wrapper>
//             <S.Title>{label}</S.Title>
//             <S.WrapperContent>
//                 <S.Container>
//                 {isFocused ? <S.ContainerLine /> : null}
//                     <S.Input 
//                         placeholderTextColor="#E4E4E755" 
//                         style={{color: '#fff'}}
//                         placeholder="Dia" 
//                         keyboardType='numeric'
//                         maxLength={2}
//                         onChangeText={(text: string) => setUser('diaNascimento',text )}
//                         // onBlur={() => {setIsFocused(false)}}
//                         // onFocus={() => setIsFocused(true)}
//                         value={value.diaNascimento}
//                     />
//                 </S.Container>
//                 <S.Container>
//                 {isFocused2 ? <S.ContainerLine /> : null}
//                     <S.Input  
//                         placeholderTextColor="#E4E4E755" 
//                         placeholder="Mês"
//                         style={{color: '#fff'}}
//                         keyboardType='numeric'
//                         maxLength={2}
//                         onChangeText={(text: string) => setUser('mesNascimento',text )}
//                         // onBlur={() => {setIsFocused2(false)}}
//                         // onFocus={() => setIsFocused2(true)}
//                         value={value.mesNascimento}
//                     />
//                 </S.Container>
//                 <S.Container>
//                 {isFocused3 ? <S.ContainerLine /> : null}
//                     <S.Input  
//                         placeholderTextColor="#E4E4E755" 
//                         placeholder="Ano"
//                         style={{color: '#fff'}}
//                         keyboardType='numeric'
//                         value={value.anoNascimento}
//                         maxLength={4}
//                         onChangeText={(text: string) => setUser('anoNascimento',text )}
//                         // onBlur={() => {setIsFocused3(false)}}
//                         // onFocus={() => setIsFocused3(true)}
//                     />
//                 </S.Container>
//             </S.WrapperContent>
//         </S.Wrapper>
//     )
// }
