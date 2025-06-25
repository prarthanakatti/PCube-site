function openOrderForm(productName, price) {
  const container = document.getElementById('order-form-container');
  container.classList.add('show');
  document.getElementById('product-name').value = productName;
  document.getElementById('product-price').value = price;
}

function closeOrderForm() {
  const container = document.getElementById('order-form-container');
  container.classList.remove('show');
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('order-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = {}; // Needed for sending to Google Apps Script

    formData.forEach((value, key) => data[key] = value);
    console.log("Order placed:", data);

    alert("Order placed successfully!");
    this.reset();
    closeOrderForm();
  });
});

    fetch("https://script.google.com/macros/s/AKfycbwfUPmYDS16wGIXAgbaf5GNwmYzFMlETNrK2SOiaaa6chx9inRrMI0s4HV6-hS_lfg6/exec", {
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

document.addEventListener('DOMContentLoaded', () => {
  const overlay   = document.getElementById('loginOverlay');
  const card      = document.getElementById('loginCard');
  const loginForm = document.getElementById('loginForm');

  if (loginForm) {       
    loginForm.addEventListener('submit', e => {
      e.preventDefault();
      const u = loginForm.username.value.trim();
      const p = loginForm.password.value.trim();

      if (u === 'user' && p === 'pcube123'){
        overlay.classList.remove('show');
        card.classList.remove('show');

        sessionStorage.setItem('pcubeLoggedIn', 'yes');

        window.location.href = 'products.html';
      } else {
        alert('Invalid username / password');
      }
    });

    if (sessionStorage.getItem('pcubeLoggedIn') === 'yes'){
      window.location.replace('products.html');
    }
  }
});
    



  