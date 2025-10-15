/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { PaymentIntentAddPaymentMethodRequest } from '../models/PaymentIntentAddPaymentMethodRequest';
import type { PaymentIntentCreateRequest } from '../models/PaymentIntentCreateRequest';
import type { PaymentIntentResponse } from '../models/PaymentIntentResponse';
import type { PaymentIntentUpdateRequest } from '../models/PaymentIntentUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PaymentIntentsService {
    /**
     * Retrieve a payment intent by ID
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the payment intent to retrieve
     * @returns PaymentIntentResponse Successful retrieval of payment intent
     * @throws ApiError
     */
    public static getClientPaymentIntent(
        xApiVersion: string,
        xAccountId: string,
        id: string,
    ): CancelablePromise<PaymentIntentResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/embed/payment_intents/{id}',
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
     * Confirm a payment intent
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the payment intent to confirm
     * @returns PaymentIntentResponse Successful confirmation of payment intent
     * @throws ApiError
     */
    public static confirmClientPaymentIntent(
        xApiVersion: string,
        xAccountId: string,
        id: string,
    ): CancelablePromise<PaymentIntentResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/embed/payment_intents/{id}/confirm',
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
     * Add payment method to a payment intent
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the payment intent to add payment method to
     * @param requestBody
     * @returns any Successfully added payment method to payment intent
     * @throws ApiError
     */
    public static addPaymentMethodToPaymentIntent(
        xApiVersion: string,
        xAccountId: string,
        id: string,
        requestBody: PaymentIntentAddPaymentMethodRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/embed/payment_intents/{id}/add_payment_method',
            path: {
                'id': id,
            },
            headers: {
                'X-Api-Version': xApiVersion,
                'X-Account-Id': xAccountId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List payment intents
     * @param xApiVersion
     * @param xAccountId
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @returns any A list of payment intents
     * @throws ApiError
     */
    public static listPaymentIntents(
        xApiVersion: string,
        xAccountId: string,
        page?: number,
        perPage?: number,
    ): CancelablePromise<{
        data?: Array<PaymentIntentResponse>;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/payment_intents',
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
     * Create a new payment intent
     * @param xApiVersion
     * @param xAccountId
     * @param requestBody
     * @returns PaymentIntentResponse Successful creation of payment intent
     * @throws ApiError
     */
    public static createPaymentIntent(
        xApiVersion: string,
        xAccountId: string,
        requestBody: PaymentIntentCreateRequest,
    ): CancelablePromise<PaymentIntentResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/payment_intents',
            headers: {
                'X-Api-Version': xApiVersion,
                'X-Account-Id': xAccountId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve a payment intent by ID
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the payment intent to retrieve
     * @returns PaymentIntentResponse Successful retrieval of payment intent
     * @throws ApiError
     */
    public static getPaymentIntent(
        xApiVersion: string,
        xAccountId: string,
        id: string,
    ): CancelablePromise<PaymentIntentResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/payment_intents/{id}',
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
     * Update a payment intent
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the payment intent to update
     * @param requestBody
     * @returns PaymentIntentResponse Successful update of payment intent
     * @throws ApiError
     */
    public static updatePaymentIntent(
        xApiVersion: string,
        xAccountId: string,
        id: string,
        requestBody: PaymentIntentUpdateRequest,
    ): CancelablePromise<PaymentIntentResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/payment_intents/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-Api-Version': xApiVersion,
                'X-Account-Id': xAccountId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Cancel a payment intent
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the payment intent to cancel
     * @returns PaymentIntentResponse Successful cancellation of payment intent
     * @throws ApiError
     */
    public static cancelPaymentIntent(
        xApiVersion: string,
        xAccountId: string,
        id: string,
    ): CancelablePromise<PaymentIntentResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/payment_intents/{id}/cancel',
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
     * Capture a payment intent
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the payment intent to capture
     * @returns PaymentIntentResponse Successful capture of payment intent
     * @throws ApiError
     */
    public static capturePaymentIntent(
        xApiVersion: string,
        xAccountId: string,
        id: string,
    ): CancelablePromise<PaymentIntentResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/payment_intents/{id}/capture',
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
     * Confirm a payment intent
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the payment intent to confirm
     * @returns PaymentIntentResponse Successful confirmation of payment intent
     * @throws ApiError
     */
    public static confirmPaymentIntent(
        xApiVersion: string,
        xAccountId: string,
        id: string,
    ): CancelablePromise<PaymentIntentResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/payment_intents/{id}/confirm',
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
