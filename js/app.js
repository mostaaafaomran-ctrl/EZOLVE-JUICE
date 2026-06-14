const { useState, useEffect } = React;

const App = () => {
  const [path, setPath] = useState(window.location.pathname === '/' ? '/' : window.location.pathname);

  // Sync state with browser history (minimal routing)
  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (newPath) => {
    window.history.pushState({}, '', newPath);
    setPath(newPath);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (path) {
      case '/':
        return <window.Home setPath={navigate} />;
      case '/shop':
        return <window.Shop setPath={navigate} />;
      case '/product':
        return <window.Product setPath={navigate} />;
      case '/compete':
        return <window.Compete />;
      case '/loyalty':
        return <window.Loyalty setPath={navigate} />;
      case '/cart':
        return <window.Cart setPath={navigate} />;
      case '/checkout':
        return <window.Checkout setPath={navigate} />;
      case '/dashboard':
        return <window.Dashboard setPath={navigate} />;
      case '/about':
        return <window.About />;
      case '/contact':
        return <window.Contact />;
      case '/admin':
        return <window.Admin />;
      default:
        return <window.Home setPath={navigate} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <window.Navbar currentPath={path} setPath={navigate} />
      <main style={{ flex: 1 }}>
        {renderPage()}
      </main>
      <window.Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// --- Mouse Animation Logic ---
const canvas = document.getElementById('mouse-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 5 + 2;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.color = color;
    this.alpha = 1;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
    this.alpha -= 0.01;
  }
  draw() {
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

window.addEventListener('mousemove', (e) => {
  const colors = ['#4CAF50', '#FF9800', '#E91E63', '#FFEB3B'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  for (let i = 0; i < 2; i++) {
    particles.push(new Particle(e.x, e.y, color));
  }
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
    if (particles[i].alpha <= 0) {
      particles.splice(i, 1);
      i--;
    }
  }
  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
