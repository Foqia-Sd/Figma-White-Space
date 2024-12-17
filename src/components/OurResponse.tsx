import React from 'react'
import Image from 'next/image'
import Apple from '@/app/public/images/Apple.png'
import Microsoft from '@/app/public/images/microsoft 1.png'
import Slack from '@/app/public/images/Slack_Technologies_Logo 1.png'
import Google from '@/app/public/images/Group 246.png'


const OurResponse = () => {
    return (
        <div className='flex items-center justify-center my-10'>
            {/* Our Response */}
            <div>
            <div className='flex items-center justify-center'>
                <h2 className='font-bold text-[44px]'>Our sponsors</h2>
            </div>
            <div className="grid grid-cols-4 mt-10 gap-16">
                <Image src={Apple} alt='Apple' className='ml-20' />
                <Image src={Microsoft} alt='Microsoft' width={200} height={200} className='mt-4'/>
                <Image src={Slack} alt='Slack' width={200} height={200} className='mt-4' />
                <Image src={Google} alt='Google' width={200} height={200} className='mt-4' />

            </div>
            </div>
        </div>
    )
}

export default OurResponse