import React from 'react'

const Pagination = ({totalProducts , setCurrentPage , productsPerPage}) => {
    let pageNumber = []
    for(let i=1 ; i<= Math.ceil(totalProducts/productsPerPage); i++){
        pageNumber.push(i);
    }
  return (
    <div className=' flex justify-center items-center gap-1'>
        {
            pageNumber.map((num)=>{
                return (
                    <div key={num.id}>
                        <button
                        onClick={()=>setCurrentPage(num)}
                        className='px-2 py-2 rounded border-2 cursor-pointer'
                        >{num}</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Pagination