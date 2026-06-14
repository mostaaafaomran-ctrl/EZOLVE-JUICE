const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#1a1a1a',
      color: 'white',
      padding: '60px 50px',
      marginTop: '50px'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '40px'
      }}>
        <div>
          <h3 style={{ marginBottom: '20px', color: 'var(--secondary)' }}>EZOLVE JUICE</h3>
          <p>Premium cold-pressed juices delivered to your doorstep. Freshness in every drop.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul style={{ marginTop: '15px' }}>
            <li style={{ marginBottom: '10px' }}>Shop All</li>
            <li style={{ marginBottom: '10px' }}>Our Story</li>
            <li style={{ marginBottom: '10px' }}>Sustainability</li>
            <li style={{ marginBottom: '10px' }}>FAQ</li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul style={{ marginTop: '15px' }}>
            <li style={{ marginBottom: '10px' }}>Email: hello@ezolve.com</li>
            <li style={{ marginBottom: '10px' }}>Phone: +1 (234) 567-890</li>
            <li style={{ marginBottom: '10px' }}>Address: 123 Juice St, Fresh City</li>
          </ul>
        </div>
        <div>
          <h4>Newsletter</h4>
          <div style={{ marginTop: '15px', display: 'flex' }}>
            <input type="email" placeholder="Your email" style={{ padding: '10px', border: 'none', width: '70%' }} />
            <button style={{ padding: '10px', backgroundColor: 'var(--primary)', color: 'white', border: 'none' }}>Join</button>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #333' }}>
        &copy; 2024 EZOLVE JUICE. All rights reserved.
      </div>
    </footer>
  );
};

window.Footer = Footer;
