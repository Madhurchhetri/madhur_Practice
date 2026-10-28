import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [products , setProducts] = useState([])
    const fetchData =  async()=>{
      const res = await axios.get("https://dummyjson.com/products")
      console.log(res.data.products)
      setProducts(res.data.products)
    }

    useEffect(()=>{
      fetchData()
    },[])
    

  return (
    <div>
      {
        products.map((item)=>{
          return (
            <div key={item.id}>
              <h1 className=' text-center'>{item.title}</h1>
            </div>
          )
        })
      }
    </div>
  )
}

export default App