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
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { URL } from '../../service/url';
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
    const navigation = useNavigation<any>()
    
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
        formdata.append("CarteiraMotorista", userReup?.docCarteiraMotorista);
        formdata.append("ComprovanteResidencia",  userReup?.docComprovanteResidencia );
        formdata.append("IdCliente", userReup.IdCliente);
        formdata.append("HaveComprovanteResidencia", userReup?.docComprovanteResidencia ? true : false);
        formdata.append("HaveCarteiraMotorista", userReup?.docCarteiraMotorista ? true : false);
        var requestOptions = {
            method: 'PUT',
            body: formdata,
            };
        fetch(`${URL}Clientes/alterarImagens`, requestOptions)
        .then(response => response.json())
            // .then(result => navigation.reset({ routes: [{ name: 'Home' }] }))
            // .then(result => console.log(result.success))
          .then(result => result?.success ? navigation.navigate('Home') : ToastAndroid.show(`${result?.message}`, ToastAndroid.LONG) )
        //   .then(result => result.status == 201 ? navigation.navigate('SignIn') : null)
        // .then(result => redirect(result))
        .catch(error => console.log(error));
            return
    }
    
    return (<>
        <S.ContainerScroll>
            <S.Container>
                <CardRegisterCNH setCnh={setCnh} validade={false} setUser={setUser} setCamera={setCamera} camera={camera} setPhoto={setPhoto} photo={photo} />
                <CardRegisterCR  setRes={setRes} setUser={setUser} setCameraResi={setCameraResi} cameraResi={cameraResi} setPhotoResi={setPhotoResi} photoResi={photoResi} />
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
