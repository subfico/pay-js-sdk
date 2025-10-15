export type SubscriptionAttributes = {
    amount?: number;
    currency?: string;
    customer_id?: string;
    cycles?: number;
    interval?: 'day' | 'week' | 'month' | 'year';
    interval_count?: number;
    subscription_plan_id?: string;
};
