/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RenderToken = {
    aud?: string;
    iss?: string;
    iat?: string;
    nbf?: string;
    jti?: string;
    allowed_payment_method_types?: Array<'card' | 'bank_account' | 'googlepay'>;
    amount_min?: number;
    amount_max?: number;
    checkout_template_id?: string;
    origins?: Array<string>;
    env?: 'sandbox' | 'production';
};

