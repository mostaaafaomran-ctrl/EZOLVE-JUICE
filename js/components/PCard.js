const PCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden border border-gray-100 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex-grow flex flex-col">
        <div>
          <span className="text-xs text-primary font-semibold bg-blue-50 px-2 py-1 rounded">
            {product.category}
          </span>
          <h3 className="text-lg font-bold mt-2 text-gray-800">{product.name}</h3>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">{product.description}</p>
        </div>
        <div className="mt-4 flex justify-between items-center pt-2 border-t border-gray-50">
          <span className="text-xl font-bold text-gray-900">{window.utils.formatPrice(product.price)}</span>
          <a
            href={`#product/${product.id}`}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded text-sm font-semibold transition"
          >
            تفاصيل
          </a>
        </div>
      </div>
    </div>
  );
};

window.PCard = PCard;
