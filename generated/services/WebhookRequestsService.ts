/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { WebhookRequestResponse } from '../models/WebhookRequestResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WebhookRequestsService {
    /**
     * List all webhook requests
     * @param xApiVersion
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @returns any A list of webhook requests
     * @throws ApiError
     */
    public static listWebhookRequests(
        xApiVersion: string,
        page?: number,
        perPage?: number,
    ): CancelablePromise<{
        data?: Array<WebhookRequestResponse>;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/webhook_requests',
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
     * Resend webhook request by ID
     * @param id The ID of the webhook request to resend
     * @param xApiVersion
     * @returns any Accepted; webhook resend has been enqueued
     * @throws ApiError
     */
    public static resendWebhookRequest(
        id: string,
        xApiVersion: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/webhook_requests/{id}/resend',
            path: {
                'id': id,
            },
            headers: {
                'X-Api-Version': xApiVersion,
            },
        });
    }
}
