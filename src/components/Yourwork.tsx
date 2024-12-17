import React from 'react'
import Image from 'next/image'
import BackGroundImage from '@/app/public/images/BACKGROUND.png'

const Yourwork = () => {
    return (
        <div className=''>
            <div className='bg-[#043873] h-screen my-24 flex flex-col justify-center items-center relative'>
                {/* BackGround Image */}
                    <Image src={BackGroundImage} alt='Bg-Image' width={400} height={400}
                        className='absolute top-1/2 left-0 transform -translate-y-1/2 '/>
                
                {/* Heading */}
                <div className='text-white flex flex-col items-center justify-center ml-16'>
                    <h2 className='text-[48px] font-bold'>Your work, everywhere you are</h2>
                    <p className='text-[14px] pt-3 font-light'>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and</p> 
                   <p className='text-[14px] font-light'>OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
                </div>
            </div>

        </div>
    )
}

export default Yourwork