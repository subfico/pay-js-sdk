/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Metadata } from './Metadata';
export type SubscriptionPlanResponse = {
    id?: string;
    account_id?: string;
    product_id?: string;
    active?: boolean;
    amount?: number;
    currency?: string;
    cycles?: number;
    description?: string;
    interval?: 'day' | 'week' | 'month' | 'year';
    interval_count?: number;
    metadata?: Metadata;
    name?: string;
    plan_type?: 'fixed' | 'variable';
    trial_period_days?: number;
    created_at?: string;
    updated_at?: string;
};

