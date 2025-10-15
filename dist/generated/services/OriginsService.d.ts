import { OriginCreateRequest } from '../models/OriginCreateRequest';
import { OriginResponse } from '../models/OriginResponse';
import { CancelablePromise } from '../core/CancelablePromise';
export declare class OriginsService {
    /**
     * List all origins
     * @param xApiVersion
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @returns any A list of origins
     * @throws ApiError
     */
    static listOrigins(xApiVersion: string, page?: number, perPage?: number): CancelablePromise<{
        data?: Array<OriginResponse>;
    }>;
    /**
     * Create a new origin
     * @param xApiVersion
     * @param requestBody
     * @returns OriginResponse Origin created successfully
     * @throws ApiError
     */
    static createOrigin(xApiVersion: string, requestBody: OriginCreateRequest): CancelablePromise<OriginResponse>;
}
