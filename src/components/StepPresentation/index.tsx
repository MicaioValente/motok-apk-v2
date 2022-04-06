import React from 'react';
import * as S from './styles';
import {LinearGradient} from 'expo-linear-gradient';
import { deg } from 'react-native-linear-gradient-degree';
import { useNavigation } from '@react-navigation/native';

interface StepPresentation {
    step: number
    setStep: Function
}

const StepPresentation = ({step, setStep}: StepPresentation) => {
    const navigation = useNavigation();


    function setStepMoreOne(){
        if(step <= 2){
            setStep(step + 1)
            return
        }
        setStep(1)
        navigation.navigate('ShowPlans');

    }
    return (
        <S.Container>
            <S.ContainerStep>
                <S.StepC color={step === 1} />
                <S.StepC color={step === 2} />
                <S.StepC color={step === 3} />
            </S.ContainerStep>

            <S.Title>continuar para os planos</S.Title>
            <S.ContainerArrow onPress={setStepMoreOne}>
                <S.ContainerLinearGradient
                    colors={["#FE1D16", "#FD3C14", "#FA7311"]}
                    locations={[0.06, 0.26, 0.92]}  {...deg(68)}
                    style={{ flex: 1, justifyContent: "center", alignItems: "center", borderRadius: 10 }} >

                    <S.Icon name="arrow-right" size={35} color="#1B191A" />
                </S.ContainerLinearGradient>
            </S.ContainerArrow>
        </S.Container>)
}

export default StepPresentation;