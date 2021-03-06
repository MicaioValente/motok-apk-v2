import React from 'react';
import * as S from './styles'
import { deg } from 'react-native-linear-gradient-degree';
import { RFValue } from 'react-native-responsive-fontsize';
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { ToastAndroid } from 'react-native';

export default function HeaderRegister({ step, setStep, register, title, route, stepRegister, boletoPlanoGerado, boletoCaucaoGerado} : any) {
    const navigation = useNavigation()

    function goBack() {
        if(boletoPlanoGerado || boletoCaucaoGerado){
            ToastAndroid.show('Finalize o pagamento', ToastAndroid.LONG)
            return
        }


        if(step === 1){
            if(route){
                navigation.navigate('Home')
    
                return
            }
            navigation.navigate('Register')
        return
        }
        setStep(step - 1);
    }

    return (
        <S.Container style={{marginTop: stepRegister ? 0 : 25}}>
            <S.Content>
                <S.ContainerArrow onPress={() => goBack()}>
                    <S.Icon name="arrow-back" size={25} color="#E4E4E7" />
                </S.ContainerArrow>
                <S.ContainerText>
                    <S.Title>{title ? title : 'CADASTRO'}</S.Title>
                </S.ContainerText>
                {/* <S.ContainerQuestion>
                    <S.Icon name="help" size={20} color="#E4E4E7" />
                </S.ContainerQuestion> */}
            </S.Content>
            <S.UnderLine>
                <LinearGradient
                    colors={["#FE1D16", "#FD3C14", "#FA7311"]}
                    locations={[0.06, 0.26, 0.92]}  {...deg(68)}
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: RFValue(10)
                    }} />
            </S.UnderLine>
        </S.Container>
    )
}
