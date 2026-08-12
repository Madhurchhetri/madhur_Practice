import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pagination from './components/Pagination';

const App = () => {
  const[products ,setProducts] = useState([])
  const[currentPage , setCurrentPage] = useState(1);
  const [productPerPage , setProductPerPage] = useState([10]);


  const fetchData = async ()=>{
    const res = await axios.get('https://dummyjson.com/products')
    console.log(res.data.products);
    setProducts(res.data.products)
    
  }

  const lastIndexPageProduct = currentPage * productPerPage;
  const firstIndexPageProduct = lastIndexPageProduct - productPerPage;
  const currentPageProduct = products.slice(firstIndexPageProduct , lastIndexPageProduct)

  useEffect(()=>{
    fetchData()
  },[])
  
  return (
    <div className='flex flex-col justify-center items-center'>
    <div className='w-full flex flex-wrap justify-center  items-center gap-3 py-5 '>
      {
        currentPageProduct.map((item)=>{
          return(
            <div 
            className='w-[200px] h-[200px] border-2 rounded flex flex-col justify-center items-center'
            key={item.id}>
              <div className='w-[80px] h-[80px]'>
                <img 
                className='w-full object-cover'
                src={item.images} alt={item.title} />
              </div>
              <h2 className='text-center'>{item.title}</h2>
            </div>
          )
        })
      }
    </div>
    <div>
      
      <Pagination totalProducts = {products.length} setCurrentPage={setCurrentPage} productPerPage={productPerPage} />
    </div>
    </div>
  )
}

export default App