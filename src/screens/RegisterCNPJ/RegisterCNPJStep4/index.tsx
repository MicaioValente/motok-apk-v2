import React, { useState, useEffect, useRef } from 'react';
import * as S from './styles';
import CardRegisterCNH from '../../../components/CardRegisterCNH';
import CardRegisterCR from '../../../components/CardRegisterCR';
import Counter from '../../../components/Counter'
import { deg } from 'react-native-linear-gradient-degree';
import { RFValue } from 'react-native-responsive-fontsize';
import {LinearGradient} from 'expo-linear-gradient';
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid} from 'react-native';
import { Camera } from 'expo-camera';
import {FontAwesome} from '@expo/vector-icons'

export default function RegisterCPFStep4({ userCNPJ, postUser, setStep, step, setUser }: any) {
    const [camera, setCamera] = useState<boolean>(false);
    const [cameraResi, setCameraResi] = useState<boolean>(false);
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [photo, setPhoto] = useState(null);
    const [photoResi, setPhotoResi] = useState(null);
    const camReft = useRef<any>(null)

    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);
    
    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    async function takePicture(){
        if(camReft){
            const data = await camReft.current.takePictureAsync()
            const dataSplit = data.uri.split('/')
            setUser('docCarteiraMotorista',{
                uri: data.uri,
                type: "image/jpeg",
                name: dataSplit[dataSplit.length - 1]
            })
            setPhoto(data.uri)
            setCamera(!camera)
        }
    }

    async function takePictureResi(){
        if(camReft){
            const data = await camReft.current.takePictureAsync()
            const dataSplit = data.uri.split('/')
            setUser('docComprovanteResidencia',{
                uri: data.uri,
                type: "image/jpeg",
                name: dataSplit[dataSplit.length - 1]
            })
            setPhotoResi(data.uri)
            setCameraResi(!cameraResi)

        }
    }

    async function portUserAndValidate(){
        if(userCNPJ.ValidadeCarteira && 
            userCNPJ.docComprovanteResidencia &&
            userCNPJ.docCarteiraMotorista
        ){
            await postUser()
        }else{
            ToastAndroid.show('Prencha todos os Campos', ToastAndroid.LONG);

        }
    }
       
    return (<>
        <S.ContainerScroll>
            <S.Container>
                <Counter Label={"Dados Pessoais"} setStep={setStep} step={step} />
                <CardRegisterCNH validade={true} setUser={setUser} setCamera={setCamera} camera={camera} setPhoto={setPhoto} photo={photo} />
                <CardRegisterCR  setUser={setUser} setCameraResi={setCameraResi} cameraResi={cameraResi} setPhotoResi={setPhotoResi} photoResi={photoResi} />
                <S.ContainerBottom>
                    <S.ContainerButtomLeft >
                        <S.TextButtonLeft>VOLTAR</S.TextButtonLeft>
                    </S.ContainerButtomLeft>
                    <S.Button onPress={() => portUserAndValidate()}>
                        <LinearGradient
                            colors={["#FE1D16", "#FD3C14", "#FA7311"]}
                            locations={[0.06, 0.26, 0.92]}  {...deg(68)}
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: RFValue(10)
                            }}>
                            <S.TextButton >PRÓXIMO</S.TextButton>
                        </LinearGradient>
                    </S.Button>
                </S.ContainerBottom>
            </S.Container>
        </S.ContainerScroll>
        {camera && 
            <Camera style={styles.camera} type={type} ref={camReft}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {setCamera(!camera)}}>
                        <Text style={styles.text}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icon} onPress={() => takePicture()}>
                    <FontAwesome name="camera" size={30} color="#fff" />
                </TouchableOpacity>


            </Camera>
        }
         {cameraResi && 
            <Camera style={styles.camera} type={type} ref={camReft}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {setCameraResi(!cameraResi)}}>
                        <Text style={styles.text}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icon} onPress={() => takePictureResi()}>
                    <FontAwesome name="camera" size={30} color="#fff" />
                </TouchableOpacity>
            </Camera>
        }
    </>

    )
}

const styles = StyleSheet.create({
    camera: {
      flex: 1,
      width: '100%',
      position: 'absolute',
      height: '100%'
    },
    icon: {
        marginLeft: 'auto',
        width: '70%',
        marginTop: 'auto',
        marginRight: 'auto',
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        position: 'absolute',
        bottom: 24,
        left: 20,
    },
    text: {
        fontSize: 18,
        width: 60,
        color: 'white',
        fontWeight: 'bold',
    },
});
