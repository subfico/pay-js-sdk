import { CustomerAttributes, CustomerResponse, PaymentIntentAttributes, PaymentIntentResponse, PaymentMethodAttributes } from '../generated';
export type { CustomerAttributes, PaymentIntentAttributes, PaymentIntentResponse, PaymentMethodAttributes, } from '../generated';
export declare function createClient({ renderToken, apiKey, }: {
    renderToken: string;
    apiKey: string;
}): {
    createPayment: ({ accountId, data, headers, mockPaymentIntent, }: {
        accountId: string;
        data: {
            customer: CustomerAttributes | {
                id: CustomerResponse["id"];
            };
            paymentIntent: PaymentIntentAttributes;
            paymentMethod: PaymentMethodAttributes;
        };
        headers?: Record<string, string>;
        mockPaymentIntent?: PaymentIntentResponse;
    }) => Promise<PaymentIntentResponse>;
};
