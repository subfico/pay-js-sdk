import { Metadata } from './Metadata';
export type SetupIntentResponse = {
    id?: string;
    account_id?: string;
    customer_id?: string;
    metadata?: Metadata;
    payment_method_id?: string;
    source?: 'api' | 'dashboard' | 'subscription';
    state?: 'requires_payment_method' | 'requires_confirmation' | 'verifying' | 'requires_review' | 'succeeded' | 'failed' | 'canceled' | 'errored';
    created_at?: string;
    updated_at?: string;
};
