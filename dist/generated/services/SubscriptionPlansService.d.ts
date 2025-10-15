import { Meta } from '../models/Meta';
import { SubscriptionPlanCreateRequest } from '../models/SubscriptionPlanCreateRequest';
import { SubscriptionPlanResponse } from '../models/SubscriptionPlanResponse';
import { SubscriptionResponse } from '../models/SubscriptionResponse';
import { CancelablePromise } from '../core/CancelablePromise';
export declare class SubscriptionPlansService {
    /**
     * List all subscription plans
     * @param xApiVersion
     * @param xAccountId
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @returns any A list of subscription plans
     * @throws ApiError
     */
    static listSubscriptionPlans(xApiVersion: string, xAccountId: string, page?: number, perPage?: number): CancelablePromise<{
        data?: Array<SubscriptionPlanResponse>;
        meta?: Meta;
    }>;
    /**
     * Create a new subscription plan
     * @param xApiVersion
     * @param xAccountId
     * @param requestBody
     * @returns SubscriptionPlanResponse Subscription plan created successfully
     * @throws ApiError
     */
    static createSubscriptionPlan(xApiVersion: string, xAccountId: string, requestBody: SubscriptionPlanCreateRequest): CancelablePromise<SubscriptionPlanResponse>;
    /**
     * Retrieve a subscription plan by ID
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the subscription plan to retrieve
     * @returns SubscriptionResponse Successful retrieval of subscription plan
     * @throws ApiError
     */
    static getSubscriptionPlan(xApiVersion: string, xAccountId: string, id: string): CancelablePromise<SubscriptionResponse>;
}
