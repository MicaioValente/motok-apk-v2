import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function postLogin(data: Object, navigation: any) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer dG9rZW5fX193b3JrZGJfX19tb3Rva19fX2FjZXNzb19fX3BhcmFfX19vX19fYXBsaWNhdGl2bw==");

    var formdata = new FormData();
    formdata.append("token_cliente", "token___workdb___motok___acesso___para___o___aplicativo..//006.996.449-17..//motokmotok");
    formdata.append("cpf", '006.996.449-17');
    formdata.append("senha", 'e10adc3949ba59abbe56e057f20f883e');

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://api.motok.com.br/v2/cliente/login/", requestOptions)
    .then(response => response.json())
    .then(result => result.status == 200 ? redirect() : Alert.alert('Login Falhou', 'Verifique o cpf ou cnpj e tente novamente'))
    .catch(error => console.log('error', error));
 
    async function redirect() {
        await AsyncStorage.setItem('logado', 'sim')
        navigation.navigate('Home')
    }
    
}   