const Product = ({ setPath }) => {
  const productId = window.selectedProductId || 1;
  const product = window.JUICE_DATA.find(p => p.id === productId);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="container" style={{ padding: '100px 0' }}>
      <button
        onClick={() => setPath('/shop')}
        style={{ marginBottom: '40px', backgroundColor: 'transparent', color: 'var(--primary)', fontWeight: '700' }}
      >
        ← BACK TO SHOP
      </button>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '60px',
        alignItems: 'center'
      }}>
        <div style={{
          backgroundColor: product.color + '11',
          borderRadius: '30px',
          padding: '60px',
          textAlign: 'center'
        }}>
          <img src={product.image} alt={product.name} style={{ width: '80%', borderRadius: '20px' }} />
        </div>

        <div>
          <span style={{
            backgroundColor: 'var(--primary)',
            color: 'white',
            padding: '5px 15px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '700'
          }}>
            {product.category}
          </span>
          <h1 style={{ fontSize: '56px', margin: '20px 0' }}>{product.name}</h1>
          <div style={{ fontSize: '32px', fontWeight: '800', color: 'var(--primary)', marginBottom: '30px' }}>
            {window.Utils.formatPrice(product.price)}
          </div>
          <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6', marginBottom: '40px' }}>
            Our {product.name} is a masterfully balanced blend of {product.description}.
            Each bottle is cold-pressed to ensure you get every ounce of vitamins and minerals nature intended.
          </p>

          <div style={{ display: 'flex', gap: '20px', marginBottom: '50px' }}>
            <button
              onClick={() => window.Utils.addToCart(product)}
              style={{
                flex: 1,
                padding: '20px',
                backgroundColor: 'var(--primary)',
                color: 'white',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '18px'
              }}
            >
              ADD TO CART
            </button>
            <button style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              border: '2px solid #ddd',
              backgroundColor: 'white',
              fontSize: '24px'
            }}>
              ♡
            </button>
          </div>

          <div style={{ borderTop: '1px solid #ddd', paddingTop: '30px' }}>
            <h4>NUTRITION PER BOTTLE</h4>
            <div style={{ display: 'flex', gap: '30px', marginTop: '15px' }}>
              <div><strong>Calories</strong><br />120</div>
              <div><strong>Sugar</strong><br />18g</div>
              <div><strong>Fiber</strong><br />4g</div>
              <div><strong>Vitamin C</strong><br />120%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.Product = Product;
