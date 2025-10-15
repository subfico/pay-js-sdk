/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { PaymentMethodAttributes } from '../models/PaymentMethodAttributes';
import type { PaymentMethodResponse } from '../models/PaymentMethodResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PaymentMethodsService {
    /**
     * Create a payment method
     * @param xApiVersion
     * @param xAccountId
     * @param requestBody
     * @param xIdempotencyKey
     * @returns PaymentMethodResponse Payment method created successfully
     * @throws ApiError
     */
    public static createClientPaymentMethod(
        xApiVersion: string,
        xAccountId: string,
        requestBody: PaymentMethodAttributes,
        xIdempotencyKey?: string,
    ): CancelablePromise<PaymentMethodResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/embed/payment_methods',
            headers: {
                'X-Api-Version': xApiVersion,
                'X-Account-Id': xAccountId,
                'X-Idempotency-Key': xIdempotencyKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve a payment method
     * @param xApiVersion
     * @param id
     * @returns PaymentMethodResponse A single payment method
     * @throws ApiError
     */
    public static getClientPaymentMethod(
        xApiVersion: string,
        id: string,
    ): CancelablePromise<PaymentMethodResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/embed/payment_methods/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-Api-Version': xApiVersion,
            },
        });
    }
    /**
     * List all payment methods
     * @param xApiVersion
     * @param customerId The ID of the customer to filter by
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @returns any A list of payment methods
     * @throws ApiError
     */
    public static listPaymentMethods(
        xApiVersion: string,
        customerId: string,
        page?: number,
        perPage?: number,
    ): CancelablePromise<{
        data?: Array<PaymentMethodResponse>;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/payment_methods',
            headers: {
                'X-Api-Version': xApiVersion,
            },
            query: {
                'page': page,
                'per_page': perPage,
                'customer_id': customerId,
            },
        });
    }
    /**
     * Create a payment method
     * @param xApiVersion
     * @param xAccountId
     * @param requestBody
     * @param xIdempotencyKey
     * @returns PaymentMethodResponse Payment method created successfully
     * @throws ApiError
     */
    public static createPaymentMethod(
        xApiVersion: string,
        xAccountId: string,
        requestBody: PaymentMethodAttributes,
        xIdempotencyKey?: string,
    ): CancelablePromise<PaymentMethodResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/payment_methods',
            headers: {
                'X-Api-Version': xApiVersion,
                'X-Account-Id': xAccountId,
                'X-Idempotency-Key': xIdempotencyKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve a payment method
     * @param xApiVersion
     * @param id
     * @returns PaymentMethodResponse A single payment method
     * @throws ApiError
     */
    public static getPaymentMethod(
        xApiVersion: string,
        id: string,
    ): CancelablePromise<PaymentMethodResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/payment_methods/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-Api-Version': xApiVersion,
            },
        });
    }
}
