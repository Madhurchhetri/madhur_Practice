import React from 'react'

const Pagination = ({totalProduct , productPerPage , setCurrentPage}) => {
    let pageNumber = []
    for(let i=1 ; i<=Math.ceil(totalProduct/productPerPage); i++){
      pageNumber.push(i)  
    }
  return (
    <div className='flex gap-2'>
        {
            pageNumber.map((num)=>{
                return(
                     <button
                     onClick={()=>setCurrentPage(num)}
                      className='px-3 py-1.5 rounded border-2 cursor-pointer '>{num}</button>
                )
            })
        }
    </div>
  )
}

export default Pagination