import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pagination from './components/Pagination'


const App = () => {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrenPage] = useState(1)
  const [productPerPage , setProductPerPage] = useState([5])
  const fetchData = async()=>{
    const res = await axios.get("https://dummyjson.com/products")
    console.log(res.data.products);
    setProducts(res.data.products)
    
  }

  const lasttPageIndex = currentPage * productPerPage
  const firstPageIndex = lasttPageIndex - productPerPage
  const currentPageProduct = products.slice(firstPageIndex , lasttPageIndex)
  
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className='flex flex-col py-3 justify-center items-center gap-2'>
    <div className='p-4 flex flex-wrap gap-4 justify-center items-center'>
      {
        currentPageProduct.map((item)=>{
          return(
            <div
            className='h-[270px] w-[270px] flex flex-col gap-2 border-2 rounded justify-center items-center'
             key={item.id}>
            <div className='w-[150px] h-[150px]'>
              <img
              className='w-full'
               src={item.images} alt={item.title} />
            </div>
              <h1>{item.title}</h1>
            </div>
          )
        })
      }
    </div>
    <div>
      
      <Pagination totalProducts = {products.length} setCurrenPage={setCurrenPage} productPerPage={productPerPage} />
    </div>
    </div>
  )
}

export default App