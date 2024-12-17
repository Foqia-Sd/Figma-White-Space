import React from 'react'
import Image from 'next/image'
import AppsImage from '@/app/public/images/Apps.png'

const Apps = () => {
  return (
    <div className='bg-[#043873] h-screen flex'>
            <div className="grid grid-cols-2 gap-8 px-36 text-black w-full">

                {/* Image */}
                <div className="flex justify-center items-center">
                    <Image src={AppsImage} alt='Apps' width={500} height={500} />
                </div>

                {/* Text Area */}
                <div className="flex flex-col justify-center space-y-6 text-white">
                    <h2 className='text-[46px] font-bold leading-tight'>
                    Work with Your Favorite Apps Using whitepace
                    </h2>
                    <p className='font-extralight'>
                    Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
                    </p>

                    {/* Button */}
                    <div>
                        <button className='bg-[#4F9CF9] text-[#FFFFFF] px-6 py-3 rounded-lg'>
                        Read more
                        </button>
                    </div>
                </div>


            </div>
        </div>
  )
}

export default Apps