import type {
  CustomerAttributes,
  CustomerResponse,
  PaymentIntentAttributes,
  PaymentIntentResponse,
  PaymentMethodAttributes,
  PaymentMethodResponse,
  RenderToken,
  TokenResponse,
} from "~/generated";

export type {
  CustomerAttributes,
  PaymentIntentAttributes,
  PaymentIntentResponse,
  PaymentMethodAttributes,
} from "~/generated";

export type CreatePaymentArgs = {
  accountId: string;
  data: {
    customer: CustomerAttributes | { id: CustomerResponse["id"] };
    paymentIntent: PaymentIntentAttributes;
    paymentMethod: PaymentMethodAttributes;
  };
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

    const paymentMethod = await createPaymentMethod({
      token,
      requestBody: {
        ...data.paymentMethod,
        ...(customer?.id && { customer_id: customer.id }),
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
      headers,
      env,
    });

    return await confirmPaymentIntent({
      token,
      paymentIntentId,
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
    `${env === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/customers`,
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
    },
  );

  if (response.ok) {
    return response.json();
  }

  if (response.status === 422 && requestBody?.email) {
    const response = await fetch(
      `${env === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/customers?email=${requestBody.email}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...(!headers?.Authorization && { "X-Api-Key": apiKey }),
          ...headers,
        },
      },
    );

    if (response.ok) {
      const existingCustomer: CustomerResponse = (await response.json())
        .data[0];

      if (
        requestBody?.metadata &&
        Object.keys(requestBody.metadata).length > 0
      ) {
        const response = await fetch(
          `${env === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/customers/${existingCustomer.id}`,
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
          },
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
  requestBody: PaymentIntentAttributes;
  headers?: Record<string, string> & { Authorization?: string };
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
        ...(!headers?.Authorization && { "X-Api-Key": apiKey }),
        "X-Render-Token": renderToken,
        ...headers,
      },
      body: JSON.stringify({
        payment_intent: requestBody,
      }),
    },
  );

  if (response.ok) {
    return response.json();
  }

  throw new Error(`${response.statusText}: ${await response.text()}`);
}

async function createPaymentMethod({
  token,
  requestBody,
  headers,
  env,
}: {
  token: string | undefined;
  requestBody: PaymentMethodAttributes;
  headers?: Record<string, string>;
  env: RenderToken["env"];
}): Promise<PaymentMethodResponse> {
  // biome-ignore lint/correctness/noUnusedVariables: Exclude Authorization header
  const { Authorization, ...remainingHeaders } = headers ?? {};

  const response = await fetch(
    `${env === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/embed/payment_methods`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Embed ${token}`,
        ...remainingHeaders,
      },
      body: JSON.stringify({
        payment_method: requestBody,
      }),
    },
  );

  if (response.ok) {
    return response.json();
  }

  throw new Error(`${response.statusText}: ${await response.text()}`);
}

async function addPaymentMethodToPaymentIntent({
  token,
  paymentIntentId,
  paymentMethodId,
  headers,
  env,
}: {
  token: string | undefined;
  paymentIntentId: string | undefined;
  paymentMethodId: string | undefined;
  headers?: Record<string, string>;
  env: RenderToken["env"];
}): Promise<void> {
  // biome-ignore lint/correctness/noUnusedVariables: Exclude Authorization header
  const { Authorization, ...remainingHeaders } = headers ?? {};

  const response = await fetch(
    `${env === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/embed/payment_intents/${paymentIntentId}/add_payment_method`,
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
          payment_method_id: paymentMethodId,
        },
      }),
    },
  );

  if (response.ok) {
    return;
  }

  throw new Error(`${response.statusText}: ${await response.text()}`);
}

async function confirmPaymentIntent({
  token,
  paymentIntentId,
  headers,
  env,
}: {
  token: string | undefined;
  paymentIntentId: string | undefined;
  headers?: Record<string, string>;
  env: RenderToken["env"];
}): Promise<PaymentIntentResponse> {
  // biome-ignore lint/correctness/noUnusedVariables: Exclude Authorization header
  const { Authorization, ...remainingHeaders } = headers ?? {};

  const response = await fetch(
    `${env === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/embed/payment_intents/${paymentIntentId}/confirm`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Embed ${token}`,
        ...remainingHeaders,
      },
    },
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
