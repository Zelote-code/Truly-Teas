document.addEventListener('DOMContentLoaded', () => {
  // Function to calculate the price based on selected options
  function calculatePrice(container) {
      const basePrice = parseFloat(container.querySelector('.size-selector').dataset.basePrice);
      const sizePrice = parseFloat(container.querySelector('.size-selector').selectedOptions[0].dataset.price);
      const leafPrice = parseFloat(container.querySelector('.leaf-selector').selectedOptions[0].dataset.price);

      // Calculate the total
      const totalPrice = basePrice + sizePrice + leafPrice;
      container.querySelector('.total-price').textContent = totalPrice.toFixed(2);
  }

  // Attach event listeners to all customization options
  document.querySelectorAll('.menu-item').forEach(item => {
      item.querySelectorAll('.size-selector, .leaf-selector').forEach(select => {
          select.addEventListener('change', () => calculatePrice(item));
      });

      // Initial calculation for default values
      calculatePrice(item);
  });
});
