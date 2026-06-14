const ProductDetail = () => {
  const hash = window.location.hash;
  const productId = parseInt(hash.split('/')[1]);
  const product = window.appData.products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2 className="text-2xl font-bold">المنتج غير موجود</h2>
        <a href="#shop" className="text-primary mt-4 inline-block underline">العودة للتسوق</a>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="md:w-1/2 p-8 md:p-12">
          <span className="text-primary font-bold bg-blue-50 px-3 py-1 rounded text-sm uppercase">
            {product.category}
          </span>
          <h1 className="text-4xl font-bold mt-4 mb-6">{product.name}</h1>
          <p className="text-3xl font-bold text-gray-900 mb-8">{window.utils.formatPrice(product.price)}</p>

          <div className="border-t border-b border-gray-100 py-6 mb-8">
            <h3 className="font-bold text-lg mb-2">الوصف:</h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-lg">
              تواصل مع البائع
            </button>
            <button className="px-6 border border-gray-200 rounded-xl hover:bg-gray-50 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

window.ProductDetail = ProductDetail;
