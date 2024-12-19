import React from 'react'
import Image from 'next/image'
import ElementImage from '@/app/public/images/Element.png'

const Yourdata = () => {
  return (
    <div className='bg-white h-screen flex items-center'>
            <div className="grid grid-cols-2 gap-8 px-36 w-full">
                {/* Text Area */}
                <div className="flex flex-col justify-center space-y-6">
                    <h2 className='text-[46px] font-bold leading-tight'>
                    100% your data
                    </h2>
                    <p className='font-extralight'>
                    The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
                    </p>

                    {/* Button */}
                    <div>
                        <button className='bg-[#4F9CF9] text-[#FFFFFF] px-6 py-3 rounded-lg'>
                        Read more
                        </button>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="flex justify-center items-center">
                    <Image src={ElementImage} alt='ElementImage' width={600} height={600} />
                </div>
            
            </div> 
        </div>
  )
}

export default Yourdata