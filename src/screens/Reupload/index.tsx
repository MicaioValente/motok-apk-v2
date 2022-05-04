import React, { useState, useEffect, useRef } from 'react';
import * as S from './styles';
import CardRegisterCNH from '../../components/CardRegisterCNH';
import CardRegisterCR from '../../components/CardRegisterCR';
import Counter from '../../components/Counter'
import { deg } from 'react-native-linear-gradient-degree';
import { RFValue } from 'react-native-responsive-fontsize';
import {LinearGradient} from 'expo-linear-gradient';
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid} from 'react-native';
import { Camera } from 'expo-camera';
import {FontAwesome} from '@expo/vector-icons'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../service/api';
import RegisterCNPJStep3 from '../RegisterCNPJ/RegisterCNPJStep3';

export default function Reupload() {
    const [camera, setCamera] = useState<boolean>(false);
    const [cameraResi, setCameraResi] = useState<boolean>(false);
    const [hasPermission, setHasPermission] = useState<any>(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [photo, setPhoto] = useState(null);
    const [userReup, setUserReup] = useState<any>();
    const [photoResi, setPhotoResi] = useState(null);
    const [cnh, setCnh] = useState<any>();
    const [res, setRes] = useState<any>();
    const camReft = useRef<any>(null)
    const navigation = useNavigation()
    
    function setUser(name: string, value: any){
        setUserReup({...userReup, [name]: value })
        // setUserCNPJ({
        //     ...userCNPJ,
        //         [nome]: value
        // })
    }


    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);
    useEffect(() => {
        (async () => {
            const token = await AsyncStorage.getItem('user');
            const userId = JSON.parse(token)
            setUserReup({...userReup, IdCliente: userId.idCliente })
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
            setUser('CarteiraMotorista',{
                uri: data.uri,
                type: "image/jpeg",
                name: dataSplit[dataSplit.length - 1]
            })
            setCnh({
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
            setUser('ComprovanteResidencia',{
                uri: data.uri,
                type: "image/jpeg",
                name: dataSplit[dataSplit.length - 1]
            })
            setRes({
                uri: data.uri,
                type: "image/jpeg",
                name: dataSplit[dataSplit.length - 1]
            })
            setPhotoResi(data.uri)
            setCameraResi(!cameraResi)

        }
    }

    // async function portUserAndValidate(){
    //     if(userReup.IdCliente && 
    //         userReup.ComprovanteResidencia &&
    //         userReup.docCarteiraMotorista
    //     ){
    //         await postUser()
    //     }else{
    //         ToastAndroid.show('Prencha todos os Campos', ToastAndroid.LONG);

    //     }
    // }
    async function postUser() {

        var formdata = new FormData();
        console.log(userReup.CarteiraMotorista)
        formdata.append("CarteiraMotorista", cnh );
        formdata.append("ComprovanteResidencia", res );
        formdata.append("IdCliente", userReup.IdCliente);

        console.log('dataRequest', formdata)
        api.put('Clientes/alterarImagens', formdata).then(function (response) {
            console.log('response', response)
        }).catch(function (error){
            console.log('error', error.response)
            // console.log('error', error)
            
            console.log('error', Object.keys(error.response))
        })
    }


    return (<>
        <S.ContainerScroll>
            <S.Container>
                <CardRegisterCNH validade={false} setUser={setUser} setCamera={setCamera} camera={camera} setPhoto={setPhoto} photo={photo} />
                <CardRegisterCR  setUser={setUser} setCameraResi={setCameraResi} cameraResi={cameraResi} setPhotoResi={setPhotoResi} photoResi={photoResi} />
                <S.ContainerBottom>
                    <S.ContainerButtomLeft onPress={() => navigation.navigate('Home')}>
                        <S.TextButtonLeft>VOLTAR</S.TextButtonLeft>
                    </S.ContainerButtomLeft>
                    <S.Button onPress={async () => await postUser()}>
                        <LinearGradient
                            colors={["#FE1D16", "#FD3C14", "#FA7311"]}
                            locations={[0.06, 0.26, 0.92]}  {...deg(68)}
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: RFValue(10)
                            }}>
                            <S.TextButton >SALVAR</S.TextButton>
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
