import { Meta } from '../models/Meta';
import { WebhookAttemptResponse } from '../models/WebhookAttemptResponse';
import { CancelablePromise } from '../core/CancelablePromise';
export declare class WebhookAttemptsService {
    /**
     * List all webhook attempts
     * @param xApiVersion
     * @param webhookRequestId The ID of the webhook request to filter by
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @returns any A list of webhook attempts
     * @throws ApiError
     */
    static listWebhookAttempts(xApiVersion: string, webhookRequestId: string, page?: number, perPage?: number): CancelablePromise<{
        data?: Array<WebhookAttemptResponse>;
        meta?: Meta;
    }>;
}
