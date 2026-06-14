const Dashboard = ({ setPath }) => {
  return (
    <div className="container" style={{ padding: '80px 0' }}>
      <div style={{ display: 'flex', gap: '50px' }}>
        <aside style={{ width: '250px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ width: '100px', height: '100px', backgroundColor: '#ddd', borderRadius: '50%', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px' }}>👤</div>
            <h3>Alex Johnson</h3>
            <p style={{ color: '#666', fontSize: '14px' }}>Member since 2023</p>
          </div>
          <ul style={{ display: 'grid', gap: '10px' }}>
            <li style={{ padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '10px', fontWeight: '700' }}>Orders</li>
            <li style={{ padding: '15px', borderRadius: '10px' }}>Subscription</li>
            <li style={{ padding: '15px', borderRadius: '10px' }}>Points & Rewards</li>
            <li style={{ padding: '15px', borderRadius: '10px' }}>Settings</li>
            <li style={{ padding: '15px', borderRadius: '10px', color: 'red' }}>Logout</li>
          </ul>
        </aside>

        <main style={{ flex: 1 }}>
          <h2>Recent Orders</h2>
          <div style={{ marginTop: '30px', display: 'grid', gap: '20px' }}>
            {[
              { id: '#12345', date: 'Oct 12, 2023', total: '$42.50', status: 'Delivered' },
              { id: '#12210', date: 'Sep 28, 2023', total: '$18.00', status: 'Delivered' },
            ].map(order => (
              <div key={order.id} style={{ padding: '25px', border: '1px solid #eee', borderRadius: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong>Order {order.id}</strong>
                  <div style={{ color: '#666', fontSize: '14px' }}>{order.date}</div>
                </div>
                <div>{order.total}</div>
                <div style={{ color: 'var(--primary)', fontWeight: '700' }}>{order.status}</div>
                <button style={{ padding: '10px 20px', border: '1px solid #ddd', borderRadius: '10px' }}>Details</button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

window.Dashboard = Dashboard;
