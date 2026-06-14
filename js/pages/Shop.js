const { useState } = React;

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = window.appData.products.filter(p => {
    const matchesCategory = selectedCategory === "الكل" || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full md:w-1/4">
          <div className="bg-white p-6 rounded-xl shadow-sm sticky top-24">
            <h3 className="font-bold text-xl mb-4">التصنيفات</h3>
            <div className="space-y-2">
              {window.appData.categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-right px-4 py-2 rounded-lg transition ${
                    selectedCategory === cat ? 'bg-primary text-white' : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-full md:w-3/4">
          <div className="mb-8">
            <input
              type="text"
              placeholder="ابحث عن أي شيء..."
              className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <window.PCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-500">
              <p className="text-xl">لم يتم العثور على نتائج تطابق بحثك.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

window.Shop = Shop;
