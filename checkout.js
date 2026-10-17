// Checkout button: wire the click handler so the order actually submits
document.querySelector('#checkout')?.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#order-form')?.requestSubmit();
});
