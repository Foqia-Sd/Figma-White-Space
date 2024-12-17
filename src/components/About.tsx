import React from 'react'
import Image from 'next/image'
import AboutImage from '@/app/public/images/Image-container.png'

const About = () => {
  return (
    <div className='bg-[#FFFF] h-screen flex items-center'>
            <div className="grid grid-cols-2 gap-8 px-36 text-black w-full">
                
                {/* Text Area */}
                <div className="flex flex-col justify-center space-y-6">
                    <h2 className='text-[46px] font-bold leading-tight'>
                    Project<br/>Management
                    </h2>

                    <p className='font-extralight'>
                    Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
                    </p>

                    {/* Button */}
                    <div>
                        <button className='bg-[#4F9CF9] text-[#FFFFFF] px-6 py-3 rounded-lg'>
                        Get Started
                        </button>
                    </div>
                </div>

                {/* About Image */}
                <div className="flex justify-center items-center">
                <Image src={AboutImage} alt='About' width={500} height={500} />
                    
                </div>
            </div>
        </div>
  )
}

export default About