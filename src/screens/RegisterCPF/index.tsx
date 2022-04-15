import React, { useState } from 'react';
import * as S from './styles';
import HeaderRegister from '../../components/HeaderRegister'
import RegisterCPFStep1 from './RegisterCPFStep1'
import RegisterCPFStep2 from './RegisterCPFStep2'
import RegisterCPFStep3 from './RegisterCPFStep3'
import RegisterCPFStep4 from './RegisterCPFStep4'
import { postUserCpf } from './service';
import { userCPF } from './service'
import { useNavigation } from '@react-navigation/native';
import ModalAlert from '../../components/ModalAlert';
import Loading from '../../components/Loading';

const RegisterCPF: React.FC = () => {
    const navigation = useNavigation()
    const [step, setStep] = useState(1)
    const [userCPF, setUserCPF] = useState({} as userCPF)
    const [loading, setLoading] = useState(false)
    const [aviso, setAviso] = useState(false)
    async function postUser() {
        try{
            await postUserCpf(userCPF, navigation, setLoading, setAviso)
        }catch{
    
        }
    }
    function setUser(nome: string, value: any){
        if(nome === 'docCarteiraMotorista'){
            console.log('seto foto')
            let obj = {
                docCarteiraMotorista: value
            }
            let Data = Object.assign(userCPF, obj)
            console.log('seto foto', Data)

            setUserCPF({
                ...userCPF,
                [nome]: value    
            })
            return
        }
        setUserCPF({
            ...userCPF,
                [nome]: value    
        })
    }

    function stepComponete(name: number) {
        switch (name) {
            case 1:
                return <RegisterCPFStep1 setUser={setUser} setStep={setStep} step={step} />
            case 2:
                return <RegisterCPFStep2 setUser={setUser} setStep={setStep} step={step} />
            case 3:
                return <RegisterCPFStep3 setUser={setUser} setStep={setStep} step={step} />
            case 4:
                return <RegisterCPFStep4 postUser={postUser} setUser={setUser} setStep={setStep} step={step} />
            default:
                return 0
        }
    }

    return (
        <>
            <ModalAlert modal={aviso} setModal={setAviso} text={'houve um erro ao criar o usuário!'}/>
            <Loading loading={loading} setLoading={setLoading} mensage='Criando Usuário' />
            <S.Container>
                <HeaderRegister setStep={setStep} step={step} />
                {stepComponete(step)}
            </S.Container>
        </>
    )
}

export default RegisterCPF 
