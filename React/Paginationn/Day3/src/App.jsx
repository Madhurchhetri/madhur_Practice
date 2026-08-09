import React, { useEffect ,useState } from 'react'
import axios from 'axios'
import Paginantion from './components/Paginantion'


const App = () => {
  const [products, setProducts] = useState([])
  const[currentPage , setCurrentPage] = useState(1)
  const [productPerPage , setProductPerPage] = useState([5]);

  let fetchData = async()=>{
    let res = await axios.get("https://dummyjson.com/products")
    console.log(res.data.products); 
    setProducts(res.data.products)
  }

  const indexOfLastProduct = currentPage * productPerPage
  const indexOfFirstProduct = indexOfLastProduct - productPerPage
  const currentProducts = products.slice(indexOfFirstProduct , indexOfLastProduct)
  
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className='flex flex-col justify-center items-center' >
      <h1>hello</h1>
      <div className='w-full flex justify-center items-center flex-wrap gap-4'>
      {
        
        currentProducts.map((item)=>{
          return(
            <div key={item.id}>
              <div className="card w-[200px] h-[200px] flex flex-col gap-2 justify-center items-center border-2 grey">
                <img className='w-[70px] object-cover' src={item.images} alt={item.title} />
                <h1 className='text-center'>{item.title}</h1>
              </div>

            </div>
          )
        })
      }
      </div>
      <div className='btn my-4'>
        <Paginantion totalProducts = {products.length} setCurrentPage={setCurrentPage} productPerPage={productPerPage} />
      </div>
    </div>
  )
}

export default App