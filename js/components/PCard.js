const PCard = ({ product, setPath }) => {
  const handleNavigate = () => {
    window.selectedProductId = product.id;
    setPath('/product');
  };

  return (
    <div
      className="fade-in"
      onClick={handleNavigate}
      style={{
        backgroundColor: 'white',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        transition: 'transform 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div
        style={{
          height: '250px',
          backgroundColor: product.color + '22',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{ height: '80%', objectFit: 'contain' }}
        />
        <div style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          backgroundColor: 'white',
          padding: '5px 10px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: '700'
        }}>
          {product.category}
        </div>
      </div>
      <div style={{ padding: '20px' }}>
        <h3 style={{ fontSize: '18px', margin: '0 0 5px 0' }}>{product.name}</h3>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px', height: '40px', overflow: 'hidden' }}>
          {product.description}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: '800', fontSize: '20px', color: 'var(--primary)' }}>
            {window.Utils.formatPrice(product.price)}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.Utils.addToCart(product);
            }}
            style={{
              backgroundColor: 'var(--primary)',
              color: 'white',
              width: '40px',
              height: '40px',
              border: 'none',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              cursor: 'pointer'
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

window.PCard = PCard;
