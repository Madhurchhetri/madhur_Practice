import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pagination from './components/Pagination'

const App = () => {
  const [products , setProducts] = useState([])
  const [currentPage , setCurrentPage] = useState(1)
  const [productPerPage , setProductPerPage] = useState([5])
  const fetchData = async()=>{
    const res = await axios.get("https://dummyjson.com/products")
    console.log(res.data.products)
    setProducts(res.data.products)
  }
  useEffect(()=>{
    fetchData()
  },[])

  const lastPageProducts = currentPage * productPerPage
  const firstPageProducts = lastPageProducts - productPerPage
  const currentProductPage = products.slice(firstPageProducts , lastPageProducts)
  
  return (
    <div className='flex flex-col justify-center items-center py-2'>
      <div className='flex flex-wrap justify-center items-center gap-3 py-4'>
      {
        currentProductPage.map((item)=>{
          return(
            <div key={item.id}
              className='flex flex-col justify-center items-center gap-2 w-[300px] h-[300px] rounded-2xl border-2'
            >
              <div className='w-[150px] h-[150px] rounded'>
                  <img className='w-full h-full object-cover' src={item.images} alt={item.title} />
              </div>
              <h2>{item.title}</h2>
            </div>
          )
        })
      }
    </div>
    <div>
     
      <Pagination totalProduct = {products.length} productPerPage={productPerPage} setCurrentPage={setCurrentPage}/>
    </div>
    </div>
  )
}

export default App