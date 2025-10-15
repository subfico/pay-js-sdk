import { BankAccountProfileResponse } from './BankAccountProfileResponse';
import { BillingAddressResponse } from './BillingAddressResponse';
import { CardProfileResponse } from './CardProfileResponse';
import { Metadata } from './Metadata';
export type PaymentMethodResponse = {
    id?: string;
    customer_id?: string;
    metadata?: Metadata;
    type?: 'card' | 'bank_account';
    bank_account_profile?: BankAccountProfileResponse;
    billing_address?: BillingAddressResponse;
    card_profile?: CardProfileResponse;
    created_at?: string;
    updated_at?: string;
};
