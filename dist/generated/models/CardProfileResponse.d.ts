export type CardProfileResponse = {
    avs_check?: string;
    avs_check_message?: string | null;
    brand?: string;
    cvc_check?: string;
    cvc_check_message?: string | null;
    exp_month?: number;
    exp_year?: number;
    first6?: string;
    funding?: string | null;
    last4?: string;
    state?: string;
    three_d_secure_supported?: boolean | null;
    token?: string;
    created_at?: string;
    updated_at?: string;
};
