import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pagination from './component/Pagination';

const App = () => {
  const[products , setProducts] = useState([]);
  const[currentPage , setCurrentPage] = useState(1)
  const[productPerPage , setProductPerPage] = useState([10])

  const fetchData = async ()=>{
    const res = await axios.get('https://dummyjson.com/products')
    console.log(res.data.products);
    setProducts(res.data.products); 
  }

  const lastProductPage = currentPage * productPerPage
  const firstProductPage = lastProductPage - productPerPage
  const currentProductPage = products.slice(firstProductPage,lastProductPage)

  useEffect(()=>{
    fetchData()
  },[])
  
  return (
    <div className='flex flex-col justify-center items-center'>
    <h1 className='text-white'>Pagination</h1>
    <div className='flex justify-center items-center flex-wrap gap-4 px-4 py-4'>
      
      {
        currentProductPage.map((item)=>{
          return(
            <div
            className='w-[300px] h-[300px] border-2 rounded flex flex-col justify-center items-center gap-2'
             key={item.id}>
            <img 
            className='w-[150px] h-[150px]'
             src={item.images} alt={item.title} />
              <h1 className='text-white'>{item.title}</h1>
            </div>
          )
        })
      }
    </div>
    <div>
      
      <Pagination totalProducts = {products.length} setCurrentPage={setCurrentPage} productPerPage={productPerPage}/>
    </div>
    </div>
  )
}

export default App