import { ChargeResponse } from '../models/ChargeResponse';
import { Meta } from '../models/Meta';
import { CancelablePromise } from '../core/CancelablePromise';
export declare class ChargesService {
    /**
     * List all charges
     * @param xApiVersion
     * @param xAccountId
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @param paymentIntentId The ID of the payment intent to filter by
     * @returns any A list of charges
     * @throws ApiError
     */
    static listCharges(xApiVersion: string, xAccountId: string, page?: number, perPage?: number, paymentIntentId?: string): CancelablePromise<{
        data?: Array<ChargeResponse>;
        meta?: Meta;
    }>;
    /**
     * Retrieve a charge
     * @param xApiVersion
     * @param xAccountId
     * @param id
     * @returns ChargeResponse A single charge
     * @throws ApiError
     */
    static getCharge(xApiVersion: string, xAccountId: string, id: string): CancelablePromise<ChargeResponse>;
}
