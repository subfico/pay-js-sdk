# SubFi Pay JavaScript SDK

The official JavaScript SDK for SubFi Pay. This SDK provides secure, PCI-compliant payment processing with both client-side React components and server-side Node.js integration.

> **Note:** Both client-side and server-side SDKs must be used together for secure payment processing.

## Installation

```bash
npm install @subfi/pay-sdk
```

## Quick Start

SubFi Pay uses a dual-SDK architecture for maximum security:

1. **Client Side (React)**: Secure iframe forms for collecting payment information
2. **Server Side (Node.js)**: API client for creating payments and customers

### Basic Flow

```
1. User fills form
2. Encrypted payment method generated
3. Sent to your server
4. Server creates payment
5. Success!
```

## Requirements

```
1. Render Token (created on dashboard.subfi.com)
2. SubFi API Key (get this on dashboard.subfi.com, do not expose this to clients)
3. SubFi Account ID (provided once you're application has been approved)

This configures the iframe's allowed origin(s), allowed payment methods, and the range of valid payment amounts.
```

## Client-Side Usage (React)

The React SDK provides secure iframe components that handle sensitive payment information without it ever touching your client-side code.

The React SDK exports separate components for each payment method (i.e. credit cards, bank accounts, etc.) allowing you to fully control the UX around your form.

### Example rendering the credit card inputs within your custom form

```tsx
import { useRef } from "react";
import {
  SubFiCreditCardPaymentMethodForm,
  generateEncryptedPaymentMethod,
} from "@subfi/pay-sdk/react";

function CheckoutForm() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Trigger the iframe to generate encrypted payment data
    generateEncryptedPaymentMethod({ iframeRef });
  };

  const handlePaymentMethodGenerated = ({ paymentMethod }) => {
    // Send encrypted payment method to your server
    fetch("/api/process-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        paymentMethod,
        customerEmail: "customer@example.com",
        amount: 5000, // $50.00 in cents
      }),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <SubFiCreditCardPaymentMethodForm
        ref={iframeRef}
        renderToken="the-render-token-that-you-created-on-dashboard.subfi.com"
        origin="https://your-domain.com"
        onEncryptedPaymentMethodGenerated={handlePaymentMethodGenerated}
      />
      <button type="submit">Pay Now</button>
    </form>
  );
}
```

### Example rendering the bank account inputs with your custom form

```tsx
import { useRef } from "react";
import {
  SubFiBankAccountPaymentMethodForm,
  generateEncryptedPaymentMethod,
} from "@subfi/pay-sdk/react";

function CheckoutForm() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Trigger the iframe to generate encrypted payment data
    generateEncryptedPaymentMethod({ iframeRef });
  };

  const handlePaymentMethodGenerated = ({ paymentMethod }) => {
    // Send encrypted payment method to your server
    fetch("/api/process-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        paymentMethod,
        customerEmail: "customer@example.com",
        amount: 5000, // $50.00 in cents
      }),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <SubFiBankAccountPaymentMethodForm
        ref={iframeRef}
        renderToken="the-render-token-that-you-created-on-dashboard.subfi.com"
        origin="https://your-domain.com"
        onEncryptedPaymentMethodGenerated={handlePaymentMethodGenerated}
      />
      <button type="submit">Pay Now</button>
    </form>
  );
}
```

## Server-Side Usage (Node.js)

The Node.js SDK handles payment creation, customer management, and communicates with the SubFi Pay API.

### Basic Payment Processing

```typescript
import { createClient } from "@subfi/pay-sdk/node";

// Initialize the client
const client = createClient({
  renderToken: process.env.SUBFI_RENDER_TOKEN,
  apiKey: process.env.SUBFI_API_KEY,
});

// Create a payment (typically in your API route handler)
async function processPayment(req, res) {
  try {
    const { paymentMethod, customerEmail, customerName, amount } = req.body;

    const paymentIntent = await client.createPayment({
      accountId: process.env.SUBFI_ACCOUNT_ID,
      data: {
        customer: {
          email: customerEmail,
          name: customerName,
          metadata: {
            source: "web-checkout",
          },
        },
        paymentIntent: {
          amount: amount, // Amount in cents
          capture_method: "automatic",
          metadata: {
            order_id: "order_123",
          },
        },
        paymentMethod: paymentMethod, // Encrypted data from client
      },
    });

    res.json({ success: true, paymentIntentId: paymentIntent.id });
  } catch (error) {
    console.error("Payment failed:", error);
    res.status(500).json({ error: "Payment processing failed" });
  }
}
```

### With Existing Customer

If you already have a customer ID, you can skip customer creation:

