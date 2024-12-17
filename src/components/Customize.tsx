import React from 'react'
import Image from 'next/image'
import CustomizeImage from '@/app/public/images/Image-container.png'

const Customize = () => {
  return (

    <div className='bg-[#FFFF] h-screen flex items-center'>
            <div className="grid grid-cols-2 gap-20 px-36 text-black w-full">

                {/* Service Image */}
                <div className="flex justify-center items-center">
                    <Image src={CustomizeImage} alt='Customize' width={500} height={500} />
                </div>

                {/* Text Area */}
                <div className="flex flex-col justify-center space-y-6">
                    <h2 className='text-[56px] font-bold leading-tight'>
                    Customise it to your needs
                    </h2>
                    <p className='font-extralight'>
                    Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). 
                    Or create your own scripts and plugins using the Extension API.
                    </p>

                    {/* Button */}
                    <div>
                        <button className='bg-[#4F9CF9] text-[#FFFFFF] px-6 py-3 rounded-lg'>
                        Let's Go
                        </button>
                    </div>
                </div>


            </div>
        </div>

  )
}

export default Customize