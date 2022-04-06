export interface userCNPJ {
    image: any
    anoNascimento: string
    DataAberturaEmpresaCliente: string
    InscricaoEstadualCliente: string
    aprovacaoId: string
    bairroEnderecoCliente: string
    cepEnderecoCliente: string
    cidadeClienteId: string
    codigoCliente: string
    complementoEnderecoCliente: string
    cnpjCliente: string
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

export async function postUserCNPJ(userCNPJ: userCNPJ, navigation: any) {
    
    var formdata = new FormData();

    // formdata.append("anoNascimento", userCNPJ.anoNascimento);
    formdata.append("aprovacaoId", '0' );
    formdata.append("bairroEnderecoCliente", userCNPJ.bairroEnderecoCliente );
    formdata.append("cepEnderecoCliente", userCNPJ.cepEnderecoCliente );
    formdata.append("cidadeClienteId", userCNPJ.cidadeClienteId );
    formdata.append("codigoCliente", '12345' );
    formdata.append("complementoEnderecoCliente", userCNPJ.complementoEnderecoCliente );
    formdata.append("DataAberturaEmpresaCliente", userCNPJ.DataAberturaEmpresaCliente );
    formdata.append("InscricaoEstadualCliente", userCNPJ.InscricaoEstadualCliente );
    formdata.append("CnpjCliente", userCNPJ.cnpjCliente );
    // formdata.append("diaNascimento", userCNPJ.diaNascimento );
    formdata.append("emailCliente", userCNPJ.emailCliente );
    formdata.append("estatoClienteId", userCNPJ.estatoClienteId );
    // formdata.append("mesNascimento", userCNPJ.mesNascimento );
    formdata.append("nomeCliente", userCNPJ.nomeCliente );
    // formdata.append("nomeMae", userCNPJ.nomeMae );
    // formdata.append("nomePai", userCNPJ.nomePai );
    formdata.append("numEnderecoCliente", userCNPJ.numEnderecoCliente );
    formdata.append("ruaEnderecoCliente", userCNPJ.ruaEnderecoCliente );
    formdata.append("senhaCliente", userCNPJ.senhaCliente );
    formdata.append("telefoneCliente", userCNPJ.telefoneCliente );
    formdata.append("ValidadeCarteira", userCNPJ.ValidadeCarteira );
    formdata.append("image", userCNPJ.docCarteiraMotorista);
    // formdata.append("DocCarteiraMotorista", userCNPJ.docCarteiraMotorista);
    // formdata.append("DocComprovanteResidencia", userCNPJ.docComprovanteResidencia);
    formdata.append("image", userCNPJ.docComprovanteResidencia);
    // console.log('formData',  formdata)

    var requestOptions = {
        method: 'POST',
        body: formdata,
        };
        console.log('1111',  11111)

        fetch("https://motok-api.herokuapp.com/api/clientes/pj", requestOptions)
        .then(response => response.json())
      .then(result => result.success ? navigation.navigate('SignIn') : null)
        //   .then(result => result.status == 201 ? navigation.navigate('SignIn') : null)
        // .then(result => redirect(result))
        .catch(error => console.log('error', error));

}