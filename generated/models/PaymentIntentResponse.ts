/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Metadata } from './Metadata';
export type PaymentIntentResponse = {
    id?: string;
    account_id?: string;
    amount?: number;
    capture_method?: string;
    charge_id?: string;
    currency?: string;
    customer_id?: string;
    description?: string;
    embed_origin?: string;
    metadata?: Metadata;
    payment_method_id?: string;
    source?: 'api' | 'dashboard' | 'subscription';
    state?: 'requires_payment_method' | 'requires_confirmation' | 'requires_capture' | 'processing_authorization' | 'processing_capture' | 'processing_sale' | 'requires_review' | 'succeeded' | 'cancelled' | 'errored_authorization' | 'errored_capture' | 'errored_sale';
    statement_descriptor?: string;
    token?: string;
    ttl?: number;
    created_at?: string;
    updated_at?: string;
};

