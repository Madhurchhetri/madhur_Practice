import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Pagination from './components/Pagination';

const App = () => {
  const [products , setProducts] = useState([]);
  const [currentPage , setCurrentPage] = useState(1)
  const [productsPerPage , setProductsPerPage] = useState([5])
  const fetchData = async () =>{
    const result = await axios.get('https://dummyjson.com/products')
    console.log(result.data.products);
    setProducts(result.data.products)
    
  }
  useEffect(()=>{
    fetchData()
  },[])

  const lastProductsPerPage = currentPage * productsPerPage
  const firstProductsPerPage = lastProductsPerPage - productsPerPage
  const currentProductsPerPage = products.slice(firstProductsPerPage , lastProductsPerPage)
  
  return (
    <div className='w-full py-2'>
     <div className='flex flex-wrap gap-1 justify-center items-center px-2 py-2'>
         {
        currentProductsPerPage.map((item)=>{
          return (
            <div 
            className='w-[350px] h-[300px] rounded bg-amber-300' 
            key={item.id}>
                <div className='flex flex-col items-center justify-center gap-4 py-5'>
                  <img
                  className='w-[200px] h-[200px] object-cover rounded' 
                  src={item.images} alt={item.title} />
                <h1 className='black'>{item.title}</h1>
                </div>
            </div>
          )
        })
      }
     </div>
     <div className=' text-center'>
      <Pagination totalProducts={products.length} productsPerPage={productsPerPage} setCurrentPage={setCurrentPage} />
     </div>
    </div>
  )
}

export default App