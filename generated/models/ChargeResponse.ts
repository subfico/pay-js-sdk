/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Metadata } from './Metadata';
export type ChargeResponse = {
    id?: string;
    account_id?: string;
    adjustment_reason?: string;
    amount?: number;
    currency?: string;
    customer_id?: string;
    description?: string | null;
    allowed_reverse_action?: 'void' | 'refund' | null;
    metadata?: Metadata;
    original_transaction_id?: string;
    parent_transaction_id?: string;
    payment_intent_id?: string;
    payment_method_id?: string;
    platform_fee?: string;
    platform_per_txn_fee?: number;
    platform_rate?: string;
    source?: 'api' | 'dashboard' | 'subscription';
    state?: 'requires_confirmation' | 'processing' | 'requires_capture' | 'succeeded' | 'failed' | 'cancelled';
    statement_descriptor?: string;
    succeeded_at?: string;
    created_at?: string;
    updated_at?: string;
};

