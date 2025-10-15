import { Metadata } from './Metadata';
export type ProductResponse = {
    id?: string;
    account_id?: string;
    name?: string;
    description?: string;
    active?: boolean;
    metadata?: Metadata;
    created_at?: string;
    updated_at?: string;
};
