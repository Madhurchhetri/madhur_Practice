import React from 'react'

const Pagination = ({totalProduct , productPerPage , setCurrentPage}) => {
    let pageNumber = []

    for(let i = 1 ; i<=Math.ceil(totalProduct/productPerPage); i++){
        pageNumber.push(i)
    }
  return (
    <div className=' flex justify-center items-center gap-2'>
        {
            pageNumber.map((num)=>{
                return (
                    <button
                    onClick={()=>setCurrentPage(num)}
                    className='px-3 py-2 rounded border-2 cursor-pointer'>{num}</button>
                )
            })
        }
    </div>
  )
}

export default Pagination