const Navbar = ({ currentPath, setPath }) => {
  const [cartCount, setCartCount] = React.useState(0);

  React.useEffect(() => {
    const updateCount = () => {
      const cart = window.Utils.getCart();
      setCartCount(cart.reduce((acc, item) => acc + item.quantity, 0));
    };
    updateCount();
    window.addEventListener('cart-updated', updateCount);
    return () => window.removeEventListener('cart-updated', updateCount);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Loyalty', path: '/loyalty' },
    { name: 'Compete', path: '/compete' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 50px',
      backgroundColor: 'var(--white)',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div
        onClick={() => setPath('/')}
        style={{ fontSize: '24px', fontWeight: '800', fontFamily: 'var(--font-heading)', cursor: 'pointer', color: 'var(--primary)' }}
      >
        EZOLVE JUICE
      </div>

      <ul style={{ display: 'flex', gap: '30px' }}>
        {navItems.map(item => (
          <li
            key={item.path}
            onClick={() => setPath(item.path)}
            style={{
              cursor: 'pointer',
              fontWeight: currentPath === item.path ? '700' : '400',
              color: currentPath === item.path ? 'var(--primary)' : 'var(--text)'
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <div onClick={() => setPath('/cart')} style={{ cursor: 'pointer', position: 'relative' }}>
          🛒
          {cartCount > 0 && (
            <span style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              background: 'var(--accent)',
              color: 'white',
              borderRadius: '50%',
              padding: '2px 6px',
              fontSize: '12px'
            }}>
              {cartCount}
            </span>
          )}
        </div>
        <div onClick={() => setPath('/dashboard')} style={{ cursor: 'pointer' }}>👤</div>
      </div>
    </nav>
  );
};

window.Navbar = Navbar;
