export type RenderTemplateAttributes = {
    allowed_payment_method_types?: Array<'card' | 'bank_account'>;
    currency?: string;
    origin_ids?: Array<string>;
};
