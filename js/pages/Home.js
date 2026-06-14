const Home = ({ setPath }) => {
  const featured = window.JUICE_DATA.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 50px',
        backgroundColor: '#f9f9f9',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <div style={{ flex: 1, zIndex: 2 }}>
          <h1 style={{ fontSize: '72px', lineHeight: '1.1', marginBottom: '20px' }}>
            PURE <br />
            <span style={{ color: 'var(--primary)' }}>COLD-PRESSED</span> <br />
            ENERGY
          </h1>
          <p style={{ fontSize: '18px', maxWidth: '500px', marginBottom: '40px', color: '#666' }}>
            Experience the vibrant taste of nature with our premium, 100% organic cold-pressed juices. No additives, just pure wellness.
          </p>
          <button
            onClick={() => setPath('/shop')}
            style={{
              padding: '20px 40px',
              backgroundColor: 'var(--primary)',
              color: 'white',
              fontSize: '18px',
              fontWeight: '700',
              borderRadius: '50px',
              boxShadow: '0 10px 20px rgba(45, 90, 39, 0.2)'
            }}
          >
            SHOP NOW
          </button>
        </div>
        <div style={{ flex: 1, position: 'relative' }}>
          <img
            src="https://images.unsplash.com/photo-1544070078-a212eda27b49?auto=format&fit=crop&q=80&w=600"
            alt="Fresh Juice"
            style={{ width: '100%', borderRadius: '30px', transform: 'rotate(-5deg)' }}
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="container" style={{ padding: '100px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '48px' }}>FEATURED BLENDS</h2>
          <p style={{ color: '#666' }}>Our most popular cold-pressed creations</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {featured.map(product => (
            <window.PCard key={product.id} product={product} setPath={setPath} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <button
            onClick={() => setPath('/shop')}
            style={{
              padding: '15px 30px',
              border: '2px solid var(--primary)',
              backgroundColor: 'transparent',
              color: 'var(--primary)',
              fontWeight: '700',
              borderRadius: '50px'
            }}
          >
            VIEW ALL PRODUCTS
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '100px 50px' }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '50px',
          textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: '40px', marginBottom: '20px' }}>🌿</div>
            <h3>100% ORGANIC</h3>
            <p style={{ opacity: 0.8, marginTop: '10px' }}>Only the finest organic fruits and vegetables from local farms.</p>
          </div>
          <div>
            <div style={{ fontSize: '40px', marginBottom: '20px' }}>❄️</div>
            <h3>COLD-PRESSED</h3>
            <p style={{ opacity: 0.8, marginTop: '10px' }}>Preserving all nutrients and enzymes through high-pressure processing.</p>
          </div>
          <div>
            <div style={{ fontSize: '40px', marginBottom: '20px' }}>♻️</div>
            <h3>SUSTAINABLE</h3>
            <p style={{ opacity: 0.8, marginTop: '10px' }}>Recyclable glass packaging and zero-waste production methods.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

window.Home = Home;
