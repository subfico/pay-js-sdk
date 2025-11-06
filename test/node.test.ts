import { describe, it, expect, beforeEach, vi } from "vitest";
import { createClient } from "../src/node";
import type { CreatePaymentArgs } from "../src/node";

// Mock fetch globally
const mockFetch = vi.fn();
globalThis.fetch = mockFetch;

// Helper function to encode to base64 (browser-compatible)
function toBase64(str: string): string {
  return btoa(str);
}

describe("node SDK", () => {
  beforeEach(() => {
    mockFetch.mockReset();
  });

  describe("createClient", () => {
    it("should create a client with sandbox environment from render token", () => {
      // Create a mock JWT token with sandbox environment
      const header = toBase64(JSON.stringify({ alg: "HS256" }));
      const payload = toBase64(
        JSON.stringify({ env: "sandbox", iat: Date.now() }),
      );
      const signature = "mock-signature";
      const renderToken = `${header}.${payload}.${signature}`;

      const client = createClient({
        renderToken,
        apiKey: "test-api-key",
      });

      expect(client).toBeDefined();
      expect(client.createPayment).toBeDefined();
      expect(typeof client.createPayment).toBe("function");
    });

    it("should create a client with production environment from render token", () => {
      const header = toBase64(JSON.stringify({ alg: "HS256" }));
      const payload = toBase64(
        JSON.stringify({ env: "production", iat: Date.now() }),
      );
      const signature = "mock-signature";
      const renderToken = `${header}.${payload}.${signature}`;

      const client = createClient({
        renderToken,
        apiKey: "test-api-key",
      });

      expect(client).toBeDefined();
      expect(client.createPayment).toBeDefined();
    });
  });

  describe("createPayment", () => {
    it("should create payment with new customer", async () => {
      const header = toBase64(JSON.stringify({ alg: "HS256" }));
      const payload = toBase64(
        JSON.stringify({ env: "sandbox", iat: Date.now() }),
      );
      const signature = "mock-signature";
      const renderToken = `${header}.${payload}.${signature}`;

      const client = createClient({
        renderToken,
        apiKey: "test-api-key",
      });

      // Mock responses
      const mockCustomer = {
        id: "cus_123",
        email: "test@example.com",
        name: "Test Customer",
      };

      const mockTokenResponse = {
        token: `${header}.${toBase64(JSON.stringify({ payment_intent_id: "pi_123" }))}.${signature}`,
      };

      const mockPaymentMethod = {
        id: "pm_123",
        type: "card",
      };

      const mockPaymentIntent = {
        id: "pi_123",
        amount: 1000,
        status: "succeeded",
      };

      // Setup mock fetch responses
      mockFetch
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockCustomer,
        }) // Create customer
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockTokenResponse,
        }) // Create payment intent
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockPaymentMethod,
        }) // Create payment method
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({}),
        }) // Add payment method to intent
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockPaymentIntent,
        }); // Confirm payment intent

      const args: CreatePaymentArgs = {
        accountId: "acc_123",
        data: {
          customer: {
            email: "test@example.com",
            name: "Test Customer",
          },
          paymentIntent: {
            amount: 1000,
          },
          paymentMethod: {
            card_profile_attributes: {
              encrypted_card_number: "encrypted",
            },
          },
        },
      };

      const result = await client.createPayment(args);

      expect(result).toEqual(mockPaymentIntent);
      expect(mockFetch).toHaveBeenCalledTimes(5);
    });

    it("should create payment with existing customer by id", async () => {
      const header = toBase64(JSON.stringify({ alg: "HS256" }));
      const payload = toBase64(
        JSON.stringify({ env: "sandbox", iat: Date.now() }),
      );
      const signature = "mock-signature";
      const renderToken = `${header}.${payload}.${signature}`;

      const client = createClient({
        renderToken,
        apiKey: "test-api-key",
      });

      const mockTokenResponse = {
        token: `${header}.${toBase64(JSON.stringify({ payment_intent_id: "pi_123" }))}.${signature}`,
      };

      const mockPaymentMethod = {
        id: "pm_123",
        type: "card",
      };

      const mockPaymentIntent = {
        id: "pi_123",
        amount: 1000,
        status: "succeeded",
      };

      mockFetch
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockTokenResponse,
        })
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockPaymentMethod,
        })
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({}),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockPaymentIntent,
        });

      const args: CreatePaymentArgs = {
        accountId: "acc_123",
        data: {
          customer: { id: "cus_123" },
          paymentIntent: {
            amount: 1000,
          },
          paymentMethod: {
            card_profile_attributes: {
              encrypted_card_number: "encrypted",
            },
          },
        },
      };

      const result = await client.createPayment(args);

      expect(result).toEqual(mockPaymentIntent);
      expect(mockFetch).toHaveBeenCalledTimes(4); // Should skip customer creation
    });

    it("should handle API errors during customer creation", async () => {
      const header = toBase64(JSON.stringify({ alg: "HS256" }));
      const payload = toBase64(
        JSON.stringify({ env: "sandbox", iat: Date.now() }),
      );
      const signature = "mock-signature";
      const renderToken = `${header}.${payload}.${signature}`;

      const client = createClient({
        renderToken,
        apiKey: "test-api-key",
      });

      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 400,
        statusText: "Bad Request",
        text: async () => "Invalid customer data",
      });

      const args: CreatePaymentArgs = {
        accountId: "acc_123",
        data: {
          customer: {
            email: "invalid-email",
          },
          paymentIntent: {
            amount: 1000,
          },
          paymentMethod: {
            card_profile_attributes: {
              encrypted_card_number: "encrypted",
            },
          },
        },
      };

      await expect(client.createPayment(args)).rejects.toThrow(
        "Bad Request: Invalid customer data",
      );
    });

    it("should find existing customer on 422 error and update metadata", async () => {
      const header = toBase64(JSON.stringify({ alg: "HS256" }));
      const payload = toBase64(
        JSON.stringify({ env: "sandbox", iat: Date.now() }),
      );
      const signature = "mock-signature";
      const renderToken = `${header}.${payload}.${signature}`;

      const client = createClient({
        renderToken,
        apiKey: "test-api-key",
      });

      const mockExistingCustomer = {
        id: "cus_existing",
        email: "existing@example.com",
        metadata: { old: "value" },
      };

      const mockUpdatedCustomer = {
        id: "cus_existing",
        email: "existing@example.com",
        metadata: { old: "value", new: "data" },
      };

      const mockTokenResponse = {
        token: `${header}.${toBase64(JSON.stringify({ payment_intent_id: "pi_123" }))}.${signature}`,
      };

      const mockPaymentMethod = { id: "pm_123", type: "card" };
      const mockPaymentIntent = {
        id: "pi_123",
        amount: 1000,
        status: "succeeded",
      };

      mockFetch
        .mockResolvedValueOnce({
          ok: false,
          status: 422,
          statusText: "Unprocessable Entity",
          text: async () => "Customer already exists",
        }) // Create customer fails
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({ data: [mockExistingCustomer] }),
        }) // Find customer by email
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockUpdatedCustomer,
        }) // Update customer metadata
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockTokenResponse,
        }) // Create payment intent
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockPaymentMethod,
        }) // Create payment method
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({}),
        }) // Add payment method
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockPaymentIntent,
        }); // Confirm payment intent

      const args: CreatePaymentArgs = {
        accountId: "acc_123",
        data: {
          customer: {
            email: "existing@example.com",
            metadata: { new: "data" },
          },
          paymentIntent: {
            amount: 1000,
          },
          paymentMethod: {
            card_profile_attributes: {
              encrypted_card_number: "encrypted",
            },
          },
        },
      };

      const result = await client.createPayment(args);

      expect(result).toEqual(mockPaymentIntent);
      expect(mockFetch).toHaveBeenCalledTimes(7);
    });

    it("should use production URL when env is production", async () => {
      const header = toBase64(JSON.stringify({ alg: "HS256" }));
      const payload = toBase64(
        JSON.stringify({ env: "production", iat: Date.now() }),
      );
      const signature = "mock-signature";
      const renderToken = `${header}.${payload}.${signature}`;

      const client = createClient({
        renderToken,
        apiKey: "test-api-key",
      });

      const mockCustomer = { id: "cus_123", email: "test@example.com" };
      const mockTokenResponse = {
        token: `${header}.${toBase64(JSON.stringify({ payment_intent_id: "pi_123" }))}.${signature}`,
      };
      const mockPaymentMethod = { id: "pm_123", type: "card" };
      const mockPaymentIntent = {
        id: "pi_123",
        amount: 1000,
        status: "succeeded",
      };

      mockFetch
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockCustomer,
        })
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockTokenResponse,
        })
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockPaymentMethod,
        })
        .mockResolvedValueOnce({ ok: true, json: async () => ({}) })
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockPaymentIntent,
        });

      const args: CreatePaymentArgs = {
        accountId: "acc_123",
        data: {
          customer: { email: "test@example.com" },
          paymentIntent: { amount: 1000 },
          paymentMethod: {
            card_profile_attributes: { encrypted_card_number: "encrypted" },
          },
        },
      };

      await client.createPayment(args);

      // Check that production URL was used
      expect(mockFetch).toHaveBeenCalledWith(
        "https://pay.subfi.com/customers",
        expect.any(Object),
      );
    });

    it("should include custom headers in requests", async () => {
      const header = toBase64(JSON.stringify({ alg: "HS256" }));
      const payload = toBase64(
        JSON.stringify({ env: "sandbox", iat: Date.now() }),
      );
      const signature = "mock-signature";
      const renderToken = `${header}.${payload}.${signature}`;

      const client = createClient({
        renderToken,
        apiKey: "test-api-key",
      });

      const mockCustomer = { id: "cus_123", email: "test@example.com" };
      const mockTokenResponse = {
        token: `${header}.${toBase64(JSON.stringify({ payment_intent_id: "pi_123" }))}.${signature}`,
      };
      const mockPaymentMethod = { id: "pm_123", type: "card" };
      const mockPaymentIntent = {
        id: "pi_123",
        amount: 1000,
        status: "succeeded",
      };

      mockFetch
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockCustomer,
        })
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockTokenResponse,
        })
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockPaymentMethod,
        })
        .mockResolvedValueOnce({ ok: true, json: async () => ({}) })
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockPaymentIntent,
        });

      const customHeaders = {
        "X-Custom-Header": "custom-value",
        "X-Idempotency-Key": "unique-key-123",
      };

      const args: CreatePaymentArgs = {
        accountId: "acc_123",
        data: {
          customer: { email: "test@example.com" },
          paymentIntent: { amount: 1000 },
          paymentMethod: {
            card_profile_attributes: { encrypted_card_number: "encrypted" },
          },
        },
        headers: customHeaders,
      };

      await client.createPayment(args);

      // Verify custom headers were included
      const firstCall = mockFetch.mock.calls[0];
      if (firstCall) {
        expect(firstCall[1].headers).toMatchObject(customHeaders);
      }
    });
  });
});

