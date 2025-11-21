import { Meta } from '../models/Meta';
import { PaymentMethodAttributes } from '../models/PaymentMethodAttributes';
import { PaymentMethodResponse } from '../models/PaymentMethodResponse';
import { CancelablePromise } from '../core/CancelablePromise';
export declare class PaymentMethodsService {
    /**
     * Retrieve a payment method
     * @param xApiVersion
     * @param id
     * @returns PaymentMethodResponse A single payment method
     * @throws ApiError
     */
    static getClientPaymentMethod(xApiVersion: string, id: string): CancelablePromise<PaymentMethodResponse>;
    /**
     * List all payment methods
     * @param xApiVersion
     * @param customerId The ID of the customer to filter by
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @returns any A list of payment methods
     * @throws ApiError
     */
    static listPaymentMethods(xApiVersion: string, customerId: string, page?: number, perPage?: number): CancelablePromise<{
        data?: Array<PaymentMethodResponse>;
        meta?: Meta;
    }>;
    /**
     * Create a payment method
     * @param xApiVersion
     * @param xAccountId
     * @param requestBody
     * @param xIdempotencyKey
     * @returns PaymentMethodResponse Payment method created successfully
     * @throws ApiError
     */
    static createPaymentMethod(xApiVersion: string, xAccountId: string, requestBody: PaymentMethodAttributes, xIdempotencyKey?: string): CancelablePromise<PaymentMethodResponse>;
    /**
     * Retrieve a payment method
     * @param xApiVersion
     * @param id
     * @returns PaymentMethodResponse A single payment method
     * @throws ApiError
     */
    static getPaymentMethod(xApiVersion: string, id: string): CancelablePromise<PaymentMethodResponse>;
}
