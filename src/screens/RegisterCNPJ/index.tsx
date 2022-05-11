import React, { useState } from 'react';
import * as S from './styles';
import HeaderRegister from '../../components/HeaderRegister'
import RegisterCNPJStep1 from './RegisterCNPJStep1'
import RegisterCNPJStep2 from './RegisterCNPJStep2'
import RegisterCNPJStep3 from './RegisterCNPJStep3'
import RegisterCNPJStep4 from './RegisterCNPJStep4'
import { postUserCNPJ, userCNPJ } from './service';
import { useNavigation } from '@react-navigation/native';
import ModalAlert from '../../components/ModalAlert';
import Loading from '../../components/Loading';

 
const RegisterCNPJ: React.FC = () => {
    const [step, setStep] = useState(1)
    const [userCNPJ, setUserCNPJ] = useState({} as userCNPJ)
    const navigation = useNavigation()
    const [loading, setLoading] = useState(false)
    const [aviso, setAviso] = useState(false)
   async function postUser() {
        try{
            await postUserCNPJ(userCNPJ, navigation, setLoading, setAviso)
        }catch{
    
        }
    }
    function setUser(nome: string, value: any){
        setUserCNPJ({
            ...userCNPJ,
                [nome]: value
        })
    }

    function stepComponete(name: number) {
        switch (name) {
            case 1:
                return <RegisterCNPJStep1 userCNPJ={userCNPJ} setUser={setUser}  setStep={setStep} step={step} />
            case 2:
                return <RegisterCNPJStep2 userCNPJ={userCNPJ} setUser={setUser}  setStep={setStep} step={step} />
            case 3:
                return <RegisterCNPJStep3 userCNPJ={userCNPJ} setUser={setUser}  setStep={setStep} step={step} />
            case 4:
                return <RegisterCNPJStep4 userCNPJ={userCNPJ}postUser={postUser} setUser={setUser}  setStep={setStep} step={step} />
            default:
                return 0
        }
    }

    return (
    <>
        <ModalAlert modal={aviso} setModal={setAviso} text={'houve um erro ao criar o usuário!'}/>
        <Loading loading={loading} setLoading={setLoading} mensage='Criando Usuário' />
        <S.Container>
            <HeaderRegister stepRegister setStep={setStep} step={step} />
            {stepComponete(step)}
        </S.Container>
    </>
    )
}

export default RegisterCNPJ;
