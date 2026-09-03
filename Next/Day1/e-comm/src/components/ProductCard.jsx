import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      
      {/* Product Image */}
      <div className="flex h-72 items-center justify-center bg-muted/50 p-6">
        <Link
          href={`/layout/products/${product.id}`}
          className="flex h-full w-full items-center justify-center"
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Category */}
        <p className="mb-2 text-sm font-medium capitalize text-muted-foreground">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="mb-3 line-clamp-2 text-lg font-semibold text-foreground">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mb-4 line-clamp-2 text-sm leading-6 text-muted-foreground">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mb-4 flex items-center gap-2">
          <span className="rounded-md bg-yellow-500/10 px-2 py-1 text-sm font-semibold text-yellow-600 dark:text-yellow-400">
            ⭐ {product.rating.rate}
          </span>

          <span className="text-sm text-muted-foreground">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-foreground">
            ${product.price}
          </span>

          <button
            type="button"
            className="cursor-pointer rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;

