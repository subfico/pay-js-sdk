(function(window, document) {
  // Function to create and load the iframe
  function createPaymentForm(iframeUrl, containerId, merchantId) {
    var container = document.getElementById(containerId);
    if (!container) {
      console.error('Container element not found');
      return;
    }

    // Create the iframe element
    var iframe = document.createElement('iframe');
    iframe.src = iframeUrl + '?merchant_id=' + encodeURIComponent(merchantId);
    iframe.width = '100%';
    iframe.height = '500px'; // Adjust the height as needed
    iframe.style.border = 'none';

    // Append the iframe to the container
    container.appendChild(iframe);
  }

  // Expose the function to the global object
  window.createPaymentForm = createPaymentForm;
})(window, document);
