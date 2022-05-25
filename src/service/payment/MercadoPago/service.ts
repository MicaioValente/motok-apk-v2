import { MercadoPagoProduct, MercadoPagoPreference } from './model'
import IMercadoPagoService from './interface'

import env from '../payment.json'

export default class MercadoPagoService implements IMercadoPagoService {
    async getPreferenceId(email: string, product: MercadoPagoProduct, installments: number): Promise<MercadoPagoPreference> {
        return new Promise(async(resolve, reject) => {
            try {
                const response = await fetch(
                    `https://api.mercadopago.com/checkout/preferences?access_token=${env.accessToken}`,
                    {
                        method: 'POST',
                        body: JSON.stringify({
                            items: [product],
                            payer: {
                                email,
                            },
                            payment_methods: {
                                excluded_payment_types: env.excluded_payment_types,
                                default_installments: installments,
                                installments
                            },
                        }),
                    }
                )
                
                const preference = await response.json()
                resolve(new MercadoPagoPreference({ id: preference.id }))
            } catch (error) {
                reject(error)
            }
        })
    }
}
