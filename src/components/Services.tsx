import React from 'react'
import Image from 'next/image'
import ServicesImage from '@/app/public/images/Work Together Image.png'

const Services = () => {
    return (
        <div className='bg-[#FFFF] h-screen flex items-center'>
            <div className="grid grid-cols-2 gap-8 px-36 text-black w-full">

                {/* Service Image */}
                <div className="flex justify-center items-center">
                    <Image src={ServicesImage} alt='Services' width={500} height={500} />
                </div>

                {/* Text Area */}
                <div className="flex flex-col justify-center space-y-6">
                    <h2 className='text-[46px] font-bold leading-tight'>
                        Work together
                    </h2>
                    <p className='font-extralight'>
                        With whitepace, share your notes with your colleagues and collaborate on them.
                        You can also publish a note to the internet and share the URL with others.
                    </p>

                    {/* Button */}
                    <div>
                        <button className='bg-[#4F9CF9] text-[#FFFFFF] px-6 py-3 rounded-lg'>
                        Try it now
                        </button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Services