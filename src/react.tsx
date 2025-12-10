import { useEffect, useState } from "react";
import GooglePayButton from "@google-pay/button-react";
import type { PaymentMethodAttributes } from "~/generated";

export type Message =
  | {
    type: "UPDATE_HEIGHT";
    height: string;
  }
  | {
    type: "GENERATE_ENCRYPTED_PAYMENT_METHOD";
    paymentMethod?: PaymentMethodAttributes;
  };

/**
 * Create a message object for communication with the SubFi iframe
 */
export function createMessage(message: Message) {
  return message;
}

/**
 * Trigger generation of encrypted payment method from the iframe
 * Call this function to request the iframe to generate and return encrypted payment data
 */
export function generateEncryptedPaymentMethod({
  iframeRef,
}: {
  iframeRef: React.RefObject<HTMLIFrameElement | null>;
}) {
  iframeRef.current?.contentWindow?.postMessage(
    createMessage({
      type: "GENERATE_ENCRYPTED_PAYMENT_METHOD",
    }),
    "*"
  );
}

export function SubFiCreditCardPaymentMethodForm({
  ref,
  renderToken,
  onEncryptedPaymentMethodGenerated,
  origin,
}: React.ComponentProps<"iframe"> & {
  renderToken: string;
  onEncryptedPaymentMethodGenerated: ({
    paymentMethod,
  }: {
    paymentMethod: PaymentMethodAttributes;
  }) => void;
  origin: string;
}) {
  const [height, setHeight] = useState<string>("212px");

  useEffect(() => {
    function handleMessage(event: MessageEvent<Message>) {
      switch (event.data.type) {
        case "UPDATE_HEIGHT":
          setHeight(event.data.height);
          break;

        case "GENERATE_ENCRYPTED_PAYMENT_METHOD":
          if (event.data.paymentMethod) {
            onEncryptedPaymentMethodGenerated({
              paymentMethod: event.data.paymentMethod,
            });
          }
          break;
      }
    }

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  });

  return (
    <iframe
      ref={ref}
      title="Secure credit card payment method form powered by SubFi"
      name="subfi-credit-card-payment-method-form"
      role="presentation"
      src={`${origin}/iframe/card?token=${renderToken}`}
      style={{
        width: "calc(100% + 8px)",
        transition: "height 200ms ease-in-out",
        margin: "0 -4px",
        height,
      }}
      scrolling="no"
    />
  );
}

export function SubFiBankAccountPaymentMethodForm({
  ref,
  renderToken,
  onEncryptedPaymentMethodGenerated,
  origin,
}: React.ComponentProps<"iframe"> & {
  renderToken: string;
  onEncryptedPaymentMethodGenerated: ({
    paymentMethod,
  }: {
    paymentMethod: PaymentMethodAttributes;
  }) => void;
  origin: string;
}) {
  const [height, setHeight] = useState<string>("320px");

  useEffect(() => {
    function handleMessage(event: MessageEvent<Message>) {
      switch (event.data.type) {
        case "UPDATE_HEIGHT":
          setHeight(event.data.height);
          break;

        case "GENERATE_ENCRYPTED_PAYMENT_METHOD":
          if (event.data.paymentMethod) {
            onEncryptedPaymentMethodGenerated({
              paymentMethod: event.data.paymentMethod,
            });
          }
          break;
      }
    }

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  });

  return (
    <iframe
      ref={ref}
      title="Secure bank account payment method form powered by SubFi"
      name="subfi-bank-account-payment-method-form"
      role="presentation"
      src={`${origin}/iframe/bank?token=${renderToken}`}
      style={{
        width: "calc(100% + 8px)",
        transition: "height 200ms ease-in-out",
        margin: "0 -4px",
        height,
      }}
      scrolling="no"
    />
  );
}

export type Props = {
  onEncryptedPaymentMethodGenerated: ({
    paymentMethod,
  }: {
    paymentMethod: PaymentMethodAttributes;
  }) => void;
} & Omit<React.ComponentProps<typeof GooglePayButton>, "paymentRequest" | "onLoadPaymentData"> & {
  merchantInfo: google.payments.api.MerchantInfo;
  transactionInfo: google.payments.api.TransactionInfo;
} & {
  ref?: React.RefObject<GooglePayButton | null>;
}

export function SubFiGooglePayPaymentMethodForm({
  onEncryptedPaymentMethodGenerated,
  ...props
}: Props) {
  return (
    <GooglePayButton
      paymentRequest={{
        emailRequired: true,
        allowedPaymentMethods: [
          {
            parameters: {
              allowedAuthMethods: ["CRYPTOGRAM_3DS", "PAN_ONLY"],
              allowedCardNetworks: ["AMEX", "DISCOVER", "MASTERCARD", "VISA"],
              billingAddressRequired: true,
              billingAddressParameters: {
                format: "FULL",
                phoneNumberRequired: false,
              },
              cvcRequired: false,
            },
            tokenizationSpecification: {
              parameters: {
                gateway: "anedot",
                gatewayMerchantId: "anedot",
              },
              type: "PAYMENT_GATEWAY",
            },
            type: "CARD",
          },
        ],
        callbackIntents: ["PAYMENT_AUTHORIZATION", "SHIPPING_ADDRESS"],
        apiVersion: 2,
        apiVersionMinor: 0,
        merchantInfo: props.merchantInfo,
        transactionInfo: props.transactionInfo,
        shippingAddressRequired: true,
      }}
      onLoadPaymentData={(paymentData) => {
        onEncryptedPaymentMethodGenerated({
          paymentMethod: {
            billing_address_attributes: {
              name: paymentData.paymentMethodData.info?.billingAddress?.name,
              address_line1:
                paymentData.paymentMethodData.info?.billingAddress?.address1,
              address_line2:
                paymentData.paymentMethodData.info?.billingAddress?.address2,
              city: paymentData.paymentMethodData.info?.billingAddress
                ?.locality,
              state:
                paymentData.paymentMethodData.info?.billingAddress
                  ?.administrativeArea,
              postal_code:
                paymentData.paymentMethodData.info?.billingAddress?.postalCode,
              country:
                paymentData.paymentMethodData.info?.billingAddress?.countryCode,
              email: paymentData.email,
              phone:
                paymentData.paymentMethodData.info?.billingAddress?.phoneNumber,
            },
            card_profile_attributes: {
              wallet_provider: "googlepay",
              wallet_payload:
                paymentData.paymentMethodData.tokenizationData.token,
              last_four: paymentData.paymentMethodData.info?.cardDetails,
              brand: paymentData.paymentMethodData.info?.cardNetwork,
            },
          },
        });
      }}
      {...props}
    />
  );
}
