import React from 'react'
import Image from 'next/image'
import UseImage from '@/app/public/images/Image-container.png'

const UseExtention = () => {
  return (

    <div className='bg-[#043873] h-screen flex items-center'>
            <div className="grid grid-cols-2 gap-8 px-36 text-white w-full">
                {/* Text Area */}
                <div className="flex flex-col justify-center space-y-6">
                    <h2 className='text-[46px] font-bold leading-tight'>
                    Use as Extension
                    </h2>
                    <p className='font-extralight'>
                    Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.

                    </p>
                    {/* Button */}
                    <div>
                        <button className='bg-[#4F9CF9] text-[#FFFFFF] px-6 py-3 rounded-lg'>
                        Let's Go
                        </button>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="flex justify-center items-center">
                    <Image src={UseImage} alt='UseImage' width={500} height={500} />
                </div>
            </div>
        </div>

  )
}

export default UseExtention