export type WebhookAttemptResponse = {
    id?: string;
    webhook_request_id?: string;
    error_message?: string;
    request_body?: Record<string, any>;
    response_body?: Record<string, any>;
    status_code?: number;
    success?: boolean;
    created_at?: string;
    updated_at?: string;
};