```typescript
const paymentIntent = await client.createPayment({
  accountId: process.env.SUBFI_ACCOUNT_ID,
  data: {
    customer: {
      id: "cus_existing123", // Use existing customer ID
    },
    paymentIntent: {
      amount: 5000,
    },
    paymentMethod: paymentMethod,
  },
});
```

### Adding Custom Headers

You can pass custom headers for idempotency, tracking, or other purposes:

```typescript
const paymentIntent = await client.createPayment({
  accountId: process.env.SUBFI_ACCOUNT_ID,
  data: {
    customer: { email: "customer@example.com" },
    paymentIntent: { amount: 5000 },
    paymentMethod: paymentMethod,
  },
  headers: {
    "X-Idempotency-Key": "unique-request-id-123",
    "X-Custom-Tracking": "campaign-xyz",
  },
});
```

## Full Integration Example

Here's a complete example with React Router (or similar frameworks):

### Client Component (`app/routes/checkout.tsx`)

```tsx
import { useRef, useState } from "react";
import { useFetcher } from "react-router"; // or your router
import {
  SubFiCreditCardPaymentMethodForm,
  generateEncryptedPaymentMethod,
} from "@subfi/pay-sdk/react";
import type { PaymentMethodAttributes } from "@subfi/pay-sdk/node";

export default function CheckoutPage({ loaderData }) {
  const fetcher = useFetcher();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    generateEncryptedPaymentMethod({ iframeRef });
  };

  const handlePaymentMethodGenerated = ({
    paymentMethod,
  }: {
    paymentMethod: PaymentMethodAttributes;
  }) => {
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    fetcher.submit(
      {
        paymentMethod,
        email: formData.get("email"),
        name: formData.get("name"),
        amount: 5000, // $50.00
      },
      {
        method: "post",
        encType: "application/json",
      }
    );
  };

  return (
    <fetcher.Form method="post" onSubmit={handleSubmit} ref={formRef}>
      <h1>Checkout</h1>

      <label>
        Name
        <input type="text" name="name" required />
      </label>

      <label>
        Email
        <input type="email" name="email" required />
      </label>

      <SubFiCreditCardPaymentMethodForm
        ref={iframeRef}
        renderToken={loaderData.renderToken}
        origin={import.meta.env.VITE_SUBFI_ORIGIN}
        onEncryptedPaymentMethodGenerated={handlePaymentMethodGenerated}
      />

      <button type="submit" disabled={fetcher.state === "submitting"}>
        {fetcher.state === "submitting" ? "Processing..." : "Pay $50.00"}
      </button>
    </fetcher.Form>
  );
}
```

### Server Handler (`app/routes/checkout.tsx` server action)

```typescript
import { createClient } from "@subfi/pay-sdk/node";
import type { PaymentMethodAttributes } from "@subfi/pay-sdk/node";

export async function loader() {
  return {
    renderToken: process.env.SUBFI_RENDER_TOKEN,
  };
}

export async function action({ request }) {
  const { paymentMethod, email, name, amount } = await request.json();

  const client = createClient({
    renderToken: process.env.SUBFI_RENDER_TOKEN,
    apiKey: process.env.SUBFI_API_KEY,
  });

  try {
    const paymentIntent = await client.createPayment({
      accountId: process.env.SUBFI_ACCOUNT_ID,
      data: {
        customer: {
          email,
          name,
          metadata: {
            source: "checkout-page",
          },
        },
        paymentIntent: {
          amount,
          capture_method: "automatic",
          embed: true,
          metadata: {
            order_id: `order_${Date.now()}`,
          },
        },
        paymentMethod: {
          billing_address_attributes: {
            email,
            name,
            ...paymentMethod.billing_address_attributes,
          },
          card_profile_attributes: paymentMethod.card_profile_attributes,
          bank_account_profile_attributes:
            paymentMethod.bank_account_profile_attributes,
        },
      },
    });

    return redirect(`/receipt/${paymentIntent.id}`);
  } catch (error) {
    console.error("Payment failed:", error);
    return redirect("/error");
  }
}
```

## API Reference

### React Components

#### `SubFiCreditCardPaymentMethodForm`

Secure iframe for collecting credit card information.

**Props:**

- `renderToken` (string, required): Authentication token for rendering the form
- `origin` (string, required): SubFi API origin URL
  - Sandbox: `https://pay-sandbox.subfi.com`
  - Production: `https://pay.subfi.com`
- `onEncryptedPaymentMethodGenerated` (function, required): Callback when payment method is encrypted
  - Receives: `{ paymentMethod: PaymentMethodAttributes }`
- `ref` (React.Ref, optional): Ref to the iframe element

