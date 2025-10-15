/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { ReconciliationAttributes } from '../models/ReconciliationAttributes';
import type { ReconciliationResponse } from '../models/ReconciliationResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ReconciliationsService {
    /**
     * List reconciliations
     * @param xApiVersion
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @returns any A list of reconciliations
     * @throws ApiError
     */
    public static listReconciliations(
        xApiVersion: string,
        page?: number,
        perPage?: number,
    ): CancelablePromise<{
        data?: Array<ReconciliationResponse>;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/internal/reconciliations',
            headers: {
                'X-Api-Version': xApiVersion,
            },
            query: {
                'page': page,
                'per_page': perPage,
            },
        });
    }
    /**
     * Create a new reconcilation
     * @param xApiVersion
     * @param xAccountId
     * @param requestBody
     * @returns ReconciliationResponse Successful creation of reconciliation
     * @throws ApiError
     */
    public static createReconciliation(
        xApiVersion: string,
        xAccountId: string,
        requestBody: ReconciliationAttributes,
    ): CancelablePromise<ReconciliationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/internal/reconciliations',
            headers: {
                'X-Api-Version': xApiVersion,
                'X-Account-Id': xAccountId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
