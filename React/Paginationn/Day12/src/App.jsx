import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pagination from './components/Pagination'

const App = () => {
  const [products , setProducts] = useState([])
  const [currentPage , setCurrentPage] = useState(1)
  const[productPerPage , setProductperPage] = useState([5])
    const fetchData =  async()=>{
      const res = await axios.get("https://dummyjson.com/products")
      console.log(res.data.products)
      setProducts(res.data.products)
    }

    useEffect(()=>{
      fetchData()
    },[])

    const lastPageProduct = currentPage * productPerPage
    const firstPageProduct = lastPageProduct - productPerPage
    const currentProductPage = products.slice(firstPageProduct , lastPageProduct)
    

  return (
    <div className='w-full '>
      <div className=' flex flex-wrap gap-5 justify-center items-center px-4 py-4'>
          {
        currentProductPage.map((item)=>{
          return (
            <div
            className='w-[350px] h-[320px] bg-amber-400 rounded' 
            key={item.id}>
              
              <div className='flex flex-col items-center justify-center px-4 py-4'>
                <img className='w-[250px] h-[250px] object-cover rounded'
                 src={item.images} alt={item.title} />
                 <h1 className=' text-center my-2'>{item.title}</h1>
              </div>
            </div>
          )
        })
      }
      </div>
      <div>
        <Pagination totalProduct = {products.length} productPerPage = {productPerPage} setCurrentPage = {setCurrentPage}/>
      </div>
      
    </div>
  )
}

export default App