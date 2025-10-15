import { AccountsProcessorResponse } from '../models/AccountsProcessorResponse';
import { CancelablePromise } from '../core/CancelablePromise';
export declare class AccountsProcessorService {
    /**
     * Retrieve an accounts processor
     * @param xApiVersion
     * @param xAccountId
     * @param id
     * @returns AccountsProcessorResponse A single processor
     * @throws ApiError
     */
    static getProcessor(xApiVersion: string, xAccountId: string, id: string): CancelablePromise<AccountsProcessorResponse>;
}
