import axios from 'axios'
import React from 'react'
import { useEffect , useState } from 'react'
import Pagination from './components/Pagination'



const App = () => {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(10)

  const fetchData = async()=>{
    const res = await axios.get('https://dummyjson.com/products')
    console.log('res', res.data.products );
    setProducts(res.data.products)
  }
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <>
    <div className='flex justify-center items-center flex-wrap gap-4 p-4'>
    {
      currentProducts.map((item)=>{
        return(
          <div key={item.id} className=' w-[300px] h-[300px] flex flex-col justify-center items-center gap-2 border-2 p-4'>
            <img src={item.images} alt={item.title}
              className='w-[100px] h-[100px] object-cover'
             />
            <h1>{item.title}</h1>
            <p>{item.price}</p>
          </div>
        )
      })
    }
    
    </div>
    <div className='flex justify-center items-center gap-4 py-4'>
    <Pagination totalProducts={products.length} productsPerPage={productsPerPage} setCurrentPage={setCurrentPage} />
    </div>
    </>
  )
}

export default App