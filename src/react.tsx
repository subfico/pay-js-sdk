import { useEffect, useState } from "react";
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
    "*",
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
  const [height, setHeight] = useState<string>("0px");

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

        default:
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
  const [height, setHeight] = useState<string>("0px");

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

        default:
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
