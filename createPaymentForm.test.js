/**
 * @jest-environment jsdom
 */
const { waitFor } = require("@testing-library/dom")

describe("Payment Form Integration", () => {
  let createSubfiEmbed, showLoader, hideLoader;

  // Mock the DOM environment before each test
  beforeEach(() => {
    // Reset document's HTML and mock console.error
    document.body.innerHTML = `
      <div id="payment-container"></div>
      <form id="paymentForm"></form>
    `;
    console.error = jest.fn();

    // Require the code under test (which will attach the createPaymentForm to window)
    // Replace with the correct path
    const script = require("./index.js");

    // Pull out the exposed createPaymentForm function from window
    createSubfiEmbed = window.createSubfiEmbed;
  });

  afterEach(() => {
    // Clean up the document after each test
    document.body.innerHTML = "";
  });

  it("should handle missing container element and log error", () => {
    const iframeUrl = "https://example.com";
    const config = { publicKey: "test-public-key" };

    // Call createSubfiEmbed with an invalid container ID
    createSubfiEmbed(iframeUrl, "invalid-container", config);

    // Check that console.error is called
    expect(console.error).toHaveBeenCalledWith("Container element not found");
  });

  it("should create an iframe with the correct attributes and append it to the container", () => {
    const iframeUrl = "https://example.com/";
    const config = { publicKey: "test-public-key" };
  
    // Call createSubfiEmbed
    createSubfiEmbed(iframeUrl, "payment-container", config);
  
    // Check if the iframe was created and has the correct attributes
    const iframe = document.getElementById("subfi-embed");
    expect(iframe).not.toBeNull();
  
    // Normalize the URL by trimming any trailing slashes before comparison
    // const expectedUrl = `${iframeUrl}`;
  
    expect(iframe.src).toBe(iframeUrl);
    expect(iframe.width).toBe("100%");
    expect(iframe.height).toBe("500px");
    expect(iframe.style.border).toBe("");
    expect(iframe.style.display).toBe("none");
  });
});
