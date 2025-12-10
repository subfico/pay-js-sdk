import { default as GooglePayButton } from '@google-pay/button-react';
import { PaymentMethodAttributes } from '../../../../../generated';
export type Message = {
    type: "UPDATE_HEIGHT";
    height: string;
} | {
    type: "GENERATE_ENCRYPTED_PAYMENT_METHOD";
    paymentMethod?: PaymentMethodAttributes;
};
/**
 * Create a message object for communication with the SubFi iframe
 */
export declare function createMessage(message: Message): Message;
/**
 * Trigger generation of encrypted payment method from the iframe
 * Call this function to request the iframe to generate and return encrypted payment data
 */
export declare function generateEncryptedPaymentMethod({ iframeRef, }: {
    iframeRef: React.RefObject<HTMLIFrameElement | null>;
}): void;
export declare function SubFiCreditCardPaymentMethodForm({ ref, renderToken, onEncryptedPaymentMethodGenerated, origin, }: React.ComponentProps<"iframe"> & {
    renderToken: string;
    onEncryptedPaymentMethodGenerated: ({ paymentMethod, }: {
        paymentMethod: PaymentMethodAttributes;
    }) => void;
    origin: string;
}): import("react/jsx-runtime").JSX.Element;
export declare function SubFiBankAccountPaymentMethodForm({ ref, renderToken, onEncryptedPaymentMethodGenerated, origin, }: React.ComponentProps<"iframe"> & {
    renderToken: string;
    onEncryptedPaymentMethodGenerated: ({ paymentMethod, }: {
        paymentMethod: PaymentMethodAttributes;
    }) => void;
    origin: string;
}): import("react/jsx-runtime").JSX.Element;
export type Props = {
    onEncryptedPaymentMethodGenerated: ({ paymentMethod, }: {
        paymentMethod: PaymentMethodAttributes;
    }) => void;
} & Omit<React.ComponentProps<typeof GooglePayButton>, "paymentRequest" | "onLoadPaymentData"> & {
    merchantInfo: google.payments.api.MerchantInfo;
    transactionInfo: google.payments.api.TransactionInfo;
} & {
    ref?: React.RefObject<GooglePayButton | null>;
};
export declare function SubFiGooglePayPaymentMethodForm({ onEncryptedPaymentMethodGenerated, ...props }: Props): import("react/jsx-runtime").JSX.Element;
