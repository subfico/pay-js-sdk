/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountCreateRequest } from '../models/AccountCreateRequest';
import type { AccountResponse } from '../models/AccountResponse';
import type { Meta } from '../models/Meta';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AccountsService {
    /**
     * List all accounts
     * @param xApiVersion
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @returns any A list of accounts
     * @throws ApiError
     */
    public static listAccounts(
        xApiVersion: string,
        page?: number,
        perPage?: number,
    ): CancelablePromise<{
        data?: Array<AccountResponse>;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts',
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
     * Create a new account
     * @param xApiVersion
     * @param requestBody
     * @returns AccountResponse Account created successfully
     * @throws ApiError
     */
    public static createAccount(
        xApiVersion: string,
        requestBody: AccountCreateRequest,
    ): CancelablePromise<AccountResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts',
            headers: {
                'X-Api-Version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve an account by ID
     * @param xApiVersion
     * @param id
     * @returns AccountResponse A single account
     * @throws ApiError
     */
    public static getAccount(
        xApiVersion: string,
        id: string,
    ): CancelablePromise<AccountResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-Api-Version': xApiVersion,
            },
        });
    }
}
