import React from 'react'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'

const Pricing = () => {
  return (
    <div className='bg-white h-screen flex items-center justify-center mt-10'>
        <div className='grid grid-cols-1'>
            {/* Text */}
        <div className='text-black flex flex-col justify-center items-center leading-tight'>
            <h1 className='font-bold text-[48px]'>Choose Your Plan</h1>
            <p className='font-normal py-4 '>Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right</p>
            <p>plan for you.</p>
        </div>

        {/* Pricing List */}
        <div className="grid grid-cols-3 mt-10 gap-2">

            {/* Price Board 1 */}
            <div className='bg-slate-50 w-[300px] h-[450px] px-6 mt-10 py-6'>
            <p className='font-semibold py-2'>Free</p>
            <p className='font-bold py-2 text-[18px]'>$0</p>
            <p className='font-medium text-[14px]'>Capture ideas and find them quickly</p>
            
            {/* Icons */}
            <div className="py-3 text-[12px]">
            <div className="flex py-2 gap-3">
            <IoIosCheckmarkCircleOutline size={15} className='mt-1'/>
            Sync unlimited devices
            </div>
        
            <div className="flex py-2 gap-3">
            <IoIosCheckmarkCircleOutline size={15} className='mt-1'/>
            10 GB monthly uploads
            </div>

            <div className="flex py-2 gap-3">
            <IoIosCheckmarkCircleOutline size={15} className='mt-1'/>
            200 MB max. note size
            </div>

            <div className="flex py-2 gap-3">
            <IoIosCheckmarkCircleOutline size={15} className='mt-1'/>
            Customize Home dashboard and access extra widgets
            </div>

            <div className="flex py-2 gap-3">
            <IoIosCheckmarkCircleOutline size={15} className='mt-1'/>
            Connect primary Google Calendar account
            </div>

            <div className="flex py-2 gap-3">
            <IoIosCheckmarkCircleOutline size={15} className='mt-1'/>
            Add due dates, reminders, and notifications to your tasks
            </div>

            {/* Button */}
            <button className='mt-4 px-6 border rounded-lg border-[#FFE492] py-3'>Get Started</button>
            </div>
        </div> 

        {/* Pricing Board 2 */}
        <div className='bg-[#043873] text-white w-[320px] h-[520px] px-6 py-10 rounded-lg'>
            <p className='font-semibold py-2'>Personal</p>
            <p className='font-bold py-2 text-[18px] text-[#FFE492]'>$11.99</p>
            <p className='font-medium text-[14px]'>Keep home and family on track</p>
            
            {/* Icons */}
            <div className="py-3 text-[12px]">
            <div className="flex py-2 gap-3">
            <IoIosCheckmarkCircleOutline size={15} className='mt-1 text-[#FFE492]'/>
            Sync unlimited devices
            </div>
        
            <div className="flex py-2 gap-3">
            <IoIosCheckmarkCircleOutline size={15} className='mt-1 text-[#FFE492]'/>
            10 GB monthly uploads
            </div>

            <div className="flex py-2 gap-3">
            <IoIosCheckmarkCircleOutline size={15} className='mt-1 text-[#FFE492]'/>
            200 MB max. note size
            </div>

            <div className="flex py-2 gap-3">
            <IoIosCheckmarkCircleOutline size={15} className='mt-1 text-[#FFE492]'/>
            Customize Home dashboard and access extra widgets
            </div>

            <div className="flex py-2 gap-3">
            <IoIosCheckmarkCircleOutline size={15} className='mt-1 text-[#FFE492]'/>
            Connect primary Google Calendar account
            </div>

            <div className="flex py-2 gap-3">
            <IoIosCheckmarkCircleOutline size={15} className='mt-1 text-[#FFE492]'/>
            Add due dates, reminders, and notifications to your tasks
            </div>

            {/* Button */}
            <button className='bg-[#4F9CF9] mt-4 px-8 py-3 rounded-lg'>
                Get Started
            </button>
            </div>
        </div>

        {/* Pricing Board 3 */}
        <div className='bg-slate-50 w-[300px] h-[450px] px-6 mt-10 ml-3 py-6'>
            <p className='font-semibold py-2'>Organization</p>
            <p className='font-bold py-2 text-[18px]'>$49.99</p>
            <p className='font-medium text-[14px]'>Capture ideas and find them quickly</p>
            
            {/* Icons */}
            <div className="py-3 text-[12px]">
            <div className="flex py-2 gap-3">
            <IoIosCheckmarkCircleOutline size={15} className='mt-1'/>
            Sync unlimited devices
            </div>
        
            <div className="flex py-2 gap-3">
            <IoIosCheckmarkCircleOutline size={15} className='mt-1'/>
            10 GB monthly uploads
            </div>

            <div className="flex py-2 gap-3">
            <IoIosCheckmarkCircleOutline size={15} className='mt-1'/>
            200 MB max. note size
            </div>

            <div className="flex py-2 gap-3">
            <IoIosCheckmarkCircleOutline size={15} className='mt-1'/>
            Customize Home dashboard and access extra widgets
            </div>

            <div className="flex py-2 gap-3">
            <IoIosCheckmarkCircleOutline size={15} className='mt-1'/>
            Connect primary Google Calendar account
            </div>

            <div className="flex py-2 gap-3">
            <IoIosCheckmarkCircleOutline size={15} className='mt-1'/>
            Add due dates, reminders, and notifications to your tasks
            </div>

            {/* Button */}
            <button className='mt-4 px-6 border rounded-lg border-[#FFE492] py-3'>Get Started</button>
            </div>
        </div>

        </div>
        </div>   
    </div>
  )
}

export default Pricing