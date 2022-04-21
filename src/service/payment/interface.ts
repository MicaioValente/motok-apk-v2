import { Payment, Request } from './model'

type IPaymentCoordinator = {
    start(request: Request): Promise<Payment>
}

export default IPaymentCoordinator
