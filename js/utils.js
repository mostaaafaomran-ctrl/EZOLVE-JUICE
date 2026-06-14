window.Utils = {
  formatPrice: (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  },

  getCart: () => {
    const cart = localStorage.getItem('ezolve_cart');
    return cart ? JSON.parse(cart) : [];
  },

  saveCart: (cart) => {
    localStorage.setItem('ezolve_cart', JSON.stringify(cart));
  },

  addToCart: (product) => {
    const cart = window.Utils.getCart();
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    window.Utils.saveCart(cart);
    window.dispatchEvent(new CustomEvent('cart-updated'));
  }
};
