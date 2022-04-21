type PaymentStatus = 'approved' | 'in_mediation' | 'in_process' | 'pending' | 'authorized' | 'refunded' | 'charged_back' | 'cancelled' | 'rejected'

export class Payment {
    status: PaymentStatus

    constructor(status: PaymentStatus) {
        this.status = status
    }
}

export class Product {
    title: string
    description: string
    price: number

    constructor({ title, description, price }: { title: string, description: string, price: number }) {
        this.title = title
        this.description = description
        this.price = price
    }
}

export class Request {
    product: Product /// product information
    installments: number /// number of parcels
    email: string /// user email

    constructor({ product, installments, email }: { product: Product, installments: number, email: string }) {
        this.product = product
        this.installments = installments
        this.email = email
    }
}

export enum Currency {
    BRL = "BRL"
}
