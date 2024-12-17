import React from 'react'
import Image from 'next/image'
import Icons from '@/app/public/images/App-icon.png'

const Trial = () => {
  return (
    <div className='bg-[#043873] h-screen flex flex-col items-center justify-center text-white'>
        {/* Text */}
        <div className='text-center leading-tight'>
        <h2 className='text-[44px] font-bold'>Try Whitepace <br/>today</h2>
        <p className='font-extralight mt-4'>Get started for free.<br/> Add your whole team as your needs grow.</p>

        {/* Button */}
        <button className='bg-[#4F9CF9] text-[#FFFFFF] px-10 py-3 rounded-lg mt-8'>
        Try Taskey free
        </button>

        <p className='mt-8 font-extralight'>On a big team? Contact sales</p>
        </div>

        {/* Icons */}
        <Image src={Icons} alt='Icons' width={200} height={200} className='mt-8'/>
        
        

    </div>
  )
}

export default Trial