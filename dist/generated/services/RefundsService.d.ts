import { Meta } from '../models/Meta';
import { RefundAttributes } from '../models/RefundAttributes';
import { RefundResponse } from '../models/RefundResponse';
import { CancelablePromise } from '../core/CancelablePromise';
export declare class RefundsService {
    /**
     * List all refunds
     * @param xApiVersion
     * @param xAccountId
     * @param customerId The ID of the customer to filter by
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @param parentTransactionId The ID of the original transaction to filter by
     * @returns any A list of refunds
     * @throws ApiError
     */
    static listRefunds(xApiVersion: string, xAccountId: string, customerId: string, page?: number, perPage?: number, parentTransactionId?: string): CancelablePromise<{
        data?: Array<RefundResponse>;
        meta?: Meta;
    }>;
    /**
     * Create a refund
     * @param xApiVersion
     * @param xAccountId
     * @param requestBody
     * @param xIdempotencyKey
     * @returns RefundResponse Refund created successfully
     * @throws ApiError
     */
    static createRefund(xApiVersion: string, xAccountId: string, requestBody: RefundAttributes, xIdempotencyKey?: string): CancelablePromise<RefundResponse>;
    /**
     * Retrieve a refund by ID
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the refund to retrieve
     * @returns RefundResponse Successful retrieval of refund
     * @throws ApiError
     */
    static getRefund(xApiVersion: string, xAccountId: string, id: string): CancelablePromise<RefundResponse>;
    /**
     * Cancel a refund
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the refund to cancel.
     * @returns RefundResponse Refund cancelled successfully
     * @throws ApiError
     */
    static cancelRefund(xApiVersion: string, xAccountId: string, id: string): CancelablePromise<RefundResponse>;
}
