/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { PaymentSnapshotResponse } from '../models/PaymentSnapshotResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PaymentSnapshotsService {
    /**
     * List payment snapshots
     * @param xApiVersion
     * @param xAccountId
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @returns any A list of payment snapshots
     * @throws ApiError
     */
    public static listPaymentSnapshots(
        xApiVersion: string,
        xAccountId: string,
        page?: number,
        perPage?: number,
    ): CancelablePromise<{
        data?: Array<PaymentSnapshotResponse>;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/internal/payment_snapshots',
            headers: {
                'X-Api-Version': xApiVersion,
                'X-Account-Id': xAccountId,
            },
            query: {
                'page': page,
                'per_page': perPage,
            },
        });
    }
    /**
     * Retrieve a payment by ID
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the payment snapshot to retrieve
     * @returns PaymentSnapshotResponse Successful retrieval of payment snapshot
     * @throws ApiError
     */
    public static getPaymentSnapshot(
        xApiVersion: string,
        xAccountId: string,
        id: string,
    ): CancelablePromise<PaymentSnapshotResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/internal/payment_snapshots/{id}',
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
