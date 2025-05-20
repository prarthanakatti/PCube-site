function openOrderForm(productName, price) {
  document.getElementById('order-form-container').classList.remove('hidden');
  document.getElementById('product-name').value = productName;
  document.getElementById('product-price').value = price;
}

function closeOrderForm() {
  document.getElementById('order-form-container').classList.add('hidden');
}

document.getElementById('order-form').addEventListener('submit', async function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  formData.append("form", "order"); // 👈 very important to route data to "Order Submissions"

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycby61CvYnBfS8XJNQ_UYqCx-slpK36OYYDc2xjP77CYDAWYfe2ezG_fZE1-H9__cIqs3/exec", {
      method: "POST",
      body: formData,
    });

    const result = await response.text();
    alert("Order placed successfully!");
    this.reset();
    closeOrderForm();
  } catch (error) {
    console.error("Order submission failed", error);
    alert("Failed to place order. Please try again.");
  }
});

  