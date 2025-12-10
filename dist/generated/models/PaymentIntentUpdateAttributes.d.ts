import { Metadata } from './Metadata';
export type PaymentIntentUpdateAttributes = {
    payment_method_id?: string;
    amount?: number;
    metadata?: Metadata;
};
