const { useState, useEffect } = React;

const App = () => {
  const [route, setRoute] = useState(window.location.hash || '#');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  let Page;
  if (route === '#shop') {
    Page = window.Shop;
  } else if (route.startsWith('#product/')) {
    Page = window.ProductDetail;
  } else if (route === '#add-item') {
    Page = window.AddItem;
  } else {
    Page = window.Home;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <window.Navbar />
      <main className="flex-grow">
        <Page />
      </main>
      <window.Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
