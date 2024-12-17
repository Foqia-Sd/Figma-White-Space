import React from 'react'
import Image from 'next/image'
import LOGO from '@/app/public/images/Logo Icon.png'

export const Header = () => {
  return (
    <div className='bg-[#043873] p-4'>
      <header>
        {/* Logo with Navbar*/}
        <div className='flex items-center justify-between gap-1 px-4 sm:px-6 md:px-28'>
          <div className='flex  gap-1'>
          <Image src={LOGO} alt='Logo-icon' width={25} height={22}/>
           <h3 className='text-white font-bold'>whitespace</h3>
           </div>

           {/* NavBar */}
        <div className='hidden md:flex items-center text-white font-extralight text-[15px] space-x-20 cursor-pointer'>
            <ul className='flex gap-8'>
              <li>Products</li>
              <li>Solutions</li>
              <li>Resources</li>
              <li>Pricing</li>
            </ul> 

            {/* Buttons */}
            <div className='flex gap-4'>
              <button className='bg-[#FFE492] text-[#043873] rounded-lg w-20 h-10 mt-1'>Login</button>
              <button className='bg-[#4F9CF9] text-[#FFFFFF] p-3 rounded-lg'>Try Whitespace free</button>
            </div>
        
        </div>
        </div>
      </header>
    </div>
  )
}
