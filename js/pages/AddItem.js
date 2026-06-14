const { useState } = React;

const AddItem = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: 'إلكترونيات',
    description: '',
    image: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real app, we would send this to a server
    setSubmitted(true);
    // Scroll to top
    window.scrollTo(0, 0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <div className="container mx-auto py-20 text-center">
        <div className="bg-white p-12 rounded-2xl shadow-lg max-w-2xl mx-auto">
          <div className="text-green-500 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4">تم إضافة إعلانك بنجاح!</h2>
          <p className="text-gray-600 mb-8">سيتم مراجعة إعلانك ونشره خلال دقائق.</p>
          <button
            onClick={() => window.location.hash = '#shop'}
            className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition"
          >
            تصفح جميع الإعلانات
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-primary p-8 text-white">
          <h1 className="text-3xl font-bold">أضف إعلان جديد</h1>
          <p className="opacity-90 mt-2">املأ البيانات التالية لعرض منتجك للبيع</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">اسم المنتج</label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none"
                placeholder="مثال: آيفون 13 برو"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">السعر (جنيه)</label>
              <input
                required
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none"
                placeholder="0.00"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">التصنيف</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none"
            >
              {window.appData.categories.filter(c => c !== 'الكل').map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">وصف المنتج</label>
            <textarea
              required
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none"
              placeholder="اكتب تفاصيل المنتج وحالته..."
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">رابط صورة المنتج</label>
            <input
              required
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-lg"
            >
              نشر الإعلان الآن
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

window.AddItem = AddItem;
