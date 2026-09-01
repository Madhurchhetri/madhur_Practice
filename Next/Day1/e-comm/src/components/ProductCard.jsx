
const ProductCard = ({ product }) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      
      {/* Product Image */}
      <div className="flex h-72 items-center justify-center bg-gray-50 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        
        {/* Category */}
        <p className="mb-2 text-sm font-medium capitalize text-gray-500">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="mb-3 line-clamp-2 text-lg font-semibold text-gray-900">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mb-4 line-clamp-2 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mb-4 flex items-center gap-2">
          <span className="rounded-md bg-yellow-100 px-2 py-1 text-sm font-semibold text-yellow-700">
            ⭐ {product.rating.rate}
          </span>

          <span className="text-sm text-gray-500">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>

          <button className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;

