function openOrderForm(productName, price) {
    document.getElementById('order-form-container').classList.remove('hidden');
    document.getElementById('product-name').value = productName;
    document.getElementById('product-price').value = price;
  }
  
  function closeOrderForm() {
    document.getElementById('order-form-container').classList.add('hidden');
  }
  
  document.getElementById('order-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const formData = new FormData(this);
    const orderDetails = {};
    formData.forEach((value, key) => orderDetails[key] = value);
  
    // For now: just log to console. Later: send to backend.
    console.log("Order Received:", orderDetails);
  
    alert("Order placed successfully!");
    this.reset();
    closeOrderForm();
  });
  