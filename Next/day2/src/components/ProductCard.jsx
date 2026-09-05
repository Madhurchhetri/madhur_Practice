import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Product Image */}
      <Link href={`/layout/products/${product.id}`}>
      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-gray-50 p-6">
        
        {/* Wishlist */}
        <button className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-red-50">
          
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-5 w-5 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733C11.285 4.876 9.623 3.75 7.688 3.75 5.099 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>

        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
        />
      </div>
      </Link>

      {/* Product Details */}
      <div className="p-5">

        {/* Category */}
        <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold capitalize text-green-700">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="mt-3 line-clamp-2 min-h-[56px] text-lg font-bold text-gray-900">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">

          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={
                  star <= Math.round(product.rating.rate)
                    ? "currentColor"
                    : "none"
                }
                stroke="currentColor"
                className={`h-4 w-4 ${
                  star <= Math.round(product.rating.rate)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.195 3.602a.563.563 0 00-.182.557l1.285 5.39a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0l-4.725 2.885a.562.562 0 01-.84-.61l1.285-5.39a.563.563 0 00-.182-.557L2.059 10.385c-.38-.325-.178-.948.321-.988l5.518-.442a.563.563 0 00.475-.345L10.48 3.5Z"
                />
              </svg>
            ))}
          </div>

          <span className="text-sm font-medium text-gray-700">
            {product.rating.rate}
          </span>

          <span className="text-sm text-gray-400">
            ({product.rating.count})
          </span>
        </div>

        {/* Price + Cart */}
        <div className="mt-5 flex items-center justify-between">

          <div>
            <p className="text-2xl font-bold text-gray-900">
              ${product.price}
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-600">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25h9.75l3-9H5.106M7.5 14.25L5.106 5.272M7.5 14.25l-1.125 3.375a1.125 1.125 0 001.067 1.48h10.683M9 19.125a.375.375 0 11-.75 0 .375.375 0 01.75 0zm8.25 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>

            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;