**Default height:** `212px` (auto-adjusts based on content)

#### `SubFiBankAccountPaymentMethodForm`

Secure iframe for collecting bank account information.

**Props:** Same as `SubFiCreditCardPaymentMethodForm`

**Default height:** `320px` (auto-adjusts based on content)

#### `generateEncryptedPaymentMethod()`

Triggers the iframe to generate and return encrypted payment data.

**Parameters:**

- `iframeRef` (React.RefObject<HTMLIFrameElement>, required): Reference to the payment form iframe

**Usage:**

```typescript
generateEncryptedPaymentMethod({ iframeRef: cardIframeRef });
```

#### `createMessage()`

Helper function to create typed messages for iframe communication (advanced usage).

### Node.js SDK

#### `createClient()`

Creates a SubFi Pay API client.

**Parameters:**

```typescript
{
  renderToken: string; // Your render token
  apiKey: string; // Your API key
}
```

**Returns:** Client object with payment methods

#### `client.createPayment()`

Creates a payment with customer, payment intent, and payment method.

**Parameters:**

```typescript
{
  accountId: string;
  data: {
    customer: CustomerAttributes | { id: string };
    paymentIntent: PaymentIntentAttributes;
    paymentMethod: PaymentMethodAttributes;
  };
  headers?: Record<string, string>; // Optional custom headers
}
```

**CustomerAttributes:**

```typescript
{
  email?: string;
  name?: string;
  phone?: string;
  metadata?: Record<string, any>;
}
```

**PaymentIntentAttributes:**

```typescript
{
  amount: number;                    // Amount in cents (e.g., 5000 = $50.00)
  capture_method?: string;           // "automatic" or "manual"
  description?: string | null;
  embed?: boolean;
  metadata?: Record<string, any>;
}
```

**PaymentMethodAttributes:**

```typescript
{
  billing_address_attributes?: {
    email?: string;
    name?: string;
    line1?: string;
    line2?: string;
    city?: string;
    state?: string;
    postal_code?: string;
    country?: string;
  };
  card_profile_attributes?: {
    encrypted_card_number?: string;  // From iframe
    cvc?: string;
    exp_month?: number;
    exp_year?: number;
  };
  bank_account_profile_attributes?: {
    encrypted_account_number?: string;  // From iframe
    routing_number?: string;
    account_holder_name?: string;
    account_type?: string;
  };
  metadata?: Record<string, any>;
}
```

**Returns:** `Promise<PaymentIntentResponse>`

## Environment Configuration

### Required Environment Variables

```bash
# Server-side (required)
SUBFI_API_KEY=your_api_key_here
SUBFI_ACCOUNT_ID=your_account_id_here
SUBFI_RENDER_TOKEN=your_render_token_here

# Client-side (required)
VITE_SUBFI_ORIGIN=https://pay-sandbox.subfi.com  # or production URL
```

### Sandbox vs Production

**Sandbox:**

- Origin: `https://pay-sandbox.subfi.com`
- Use for development and testing
- Test card numbers available in SubFi documentation

**Production:**

- Origin: `https://pay.subfi.com`
- Use for live transactions
- Requires production API keys

## Security Best Practices

1. **Never expose API keys client-side**: Only use them on your server
2. **Use render tokens client-side**: These are safe for public exposure
3. **Validate on the server**: Always validate payment amounts and customer data server-side
4. **Use HTTPS**: Always serve your application over HTTPS in production
5. **Implement idempotency**: Use `X-Idempotency-Key` headers to prevent duplicate charges
6. **Handle errors gracefully**: Never expose sensitive error details to users

## Error Handling

```typescript
try {
  const paymentIntent = await client.createPayment({
    // ... payment data
  });

  console.log("Payment successful:", paymentIntent.id);
} catch (error) {
  if (error instanceof Error) {
    // Log full error for debugging
    console.error("Payment error:", error.message);

    // Show user-friendly message
    return { error: "Payment processing failed. Please try again." };
  }
}
```

## TypeScript Support

The SDK is written in TypeScript and includes full type definitions:

```typescript
import type {
  CustomerAttributes,
  CustomerResponse,
  PaymentIntentAttributes,
  PaymentIntentResponse,
  PaymentMethodAttributes,
  PaymentMethodResponse,
} from "@subfi/pay-sdk/node";
```

## Testing

```bash
# Run tests
npm test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

Tests use Vitest v4 with browser mode for accurate testing. See test files for examples.

## Support

- **Documentation**: [docs.subfi.com](https://docs.subfi.com)
- **API Reference**: [api.subfi.com/docs](https://api.subfi.com/docs)
- **Support**: support@subfi.com

## License

ISC
