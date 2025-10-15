/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChargeResponse } from '../models/ChargeResponse';
import type { Meta } from '../models/Meta';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ChargesService {
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
    public static listCharges(
        xApiVersion: string,
        xAccountId: string,
        page?: number,
        perPage?: number,
        paymentIntentId?: string,
    ): CancelablePromise<{
        data?: Array<ChargeResponse>;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/charges',
            headers: {
                'X-Api-Version': xApiVersion,
                'X-Account-Id': xAccountId,
            },
            query: {
                'page': page,
                'per_page': perPage,
                'payment_intent_id': paymentIntentId,
            },
        });
    }
    /**
     * Retrieve a charge
     * @param xApiVersion
     * @param xAccountId
     * @param id
     * @returns ChargeResponse A single charge
     * @throws ApiError
     */
    public static getCharge(
        xApiVersion: string,
        xAccountId: string,
        id: string,
    ): CancelablePromise<ChargeResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/charges/{id}',
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
