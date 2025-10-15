/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { WebhookEndpointCreateRequest } from '../models/WebhookEndpointCreateRequest';
import type { WebhookEndpointResponse } from '../models/WebhookEndpointResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WebhookEndpointsService {
    /**
     * List all webhook endpoints
     * @param xApiVersion
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @returns any A list of webhook endpoints
     * @throws ApiError
     */
    public static listWebhookEndpoints(
        xApiVersion: string,
        page?: number,
        perPage?: number,
    ): CancelablePromise<{
        data?: Array<WebhookEndpointResponse>;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/webhook_endpoints',
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
     * Create a webhook endpoint
     * @param xApiVersion
     * @param requestBody
     * @returns WebhookEndpointResponse Webhook endpoint created successfully
     * @throws ApiError
     */
    public static createWebhookEndpoint(
        xApiVersion: string,
        requestBody: WebhookEndpointCreateRequest,
    ): CancelablePromise<WebhookEndpointResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/webhook_endpoints',
            headers: {
                'X-Api-Version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve a webhook endpoint by ID
     * @param xApiVersion
     * @param id
     * @returns WebhookEndpointResponse A single webhook endpoint
     * @throws ApiError
     */
    public static getWebhookEndpoint(
        xApiVersion: string,
        id: string,
    ): CancelablePromise<WebhookEndpointResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/webhook_endpoints/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-Api-Version': xApiVersion,
            },
        });
    }
    /**
     * Update a webhook endpoint by ID
     * @param xApiVersion
     * @param id
     * @param requestBody
     * @returns WebhookEndpointResponse Webhook endpoint updated successfully
     * @throws ApiError
     */
    public static updateWebhookEndpoint(
        xApiVersion: string,
        id: string,
        requestBody: WebhookEndpointCreateRequest,
    ): CancelablePromise<WebhookEndpointResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/webhook_endpoints/{id}',
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
    /**
     * Delete a webhook endpoint by ID
     * @param xApiVersion
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static deleteWebhookEndpoint(
        xApiVersion: string,
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/webhook_endpoints/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-Api-Version': xApiVersion,
            },
        });
    }
}
