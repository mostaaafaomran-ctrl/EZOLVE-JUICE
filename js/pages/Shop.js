const Shop = ({ setPath }) => {
  const [filter, setFilter] = React.useState('All');
  const categories = ['All', 'Green', 'Citrus', 'Root', 'Tropical'];

  const filteredProducts = filter === 'All'
    ? window.JUICE_DATA
    : window.JUICE_DATA.filter(p => p.category === filter);

  return (
    <div className="container" style={{ padding: '80px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>OUR SHOP</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '10px 20px',
                borderRadius: '30px',
                backgroundColor: filter === cat ? 'var(--primary)' : 'transparent',
                color: filter === cat ? 'white' : 'var(--primary)',
                border: '2px solid var(--primary)',
                fontWeight: '700'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px'
      }}>
        {filteredProducts.map(product => (
          <window.PCard key={product.id} product={product} setPath={setPath} />
        ))}
      </div>
    </div>
  );
};

window.Shop = Shop;
