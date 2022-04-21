# Configurando o MercadoPago

Para configurar o SDK do mercado pago, é necessário acessar o arquivo `/src/service/payment/payment.json`, e adicionar o `publicKey` e o `accessToken` de produção antes de lançar uma nova versão.

Caso seja necessário ativar ou excluír meios de pagamento o mesmo arquivo pode te auxiliar, adicionando novos itens ou excluíndo da propriedade `excluded_payment_types` a SDK já irá se adaptar automaticamente.

Para mais informações sobre como configurar o parâmetro `excluded_payment_types` siga a [documentação do mercado pago](https://www.mercadopago.com.br/developers/pt/docs/mobile-checkout/customize-payment-preference).

## Iniciando o fluxo de pagamento

Para iniciar um novo fluxo de pagamento temos que primeiramente importar o coordenador de fluxo de pagamentos, e as classes de modelo de pagamento necessárias.

```js
import PaymentCoordinator from 'service/payment';
import { Request, Product } from 'service/payment/model';
```

Após realizar a importação das classes necessárias, devemos criar a instância de produto, para qual será realizado o pagamento.

```js
const product = new Product({
    title: 'Valor de caução', // título do produto
    description: 'Valor de caução', // descrição do produto
    price: 1000 // preço unitário do produto
})
```

Com a criação de uma nova instância de produto podemos criar uma requisição para o fluxo de pagamentos, esta tem como dependência um produto e mais algumas informações.

```js
const request = new Request({
    product, // produto criado no passo anterior
    installments: 4, // número de parcelas máximo
    email: 'payer@email.com' // e-mail do usuário comprador
})
```

Após criada a instância de requisição, podemos iniciar o fluxo utilizando o método de `start` da instância compartilhada de `PaymentCoordinator`.

> 🚨 A chamada ao fluxo de pagamento é uma chamada assíncrona e deverá ser feita dentro de uma função assíncrona (função marcada com a _keyword_ `await`).

```js
try {
    const payment = await PaymentCoordinator.start(request)
    
    // aqui o fluxo de pagamento foi completado
    // recebemos uma instância de pagamento com um status
    // com esse status podemos checar se o pagamento foi finalizado
    // se está em processamento ou foi cancelado
    console.log(payment)
} catch (error) {
    // o usuário cancelou o fluxo de pagamento
    // ou ocorreu algum erro durante o processo
    console.log(error)
}
```
