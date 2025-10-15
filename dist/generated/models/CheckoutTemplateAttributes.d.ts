export type CheckoutTemplateAttributes = {
    allowed_payment_method_types?: Array<'card' | 'bank_account'>;
    amount_min?: number;
    amount_max?: number;
    currency?: string;
    origin_ids?: Array<string>;
};
