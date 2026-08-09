import React from 'react'

const PaginationButton = ({totalPost , postPerPage ,setCurrentPage}) => {

    let pages = [];

    for(let i =1; i<=Math.ceil(totalPost/postPerPage); i++){
        pages.push(i);
    }

  return (
    <div className=' flex justify-center items-center gap-3 '>
        {
            pages.map((page)=>(
                <button onClick={()=>setCurrentPage(page)} className='px-4 py-3  border rounded-2xl active:scale-95 cursor-pointer'>{page}</button>
            ))
        }
        
    </div>
  )
}

export default PaginationButton