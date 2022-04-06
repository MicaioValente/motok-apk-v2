import React, { useState } from 'react';
import * as S from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { deg } from 'react-native-linear-gradient-degree';
import Residencia from '../../assets/residencia.svg'
import Lixeira from '../../assets/lixeira.svg'
import * as DocumentPicker from 'expo-document-picker';
import ModalExclusao from '../../components/ModalExclusao'
type CardRegisterCR = {
    setCameraResi: Function
    cameraResi: boolean
    setPhotoResi: Function
    photoResi: any
    setUser: Function
}

const CardRegisterCR = ({ setCameraResi, cameraResi, setPhotoResi, photoResi, setUser }: CardRegisterCR) => {
    const [modalOpenCamera, setModalOpenCamera] = useState(false);
    const [file, setFile] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    function ShowCamera() {
        setCameraResi(!cameraResi)
        setModalOpenCamera(!modalOpenCamera)

    }
    const dados = {
        name: 'c',
        size: '',
        type: '',
        webkitRelativePath: ''
    }
    async function ShowFiles() {
        let result: any = await DocumentPicker.getDocumentAsync({});
        setPhotoResi(result.uri)
        setUser('docComprovanteResidencia', {
            uri: result.uri,
            type: result.mimeType,
            name: result.name
        })
        setModalOpenCamera(false)
        setFile(true)
    }
    function excluirPhoto(){
        setModalVisible(true)
    }


    return (
        <S.Container>
            {photoResi && <>
                <S.ContentImagem>
                    <S.Imagem source={{ uri: photoResi }} />
                </S.ContentImagem>
                <S.ContainerButton>
                    <S.ContainerButtonEnviar onPress={() => { file ? ShowFiles() : setCameraResi(!cameraResi) }}>
                        <S.TextButtonEnviar>ENVIAR NOVAMENTE</S.TextButtonEnviar>
                    </S.ContainerButtonEnviar>
                    <S.ContainerLixeira onPress={() => excluirPhoto()} >
                        <Lixeira />
                    </S.ContainerLixeira>
                </S.ContainerButton>
            </>}
            <ModalExclusao modalVisible={modalVisible} setModalVisible={setModalVisible} setPhoto={setPhotoResi} setUser={setUser} name={'docComprovanteResidencia'}/>

            {!photoResi &&
                <S.Content>
                    <Residencia />
                    <S.ContainerText>
                        <S.Title>COMPROVANTE</S.Title>
                        <S.Title>residência</S.Title>
                    </S.ContainerText>
                </S.Content>
            }
            {modalOpenCamera &&
                <S.ContainerIcons>
                    <S.ContainerIcon onPress={() => ShowCamera()}>
                        <S.CameraIcon />
                    </S.ContainerIcon>
                    <S.ContainerIcon onPress={() => ShowFiles()}>
                        <S.ImagemIcon />
                    </S.ContainerIcon>
                </S.ContainerIcons>
            }
            {!modalOpenCamera && !photoResi &&
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
        </S.Container>)
}

export default CardRegisterCR;