import React from 'react'

const Pagination = ({totalProducts, productsPerPage, setCurrentPage}) => {
    let pageNumbers = []
    for(let i=1; i<= Math.ceil(totalProducts / productsPerPage);i++ ){
        pageNumbers.push(i);
    }
    console.log('pageNumbers', pageNumbers);
  return (
    <div>
        {
            pageNumbers.map((number)=>{
                return(
                    <button className='px-3 py-2 text-2xl border-1 rounded active:scale-95 cursor-pointer'
                    onClick= {()=> setCurrentPage(number)}
                    >{number}</button>
                )
            })
        }
    </div>
  )
}

export default Pagination