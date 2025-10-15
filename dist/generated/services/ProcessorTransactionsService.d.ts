import { Meta } from '../models/Meta';
import { ProcessorTransactionResponse } from '../models/ProcessorTransactionResponse';
import { CancelablePromise } from '../core/CancelablePromise';
export declare class ProcessorTransactionsService {
    /**
     * List all processor transactions
     * @param xApiVersion
     * @param xAccountId
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @param paymentIntentId The ID of the payment intent to filter by
     * @param paymentMethodId The ID of the payment method to filter by
     * @param paymentTransactionId The ID of the payment transaction to filter by
     * @returns any A list of processor transactions
     * @throws ApiError
     */
    static listProcessorTransactions(xApiVersion: string, xAccountId: string, page?: number, perPage?: number, paymentIntentId?: string, paymentMethodId?: string, paymentTransactionId?: string): CancelablePromise<{
        data?: Array<ProcessorTransactionResponse>;
        meta?: Meta;
    }>;
}
