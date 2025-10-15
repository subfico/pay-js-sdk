export type WebhookRequestResponse = {
    id?: string;
    webhook_endpoint_id?: string;
    request_body?: Record<string, any>;
    created_at?: string;
    updated_at?: string;
};
