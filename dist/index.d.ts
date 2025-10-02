export type Message = {
    type: "UPDATE_HEIGHT";
    height: string;
} | {
    type: "CREATE_PAYMENT_WITH_NEW_CARD";
    paymentIntentState: PaymentIntentState;
    renderToken: string;
} | {
    type: "UPDATE_FETCHER_STATE";
    isLoading: boolean;
    response: unknown;
};
export type PaymentIntentState = {
    embed: true;
    amount: number;
    description?: string;
    customerId?: string;
    captureMethod: "automatic" | "manual";
};
export declare function createMessage(message: Message): Message;
export declare function SubFiCreditCardPaymentMethodForm({ ref, renderToken, origin, }: React.ComponentProps<"iframe"> & {
    renderToken: string;
    origin: string;
}): import("react/jsx-runtime").JSX.Element;
