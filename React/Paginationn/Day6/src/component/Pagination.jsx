import React from 'react'

const Pagination = ({totalProducts,setCurrentPage,productPerPage}) => {
    let pageNumber = [];
    for(let i=1; i<= Math.ceil(totalProducts/productPerPage); i++ ){
        pageNumber.push(i)
    }
  return (
    <div className='flex gap-2 py-2'>
        {
            pageNumber.map((num)=>{
                return(
                    <button 
                    onClick={()=>setCurrentPage(num)}
                    className='px-3 py-2 rounded border-2 cursor-pointer active:scale-95 text-white'>
                    {num}
                    </button>
                )
            })
        }
    </div>
  )
}

export default Pagination