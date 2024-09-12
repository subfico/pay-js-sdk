(function (window, document) {
  // Listen for messages from the parent
  window.addEventListener('message', function (event) {
    if (event.data === 'submitForm') {
      var form = document.getElementById('paymentForm');
      if (form) {
        form.submit();
      }
    }
  });

  // Function to show the loader with a spinning effect
  function showLoader(container) {
    var loader = document.createElement('div');
    loader.id = 'loading-spinner';
    
    // CSS spinner
    loader.innerHTML = `
      <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
        <div class="spinner" style="
          width: 50px;
          height: 50px;
          border: 6px solid rgba(0, 0, 0, 0.1);
          border-top-color: #3498db;
          border-radius: 50%;
          animation: spin 1s ease-in-out infinite;
        "></div>
      </div>
    `;

    // Add CSS animation for spinning
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);

    container.appendChild(loader);
  }

  // Function to hide the loader
  function hideLoader() {
    var loader = document.getElementById('loading-spinner');
    if (loader) {
      loader.remove();
    }
  }

  // Function to create and load the iframe
  function createPaymentForm(iframeUrl, containerId, config) {
    var container = document.getElementById(containerId);
    if (!container) {
      console.error('Container element not found');
      return;
    }

    // Show the loader
    showLoader(container);

    // Create the iframe element and initially hide it
    var iframe = document.createElement('iframe');
    iframe.src = iframeUrl + `?publicKey=${encodeURIComponent(config.publicKey)}`;
    iframe.width = '100%';
    // Adjust the height as needed
    iframe.height = '500px';
    iframe.style.border = 'none';
    // Initially hide the iframe
    iframe.style.display = 'none';
    iframe.id = "payment-form-iframe";
    iframe.publicKey = config.publicKey;

    // Append the iframe to the container
    container.appendChild(iframe);

    // When iframe is loaded, then hide the loader and show the iframe
    iframe.onload = function () {
      // Hide the loader
      hideLoader();

      // Show the iframe content after hiding the loader
      iframe.style.display = 'block';

      const publicKey = config.publicKey;
      const iframeWindow = iframe.contentWindow;

      if (iframeWindow) {
        // Pass the publicKey securely
        iframeWindow.postMessage({ publicKey }, iframeUrl);
      }
    };
  }

  // Expose the function to the global object
  window.createPaymentForm = createPaymentForm;
})(window, document);
