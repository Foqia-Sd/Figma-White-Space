import React from 'react'
import Image from 'next/image'
import LOGO from '@/app/public/images/Logo Icon.png'
import SocialIcons from '@/app/public/images/Social Icon.png'

const Footer = () => {
  return (
    <div className='bg-[#043873] text-white flex items-center py-10'>
      {/* Footer Container */}
      <div className='w-full max-w-7xl px-10 mx-auto'>
        {/* Footer Grid */}
        <div className='grid grid-cols-5 gap-x-8 mt-10'>
          {/* Logo Section */}
          <div className='flex flex-col'>
            <div className='flex gap-2 items-center'>
              <Image src={LOGO} alt='Logo-icon' width={28} height={22} />
              <h3 className='text-white font-bold text-[15px]'>whitespace</h3>
            </div>
            <p className='mt-3'>
              Whitespace was created for<br />
              the new ways we live and<br />
              work. We make a better workspace around the world.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <p className='font-bold'>Product</p>
            <p className='mt-2'>Overview</p>
            <p>Pricing</p>
            <p>Customer stories</p>
          </div>

          {/* Resources Links */}
          <div>
            <p className='font-bold'>Resources</p>
            <p className='mt-2'>Blog</p>
            <p>Guides tutorials</p>
            <p>Help center</p>
          </div>

          {/* Company Links */}
          <div>
            <p className='font-bold'>Company</p>
            <p className='mt-2'>About us</p>
            <p>Careers</p>
            <p>Media kit</p>
          </div>

          {/* Try It Today Section */}
          <div>
            <p className='font-bold'>Try It Today</p>
            <p className='mt-2'>
              Get started for free.
              <br />
              Add your whole team as your needs grow.
            </p>
            <button className='bg-[#4F9CF9] text-[#FFFFFF] px-8 py-3 rounded-lg mt-8'>
              Start today
            </button>
          </div>
        </div>

        {/* End Sectiom */}
      <div className='mt-10'>
        <ul className='flex gap-16'>
          <li>English</li>
          <li>Terms & privacy</li>
          <li>Security</li>
          <li>Status</li>
          <li>©2021 Whitepace LLC.</li>
          <Image src={SocialIcons} alt={'SocialIcons'} className='ml-28'/>
        </ul>
      </div>

       
      </div>
      
    </div>
  )
}

export default Footer
