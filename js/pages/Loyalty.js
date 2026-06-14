const Loyalty = ({ setPath }) => {
  return (
    <div className="container" style={{ padding: '80px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>EZOLVE REWARDS</h1>
        <p style={{ color: '#666' }}>Drink juice, earn points, get free stuff.</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '40px'
      }}>
        <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '40px', borderRadius: '30px' }}>
          <h3>Your Balance</h3>
          <div style={{ fontSize: '72px', fontWeight: '800', margin: '20px 0' }}>450</div>
          <p>You're only 50 points away from a FREE Green Revive!</p>
          <button
            onClick={() => setPath('/shop')}
            style={{
              marginTop: '30px',
              padding: '15px 30px',
              backgroundColor: 'white',
              color: 'var(--primary)',
              borderRadius: '30px',
              fontWeight: '700'
            }}
          >
            EARN MORE POINTS
          </button>
        </div>

        <div style={{ backgroundColor: '#f0f0f0', padding: '40px', borderRadius: '30px' }}>
          <h3>How it Works</h3>
          <ul style={{ marginTop: '20px' }}>
            <li style={{ marginBottom: '15px' }}><strong>1$ = 10 Points</strong><br />Earn on every purchase</li>
            <li style={{ marginBottom: '15px' }}><strong>Refer a Friend</strong><br />Get 200 points</li>
            <li style={{ marginBottom: '15px' }}><strong>Birthday Bonus</strong><br />Get 500 points</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: '80px' }}>
        <h2 style={{ marginBottom: '30px' }}>Available Rewards</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px'
        }}>
          {[
            { name: 'Free Topping', cost: 100 },
            { name: '50% Off One Juice', cost: 250 },
            { name: 'Free 500ml Bottle', cost: 500 },
            { name: 'EZOLVE T-Shirt', cost: 1000 },
          ].map(reward => (
            <div key={reward.name} style={{ border: '2px dashed #ddd', padding: '30px', textAlign: 'center', borderRadius: '20px' }}>
              <h4>{reward.name}</h4>
              <div style={{ color: 'var(--primary)', fontWeight: '800', margin: '10px 0' }}>{reward.cost} PTS</div>
              <button disabled style={{ opacity: 0.5, padding: '5px 15px', borderRadius: '20px' }}>REDEEM</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

window.Loyalty = Loyalty;
