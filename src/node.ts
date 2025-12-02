import type {
  CustomerAttributes,
  CustomerResponse,
  PaymentIntentCreateAttributes,
  PaymentIntentResponse,
  PaymentMethodAttributes,
  PaymentMethodResponse,
  RenderToken,
  TokenResponse,
} from "~/generated";

export type {
  CustomerAttributes,
  CustomerResponse,
  PaymentIntentCreateAttributes,
  PaymentIntentResponse,
  PaymentMethodAttributes,
  PaymentMethodResponse,
} from "~/generated";

export type CreatePaymentArgs = {
  accountId: string;
  data: { customer: CustomerAttributes | { id: CustomerResponse["id"] } } & (
    | {
        paymentIntent: PaymentIntentCreateAttributes &
          Required<Pick<PaymentIntentCreateAttributes, "payment_method_id">>;
      }
    | {
        paymentIntent: Omit<PaymentIntentCreateAttributes, "payment_method_id">;
        paymentMethod: PaymentMethodAttributes;
      }
  );
  headers?: Record<string, string>;
};

export function createClient({
  renderToken,
  apiKey,
}: {
  renderToken: string;
  apiKey: string;
}) {
  const { env = "sandbox" }: RenderToken = decodeJwt(renderToken).payload;

  async function createPayment({
    accountId,
    data,
    headers,
  }: CreatePaymentArgs): Promise<PaymentIntentResponse> {
    const customer =
      "id" in data.customer
        ? data.customer
        : await findOrCreateCustomer({
            requestBody: data.customer,
            headers,
            apiKey,
            env,
          });

    const paymentIntent = await createPaymentIntent({
      requestBody: {
        ...data.paymentIntent,
        amount: data.paymentIntent?.amount ?? 0,
        ...(customer?.id && { customer_id: customer.id }),
      },
      headers,
      apiKey,
      env,
      accountId,
      renderToken,
    });

    const token = paymentIntent.token ?? "";

    const paymentIntentId: string =
      decodeJwt(token).payload.payment_intent_id ?? "";

    return await confirmPaymentIntent({
      token,
      paymentIntentId,

      ...("paymentMethod" in data
        ? {
            paymentMethod: {
              ...data.paymentMethod,
              ...(customer?.id && { customer_id: customer.id }),
            },
          }
        : {
            paymentMethod: { id: data.paymentIntent.payment_method_id },
          }),
      headers,
      env,
    });
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
  requestBody: CustomerAttributes;
  headers?: Record<string, string> & { Authorization?: string };
  apiKey: string;
  env: RenderToken["env"];
}): Promise<CustomerResponse> {
  const response = await fetch(
    `${
      env === "production"
        ? "https://pay.subfi.com"
        : "https://pay-sandbox.subfi.com"
    }/customers`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(!headers?.Authorization && { "X-Api-Key": apiKey }),
        ...headers,
      },
      body: JSON.stringify({
        customer: requestBody,
      }),
    }
  );

  if (response.ok) {
    return response.json();
  }

  if (response.status === 422 && requestBody?.email) {
    const response = await fetch(
      `${
        env === "production"
          ? "https://pay.subfi.com"
          : "https://pay-sandbox.subfi.com"
      }/customers?email=${requestBody.email}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...(!headers?.Authorization && { "X-Api-Key": apiKey }),
          ...headers,
        },
      }
    );

    if (response.ok) {
      const existingCustomer: CustomerResponse = (await response.json())
        .data[0];

      if (
        requestBody?.metadata &&
        Object.keys(requestBody.metadata).length > 0
      ) {
        const response = await fetch(
          `${
            env === "production"
              ? "https://pay.subfi.com"
              : "https://pay-sandbox.subfi.com"
          }/customers/${existingCustomer.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              ...(!headers?.Authorization && { "X-Api-Key": apiKey }),
              ...headers,
            },
            body: JSON.stringify({
              customer: {
                metadata: {
                  ...existingCustomer.metadata,
                  ...requestBody.metadata,
                },
              },
            }),
          }
        );

        if (response.ok) {
          return response.json();
        }

        throw new Error(`${response.statusText}: ${await response.text()}`);
      }

      return existingCustomer;
    }

    throw new Error(`${response.statusText}: ${await response.text()}`);
  }

  throw new Error(`${response.statusText}: ${await response.text()}`);
}

async function createPaymentIntent({
  requestBody,
  headers,
  accountId,
  apiKey,
  renderToken,
  env,
}: {
  requestBody: PaymentIntentCreateAttributes;
  headers?: Record<string, string> & { Authorization?: string };
  apiKey: string;
  accountId: string;
  renderToken: string;
  env: RenderToken["env"];
}): Promise<TokenResponse> {
  const response = await fetch(
    `${
      env === "production"
        ? "https://pay.subfi.com"
        : "https://pay-sandbox.subfi.com"
    }/payment_intents`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Account-Id": accountId,
        ...(!headers?.Authorization && { "X-Api-Key": apiKey }),
        "X-Render-Token": renderToken,
        ...headers,
      },
      body: JSON.stringify({
        payment_intent: requestBody,
      }),
    }
  );

  if (response.ok) {
    return response.json();
  }

  throw new Error(`${response.statusText}: ${await response.text()}`);
}

async function confirmPaymentIntent({
  token,
  paymentIntentId,
  paymentMethod,
  headers,
  env,
}: {
  token: string | undefined;
  paymentIntentId: string | undefined;
  paymentMethod?: PaymentMethodAttributes | Pick<PaymentMethodResponse, "id">;
  headers?: Record<string, string>;
  env: RenderToken["env"];
}): Promise<PaymentIntentResponse> {
  // biome-ignore lint/correctness/noUnusedVariables: Exclude Authorization header
  const { Authorization, ...remainingHeaders } = headers ?? {};

  const response = await fetch(
    `${
      env === "production"
        ? "https://pay.subfi.com"
        : "https://pay-sandbox.subfi.com"
    }/embed/payment_intents/${paymentIntentId}/confirm`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Embed ${token}`,
        ...remainingHeaders,
      },
      body: JSON.stringify({
        payment_intent: {
          ...(paymentMethod && "id" in paymentMethod
            ? { payment_method_id: paymentMethod.id }
            : { payment_method: paymentMethod }),
        },
      }),
    }
  );

  if (response.ok) {
    return response.json();
  }

  throw new Error(`${response.statusText}: ${await response.text()}`);
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
