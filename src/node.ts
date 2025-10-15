import type {
	CustomerCreateRequest,
	CustomerResponse,
	PaymentIntentCreateRequest,
	PaymentIntentResponse,
	PaymentMethodAttributes,
	PaymentMethodResponse,
	RenderToken,
	TokenResponse,
} from "~/generated";

export type {
	CustomerCreateRequest,
	PaymentIntentCreateRequest,
	PaymentIntentResponse,
	PaymentMethodAttributes,
} from "~/generated";

export function createClient({
	renderToken,
	apiKey,
}: { renderToken: string; apiKey: string }) {
	const { env = "sandbox" }: RenderToken = decodeJwt(renderToken).payload;

	async function createPayment({
		accountId,
		data,
		headers,
	}: {
		accountId: string;
		data: {
			customer: CustomerCreateRequest;
			paymentIntent: PaymentIntentCreateRequest;
			paymentMethod: PaymentMethodAttributes;
		};
		headers?: Record<string, string>;
	}): Promise<PaymentIntentResponse> {
		const customer = await findOrCreateCustomer({
			requestBody: data.customer,
			headers,
			apiKey,
			env,
		});

		const paymentIntent = await createPaymentIntent({
			requestBody: {
				payment_intent: {
					...data.paymentIntent.payment_intent,
					amount: data.paymentIntent.payment_intent?.amount ?? 0,
					...(customer.id && { customer_id: customer.id }),
				},
			},
			headers,
			apiKey,
			env,
			accountId,
			renderToken,
		});

		const token = paymentIntent.token ?? "";

		const paymentMethod = await createPaymentMethod({
			token,
			requestBody: {
				payment_method: {
					...data.paymentMethod,
					...(customer.id && { customer_id: customer.id }),
				},
			},
			headers,
			env,
		});

		const paymentIntentId: string =
			decodeJwt(token).payload.payment_intent_id ?? "";

		await addPaymentMethodToPaymentIntent({
			token,
			paymentIntentId,
			paymentMethodId: paymentMethod.id,
			env,
		});

		await confirmPaymentIntent({
			token,
			paymentIntentId,
			env,
		});

		return {
			id: paymentIntentId,
		};
	}

	return {
		createPayment,
	};
}

async function findOrCreateCustomer({
	requestBody,
	headers,
	apiKey,
	env,
}: {
	requestBody: CustomerCreateRequest;
	headers?: Record<string, string>;
	apiKey: string;
	env: RenderToken["env"];
}): Promise<CustomerResponse> {
	const response = await fetch(
		`${env === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/customers`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				"X-Api-Key": apiKey,
				...headers,
			},
		},
	);

	if (response.ok) {
		return response.json();
	}

	if (response.status === 422 && requestBody.customer?.email) {
		const response = await fetch(
			`${env === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/customers?email=${requestBody.customer.email}`,
			{
				headers: {
					"X-Api-Key": apiKey,
					...headers,
				},
			},
		);

		if (response.ok) {
			return (await response.json()).data[0];
		}

		throw new Error(response.statusText);
	}

	throw new Error(response.statusText);
}

async function createPaymentIntent({
	requestBody,
	headers,
	accountId,
	apiKey,
	renderToken,
	env,
}: {
	requestBody: PaymentIntentCreateRequest;
	headers?: Record<string, string>;
	apiKey: string;
	accountId: string;
	renderToken: string;
	env: RenderToken["env"];
}): Promise<TokenResponse> {
	const response = await fetch(
		`${env === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/payment_intents`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				"X-Account-Id": accountId,
				"X-Api-Key": apiKey,
				"X-Render-Token": renderToken,
				...headers,
			},
			body: JSON.stringify(requestBody),
		},
	);

	if (response.ok) {
		return response.json();
	}

	throw new Error(response.statusText);
}

async function createPaymentMethod({
	token,
	requestBody,
	headers,
	env,
}: {
	token: string | undefined;
	requestBody: { payment_method: PaymentMethodAttributes };
	headers?: Record<string, string>;
	env: RenderToken["env"];
}): Promise<PaymentMethodResponse> {
	const response = await fetch(
		`${env === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/embed/payment_methods`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Embed ${token}`,
				...headers,
			},
			body: JSON.stringify(requestBody),
		},
	);

	if (response.ok) {
		return response.json();
	}

	throw new Error(response.statusText);
}

async function addPaymentMethodToPaymentIntent({
	token,
	paymentIntentId,
	paymentMethodId,
	env,
}: {
	token: string | undefined;
	paymentIntentId: string | undefined;
	paymentMethodId: string | undefined;
	env: RenderToken["env"];
}): Promise<void> {
	const response = await fetch(
		`${env === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/embed/payment_intents/${paymentIntentId}/add_payment_method`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Embed ${token}`,
			},
			body: JSON.stringify({
				payment_intent: {
					payment_method_id: paymentMethodId,
				},
			}),
		},
	);

	if (response.ok) {
		return;
	}

	throw new Error(response.statusText);
}

async function confirmPaymentIntent({
	token,
	paymentIntentId,
	env,
}: {
	token: string | undefined;
	paymentIntentId: string | undefined;
	env: RenderToken["env"];
}): Promise<PaymentIntentResponse> {
	const response = await fetch(
		`${env === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/embed/payment_intents/${paymentIntentId}/confirm`,
		{
			method: "POST",
			headers: {
				Authorization: `Embed ${token}`,
			},
		},
	);

	if (response.ok) {
		return response.json();
	}

	throw new Error(response.statusText);
}

function decodeJwt(token: string) {
	const [header = "", payload = "", signature = ""] = token.split(".");

	const decoder =
		typeof atob === "function"
			? atob
			: (token: string) => Buffer.from(token, "base64").toString("utf8");

	return {
		header: JSON.parse(decoder(header)),
		payload: JSON.parse(decoder(payload)),
		signature,
	};
}
