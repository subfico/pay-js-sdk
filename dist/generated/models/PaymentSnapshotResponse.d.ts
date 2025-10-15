export type PaymentSnapshotResponse = {
    id?: string;
    amount?: number;
    currency?: string;
    description?: string;
    state?: 'requires_confirmation' | 'processing' | 'requires_capture' | 'succeeded' | 'failed' | 'cancelled' | 'refunded' | 'voided' | 'errored';
    payment_intent_id?: string;
    subscription_id?: string;
    created_at?: string;
    updated_at?: string;
    customer?: {
        id?: string;
        name?: string;
    };
    payment_method?: {
        id?: string;
        brand?: string;
        last4?: string;
        type?: 'card' | 'bank_account';
    };
};
