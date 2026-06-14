const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-primary cursor-pointer" onClick={() => window.location.hash = '#'}>
          سوق المستعمل
        </div>
        <div className="flex gap-6 items-center">
          <a href="#" className="text-gray-700 hover:text-primary font-semibold">الرئيسية</a>
          <a href="#shop" className="text-gray-700 hover:text-primary font-semibold">تصفح المنتجات</a>
          <a
            href="#add-item"
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-bold"
          >
            أضف إعلانك
          </a>
        </div>
      </div>
    </nav>
  );
};

window.Navbar = Navbar;
