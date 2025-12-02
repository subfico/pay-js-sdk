export type RenderToken = {
    aud?: string;
    iss?: string;
    iat?: string;
    nbf?: string;
    jti?: string;
    allowed_payment_method_types?: Array<'card' | 'bank_account' | 'googlepay'>;
    render_template_id?: string;
    origins?: Array<string>;
    env?: 'sandbox' | 'production';
};
