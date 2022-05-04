import React, { useState } from 'react';
import * as S from './styles'
import Counter from '../../../components/Counter'
import { deg } from 'react-native-linear-gradient-degree';
import InputRegister from '../../../components/Inputs/InputRegister'
import InputData from '../../../components/Inputs/InputData'
import {LinearGradient} from 'expo-linear-gradient';
import { StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import api from '../../../service/api';
import moment from 'moment';

export type StepProps = {
    setStep?: Function
    step?: number
    setUser?: Function
    register?: boolean
    postUser?: Function
    route?: any
}

export default function RegisterCPFStep1({ step, setStep, route}: StepProps) {
    const [segundaParte, setSegundaParte] = useState(false)
    const navigation = useNavigation()
    const [manutencao, setManutencao] = useState<any>()
    console.log(route.params.motoId)
    async function postManutencao(){
      let dataReq = {
          idMoto: route.params.motoId,
          nomeManutencao: manutencao?.NManutencao,
          descricaoManutencao: manutencao?.DManutencao,
          dataEntrega: moment(manutencao?.data),
          dataEntrada: moment(manutencao?.data),
          sinistroId: null
      }
      console.log(dataReq)
      navigation.navigate('ManutencaoAgendada')
      // api.post('manutencoes', dataReq).then(
      //   function (response){
      //     // params
      //   }
      // ).catch(
      //   function (error){

      //   }
      // )
    }
    function setUser(nome: string, value: any){
      setManutencao({
          ...manutencao,
              [nome]: value    
      })
  }
  console.log(manutencao)

    return <S.Container >
                <InputRegister 
                  border={false} 
                  placeholder="Nome Manuntenção" 
                  label="Nome Manuntenção"  
                  name="NManutencao" 
                  setUser={setUser} />

                <InputRegister 
                  border={false} 
                  placeholder="Descrição da Manuntenção " 
                  label="Descrição da Manuntenção"  
                  name="DManutencao" 
                  setUser={setUser} />
            <InputRegister mask={'99-99-9999'} name="data" setUser={setUser} border={false} placeholder="Ex. 10-10-2010" label="Data Entrada" />
            <S.Button segundaParte={segundaParte} onPress={() => postManutencao()} >
                <LinearGradient
                    colors={["#FE1D16", "#FD3C14", "#FA7311"]}
                    locations={[0.06, 0.26, 0.92]}  {...deg(68)}
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10
                    }}>
                    <S.TextButton >{segundaParte ? "PRÓXIMO" : "CONTINUAR"}</S.TextButton>
                </LinearGradient>
            </S.Button>
    </S.Container>
}
