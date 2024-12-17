import React from 'react'
import Image from 'next/image'
import Client1Image from '@/app/public/images/Client1.png'
import Client2Image from '@/app/public/images/Client2.png'
import Client3Image from '@/app/public/images/Client3.png'
import Slider from '@/app/public/images/Slider.png'

const Testimonals = () => {
  return (
    <div className='bg-white h-screen flex flex-col items-center justify-center'>
        <h2 className='text-[50px] font-bold'>What Our Clients Says</h2>
        <div className='grid grid-cols-3 py-8'>
            <Image src={Client1Image} alt='Client1Image' width={350} height={350} />
            <Image src={Client2Image} alt='Client2Image' width={280} height={280} className='mt-4 ml-5'/>
            <Image src={Client3Image} alt='Client3Image' width={280} height={280} className='mt-4'/>

        </div>

        <Image src={Slider} alt='Slider' />

    </div>
  )
}

export default Testimonals