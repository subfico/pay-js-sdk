import { Meta } from '../models/Meta';
import { ReconciliationAttributes } from '../models/ReconciliationAttributes';
import { ReconciliationResponse } from '../models/ReconciliationResponse';
import { CancelablePromise } from '../core/CancelablePromise';
export declare class ReconciliationsService {
    /**
     * List reconciliations
     * @param xApiVersion
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @returns any A list of reconciliations
     * @throws ApiError
     */
    static listReconciliations(xApiVersion: string, page?: number, perPage?: number): CancelablePromise<{
        data?: Array<ReconciliationResponse>;
        meta?: Meta;
    }>;
    /**
     * Create a new reconcilation
     * @param xApiVersion
     * @param xAccountId
     * @param requestBody
     * @returns ReconciliationResponse Successful creation of reconciliation
     * @throws ApiError
     */
    static createReconciliation(xApiVersion: string, xAccountId: string, requestBody: ReconciliationAttributes): CancelablePromise<ReconciliationResponse>;
}
