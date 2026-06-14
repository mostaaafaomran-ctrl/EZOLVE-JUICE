const Compete = () => {
  return (
    <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>WIN EXCLUSIVE REWARDS</h1>
      <p style={{ color: '#666', marginBottom: '50px', maxWidth: '600px', margin: '0 auto 50px' }}>
        Play our daily juice game for a chance to win discounts, free shipping, or even a monthly subscription!
      </p>

      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '30px',
        boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
        padding: '20px'
      }}>
        <window.SpinWheel />
      </div>

      <div style={{ marginTop: '80px' }}>
        <h2>Leaderboard</h2>
        <table style={{ width: '100%', maxWidth: '600px', margin: '30px auto', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #eee' }}>
              <th style={{ padding: '15px' }}>Rank</th>
              <th style={{ padding: '15px' }}>Player</th>
              <th style={{ padding: '15px' }}>Points</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={{ padding: '15px' }}>🥇 1</td><td style={{ padding: '15px' }}>JuiceMaster99</td><td style={{ padding: '15px' }}>12,450</td></tr>
            <tr><td style={{ padding: '15px' }}>🥈 2</td><td style={{ padding: '15px' }}>HealthyVibes</td><td style={{ padding: '15px' }}>10,200</td></tr>
            <tr><td style={{ padding: '15px' }}>🥉 3</td><td style={{ padding: '15px' }}>GreenLover</td><td style={{ padding: '15px' }}>9,800</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

window.Compete = Compete;
