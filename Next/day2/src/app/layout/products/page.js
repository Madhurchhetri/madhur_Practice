import ProductCard from '@/components/ProductCard';
import ProtectedRoute from '@/components/ProtectedRoute';
import React from 'react'

const page = async () => {
    let res = await fetch('https://fakestoreapi.com/products')
    let products = await res.json()
    console.log(products);
    
  return (
    <ProtectedRoute>
    <div className='flex flex-wrap justify-center items-center gap-7'>
        {
            products.map((product)=>{
                return(
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                )
            })
        }
    </div>
    </ProtectedRoute>
  )
}

export default page