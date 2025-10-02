export type Message =
	| {
			type: "UPDATE_HEIGHT";
			height: string;
	  }
	| {
			type: "CREATE_PAYMENT_WITH_NEW_CARD";
			paymentIntentState: PaymentIntentState;
			renderToken: string;
	  }
	| {
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

export function createMessage(message: Message) {
	return message;
}

export function SubFiCreditCardPaymentMethodForm({
	ref,
	renderToken,
	origin,
}: React.ComponentProps<"iframe"> & {
	renderToken: string;
	origin: string;
}) {
	return (
		<iframe
			ref={ref}
			title="Secure credit card payment method form powered by SubFi"
			name="subfi-credit-card-payment-method-form"
			role="presentation"
			src={`${origin}/iframe/card?token=${renderToken}`}
			style={{
				width: "100%",
				transition: "height 200ms ease-in-out",
				margin: "0 -4px",
			}}
			scrolling="no"
		/>
	);
}
