import { CustomerCreateRequest, PaymentIntentCreateRequest, PaymentIntentResponse, PaymentMethodAttributes } from '../generated';
export type { CustomerCreateRequest, PaymentIntentCreateRequest, PaymentIntentResponse, PaymentMethodAttributes, } from '../generated';
export declare function createClient({ renderToken, apiKey, }: {
    renderToken: string;
    apiKey: string;
}): {
    createPayment: ({ accountId, data, headers, }: {
        accountId: string;
        data: {
            customer: CustomerCreateRequest;
            paymentIntent: PaymentIntentCreateRequest;
            paymentMethod: PaymentMethodAttributes;
        };
        headers?: Record<string, string>;
    }) => Promise<PaymentIntentResponse>;
};
