import { Meta } from '../models/Meta';
import { SubscriptionCreateRequest } from '../models/SubscriptionCreateRequest';
import { SubscriptionResponse } from '../models/SubscriptionResponse';
import { CancelablePromise } from '../core/CancelablePromise';
export declare class SubscriptionsService {
    /**
     * List all subscriptions
     * @param xApiVersion
     * @param xAccountId
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @returns any A list of subscriptions
     * @throws ApiError
     */
    static listSubscriptions(xApiVersion: string, xAccountId: string, page?: number, perPage?: number): CancelablePromise<{
        data?: Array<SubscriptionResponse>;
        meta?: Meta;
    }>;
    /**
     * Create a new subscription
     * @param xApiVersion
     * @param xAccountId
     * @param requestBody
     * @returns SubscriptionResponse Subscription created successfully
     * @throws ApiError
     */
    static createSubscription(xApiVersion: string, xAccountId: string, requestBody: SubscriptionCreateRequest): CancelablePromise<SubscriptionResponse>;
    /**
     * Retrieve a subscription by ID
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the subscription to retrieve
     * @returns SubscriptionResponse Successful retrieval of subscription
     * @throws ApiError
     */
    static getSubscription(xApiVersion: string, xAccountId: string, id: string): CancelablePromise<SubscriptionResponse>;
    /**
     * Cancel a subscription by ID
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the subscription to cancel
     * @returns SubscriptionResponse Successful cancellation of subscription
     * @throws ApiError
     */
    static cancelSubscription(xApiVersion: string, xAccountId: string, id: string): CancelablePromise<SubscriptionResponse>;
}
