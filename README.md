# bckbn-pay-js

bckbn-pay-js is a lightweight library used for creating and handling payment forms inside the iframe. The library provides utilities for creating iframes that handle secure payment processing.

## Installation

1. Clone this repository:
```
git clone https://github.com/yourusername/bckbn-pay-js.git
cd bckbn-pay-js
```

1. Install the dependencies:
```
npm install
```

## Usage

The core functionality of the project is the createPaymentForm function, which you can use to embed a payment form iframe into your web page/form.

```
createPaymentForm(iframeUrl, containerId, config)
```

## Parameters:
* iframeUrl: The URL of the iframe (e.g., payment provider's URL).
* containerId: The ID of the HTML element where the iframe will be appended.
* config: An object with a required publicKey property.

### Example:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Payment Form</title>
  <script src="./index.js"></script>
</head>
<body>
  <div id="payment-container"></div>

  <script>
    const iframeUrl = 'https://example-payment.com/form';
    const publicKey = 'test-public-key';

    // Initialize the payment form
    window.createPaymentForm(iframeUrl, 'payment-container', { publicKey });
  </script>
</body>
</html>
```

## Running Tests

The project uses Jest for testing.

To run the tests, use the following command:
```
npm run test
```

To run the tests in watch mode, use the following command:
```
npm run test:watch
```