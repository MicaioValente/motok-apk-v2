import MercadoPagoCheckout from '@blackbox-vision/react-native-mercadopago-px'

import { Payment, Request, Currency } from './model'
import IPaymentCoordinator from './interface'
import IMercadoPagoService from './MercadoPago/interface'

import MercadoPagoService from './MercadoPago/service'

import env from './payment.json'

class PaymentCoordinator implements IPaymentCoordinator {
    service: IMercadoPagoService

    constructor(service: IMercadoPagoService = new MercadoPagoService()) {
        this.service = service
    }

    async start(request: Request): Promise<Payment> {
        return new Promise(async(resolve, reject) => {
            try {
                const preference = await this.service.getPreferenceId(
                    request.email,
                    {
                        title: request.product.title,
                        description: request.product.description,
                        quantity: 1,
                        currency_id: Currency.BRL,
                        unit_price: request.product.price
                    },
                    request.installments
                )
            
                const payment = await MercadoPagoCheckout.createPayment({
                    publicKey: env.publicKey,
                    preferenceId: preference.id,
                    language: 'pt-BR',
                    advancedOptions: {
                        bankDealsEnabled: false
                    }
                })
        
                resolve(new Payment(payment.status))
            } catch (error) {
                reject(error)
            }
        })
    }
}

export default new PaymentCoordinator()
