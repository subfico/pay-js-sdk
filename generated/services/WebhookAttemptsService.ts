/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { WebhookAttemptResponse } from '../models/WebhookAttemptResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WebhookAttemptsService {
    /**
     * List all webhook attempts
     * @param xApiVersion
     * @param webhookRequestId The ID of the webhook request to filter by
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @returns any A list of webhook attempts
     * @throws ApiError
     */
    public static listWebhookAttempts(
        xApiVersion: string,
        webhookRequestId: string,
        page?: number,
        perPage?: number,
    ): CancelablePromise<{
        data?: Array<WebhookAttemptResponse>;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/webhook_attempts',
            headers: {
                'X-Api-Version': xApiVersion,
            },
            query: {
                'webhook_request_id': webhookRequestId,
                'page': page,
                'per_page': perPage,
            },
        });
    }
}
