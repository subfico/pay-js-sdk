/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CheckoutTemplateResponse = {
    id?: string;
    organization_id?: string;
    allowed_payment_method_types?: Array<'card' | 'bank_account'>;
    amount_min?: number;
    amount_max?: number;
    currency?: string;
};

