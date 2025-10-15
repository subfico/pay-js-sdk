import { Metadata } from './Metadata';
export type WebhookEndpointAttributes = {
    event?: string;
    metadata?: Metadata;
    active?: boolean;
    url?: string;
};
