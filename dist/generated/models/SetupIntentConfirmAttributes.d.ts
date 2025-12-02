import { BankAccountProfileAttributes } from './BankAccountProfileAttributes';
import { BillingAddressAttributes } from './BillingAddressAttributes';
import { CardProfileAttributes } from './CardProfileAttributes';
import { Metadata } from './Metadata';
export type SetupIntentConfirmAttributes = {
    payment_method?: {
        metadata?: Metadata;
        bank_account_profile_attributes?: BankAccountProfileAttributes;
        billing_address_attributes?: BillingAddressAttributes;
        card_profile_attributes?: CardProfileAttributes;
    };
};
