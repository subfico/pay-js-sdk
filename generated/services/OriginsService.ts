/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OriginCreateRequest } from '../models/OriginCreateRequest';
import type { OriginResponse } from '../models/OriginResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OriginsService {
    /**
     * List all origins
     * @param xApiVersion
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @returns any A list of origins
     * @throws ApiError
     */
    public static listOrigins(
        xApiVersion: string,
        page?: number,
        perPage?: number,
    ): CancelablePromise<{
        data?: Array<OriginResponse>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/origins',
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
     * Create a new origin
     * @param xApiVersion
     * @param requestBody
     * @returns OriginResponse Origin created successfully
     * @throws ApiError
     */
    public static createOrigin(
        xApiVersion: string,
        requestBody: OriginCreateRequest,
    ): CancelablePromise<OriginResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/origins',
            headers: {
                'X-Api-Version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
