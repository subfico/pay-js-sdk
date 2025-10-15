import { Metadata } from './Metadata';
export type CustomerResponse = {
    id?: string;
    account_id?: string;
    email?: string;
    metadata?: Metadata;
    name?: string;
    payment_method_id?: string;
    phone?: string;
    type?: string;
    created_at?: string;
    updated_at?: string;
};
