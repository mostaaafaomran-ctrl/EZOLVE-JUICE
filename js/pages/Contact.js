const Contact = () => {
  return (
    <div className="container" style={{ padding: '100px 0' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px' }}>
        <div>
          <h1 style={{ fontSize: '56px', marginBottom: '30px' }}>GET IN <br /><span style={{ color: 'var(--primary)' }}>TOUCH</span></h1>
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '50px' }}>
            Have questions about our juices, subscriptions, or just want to say hi? We'd love to hear from you.
          </p>

          <div style={{ display: 'grid', gap: '30px' }}>
            <div>
              <h4 style={{ color: 'var(--primary)' }}>EMAIL US</h4>
              <p>hello@ezolve.com</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--primary)' }}>CALL US</h4>
              <p>+1 (234) 567-890</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--primary)' }}>VISIT US</h4>
              <p>123 Juice Street, Fresh City, FC 90210</p>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: 'white', padding: '50px', borderRadius: '30px', boxShadow: '0 30px 60px rgba(0,0,0,0.05)' }}>
          <form style={{ display: 'grid', gap: '20px' }}>
            <div style={{ display: 'grid', gap: '10px' }}>
              <label>Name</label>
              <input type="text" style={{ padding: '15px', borderRadius: '10px', border: '1px solid #ddd' }} />
            </div>
            <div style={{ display: 'grid', gap: '10px' }}>
              <label>Email</label>
              <input type="email" style={{ padding: '15px', borderRadius: '10px', border: '1px solid #ddd' }} />
            </div>
            <div style={{ display: 'grid', gap: '10px' }}>
              <label>Message</label>
              <textarea rows="5" style={{ padding: '15px', borderRadius: '10px', border: '1px solid #ddd' }}></textarea>
            </div>
            <button style={{ padding: '20px', backgroundColor: 'var(--primary)', color: 'white', borderRadius: '50px', fontWeight: '700', marginTop: '10px' }}>SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
  );
};

window.Contact = Contact;
