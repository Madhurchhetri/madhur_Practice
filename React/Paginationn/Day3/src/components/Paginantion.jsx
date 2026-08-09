import React from 'react'

const Paginantion = ({setCurrentPage , totalProducts ,productPerPage}) => {
    let pageNumber=[]
    for(let i =1; i<=Math.ceil(totalProducts/productPerPage); i++){
        pageNumber.push(i);
    }
  return (
    <div>
    {
        pageNumber.map((number)=>{
            return(
                <button onClick={()=>setCurrentPage(number)}
                 className='py-2 px-3 border-2 rounded cursor-pointer'>
                 {number}
                 </button>
            )
        })
    }
    </div>
  )
}

export default Paginantion