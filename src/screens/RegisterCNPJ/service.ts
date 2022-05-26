import moment from "moment"
import { URL } from "../../service/url"

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

export async function postUserCNPJ(userCNPJ: userCNPJ, navigation: any, setLoading: any, setAviso: any) {
  setLoading(true)
    function response(result: any) {
        setLoading(false)

        if(result.status === 400){
            setAviso(true)
            return
        }
        if(result.success){
            navigation.navigate('SignIn')
            return
        }
    }
    function errorResponse(error:any) {
        setAviso(true)
    }


  let ValidadeCarteira = moment(userCNPJ.ValidadeCarteira, 'DDMMYYYY')
    let DataAberturaEmpresaCliente = moment(userCNPJ.DataAberturaEmpresaCliente, 'DDMMYYYY')
    var formdata = new FormData();

    formdata.append("aprovacaoId", '0' );
    formdata.append("planoId", '0' );
    formdata.append("bairroEnderecoCliente", userCNPJ.bairroEnderecoCliente );
    formdata.append("cepEnderecoCliente", userCNPJ.cepEnderecoCliente );
    formdata.append("cidadeClienteId", userCNPJ.cidadeClienteId );
    formdata.append("codigoCliente", '12345' );
    formdata.append("complementoEnderecoCliente", userCNPJ.complementoEnderecoCliente );
    formdata.append("DataAberturaEmpresaCliente", DataAberturaEmpresaCliente.format('MM-DD-YYYY') );
    formdata.append("InscricaoEstadualCliente", userCNPJ.InscricaoEstadualCliente );
    formdata.append("CnpjCliente", userCNPJ.cnpjCliente );
    formdata.append("emailCliente", userCNPJ.emailCliente );
    formdata.append("estatoClienteId", userCNPJ.estatoClienteId );
    formdata.append("nomeCliente", userCNPJ.nomeCliente );
    formdata.append("numEnderecoCliente", userCNPJ.numEnderecoCliente );
    formdata.append("ruaEnderecoCliente", userCNPJ.ruaEnderecoCliente );
    formdata.append("senhaCliente", userCNPJ.senhaCliente );
    formdata.append("telefoneCliente", userCNPJ.telefoneCliente );
    formdata.append("ValidadeCarteira", ValidadeCarteira.format('MM-DD-YYYY') );
    formdata.append("CarteiraMotorista", userCNPJ.docCarteiraMotorista);
    formdata.append("ComprovanteResidencia", userCNPJ.docComprovanteResidencia);
    formdata.append("PlanoId", '0');

    var requestOptions = {
        method: 'POST',
        body: formdata,
        };

        fetch(`${URL}clientes/pj`, requestOptions)
        .then(response => response.json())
      // .then(result => console.log('result', result ))
      .then(result => response(result))
        //   .then(result => result.status == 201 ? navigation.navigate('SignIn') : null)
        // .then(result => redirect(result))
        .catch(error => errorResponse(errorResponse));

}