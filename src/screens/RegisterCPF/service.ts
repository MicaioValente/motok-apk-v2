import moment from 'moment'
import { ToastAndroid } from 'react-native'
export interface userCPF {
    image: any
    anoNascimento: string
    aprovacaoId: string
    bairroEnderecoCliente: string
    cepEnderecoCliente: string
    cidadeClienteId: string
    codigoCliente: string
    complementoEnderecoCliente: string
    cpfCliente: string
    diaNascimento: string
    emailCliente: string
    estatoClienteId: string
    mesNascimento: string
    nomeCliente: string
    nomeMae: string
    nomePai: string
    numEnderecoCliente: string
    ruaEnderecoCliente: string
    senhaCliente: string
    telefoneCliente: string
    ValidadeCarteira: string
    docComprovanteResidencia: string
    docCarteiraMotorista: string
}

export async function postUserCpf(userCPF: userCPF, navigation: any, setLoading: any, setAviso: any) {
    setLoading(true)
    console.log(userCPF)

    function response(result: any) {
            setLoading(false)

        if(result.errors){
            console.log(222)

            const keys = Object.keys(result.errors)
            console.log(222, keys)
            keys.map(e => 
            ToastAndroid.show(`${e} nao foi enviado`, ToastAndroid.SHORT)
                
                )
            console.log(3333, result.errors[keys[0]])
            result.errors[keys[0]]
        }

        if(result.status === 400){
            console.log(444)
            setAviso(true)
            return
        }

        if(result.success){
            console.log(555)
            navigation.reset({ routes: [{ name: 'SignIn' }] })
            return
        }
    }
    function errorResponse(error:any) {
        console.log(error)
        setAviso(true)
        setLoading(false)
    }
    let ValidadeCarteira = moment(userCPF.ValidadeCarteira, 'DDMMYYYY')
    var formdata = new FormData();
    formdata.append("anoNascimento", userCPF.anoNascimento);
    formdata.append("planoId", '0' );
    formdata.append("bairroEnderecoCliente", userCPF.bairroEnderecoCliente );
    formdata.append("cepEnderecoCliente", userCPF.cepEnderecoCliente );
    formdata.append("cidadeClienteId", userCPF.cidadeClienteId );
    formdata.append("codigoCliente", '12345' );
    formdata.append("complementoEnderecoCliente", userCPF.complementoEnderecoCliente );
    formdata.append("cpfCliente", userCPF.cpfCliente);
    formdata.append("diaNascimento", userCPF.diaNascimento );
    formdata.append("emailCliente", userCPF.emailCliente );
    formdata.append("estatoClienteId", userCPF.estatoClienteId );
    formdata.append("mesNascimento", userCPF.mesNascimento );
    formdata.append("nomeCliente", userCPF.nomeCliente );
    formdata.append("nomeMae",userCPF.nomeMae );
    formdata.append("nomePai", userCPF.nomePai );
    formdata.append("numEnderecoCliente", userCPF.numEnderecoCliente );
    formdata.append("ruaEnderecoCliente", userCPF.ruaEnderecoCliente );
    formdata.append("senhaCliente", userCPF.senhaCliente );
    formdata.append("telefoneCliente", userCPF.telefoneCliente );
    formdata.append("ValidadeCarteira", ValidadeCarteira.format('MM-DD-YYYY') );
    formdata.append("CarteiraMotorista", userCPF.docCarteiraMotorista);
    formdata.append("ComprovanteResidencia", userCPF.docComprovanteResidencia);

    var requestOptions = {
        method: 'POST',
        body: formdata,
        };
    
    // axios.post('https://motok-api.herokuapp.com/api/clientes/pf', formdata).then(function (response){console.log(response)} ).catch(function (err){console.log('err',err.response )} )
    // axios({
    //     method: "post",
    //     url: "https://motok-api.herokuapp.com/api/clientes/pf",
    //     data: formdata,
    //     headers: { "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW" },
    //   })
    //     .then(function (response) {
    //       //handle success
    //     })
    //     .catch(function (response) {
    //       //handle error
    //     });
    
    
    
    fetch("https://apimotok.workdb.com.br/api/clientes/pf", requestOptions)
    .then(response => response.json())
        .then(result =>response(result))
    //   .then(result => console.log('result', result))
    //   .then(result => result.status == 201 ? navigation.navigate('SignIn') : null)
    // .then(result => redirect(result))
    .catch(error => errorResponse(error));

}