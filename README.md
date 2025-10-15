# SubFi Pay JavaScript SDK

The official JavaScript SDK for SubFi Pay, providing both React components and server-side clients for payment processing.

## Installation

```bash
npm install @subfi/pay-sdk
```

## Usage

### React SDK (Browser)

Use the React SDK for client-side payment forms in your React application:

```tsx
import {
  SubFiCreditCardPaymentMethodForm,
  generateEncryptedPaymentMethod,
} from "@subfi/pay-sdk/react";
import type { EncryptedPaymentMethod } from "@subfi/pay-sdk/types";
import { useRef } from "react";

function CheckoutForm() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleEncryptedPaymentMethod = ({
    encryptedPaymentMethod,
  }: {
    encryptedPaymentMethod: EncryptedPaymentMethod;
  }) => {
    // Send encrypted payment method to your server
    console.log("Encrypted payment method:", encryptedPaymentMethod);
  };

  const handleSubmit = () => {
    // Trigger payment method generation
    generateEncryptedPaymentMethod({ iframeRef });
  };

  return (
    <div>
      <SubFiCreditCardPaymentMethodForm
        ref={iframeRef}
        renderToken="your-render-token"
        origin="https://pay.subfi.com"
        onEncryptedPaymentMethodGenerated={handleEncryptedPaymentMethod}
      />
      <button onClick={handleSubmit}>Pay Now</button>
    </div>
  );
}
```

### Node SDK

Use the Node SDK for backend payment processing:

```typescript
import { createClient } from "@subfi/pay-sdk/node";
import type {
  CustomerCreateRequest,
  PaymentIntentCreateRequest,
  PaymentMethodAttributes,
} from "@subfi/pay-sdk/types";

const client = createClient({
  renderToken: "your-render-token",
  apiKey: "your-api-key",
});

// Create a payment
await client.createPayment({
  customer: {
    customer: {
      email: "customer@example.com",
      name: "John Doe",
    },
  },
  paymentIntent: {
    payment_intent: {
      amount: 1000, // $10.00 in cents
      currency: "usd",
    },
  },
  paymentMethod: {
    // Payment method details from encrypted form
  },
});
```

### Types Only

Import types for TypeScript type checking:

```typescript
import type {
  PaymentIntentAttributes,
  CustomerResponse,
  EncryptedPaymentMethod,
} from "@subfi/pay-sdk/types";
```

## Import Paths

The SDK provides different import paths for different use cases:

- **`@subfi/pay-sdk/react`** - React components and utilities for browser
- **`@subfi/pay-sdk/node`** - Server-side client for Node.js
- **`@subfi/pay-sdk/types`** - TypeScript types only (tree-shakeable)
- **`@subfi/pay-sdk`** - Main export (includes everything)

### Why use specific paths?

Using specific import paths makes it clear where functionality comes from:

- Easier to understand which parts of your code are client vs server
- Better tree-shaking for smaller bundle sizes
- Clearer separation of concerns
- IDE auto-completion shows only relevant exports

## API Reference

### React SDK

#### `SubFiCreditCardPaymentMethodForm`

Secure iframe component for collecting credit card payment information.

**Props:**

- `renderToken: string` - Token for rendering the payment form
- `origin: string` - SubFi API origin URL
- `onEncryptedPaymentMethodGenerated: (data: { encryptedPaymentMethod: EncryptedPaymentMethod }) => void` - Callback when payment method is encrypted
- `ref: React.Ref<HTMLIFrameElement>` - Ref to the iframe element

#### `generateEncryptedPaymentMethod()`

Triggers the iframe to generate an encrypted payment method.

**Parameters:**

- `iframeRef: React.RefObject<HTMLIFrameElement>` - Reference to the payment form iframe

#### `createMessage()`

Helper to create properly typed messages for iframe communication.

### Server SDK

#### `createClient()`

Creates a SubFi Pay server client.

**Parameters:**

- `renderToken: string` - Your render token
- `apiKey: string` - Your API key

**Returns:** Client object with payment methods

#### `client.createPayment()`

Creates a payment with customer and payment intent.

**Parameters:**

- `customer: CustomerCreateRequest` - Customer information
- `paymentIntent: PaymentIntentCreateRequest` - Payment intent details
- `paymentMethod: PaymentMethodAttributes` - Payment method from encrypted form

## License

ISC
