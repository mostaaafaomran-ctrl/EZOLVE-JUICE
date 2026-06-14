const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-lg font-bold mb-4">سوق المستعمل</p>
        <p className="text-gray-400 mb-4">أفضل مكان لبيع وشراء الأشياء المستعملة في منطقتك.</p>
        <div className="border-t border-gray-700 pt-4 text-sm text-gray-500">
          © 2023 جميع الحقوق محفوظة
        </div>
      </div>
    </footer>
  );
};

window.Footer = Footer;
