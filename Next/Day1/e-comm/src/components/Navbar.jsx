import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-8 py-4 font-semibold'>
        <h1 className='font-bold'>E-coomerce</h1>
        <div className='flex gap-2 '>
            <Link href={'/home'}>Home</Link>
            <Link href={'/products'}>Products</Link>
        </div>
        <div>
            Login
        </div>
    </div>
  )
}

export default Navbar