const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">بيع واشتري أي حاجة في ثواني</h1>
          <p className="text-xl mb-8 opacity-90">تخلص من الأشياء التي لا تحتاجها، أو ابحث عن صفقة رابحة اليوم.</p>
          <div className="flex justify-center gap-4">
            <a href="#shop" className="bg-white text-primary px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition inline-block">
              ابدأ التسوق
            </a>
            <a href="#add-item" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition inline-block">
              أضف إعلان
            </a>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">أحدث الإضافات</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {window.appData.products.map(product => (
            <window.PCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

window.Home = Home;
