import React, { useState } from 'react';
import * as S from './styles';
import HeaderRegister from '../../components/HeaderRegister'
import RegisterCNPJStep1 from './RegisterCNPJStep1'
import RegisterCNPJStep2 from './RegisterCNPJStep2'
import RegisterCNPJStep3 from './RegisterCNPJStep3'
import RegisterCNPJStep4 from './RegisterCNPJStep4'
import { postUserCNPJ, userCNPJ } from './service';
import { useNavigation } from '@react-navigation/native';

 
const RegisterCNPJ: React.FC = () => {
    const [step, setStep] = useState(1)
    const [userCNPJ, setUserCNPJ] = useState({} as userCNPJ)
    const navigation = useNavigation()
   async function postUser() {
        try{
            await postUserCNPJ(userCNPJ, navigation)
        }catch{
    
        }
    }
    function setUser(nome: string, value: any){
        setUserCNPJ({
            ...userCNPJ,
                [nome]: value
        })
    }
    console.log('req', userCNPJ)

    function stepComponete(name: number) {
        switch (name) {
            case 1:
                return <RegisterCNPJStep1 setUser={setUser}  setStep={setStep} step={step} />
            case 2:
                return <RegisterCNPJStep2 setUser={setUser}  setStep={setStep} step={step} />
            case 3:
                return <RegisterCNPJStep3 setUser={setUser}  setStep={setStep} step={step} />
            case 4:
                return <RegisterCNPJStep4  postUser={postUser}  setUser={setUser}  setStep={setStep} step={step} />
            default:
                return 0
        }
    }

    return (
        <S.Container>
            <HeaderRegister setStep={setStep} step={step} />
            {stepComponete(step)}
        </S.Container>
    )
}

export default RegisterCNPJ;
