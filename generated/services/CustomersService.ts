/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerCreateRequest } from '../models/CustomerCreateRequest';
import type { CustomerResponse } from '../models/CustomerResponse';
import type { CustomerUpdateRequest } from '../models/CustomerUpdateRequest';
import type { Meta } from '../models/Meta';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CustomersService {
    /**
     * List all customers
     * @param xApiVersion
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @param email The email to filter by
     * @param phone The phone to filter by
     * @param accountId
     * @returns any A list of customers
     * @throws ApiError
     */
    public static listCustomers(
        xApiVersion: string,
        page?: number,
        perPage?: number,
        email?: string,
        phone?: string,
        accountId?: string,
    ): CancelablePromise<{
        data?: Array<CustomerResponse>;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/customers',
            path: {
                'account_id': accountId,
            },
            headers: {
                'X-Api-Version': xApiVersion,
            },
            query: {
                'page': page,
                'per_page': perPage,
                'email': email,
                'phone': phone,
            },
        });
    }
    /**
     * Create a new customer
     * @param xApiVersion
     * @param requestBody
     * @returns CustomerResponse Customer created successfully
     * @throws ApiError
     */
    public static createCustomer(
        xApiVersion: string,
        requestBody: CustomerCreateRequest,
    ): CancelablePromise<CustomerResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/customers',
            headers: {
                'X-Api-Version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve a customer by ID
     * @param xApiVersion
     * @param id
     * @returns CustomerResponse A single customer
     * @throws ApiError
     */
    public static getCustomer(
        xApiVersion: string,
        id: string,
    ): CancelablePromise<CustomerResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/customers/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-Api-Version': xApiVersion,
            },
        });
    }
    /**
     * Update a customer by ID
     * @param xApiVersion
     * @param id
     * @param requestBody
     * @returns CustomerResponse Customer updated successfully
     * @throws ApiError
     */
    public static updateCustomer(
        xApiVersion: string,
        id: string,
        requestBody: CustomerUpdateRequest,
    ): CancelablePromise<CustomerResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/customers/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-Api-Version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
