import { Meta } from '../models/Meta';
import { WebhookEndpointCreateRequest } from '../models/WebhookEndpointCreateRequest';
import { WebhookEndpointResponse } from '../models/WebhookEndpointResponse';
import { CancelablePromise } from '../core/CancelablePromise';
export declare class WebhookEndpointsService {
    /**
     * List all webhook endpoints
     * @param xApiVersion
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @returns any A list of webhook endpoints
     * @throws ApiError
     */
    static listWebhookEndpoints(xApiVersion: string, page?: number, perPage?: number): CancelablePromise<{
        data?: Array<WebhookEndpointResponse>;
        meta?: Meta;
    }>;
    /**
     * Create a webhook endpoint
     * @param xApiVersion
     * @param requestBody
     * @returns WebhookEndpointResponse Webhook endpoint created successfully
     * @throws ApiError
     */
    static createWebhookEndpoint(xApiVersion: string, requestBody: WebhookEndpointCreateRequest): CancelablePromise<WebhookEndpointResponse>;
    /**
     * Retrieve a webhook endpoint by ID
     * @param xApiVersion
     * @param id
     * @returns WebhookEndpointResponse A single webhook endpoint
     * @throws ApiError
     */
    static getWebhookEndpoint(xApiVersion: string, id: string): CancelablePromise<WebhookEndpointResponse>;
    /**
     * Update a webhook endpoint by ID
     * @param xApiVersion
     * @param id
     * @param requestBody
     * @returns WebhookEndpointResponse Webhook endpoint updated successfully
     * @throws ApiError
     */
    static updateWebhookEndpoint(xApiVersion: string, id: string, requestBody: WebhookEndpointCreateRequest): CancelablePromise<WebhookEndpointResponse>;
    /**
     * Delete a webhook endpoint by ID
     * @param xApiVersion
     * @param id
     * @returns void
     * @throws ApiError
     */
    static deleteWebhookEndpoint(xApiVersion: string, id: string): CancelablePromise<void>;
}
