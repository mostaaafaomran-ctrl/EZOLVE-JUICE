const About = () => {
  return (
    <div className="container" style={{ padding: '100px 0' }}>
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '64px', marginBottom: '30px' }}>BORN FROM <br /><span style={{ color: 'var(--primary)' }}>NATURE</span></h1>
        <p style={{ fontSize: '20px', lineHeight: '1.8', color: '#666' }}>
          EZOLVE JUICE began with a simple mission: to make the world's most nutritious and delicious cold-pressed juices accessible to everyone.
          We believe that what you put into your body matters, which is why we never compromise on quality.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', marginTop: '100px', alignItems: 'center' }}>
        <img src="https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&q=80&w=600" style={{ width: '100%', borderRadius: '40px' }} />
        <div>
          <h2 style={{ fontSize: '40px', marginBottom: '25px' }}>The EZOLVE Difference</h2>
          <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
            Unlike traditional juicing methods that use high-speed blades (which create heat and oxidation), our cold-press technology uses thousands of pounds of pressure to gently extract every drop of liquid from our produce.
          </p>
          <p style={{ lineHeight: '1.6' }}>
            This process keeps the enzymes, vitamins, and minerals intact, giving you a juice that stays fresh for longer and packs a massive nutritional punch.
          </p>
        </div>
      </div>
    </div>
  );
};

window.About = About;
