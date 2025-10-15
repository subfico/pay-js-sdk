import { Metadata } from './Metadata';
export type CustomerUpdateAttributes = {
    account_id?: string;
    name?: string;
    email?: string;
    metadata?: Metadata;
    phone?: string;
    payment_method_id?: string;
};
