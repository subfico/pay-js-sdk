import { BankAccountProfileAttributes } from './BankAccountProfileAttributes';
import { BillingAddressAttributes } from './BillingAddressAttributes';
import { CardProfileAttributes } from './CardProfileAttributes';
import { Metadata } from './Metadata';
export type PaymentMethodAttributes = {
    customer_id?: string;
    metadata?: Metadata;
    set_as_customer_default?: string;
    billing_address_attributes?: BillingAddressAttributes;
    card_profile_attributes?: CardProfileAttributes;
    bank_account_profile_attributes?: BankAccountProfileAttributes;
};
