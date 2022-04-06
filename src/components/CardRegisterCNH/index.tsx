import React, { useState } from 'react';
import * as S from './styles';
import { deg } from 'react-native-linear-gradient-degree';
import CNH from '../../assets/carteiraCHN.svg'
import {LinearGradient} from 'expo-linear-gradient';
import Lixeira from '../../assets/lixeira.svg'
import { StyleSheet } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';
import * as DocumentPicker from 'expo-document-picker';
import ModalPre from '../../components/ModalPre'
import ModalExclusao from '../../components/ModalExclusao'
import InputDataMoment from '../Inputs/InputDataMoment';

type CardRegisterCNH = {
    setCamera: Function
    setPhoto: Function
    camera: boolean
    modalExclusao?: boolean
    photo: any
    setUser: Function
    setModalExclusao?: Function
}
export default function CardRegisterCNH({setCamera, camera, photo, setPhoto, setUser}: CardRegisterCNH ) {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisiblePre, setModalVisiblePre] = useState(true);
    const [modalOpenCamera, setModalOpenCamera] = useState(false);
    const [file, setFile] = useState(false);

    function ShowCamera() {
        setCamera(!camera)
        setModalOpenCamera(!modalOpenCamera)
    }
    
    async function ShowFiles() {
        let result: any = await DocumentPicker.getDocumentAsync({});
        setUser('docCarteiraMotorista', {
            uri: result.uri,
            type: result.mimeType,
            name: result.name
        })
        setPhoto(result.uri)
        setModalOpenCamera(false)
        setFile(true)
    }

    function excluirPhoto(){
        setModalVisible(true)
    }

return (<>
        <S.Container>
            {photo &&<> 
            <S.ContentImagem>
                <S.Imagem source={{uri: photo}} />
            </S.ContentImagem>
            <S.ContainerButton>
                <S.ContainerButtonEnviar onPress={() => {file ? ShowFiles() : setCamera(!camera)}} >
                    <S.TextButtonEnviar>ENVIAR NOVAMENTE</S.TextButtonEnviar>
                </S.ContainerButtonEnviar>
                <S.ContainerLixeira onPress={() => excluirPhoto()} >
                    <Lixeira />
                </S.ContainerLixeira>
            </S.ContainerButton>
            <InputDataMoment mask={'99-99-9999'} border={false} placeholder="Informe a validade da CNH" label="Validade da CNH"  name="ValidadeCarteira" setUser={setUser} />
            
            </> 
            }
            <ModalExclusao modalVisible={modalVisible} setModalVisible={setModalVisible} setPhoto={setPhoto} setUser={setUser} name={'docCarteiraMotorista'}/>
            
            <ModalPre modalVisiblePre={modalVisiblePre} setModalVisiblePre={setModalVisiblePre} />
            
            {!photo && 
            <S.Content>
                <CNH />
                <S.ContainerText>
                    <S.Title>CARTEIRA DE</S.Title>
                    <S.Title>MOTORISTA</S.Title>
                </S.ContainerText>
            </S.Content> 
                }
            {modalOpenCamera && 
                <S.ContainerIcons>
                    <S.ContainerIcon onPress={() => ShowCamera()} >
                        <S.CameraIcon />
                    </S.ContainerIcon>
                    <S.ContainerIcon onPress={() => ShowFiles()}>
                        <S.ImagemIcon />
                    </S.ContainerIcon>
                </S.ContainerIcons>
            }
            {!modalOpenCamera && !photo &&
            <S.Button onPress={() => setModalOpenCamera(!modalOpenCamera)}>
                <LinearGradient
                    colors={["#FE1D16", "#FD3C14", "#FA7311"]}
                    locations={[0.06, 0.26, 0.92]}  {...deg(68)}
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10
                    }}>
                    <S.TextButton >TIRE UMA FOTO OU PROCURE NA GALERIA</S.TextButton>
                </LinearGradient>
            </S.Button>}
        </S.Container>
    </>
    )
}

const styles = StyleSheet.create({
    ButtonModal: {
        backgroundColor: "#18181B",
        width: RFValue(125),
        height: RFValue(34),
        borderRadius: RFValue(10),
        justifyContent: "center",
        alignItems: "center",
    },
    TextButtonModal: {
        fontFamily: "Teko_300Light",
        fontSize: RFValue(20),
        color: "#F14902"
    },
    ButtonPre: {
        backgroundColor: "#18181B",
        width: RFValue(258),
        height: RFValue(34),
        borderRadius: RFValue(10),
        justifyContent: "center",
        alignItems: "center",
    }
});
