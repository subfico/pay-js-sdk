import { Metadata } from './Metadata';
export type MerchantResponse = {
    id?: string;
    organization_id?: string;
    legal_name?: string;
    dba_name?: string;
    metadata?: Metadata;
    state?: string;
    created_at?: string;
    updated_at?: string;
};
