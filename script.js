function openOrderForm(productName, price) {
  document.getElementById('order-form-container').classList.remove('hidden');
  document.getElementById('product-name').value = productName;
  document.getElementById('product-price').value = price;
}

function closeOrderForm() {
  document.getElementById('order-form-container').classList.add('hidden');
}

document.getElementById('order-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = new URLSearchParams();
  for (const pair of formData) {
    data.append(pair[0], pair[1]);
  }

  fetch("https://script.google.com/macros/s/AKfycbxD7gxJv0Qb6kSsIhZW8biskKuCL5HI0UQtraT9y3A800CNTUi9cpYuQ/exec", {
    method: "POST",
    body: data,
  })
    .then(response => response.text())
    .then(responseText => {
      alert("Order placed successfully!");
      console.log("Order response:", responseText);
      document.getElementById('order-form').reset();
      closeOrderForm();
    })
    .catch(error => {
      console.error("Error submitting order:", error);
      alert("Something went wrong. Please try again.");
    });
});


  