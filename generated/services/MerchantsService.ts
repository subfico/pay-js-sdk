/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MerchantResponse } from '../models/MerchantResponse';
import type { Meta } from '../models/Meta';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MerchantsService {
    /**
     * List all merchants
     * @param xApiVersion
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @returns any A list of merchants
     * @throws ApiError
     */
    public static listMerchants(
        xApiVersion: string,
        page?: number,
        perPage?: number,
    ): CancelablePromise<{
        data?: Array<MerchantResponse>;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/internal/merchants',
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
     * Retrieve a merchant by ID
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the merchant to retrieve
     * @returns MerchantResponse Successful retrieval of a merchant
     * @throws ApiError
     */
    public static getMerchant(
        xApiVersion: string,
        xAccountId: string,
        id: string,
    ): CancelablePromise<MerchantResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/internal/merchants/{id}',
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
