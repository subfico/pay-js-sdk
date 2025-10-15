/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { VoidAttributes } from '../models/VoidAttributes';
import type { VoidResponse } from '../models/VoidResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VoidsService {
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
    public static listVoids(
        xApiVersion: string,
        xAccountId: string,
        customerId: string,
        page?: number,
        perPage?: number,
        parentTransactionId?: string,
    ): CancelablePromise<{
        data?: Array<VoidResponse>;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/voids',
            headers: {
                'X-Api-Version': xApiVersion,
                'X-Account-Id': xAccountId,
            },
            query: {
                'page': page,
                'per_page': perPage,
                'customer_id': customerId,
                'parent_transaction_id': parentTransactionId,
            },
        });
    }
    /**
     * Create a void
     * @param xApiVersion
     * @param xAccountId
     * @param requestBody
     * @param xIdempotencyKey
     * @returns VoidResponse Void created successfully
     * @throws ApiError
     */
    public static createVoid(
        xApiVersion: string,
        xAccountId: string,
        requestBody: VoidAttributes,
        xIdempotencyKey?: string,
    ): CancelablePromise<VoidResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/voids',
            headers: {
                'X-Api-Version': xApiVersion,
                'X-Account-Id': xAccountId,
                'X-Idempotency-Key': xIdempotencyKey,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Error creating void`,
            },
        });
    }
    /**
     * Retrieve a void by ID
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the void to retrieve
     * @returns VoidResponse Successful retrieval of void
     * @throws ApiError
     */
    public static getVoid(
        xApiVersion: string,
        xAccountId: string,
        id: string,
    ): CancelablePromise<VoidResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/voids/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-Api-Version': xApiVersion,
                'X-Account-Id': xAccountId,
            },
        });
    }
}
