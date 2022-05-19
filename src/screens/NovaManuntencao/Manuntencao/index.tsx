import React, { useState } from 'react';
import * as S from './styles'
import Counter from '../../../components/Counter'
import { deg } from 'react-native-linear-gradient-degree';
import InputRegister from '../../../components/Inputs/InputRegister'
import InputData from '../../../components/Inputs/InputData'
import {LinearGradient} from 'expo-linear-gradient';
import { Alert, StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import api from '../../../service/api';
import moment from 'moment';
import Loading from '../../../components/Loading';
import ModalComponent from '../../../components/Modal';

export type StepProps = {
    setStep?: Function
    step?: number
    setUser?: Function
    register?: boolean
    postUser?: Function
    route?: any
}

export default function RegisterCPFStep1({ step, setStep, route}: StepProps) {
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false)
    const [modalData, setModalData] = useState(false)
    const navigation = useNavigation<any>()
    const [manutencao, setManutencao] = useState<any>()

    async function postManutencao(){
      const dataSplit  = manutencao?.data.split('/')
      const data = `${dataSplit[1]}/${dataSplit[0]}/${dataSplit[2]}`
      let dataEHora = new Date(`${data}, ${manutencao?.hora}`)
      let dataHoje  = new Date()
      console.log('dataEHora', dataEHora)
      console.log('dataHoje', dataHoje)
      if(dataEHora < dataHoje || dataHoje == dataEHora){
        setModalData(true)
        console.log('igual')
        return
      }

      let dataReq = {
          idMoto: route.params.motoId,
          nomeManutencao: manutencao?.NManutencao,
          descricaoManutencao: manutencao?.DManutencao,
          dataEntrega: dataEHora?.toISOString(),
          dataEntrada:dataEHora?.toISOString(),
          sinistroId: 1
      }
      setLoading(true)

      console.log('dataReq2', dataReq)
      api.post('manutencoes', dataReq).then(
        function (response){
          console.log(response)
          if(response.status == 200){
              navigation.navigate('ManutencaoAgendada')
          }

        }
      ).catch(
        function (error){

          setModal(true)
          setLoading(false)
            console.log('error', error.response)

        }
      )
    }
    function setUser(nome: string, value: any){
      setManutencao({
          ...manutencao,
              [nome]: value    
      })
  }
  console.log(manutencao?.hora)
  console.log(manutencao?.data)
  let dataEHora = new Date(`${manutencao?.data}, ${manutencao?.hora}`)
  console.log('dataEHora', dataEHora)


    return (<>
        <Loading loading={loading} setLoading={setLoading} mensage='Cadastrando Manutençāo...' />
    
        <S.Container >
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
            <InputRegister mask={'99/99/9999'} name="data" setUser={setUser} border={false} placeholder="Ex. 10/10/2010" label="Data Entrada" />
            <InputRegister mask={'99:99'} name="hora" setUser={setUser} border={false} placeholder="Ex. 10:10" label="Hora de Entrada" />
            <S.Button onPress={() => postManutencao()} >
                <LinearGradient
                    colors={["#FE1D16", "#FD3C14", "#FA7311"]}
                    locations={[0.06, 0.26, 0.92]}  {...deg(68)}
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10
                    }}>
                    <S.TextButton>CONTINUAR</S.TextButton>
                </LinearGradient>
            </S.Button>
    </S.Container>
    <ModalComponent modalVisible={modal} setModalVisible={setModal}>
            <S.TextContainerLeft>Erro ao cadastrar Manutençāo</S.TextContainerLeft>
            <S.TextContainerLeft onPress={() => setModal(!modal)} style={{ marginLeft: 'auto', marginTop: 30, color: '#F14902'}}>OK!</S.TextContainerLeft>
        </ModalComponent>
        <ModalComponent modalVisible={modalData} setModalVisible={setModalData}>
            <S.TextContainerLeft>A data precisa ser maior que a data digitada</S.TextContainerLeft>
            <S.TextContainerLeft onPress={() => setModalData(!modalData)} style={{ marginLeft: 'auto', marginTop: 30, color: '#F14902'}}>OK!</S.TextContainerLeft>
        </ModalComponent>
    </>)
    
}
