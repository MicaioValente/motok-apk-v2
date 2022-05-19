import React, { useEffect, useState } from 'react';
import * as S from './styles'
import CardMoto from '../../components/CardMoto'
import StepPresentation from '../../components/StepPresentation'
import CardDescription from '../../components/CardDescription'
import CardHowWork from '../../components/CardHowWork'
import api from '../../service/api';
import { BackHandler } from 'react-native';
import ModalAlert from '../../components/ModalAlert';



const Presentation: React.FC = () => {
    const [ step, setStep ] = useState<number>(1)

    

    return (
        <>
            
            <S.Container>
                <S.ContainerScroll>
                    <S.CardScroll>
                    {step === 1 ? 
                        <CardMoto image={''} nameBike={''} description={['']} />
                    : step === 2 ?
                        <CardDescription />
                    : 
                        <CardHowWork />}
                    </S.CardScroll>
                </S.ContainerScroll>

                <StepPresentation step={step} setStep={setStep}/>
            </S.Container>
        </>

    )   

}

export default Presentation;