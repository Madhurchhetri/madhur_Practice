import ProductCard from '@/components/ProductCard';
import React from 'react'

const page = async () => {
    let res = await fetch('https://fakestoreapi.com/products')
    let products = await res.json()
    console.log(products);
    
  return (
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
  )
}

export default page