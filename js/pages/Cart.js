const Cart = ({ setPath }) => {
  const [cart, setCart] = React.useState(window.Utils.getCart());

  const updateQuantity = (id, delta) => {
    const newCart = cart.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(0, item.quantity + delta) };
      }
      return item;
    }).filter(item => item.quantity > 0);

    setCart(newCart);
    window.Utils.saveCart(newCart);
    window.dispatchEvent(new CustomEvent('cart-updated'));
  };

  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <h2>Your cart is empty</h2>
        <button
          onClick={() => setPath('/shop')}
          style={{ marginTop: '30px', padding: '15px 40px', backgroundColor: 'var(--primary)', color: 'white', borderRadius: '50px' }}
        >
          GO SHOPPING
        </button>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '80px 0' }}>
      <h1>YOUR CART</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '50px', marginTop: '40px' }}>
        <div>
          {cart.map(item => (
            <div key={item.id} style={{ display: 'flex', gap: '20px', padding: '20px 0', borderBottom: '1px solid #eee', alignItems: 'center' }}>
              <div style={{ width: '100px', height: '100px', backgroundColor: item.color + '22', borderRadius: '15px', padding: '10px' }}>
                <img src={item.image} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ flex: 1 }}>
                <h3>{item.name}</h3>
                <p style={{ color: '#666' }}>{window.Utils.formatPrice(item.price)}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <button onClick={() => updateQuantity(item.id, -1)} style={{ width: '30px', height: '30px', border: '1px solid #ddd', borderRadius: '5px' }}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)} style={{ width: '30px', height: '30px', border: '1px solid #ddd', borderRadius: '5px' }}>+</button>
              </div>
              <div style={{ fontWeight: '700', width: '100px', textAlign: 'right' }}>
                {window.Utils.formatPrice(item.price * item.quantity)}
              </div>
            </div>
          ))}
        </div>

        <div style={{ backgroundColor: '#f9f9f9', padding: '40px', borderRadius: '30px', height: 'fit-content' }}>
          <h3>Order Summary</h3>
          <div style={{ marginTop: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
              <span>Subtotal</span>
              <span>{window.Utils.formatPrice(total)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
              <span>Shipping</span>
              <span style={{ color: 'var(--primary)', fontWeight: '700' }}>FREE</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', paddingTop: '20px', borderTop: '2px solid #ddd', fontSize: '20px', fontWeight: '800' }}>
              <span>Total</span>
              <span>{window.Utils.formatPrice(total)}</span>
            </div>
          </div>
          <button
            onClick={() => setPath('/checkout')}
            style={{ width: '100%', padding: '20px', backgroundColor: 'var(--primary)', color: 'white', borderRadius: '50px', marginTop: '40px', fontWeight: '700' }}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

window.Cart = Cart;
