import { Metadata } from './Metadata';
export type PaymentIntentAttributes = {
    amount: number;
    payment_method_id?: string;
    capture_method?: string;
    customer_id?: string;
    description?: string | null;
    embed?: boolean;
    embed_origin?: string;
    metadata?: Metadata;
};
