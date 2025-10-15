/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { ProcessorTransactionResponse } from '../models/ProcessorTransactionResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProcessorTransactionsService {
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
    public static listProcessorTransactions(
        xApiVersion: string,
        xAccountId: string,
        page?: number,
        perPage?: number,
        paymentIntentId?: string,
        paymentMethodId?: string,
        paymentTransactionId?: string,
    ): CancelablePromise<{
        data?: Array<ProcessorTransactionResponse>;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/processor_transactions',
            headers: {
                'X-Api-Version': xApiVersion,
                'X-Account-Id': xAccountId,
            },
            query: {
                'page': page,
                'per_page': perPage,
                'payment_intent_id': paymentIntentId,
                'payment_method_id': paymentMethodId,
                'payment_transaction_id': paymentTransactionId,
            },
        });
    }
}
