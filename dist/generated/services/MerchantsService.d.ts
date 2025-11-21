import { MerchantResponse } from '../models/MerchantResponse';
import { Meta } from '../models/Meta';
import { CancelablePromise } from '../core/CancelablePromise';
export declare class MerchantsService {
    /**
     * List all merchants
     * @param xApiVersion
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @returns any A list of merchants
     * @throws ApiError
     */
    static listMerchants(xApiVersion: string, page?: number, perPage?: number): CancelablePromise<{
        data?: Array<MerchantResponse>;
        meta?: Meta;
    }>;
    /**
     * Retrieve a merchant by ID
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the merchant to retrieve
     * @returns MerchantResponse Successful retrieval of a merchant
     * @throws ApiError
     */
    static getMerchant(xApiVersion: string, xAccountId: string, id: string): CancelablePromise<MerchantResponse>;
}
