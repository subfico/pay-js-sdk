import { Metadata } from './Metadata';
export type WebhookEndpointResponse = {
    id?: string;
    event?: string;
    metadata?: Metadata;
    secret?: string;
    url?: string;
    active?: boolean;
    created_at?: string;
    updated_at?: string;
};
