const Admin = () => {
  const [stats] = React.useState({
    totalSales: '$12,450',
    totalOrders: 342,
    customers: 128
  });

  return (
    <div style={{ padding: '50px' }}>
      <h1>Admin Dashboard</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', margin: '40px 0' }}>
        <div style={{ padding: '30px', backgroundColor: 'white', borderRadius: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ color: '#666', fontSize: '14px' }}>Total Sales</div>
          <div style={{ fontSize: '32px', fontWeight: '800', color: 'var(--primary)' }}>{stats.totalSales}</div>
        </div>
        <div style={{ padding: '30px', backgroundColor: 'white', borderRadius: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ color: '#666', fontSize: '14px' }}>Total Orders</div>
          <div style={{ fontSize: '32px', fontWeight: '800', color: 'var(--primary)' }}>{stats.totalOrders}</div>
        </div>
        <div style={{ padding: '30px', backgroundColor: 'white', borderRadius: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ color: '#666', fontSize: '14px' }}>Active Customers</div>
          <div style={{ fontSize: '32px', fontWeight: '800', color: 'var(--primary)' }}>{stats.customers}</div>
        </div>
      </div>

      <h2>Product Management</h2>
      <div style={{ marginTop: '30px', backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f9f9f9', textAlign: 'left' }}>
              <th style={{ padding: '15px' }}>Product</th>
              <th style={{ padding: '15px' }}>Category</th>
              <th style={{ padding: '15px' }}>Price</th>
              <th style={{ padding: '15px' }}>Stock</th>
              <th style={{ padding: '15px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {window.JUICE_DATA.map(p => (
              <tr key={p.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '15px' }}>{p.name}</td>
                <td style={{ padding: '15px' }}>{p.category}</td>
                <td style={{ padding: '15px' }}>{window.Utils.formatPrice(p.price)}</td>
                <td style={{ padding: '15px' }}>45</td>
                <td style={{ padding: '15px' }}>
                  <button style={{ marginRight: '10px', color: 'blue' }}>Edit</button>
                  <button style={{ color: 'red' }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

window.Admin = Admin;
