import { Currency } from '../model'

export class MercadoPagoPreference {
    id: string

    constructor({ id }: { id: string }) {
        this.id = id
    }
}

export class MercadoPagoProduct {
    title: string
    description: string
    quantity: number
    currency_id: Currency
    unit_price: number

    constructor(
        title: string,
        description: string,
        quantity: number,
        currency_id: Currency,
        unit_price: number
    ) {
        this.title = title
        this.description = description
        this.quantity = quantity
        this.currency_id = currency_id
        this.unit_price = unit_price
    }
}
