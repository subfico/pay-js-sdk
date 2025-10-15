import { Meta } from '../models/Meta';
import { VoidAttributes } from '../models/VoidAttributes';
import { VoidResponse } from '../models/VoidResponse';
import { CancelablePromise } from '../core/CancelablePromise';
export declare class VoidsService {
    /**
     * List all voids
     * @param xApiVersion
     * @param xAccountId
     * @param customerId The ID of the customer to filter by
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @param parentTransactionId The ID of the original transaction to filter by
     * @returns any A list of voids
     * @throws ApiError
     */
    static listVoids(xApiVersion: string, xAccountId: string, customerId: string, page?: number, perPage?: number, parentTransactionId?: string): CancelablePromise<{
        data?: Array<VoidResponse>;
        meta?: Meta;
    }>;
    /**
     * Create a void
     * @param xApiVersion
     * @param xAccountId
     * @param requestBody
     * @param xIdempotencyKey
     * @returns VoidResponse Void created successfully
     * @throws ApiError
     */
    static createVoid(xApiVersion: string, xAccountId: string, requestBody: VoidAttributes, xIdempotencyKey?: string): CancelablePromise<VoidResponse>;
    /**
     * Retrieve a void by ID
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the void to retrieve
     * @returns VoidResponse Successful retrieval of void
     * @throws ApiError
     */
    static getVoid(xApiVersion: string, xAccountId: string, id: string): CancelablePromise<VoidResponse>;
}
