import { Meta } from '../models/Meta';
import { WebhookRequestResponse } from '../models/WebhookRequestResponse';
import { CancelablePromise } from '../core/CancelablePromise';
export declare class WebhookRequestsService {
    /**
     * List all webhook requests
     * @param xApiVersion
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @returns any A list of webhook requests
     * @throws ApiError
     */
    static listWebhookRequests(xApiVersion: string, page?: number, perPage?: number): CancelablePromise<{
        data?: Array<WebhookRequestResponse>;
        meta?: Meta;
    }>;
    /**
     * Resend webhook request by ID
     * @param id The ID of the webhook request to resend
     * @param xApiVersion
     * @returns any Accepted; webhook resend has been enqueued
     * @throws ApiError
     */
    static resendWebhookRequest(id: string, xApiVersion: string): CancelablePromise<any>;
}
