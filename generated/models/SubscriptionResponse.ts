/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SubscriptionResponse = {
    id?: string;
    account_id?: string;
    amount?: number;
    currency?: string;
    cycles?: number;
    subscription_plan_id?: string;
    customer_id?: string;
    payment_method_id?: string;
    interval?: 'day' | 'week' | 'month' | 'year';
    interval_count?: number;
    state?: 'active' | 'paused' | 'past_due' | 'cancelled';
    cycles_completed?: number;
    current_billing_period_start?: string;
    current_billing_period_end?: string;
    trial_ends_at?: string | null;
    created_at?: string;
    updated_at?: string;
};

