import { Meta } from '../models/Meta';
import { PaymentIntentAddPaymentMethodRequest } from '../models/PaymentIntentAddPaymentMethodRequest';
import { PaymentIntentCreateRequest } from '../models/PaymentIntentCreateRequest';
import { PaymentIntentResponse } from '../models/PaymentIntentResponse';
import { PaymentIntentUpdateRequest } from '../models/PaymentIntentUpdateRequest';
import { CancelablePromise } from '../core/CancelablePromise';
export declare class PaymentIntentsService {
    /**
     * Retrieve a payment intent by ID
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the payment intent to retrieve
     * @returns PaymentIntentResponse Successful retrieval of payment intent
     * @throws ApiError
     */
    static getClientPaymentIntent(xApiVersion: string, xAccountId: string, id: string): CancelablePromise<PaymentIntentResponse>;
    /**
     * Confirm a payment intent
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the payment intent to confirm
     * @returns PaymentIntentResponse Successful confirmation of payment intent
     * @throws ApiError
     */
    static confirmClientPaymentIntent(xApiVersion: string, xAccountId: string, id: string): CancelablePromise<PaymentIntentResponse>;
    /**
     * Add payment method to a payment intent
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the payment intent to add payment method to
     * @param requestBody
     * @returns any Successfully added payment method to payment intent
     * @throws ApiError
     */
    static addPaymentMethodToPaymentIntent(xApiVersion: string, xAccountId: string, id: string, requestBody: PaymentIntentAddPaymentMethodRequest): CancelablePromise<any>;
    /**
     * List payment intents
     * @param xApiVersion
     * @param xAccountId
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @returns any A list of payment intents
     * @throws ApiError
     */
    static listPaymentIntents(xApiVersion: string, xAccountId: string, page?: number, perPage?: number): CancelablePromise<{
        data?: Array<PaymentIntentResponse>;
        meta?: Meta;
    }>;
    /**
     * Create a new payment intent
     * @param xApiVersion
     * @param xAccountId
     * @param requestBody
     * @returns PaymentIntentResponse Successful creation of payment intent
     * @throws ApiError
     */
    static createPaymentIntent(xApiVersion: string, xAccountId: string, requestBody: PaymentIntentCreateRequest): CancelablePromise<PaymentIntentResponse>;
    /**
     * Retrieve a payment intent by ID
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the payment intent to retrieve
     * @returns PaymentIntentResponse Successful retrieval of payment intent
     * @throws ApiError
     */
    static getPaymentIntent(xApiVersion: string, xAccountId: string, id: string): CancelablePromise<PaymentIntentResponse>;
    /**
     * Update a payment intent
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the payment intent to update
     * @param requestBody
     * @returns PaymentIntentResponse Successful update of payment intent
     * @throws ApiError
     */
    static updatePaymentIntent(xApiVersion: string, xAccountId: string, id: string, requestBody: PaymentIntentUpdateRequest): CancelablePromise<PaymentIntentResponse>;
    /**
     * Cancel a payment intent
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the payment intent to cancel
     * @returns PaymentIntentResponse Successful cancellation of payment intent
     * @throws ApiError
     */
    static cancelPaymentIntent(xApiVersion: string, xAccountId: string, id: string): CancelablePromise<PaymentIntentResponse>;
    /**
     * Capture a payment intent
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the payment intent to capture
     * @returns PaymentIntentResponse Successful capture of payment intent
     * @throws ApiError
     */
    static capturePaymentIntent(xApiVersion: string, xAccountId: string, id: string): CancelablePromise<PaymentIntentResponse>;
    /**
     * Confirm a payment intent
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the payment intent to confirm
     * @returns PaymentIntentResponse Successful confirmation of payment intent
     * @throws ApiError
     */
    static confirmPaymentIntent(xApiVersion: string, xAccountId: string, id: string): CancelablePromise<PaymentIntentResponse>;
}
