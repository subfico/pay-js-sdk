/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BankAccountProfileAttributes } from './BankAccountProfileAttributes';
import type { BillingAddressAttributes } from './BillingAddressAttributes';
import type { CardProfileAttributes } from './CardProfileAttributes';
import type { Metadata } from './Metadata';
export type PaymentMethodAttributes = {
    customer_id?: string;
    metadata?: Metadata;
    set_as_customer_default?: string;
    billing_address_attributes?: BillingAddressAttributes;
    card_profile_attributes?: CardProfileAttributes;
    bank_account_profile_attributes?: BankAccountProfileAttributes;
};

