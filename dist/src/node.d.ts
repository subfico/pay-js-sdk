import { CustomerAttributes, CustomerResponse, PaymentIntentCreateAttributes, PaymentIntentResponse, PaymentMethodAttributes, PaymentMethodResponse } from '../generated';
export type { CustomerAttributes, CustomerResponse, PaymentIntentCreateAttributes, PaymentIntentResponse, PaymentMethodAttributes, PaymentMethodResponse, } from '../generated';
export type CreatePaymentArgs = {
    accountId: string;
    data: {
        customer: CustomerAttributes | {
            id: CustomerResponse["id"];
        };
    } & ({
        paymentIntent: PaymentIntentCreateAttributes & Required<Pick<PaymentIntentCreateAttributes, "payment_method_id">>;
    } | {
        paymentIntent: Omit<PaymentIntentCreateAttributes, "payment_method_id">;
        paymentMethod: PaymentMethodAttributes | Pick<PaymentMethodResponse, "id">;
    });
    headers?: Record<string, string>;
};
export declare function createClient({ renderToken, apiKey, }: {
    renderToken: string;
    apiKey: string;
}): {
    createPayment: ({ accountId, data, headers, }: CreatePaymentArgs) => Promise<PaymentIntentResponse>;
};
