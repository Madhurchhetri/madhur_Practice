import axios from 'axios'
import React, { useEffect ,useState } from 'react'
import PaginationButton from './components/PaginationButton'

const App = () => {
  const [postData, setPostData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setpostPerPage] = useState(10)

  const fetchData = async ()=>{
      const res = await axios.get('https://dummyjson.com/products')
      console.log(res);
      setPostData(res.data.products)
  }
  useEffect(()=>{
    fetchData(); 
  },[])

 const lastPostIndex = currentPage * postPerPage
 const firstPostIndex = lastPostIndex - postPerPage

 const currentPost = postData.slice(firstPostIndex , lastPostIndex) 
 

  return (
    <>
    <div className='w-full h-screen flex  flex-wrap justify-center items-center gap-5'>
      {
        currentPost.map((item)=>{
        return(  
          <div
          className='w-40 flex items-center justify-center flex-col h-40 bg-gray-200 rounded md'  
          key={item.title}>
            <img className='w-20' src={item.images} alt={item.title} />
            <h1 className='text-center' >{item.title}</h1>
          </div>
          )
        })
      }
    </div>

    <PaginationButton totalPost={postData.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage}/>
    </>
  )
}

export default App