import React from 'react'
import Image from 'next/image'
import HeroImage from '@/app/public/images/Image-container.png'

const Hero = () => {
    return (
        <div className='bg-[#043873] h-screen flex items-center'>
            <div className="grid grid-cols-2 gap-8 px-36 text-white w-full">
                {/* Text Area */}
                <div className="flex flex-col justify-center space-y-6">
                    <h2 className='text-[46px] font-bold leading-tight'>
                        Get More Done with<br/>whitespace
                    </h2>
                    <p className='font-extralight'>
                        Project management software that enables your teams to collaborate, plan,<br/>
                        analyze and manage everyday tasks
                    </p>
                    {/* Button */}
                    <div>
                        <button className='bg-[#4F9CF9] text-[#FFFFFF] px-6 py-3 rounded-lg'>
                            Try Whitespace free
                        </button>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="flex justify-center items-center">
                    <Image src={HeroImage} alt='Hero' width={500} height={500} />
                </div>
            </div>
        </div>
    )
}

export default Hero
