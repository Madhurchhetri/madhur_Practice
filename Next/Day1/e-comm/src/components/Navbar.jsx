"use client";

import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ToggleTheme'
import { useAuth } from '@/context/authContext';
import { api } from '@/lib/api';


const Navbar = () => {

   const { user, hydrateUser } = useAuth();

  const logoutHandler = async () => {
    try {
      await api.post("/api/auth/logout");

      // user ko dobara hydrate karega
      await hydrateUser();

    } catch (error) {
      console.log("logout error:", error);
    }
  };

  return (
    <div className='flex justify-between items-center px-8 py-4 font-semibold'>
        <h1 className='font-bold'>E-coomerce</h1>
        <div className='flex gap-2 '>
            <Link href={'/layout/home'}>Home</Link>
            <Link href={'/layout/products'}>Products</Link>
        </div>
        <div className='flex justify-center items-center gap-2 cursor-pointer'>
            {user ? (
          <button
            onClick={logoutHandler}
            className="cursor-pointer"
          >
            Logout
          </button>
        ) : (
          <Link href="/login">
            Login
          </Link>
        )}
            <ModeToggle/>
        </div>
    </div>
  )
}

export default Navbar