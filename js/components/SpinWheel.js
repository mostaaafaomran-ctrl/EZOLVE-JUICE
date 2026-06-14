const SpinWheel = () => {
  const [mustSpin, setMustSpin] = React.useState(false);
  const [prizeNumber, setPrizeNumber] = React.useState(0);
  const [result, setResult] = React.useState(null);

  const data = [
    { option: '10% OFF', style: { backgroundColor: '#4CAF50', textColor: 'white' } },
    { option: 'FREE JUICE', style: { backgroundColor: '#FF9800', textColor: 'white' } },
    { option: '5% OFF', style: { backgroundColor: '#E91E63', textColor: 'white' } },
    { option: 'TRY AGAIN', style: { backgroundColor: '#9E9E9E', textColor: 'white' } },
    { option: 'BOGO', style: { backgroundColor: '#2196F3', textColor: 'white' } },
    { option: 'STREETS', style: { backgroundColor: '#9C27B0', textColor: 'white' } },
  ];

  const handleSpinClick = () => {
    if (mustSpin) return;
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
    setResult(null);

    // Simulate animation
    setTimeout(() => {
      setMustSpin(false);
      setResult(data[newPrizeNumber].option);
    }, 3000);
  };

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h2 style={{ marginBottom: '30px' }}>Spin to Win!</h2>
      <div style={{
        width: '300px',
        height: '300px',
        margin: '0 auto',
        border: '10px solid #333',
        borderRadius: '50%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        transition: 'transform 3s cubic-bezier(0.17, 0.67, 0.12, 0.99)',
        transform: mustSpin ? `rotate(${360 * 5 + (prizeNumber * 60)}deg)` : `rotate(${prizeNumber * 60}deg)`
      }}>
        {data.map((item, index) => (
          <div key={index} style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            transform: `rotate(${index * 60}deg)`,
            clipPath: 'polygon(50% 50%, 0 0, 100% 0)',
            backgroundColor: item.style.backgroundColor,
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '20px',
            color: 'white',
            fontWeight: '700',
            fontSize: '12px'
          }}>
            <span style={{ transform: 'rotate(-30deg)' }}>{item.option}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '30px' }}>
        <button
          onClick={handleSpinClick}
          disabled={mustSpin}
          style={{
            padding: '15px 40px',
            backgroundColor: 'var(--primary)',
            color: 'white',
            borderRadius: '30px',
            fontSize: '18px',
            fontWeight: '700',
            opacity: mustSpin ? 0.5 : 1
          }}
        >
          {mustSpin ? 'SPINNING...' : 'SPIN THE WHEEL'}
        </button>
      </div>

      {result && (
        <div className="fade-in" style={{ marginTop: '20px', fontSize: '24px', fontWeight: '800', color: 'var(--accent)' }}>
          CONGRATS! YOU WON: {result}
        </div>
      )}
    </div>
  );
};

window.SpinWheel = SpinWheel;
