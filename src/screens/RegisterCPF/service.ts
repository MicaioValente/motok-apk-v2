import moment from 'moment'
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
    function response(result: any) {
        console.log(11111, result)
        setLoading(false)

        if(result.status === 400){
            setAviso(true)
            return
        }
        if(result.success){
            navigation.reset({ routes: [{ name: 'SignIn' }] })

            return
        }
    }
    function errorResponse(error:any) {
        setAviso(true)
    }
    let ValidadeCarteira = moment(userCPF.ValidadeCarteira, 'DDMMYYYY')
    var formdata = new FormData();
    formdata.append("anoNascimento", userCPF.anoNascimento);
    formdata.append("planoId", 0 );
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
    
    
    
    fetch("https://motok-api.herokuapp.com/api/clientes/pf", requestOptions)
    .then(response => response.json())
        .then(result => response(result))
    //   .then(result => console.log('result', result))
    //   .then(result => result.status == 201 ? navigation.navigate('SignIn') : null)
    // .then(result => redirect(result))
    .catch(error => errorResponse(error));

}