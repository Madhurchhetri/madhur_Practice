import React from 'react'

const Pagination = ({totalProducts , setCurrentPage , productPerPage}) => {
    let pageNumber = [];
    for(let i=1; i<= Math.ceil(totalProducts / productPerPage); i++){
        pageNumber.push(i)
    }
    console.log(pageNumber);
    
  return (
    <div className='flex gap-2'>
        {
            pageNumber.map((num)=>{
                return(
                    <button 
                    onClick={()=>setCurrentPage(num)}
                    className='px-3 py-2 border-2 rounded cursor-pointer'>
                    {num}
                    </button>
                )
            })
        }
    </div>
  )
}

export default Pagination