export type ReconciliationResponse = {
    organization_id?: string;
    user_id?: string;
    parent_transaction_id: string;
    property?: string;
    old_value?: string;
    new_value?: string;
    reason?: string;
};
