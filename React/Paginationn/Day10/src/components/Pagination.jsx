import React from 'react'

const Pagination = ({totalProducts , setCurrenPage, productPerPage}) => {
    let pageNumber = []
    for(let i = 1; i<= Math.ceil(totalProducts / productPerPage); i++){
        pageNumber.push(i)
    }
  return (
    <div className='flex justify-center gap-2'>
        {
            pageNumber.map((num)=>{
                return(
                    <button
                    onClick={()=>setCurrenPage(num)} 
                    className='px-2 py-1 rounded border-2 cursor-pointer'>{num}</button>
                )
            })
        }
    </div>
  )
}

export default Pagination