/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountsProcessorResponse } from '../models/AccountsProcessorResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AccountsProcessorService {
    /**
     * Retrieve an accounts processor
     * @param xApiVersion
     * @param xAccountId
     * @param id
     * @returns AccountsProcessorResponse A single processor
     * @throws ApiError
     */
    public static getProcessor(
        xApiVersion: string,
        xAccountId: string,
        id: string,
    ): CancelablePromise<AccountsProcessorResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/internal/accounts_processors/{id}',
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
