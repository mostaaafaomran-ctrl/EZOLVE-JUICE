const Checkout = ({ setPath }) => {
  const [step, setStep] = React.useState(1);
  const cart = window.Utils.getCart();
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
    else {
      // Complete order
      window.Utils.saveCart([]);
      window.dispatchEvent(new CustomEvent('cart-updated'));
      setStep(4);
    }
  };

  if (step === 4) {
    return (
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <div style={{ fontSize: '100px', marginBottom: '30px' }}>🎉</div>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>THANK YOU!</h1>
        <p style={{ color: '#666', fontSize: '18px', marginBottom: '40px' }}>Your order has been placed and is being cold-pressed as we speak.</p>
        <button
          onClick={() => setPath('/')}
          style={{ padding: '20px 50px', backgroundColor: 'var(--primary)', color: 'white', borderRadius: '50px', fontWeight: '700' }}
        >
          BACK TO HOME
        </button>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '80px 0' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '60px' }}>
        <div>
          <div style={{ display: 'flex', gap: '20px', marginBottom: '50px' }}>
            <div style={{ color: step >= 1 ? 'var(--primary)' : '#ccc', fontWeight: '700' }}>1. Shipping</div>
            <div style={{ color: '#ccc' }}>→</div>
            <div style={{ color: step >= 2 ? 'var(--primary)' : '#ccc', fontWeight: '700' }}>2. Payment</div>
            <div style={{ color: '#ccc' }}>→</div>
            <div style={{ color: step >= 3 ? 'var(--primary)' : '#ccc', fontWeight: '700' }}>3. Review</div>
          </div>

          <form onSubmit={handleNext}>
            {step === 1 && (
              <div className="fade-in">
                <h2>Shipping Information</h2>
                <div style={{ display: 'grid', gap: '20px', marginTop: '30px' }}>
                  <input type="text" placeholder="Full Name" required style={{ padding: '15px', borderRadius: '10px', border: '1px solid #ddd' }} />
                  <input type="email" placeholder="Email Address" required style={{ padding: '15px', borderRadius: '10px', border: '1px solid #ddd' }} />
                  <input type="text" placeholder="Street Address" required style={{ padding: '15px', borderRadius: '10px', border: '1px solid #ddd' }} />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <input type="text" placeholder="City" required style={{ padding: '15px', borderRadius: '10px', border: '1px solid #ddd' }} />
                    <input type="text" placeholder="Postal Code" required style={{ padding: '15px', borderRadius: '10px', border: '1px solid #ddd' }} />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="fade-in">
                <h2>Payment Method</h2>
                <div style={{ display: 'grid', gap: '20px', marginTop: '30px' }}>
                  <input type="text" placeholder="Card Number" required style={{ padding: '15px', borderRadius: '10px', border: '1px solid #ddd' }} />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <input type="text" placeholder="MM/YY" required style={{ padding: '15px', borderRadius: '10px', border: '1px solid #ddd' }} />
                    <input type="text" placeholder="CVC" required style={{ padding: '15px', borderRadius: '10px', border: '1px solid #ddd' }} />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="fade-in">
                <h2>Review Your Order</h2>
                <p style={{ marginTop: '20px' }}>Everything looks good! Click complete to place your order.</p>
              </div>
            )}

            <button
              type="submit"
              style={{ marginTop: '50px', padding: '20px 40px', backgroundColor: 'var(--primary)', color: 'white', borderRadius: '50px', fontWeight: '700', width: '100%' }}
            >
              {step === 3 ? 'PLACE ORDER' : 'CONTINUE'}
            </button>
          </form>
        </div>

        <div style={{ backgroundColor: '#f9f9f9', padding: '40px', borderRadius: '30px' }}>
          <h3>Order Details</h3>
          <div style={{ marginTop: '30px' }}>
            {cart.map(item => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span>{item.name} x {item.quantity}</span>
                <span>{window.Utils.formatPrice(item.price * item.quantity)}</span>
              </div>
            ))}
            <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #ddd', fontWeight: '800', fontSize: '20px', display: 'flex', justifyContent: 'space-between' }}>
              <span>Total</span>
              <span>{window.Utils.formatPrice(total)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.Checkout = Checkout;
