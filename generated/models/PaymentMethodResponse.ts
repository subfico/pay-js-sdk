/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BankAccountProfileResponse } from './BankAccountProfileResponse';
import type { BillingAddressResponse } from './BillingAddressResponse';
import type { CardProfileResponse } from './CardProfileResponse';
import type { Metadata } from './Metadata';
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

