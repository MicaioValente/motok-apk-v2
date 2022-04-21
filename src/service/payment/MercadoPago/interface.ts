import { MercadoPagoProduct, MercadoPagoPreference } from './model'

type IMercadoPagoService = {
    getPreferenceId(email: string, product: MercadoPagoProduct, installments: number): Promise<MercadoPagoPreference>
}

export default IMercadoPagoService
