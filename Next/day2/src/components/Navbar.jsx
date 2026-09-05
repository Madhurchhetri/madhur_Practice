import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around px-8 py-5 gap-4 '>
        <div className="logo">
            ecomm
        </div>
        <div className='nav flex gap-7'>
            <Link href={'/layout/home'} >Home</Link>
            <Link href={'/layout/products'} >Product</Link>
        </div>
        <div>
            login
        </div>
    </div>
  )
}

export default Navbar