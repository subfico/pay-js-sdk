/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SubscriptionPlanCreateRequest } from '../models/SubscriptionPlanCreateRequest';
import type { SubscriptionPlanResponse } from '../models/SubscriptionPlanResponse';
import type { SubscriptionResponse } from '../models/SubscriptionResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SubscriptionPlansService {
    /**
     * List all subscription plans
     * @param xApiVersion
     * @param xAccountId
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @returns any A list of subscription plans
     * @throws ApiError
     */
    public static listSubscriptionPlans(
        xApiVersion: string,
        xAccountId: string,
        page?: number,
        perPage?: number,
    ): CancelablePromise<{
        data?: Array<SubscriptionPlanResponse>;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscription_plans',
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
     * Create a new subscription plan
     * @param xApiVersion
     * @param xAccountId
     * @param requestBody
     * @returns SubscriptionPlanResponse Subscription plan created successfully
     * @throws ApiError
     */
    public static createSubscriptionPlan(
        xApiVersion: string,
        xAccountId: string,
        requestBody: SubscriptionPlanCreateRequest,
    ): CancelablePromise<SubscriptionPlanResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscription_plans',
            headers: {
                'X-Api-Version': xApiVersion,
                'X-Account-Id': xAccountId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve a subscription plan by ID
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the subscription plan to retrieve
     * @returns SubscriptionResponse Successful retrieval of subscription plan
     * @throws ApiError
     */
    public static getSubscriptionPlan(
        xApiVersion: string,
        xAccountId: string,
        id: string,
    ): CancelablePromise<SubscriptionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscription_plans/{id}',
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
