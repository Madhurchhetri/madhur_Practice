import ProductCard from "@/components/ProductCard";

const Page = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return (
    <div className="min-h-screen p-8">

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;