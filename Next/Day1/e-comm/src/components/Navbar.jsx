import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ToggleTheme'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-8 py-4 font-semibold'>
        <h1 className='font-bold'>E-coomerce</h1>
        <div className='flex gap-2 '>
            <Link href={'/home'}>Home</Link>
            <Link href={'/products'}>Products</Link>
        </div>
        <div className='flex justify-center items-center gap-2 cursor-pointer'>
            Login
            <ModeToggle/>
        </div>
    </div>
  )
}

export default Navbar