window.utils = {
  formatPrice: (price) => {
    return new Intl.NumberFormat('ar-EG', { style: 'currency', currency: 'EGP' }).format(price);
  }
};
