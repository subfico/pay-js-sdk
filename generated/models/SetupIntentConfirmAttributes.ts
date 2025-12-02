/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BankAccountProfileAttributes } from './BankAccountProfileAttributes';
import type { BillingAddressAttributes } from './BillingAddressAttributes';
import type { CardProfileAttributes } from './CardProfileAttributes';
import type { Metadata } from './Metadata';
export type SetupIntentConfirmAttributes = {
    payment_method?: {
        metadata?: Metadata;
        bank_account_profile_attributes?: BankAccountProfileAttributes;
        billing_address_attributes?: BillingAddressAttributes;
        card_profile_attributes?: CardProfileAttributes;
    };
};

