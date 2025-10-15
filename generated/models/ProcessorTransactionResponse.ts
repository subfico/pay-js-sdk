/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Metadata } from './Metadata';
export type ProcessorTransactionResponse = {
    id?: string;
    account_id?: string;
    approved?: boolean;
    external_reference?: string;
    metadata?: Metadata;
    payment_method_id?: string;
    payment_transaction_id?: string;
    payment_transaction_type?: 'charge' | 'refund' | 'void';
    accounts_processor_id?: string;
    processor_transaction_id?: string;
    transaction_type?: 'authorization' | 'authorization_reversal' | 'capture' | 'credit' | 'echeck_credit' | 'echeck_sale' | 'echeck_void' | 'sale' | 'void';
    created_at?: string;
    updated_at?: string;
};

