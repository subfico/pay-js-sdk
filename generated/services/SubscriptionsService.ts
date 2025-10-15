/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SubscriptionCreateRequest } from '../models/SubscriptionCreateRequest';
import type { SubscriptionResponse } from '../models/SubscriptionResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SubscriptionsService {
    /**
     * List all subscriptions
     * @param xApiVersion
     * @param xAccountId
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @returns any A list of subscriptions
     * @throws ApiError
     */
    public static listSubscriptions(
        xApiVersion: string,
        xAccountId: string,
        page?: number,
        perPage?: number,
    ): CancelablePromise<{
        data?: Array<SubscriptionResponse>;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions',
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
     * Create a new subscription
     * @param xApiVersion
     * @param xAccountId
     * @param requestBody
     * @returns SubscriptionResponse Subscription created successfully
     * @throws ApiError
     */
    public static createSubscription(
        xApiVersion: string,
        xAccountId: string,
        requestBody: SubscriptionCreateRequest,
    ): CancelablePromise<SubscriptionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscriptions',
            headers: {
                'X-Api-Version': xApiVersion,
                'X-Account-Id': xAccountId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve a subscription by ID
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the subscription to retrieve
     * @returns SubscriptionResponse Successful retrieval of subscription
     * @throws ApiError
     */
    public static getSubscription(
        xApiVersion: string,
        xAccountId: string,
        id: string,
    ): CancelablePromise<SubscriptionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/{id}',
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
     * Cancel a subscription by ID
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the subscription to cancel
     * @returns SubscriptionResponse Successful cancellation of subscription
     * @throws ApiError
     */
    public static cancelSubscription(
        xApiVersion: string,
        xAccountId: string,
        id: string,
    ): CancelablePromise<SubscriptionResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subscriptions/{id}/cancel',
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
