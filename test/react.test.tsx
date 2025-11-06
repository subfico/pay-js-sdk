import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, waitFor, cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import type { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";
import {
  SubFiCreditCardPaymentMethodForm,
  SubFiBankAccountPaymentMethodForm,
  createMessage,
  generateEncryptedPaymentMethod,
} from "../src/react";
import React from "react";

// Extend Vitest's Assertion types with jest-dom matchers
declare module "vitest" {
  interface Assertion<T = any>
    extends jest.Matchers<void>,
      TestingLibraryMatchers<T, void> {}
}

// Extend Vitest's expect with jest-dom matchers
expect.extend(matchers);

// Cleanup after each test
afterEach(() => {
  cleanup();
});

describe("react SDK", () => {
  describe("createMessage", () => {
    it("should create UPDATE_HEIGHT message", () => {
      const message = createMessage({
        type: "UPDATE_HEIGHT",
        height: "300px",
      });

      expect(message).toEqual({
        type: "UPDATE_HEIGHT",
        height: "300px",
      });
    });

    it("should create GENERATE_ENCRYPTED_PAYMENT_METHOD message", () => {
      const paymentMethod = {
        card_profile_attributes: {
          encrypted_card_number: "encrypted",
        },
      };

      const message = createMessage({
        type: "GENERATE_ENCRYPTED_PAYMENT_METHOD",
        paymentMethod,
      });

      expect(message).toEqual({
        type: "GENERATE_ENCRYPTED_PAYMENT_METHOD",
        paymentMethod,
      });
    });
  });

  describe("generateEncryptedPaymentMethod", () => {
    it("should post message to iframe content window", () => {
      const mockPostMessage = vi.fn();
      const iframeRef = {
        current: {
          contentWindow: {
            postMessage: mockPostMessage,
          },
        },
      } as any;

      generateEncryptedPaymentMethod({ iframeRef });

      expect(mockPostMessage).toHaveBeenCalledWith(
        {
          type: "GENERATE_ENCRYPTED_PAYMENT_METHOD",
        },
        "*",
      );
    });

    it("should handle null iframe ref", () => {
      const iframeRef = { current: null };

      expect(() => generateEncryptedPaymentMethod({ iframeRef })).not.toThrow();
    });
  });

  describe("SubFiCreditCardPaymentMethodForm", () => {
    it("should render credit card form iframe with correct attributes", () => {
      const onEncryptedPaymentMethodGenerated = vi.fn();
      const renderToken = "test-token";
      const origin = "https://pay-sandbox.subfi.com";

      render(
        <SubFiCreditCardPaymentMethodForm
          renderToken={renderToken}
          onEncryptedPaymentMethodGenerated={onEncryptedPaymentMethodGenerated}
          origin={origin}
        />,
      );

      const iframe = screen.getByTitle(
        "Secure credit card payment method form powered by SubFi",
      );

      expect(iframe).toBeInTheDocument();
      expect(iframe).toHaveAttribute(
        "src",
        `${origin}/iframe/card?token=${renderToken}`,
      );
      expect(iframe).toHaveAttribute(
        "name",
        "subfi-credit-card-payment-method-form",
      );
      expect(iframe).toHaveAttribute("role", "presentation");
      expect(iframe).toHaveAttribute("scrolling", "no");
    });

    it("should have default height of 212px", () => {
      const onEncryptedPaymentMethodGenerated = vi.fn();

      render(
        <SubFiCreditCardPaymentMethodForm
          renderToken="test-token"
          onEncryptedPaymentMethodGenerated={onEncryptedPaymentMethodGenerated}
          origin="https://pay-sandbox.subfi.com"
        />,
      );

      const iframe = screen.getByTitle(
        "Secure credit card payment method form powered by SubFi",
      );

      expect(iframe).toHaveStyle({ height: "212px" });
    });

    it("should update height when UPDATE_HEIGHT message is received", async () => {
      const onEncryptedPaymentMethodGenerated = vi.fn();

      render(
        <SubFiCreditCardPaymentMethodForm
          renderToken="test-token"
          onEncryptedPaymentMethodGenerated={onEncryptedPaymentMethodGenerated}
          origin="https://pay-sandbox.subfi.com"
        />,
      );

      const iframe = screen.getByTitle(
        "Secure credit card payment method form powered by SubFi",
      );

      // Simulate message from iframe
      window.postMessage(
        {
          type: "UPDATE_HEIGHT",
          height: "350px",
        },
        "*",
      );

      await waitFor(() => {
        expect(iframe).toHaveStyle({ height: "350px" });
      });
    });

    it("should call onEncryptedPaymentMethodGenerated when payment method is received", async () => {
      const onEncryptedPaymentMethodGenerated = vi.fn();
      const mockPaymentMethod = {
        card_profile_attributes: {
          encrypted_card_number: "encrypted-data",
        },
      };

      render(
        <SubFiCreditCardPaymentMethodForm
          renderToken="test-token"
          onEncryptedPaymentMethodGenerated={onEncryptedPaymentMethodGenerated}
          origin="https://pay-sandbox.subfi.com"
        />,
      );

      // Simulate message from iframe
      window.postMessage(
        {
          type: "GENERATE_ENCRYPTED_PAYMENT_METHOD",
          paymentMethod: mockPaymentMethod,
        },
        "*",
      );

      await waitFor(() => {
        expect(onEncryptedPaymentMethodGenerated).toHaveBeenCalledWith({
          paymentMethod: mockPaymentMethod,
        });
      });
    });

    it("should not call callback when payment method is missing", async () => {
      const onEncryptedPaymentMethodGenerated = vi.fn();

      render(
        <SubFiCreditCardPaymentMethodForm
          renderToken="test-token"
          onEncryptedPaymentMethodGenerated={onEncryptedPaymentMethodGenerated}
          origin="https://pay-sandbox.subfi.com"
        />,
      );

      window.postMessage(
        {
          type: "GENERATE_ENCRYPTED_PAYMENT_METHOD",
        },
        "*",
      );

      await new Promise((resolve) => setTimeout(resolve, 100));

      expect(onEncryptedPaymentMethodGenerated).not.toHaveBeenCalled();
    });

    it("should forward ref to iframe element", () => {
      const onEncryptedPaymentMethodGenerated = vi.fn();
      const ref = React.createRef<HTMLIFrameElement>();

      render(
        <SubFiCreditCardPaymentMethodForm
          ref={ref}
          renderToken="test-token"
          onEncryptedPaymentMethodGenerated={onEncryptedPaymentMethodGenerated}
          origin="https://pay-sandbox.subfi.com"
        />,
      );

      expect(ref.current).toBeInstanceOf(HTMLIFrameElement);
    });
  });

  describe("SubFiBankAccountPaymentMethodForm", () => {
    it("should render bank account form iframe with correct attributes", () => {
      const onEncryptedPaymentMethodGenerated = vi.fn();
      const renderToken = "test-token";
      const origin = "https://pay-sandbox.subfi.com";

      render(
        <SubFiBankAccountPaymentMethodForm
          renderToken={renderToken}
          onEncryptedPaymentMethodGenerated={onEncryptedPaymentMethodGenerated}
          origin={origin}
        />,
      );

      const iframe = screen.getByTitle(
        "Secure bank account payment method form powered by SubFi",
      );

      expect(iframe).toBeInTheDocument();
      expect(iframe).toHaveAttribute(
        "src",
        `${origin}/iframe/bank?token=${renderToken}`,
      );
      expect(iframe).toHaveAttribute(
        "name",
        "subfi-bank-account-payment-method-form",
      );
      expect(iframe).toHaveAttribute("role", "presentation");
      expect(iframe).toHaveAttribute("scrolling", "no");
    });

    it("should have default height of 320px", () => {
      const onEncryptedPaymentMethodGenerated = vi.fn();

      render(
        <SubFiBankAccountPaymentMethodForm
          renderToken="test-token"
          onEncryptedPaymentMethodGenerated={onEncryptedPaymentMethodGenerated}
          origin="https://pay-sandbox.subfi.com"
        />,
      );

      const iframe = screen.getByTitle(
        "Secure bank account payment method form powered by SubFi",
      );

      expect(iframe).toHaveStyle({ height: "320px" });
    });

    it("should update height when UPDATE_HEIGHT message is received", async () => {
      const onEncryptedPaymentMethodGenerated = vi.fn();

      render(
        <SubFiBankAccountPaymentMethodForm
          renderToken="test-token"
          onEncryptedPaymentMethodGenerated={onEncryptedPaymentMethodGenerated}
          origin="https://pay-sandbox.subfi.com"
        />,
      );

      const iframe = screen.getByTitle(
        "Secure bank account payment method form powered by SubFi",
      );

      window.postMessage(
        {
          type: "UPDATE_HEIGHT",
          height: "400px",
        },
        "*",
      );

      await waitFor(() => {
        expect(iframe).toHaveStyle({ height: "400px" });
      });
    });

    it("should call onEncryptedPaymentMethodGenerated when payment method is received", async () => {
      const onEncryptedPaymentMethodGenerated = vi.fn();
      const mockPaymentMethod = {
        bank_account_profile_attributes: {
          encrypted_account_number: "encrypted-data",
        },
      };

      render(
        <SubFiBankAccountPaymentMethodForm
          renderToken="test-token"
          onEncryptedPaymentMethodGenerated={onEncryptedPaymentMethodGenerated}
          origin="https://pay-sandbox.subfi.com"
        />,
      );

      window.postMessage(
        {
          type: "GENERATE_ENCRYPTED_PAYMENT_METHOD",
          paymentMethod: mockPaymentMethod,
        },
        "*",
      );

      await waitFor(() => {
        expect(onEncryptedPaymentMethodGenerated).toHaveBeenCalledWith({
          paymentMethod: mockPaymentMethod,
        });
      });
    });

    it("should forward ref to iframe element", () => {
      const onEncryptedPaymentMethodGenerated = vi.fn();
      const ref = React.createRef<HTMLIFrameElement>();

      render(
        <SubFiBankAccountPaymentMethodForm
          ref={ref}
          renderToken="test-token"
          onEncryptedPaymentMethodGenerated={onEncryptedPaymentMethodGenerated}
          origin="https://pay-sandbox.subfi.com"
        />,
      );

      expect(ref.current).toBeInstanceOf(HTMLIFrameElement);
    });

    it("should remove event listener on unmount", () => {
      const onEncryptedPaymentMethodGenerated = vi.fn();
      const removeEventListenerSpy = vi.spyOn(window, "removeEventListener");

      const { unmount } = render(
        <SubFiBankAccountPaymentMethodForm
          renderToken="test-token"
          onEncryptedPaymentMethodGenerated={onEncryptedPaymentMethodGenerated}
          origin="https://pay-sandbox.subfi.com"
        />,
      );

      unmount();

      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        "message",
        expect.any(Function),
      );

      removeEventListenerSpy.mockRestore();
    });
  });
});

