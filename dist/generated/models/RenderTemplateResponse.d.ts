export type RenderTemplateResponse = {
    id?: string;
    organization_id?: string;
    allowed_payment_method_types?: Array<'card' | 'bank_account'>;
    currency?: string;
};
