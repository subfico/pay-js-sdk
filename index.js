(function (window, document) {
  // Listen for messages from the iframe
  window.addEventListener("message", function (event) {
    const { eventType, data } = event.data;

    if (eventType === "submitFormResponse") {
      // Log or handle the form submission response
      console.log("Received response from iframe:", data);
      if (window.onFormSubmitResponse) {
        // Callback function to handle response
        window.onFormSubmitResponse(data);
      }
    }
  });

  // Function to create and load the iframe
  function createSubfiEmbed(iframeUrl, containerId, config) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error("Container element not found");
      return;
    }

    // Show loader while iframe is loading
    showLoader(container);

    const iframe = document.createElement("iframe");

    iframe.src = iframeUrl;
    iframe.width = "100%";
    iframe.height = "500px";
    iframe.style.border = "none";
    iframe.style.display = "none";
    iframe.id = "subfi-embed";
    iframe.allow = "payment";

    container.appendChild(iframe);

    iframe.onload = function () {
      // Hide loader when iframe is loaded
      hideLoader();
      iframe.style.display = "block";

      const iframeWindow = iframe.contentWindow;
      if (iframeWindow) {
        setTimeout(() => {
          iframeWindow.postMessage({ eventType: "sendConfigCommand", data: config }, "*");
        }, 100);
      }
    };
  }

  // Exportable submit handler function
  function submitHandler() {
    const iframe = document.getElementById("subfi-embed");
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage({ eventType: "submitForm" }, "*");
    } else {
      console.error("Iframe not found or not loaded");
    }
  }

  // Show the loader
  function showLoader(container) {
    const loader = document.createElement("div");
    loader.id = "loading-spinner";
    loader.innerHTML = `
      <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
        <div class="spinner" style="
          width: 50px;
          height: 50px;
          border: 6px solid rgba(0, 0, 0, 0.1);
          border-top-color: #58E8B5;
          border-radius: 50%;
          animation: spin 1s ease-in-out infinite;
        "></div>
      </div>
    `;
    // Create and append the loader to the container
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `;
    // Append the style to the document head
    document.head.appendChild(style);
    // Append the loader to the container
    container.appendChild(loader);
  }

  // Hide the loader
  function hideLoader() {
    const loader = document.getElementById("loading-spinner");
    if (loader) loader.remove();
  }

  // Expose functions globally
  window.createSubfiEmbed = createSubfiEmbed;
  // Expose the submit handler
  window.submitSubfiEmbedHandler = submitHandler;
})(window, document);
