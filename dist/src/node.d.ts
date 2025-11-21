import { CustomerAttributes, CustomerResponse, PaymentIntentAttributes, PaymentIntentResponse, PaymentMethodAttributes } from '../../../../../generated';
export type { CustomerAttributes, CustomerResponse, PaymentIntentAttributes, PaymentIntentResponse, PaymentMethodAttributes, PaymentMethodResponse, } from '../../../../../generated';
export type CreatePaymentArgs = {
    accountId: string;
    data: {
        customer: CustomerAttributes | {
            id: CustomerResponse["id"];
        };
        paymentIntent: PaymentIntentAttributes;
        paymentMethod: PaymentMethodAttributes;
    };
    headers?: Record<string, string>;
};
export declare function createClient({ renderToken, apiKey, }: {
    renderToken: string;
    apiKey: string;
}): {
    createPayment: ({ accountId, data, headers, }: CreatePaymentArgs) => Promise<PaymentIntentResponse>;
};
