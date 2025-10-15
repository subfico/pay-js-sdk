/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { RefundAttributes } from '../models/RefundAttributes';
import type { RefundResponse } from '../models/RefundResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RefundsService {
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
    public static listRefunds(
        xApiVersion: string,
        xAccountId: string,
        customerId: string,
        page?: number,
        perPage?: number,
        parentTransactionId?: string,
    ): CancelablePromise<{
        data?: Array<RefundResponse>;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/refunds',
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
     * Create a refund
     * @param xApiVersion
     * @param xAccountId
     * @param requestBody
     * @param xIdempotencyKey
     * @returns RefundResponse Refund created successfully
     * @throws ApiError
     */
    public static createRefund(
        xApiVersion: string,
        xAccountId: string,
        requestBody: RefundAttributes,
        xIdempotencyKey?: string,
    ): CancelablePromise<RefundResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/refunds',
            headers: {
                'X-Api-Version': xApiVersion,
                'X-Account-Id': xAccountId,
                'X-Idempotency-Key': xIdempotencyKey,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Error creating refund`,
            },
        });
    }
    /**
     * Retrieve a refund by ID
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the refund to retrieve
     * @returns RefundResponse Successful retrieval of refund
     * @throws ApiError
     */
    public static getRefund(
        xApiVersion: string,
        xAccountId: string,
        id: string,
    ): CancelablePromise<RefundResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/refunds/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-Api-Version': xApiVersion,
                'X-Account-Id': xAccountId,
            },
        });
    }
    /**
     * Cancel a refund
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the refund to cancel.
     * @returns RefundResponse Refund cancelled successfully
     * @throws ApiError
     */
    public static cancelRefund(
        xApiVersion: string,
        xAccountId: string,
        id: string,
    ): CancelablePromise<RefundResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/refunds/{id}/cancel',
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
