import { Metadata } from './Metadata';
export type RefundAttributes = {
    amount?: number;
    adjustment_reason?: string;
    parent_transaction_id: string;
    description?: string;
    metadata?: Metadata;
};
