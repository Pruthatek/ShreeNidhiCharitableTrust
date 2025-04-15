import React from 'react'
import Donation from '../Home/Donation'

const Achievements = () => {
  return (
    <div className='bg-[#F9F9F9] py-5'>

    <div className='w-full bg-white h-fit lg:mt-[110px] mt-[85px] py-10 font-alata'>

    <div className='flex flex-col items-center justify-center'>
      <p className='font-semibold text-[13px] text-[#626262] uppercase font-montserrat '>Achievements</p>  
      <p className='font-normal  lg:text-[33px] md:text-[28px] text-[22px] text-[#A3364E] text-center '>Nachiketa Vidya Sansthan Gurukul- Achievements</p>
      <img src="/assets/design.svg" className='md:w-[400px] w-[200px] '/>
    </div>

    <div className='md:w-full w-[90%] mx-auto flex flex-row flex-wrap gap-x-4 gap-y-8 justify-center mt-14'>

        <div>
            <img src="/assets/yogasan.svg"/>
            <p className='font-normal md:text-[22px] text-[20px] text-[#A3364E] text-center mt-3 '>Yogasan</p>
        </div>

        <div>
            <img src="/assets/sutrapatho.svg"/>
            <p className='font-normal md:text-[22px] text-[20px] text-[#A3364E] text-center mt-3'>Sutrapatho</p>
        </div>

        <div>
            <img src="/assets/suryanamaskar.svg"/>
            <p className='font-normal md:text-[22px] text-[20px] text-[#A3364E] text-center mt-3'>Surya Namaskar Competition First in the State</p>
        </div>

    </div>

    
      
    </div>

    <div className='w-full bg-white py-10 mx-auto flex flex-row flex-wrap gap-x-4 gap-y-8 justify-center my-4'>
    <div className='flex flex-col items-center justify-center'>
      <p className='font-semibold text-[13px] text-[#626262] uppercase font-montserrat '>Achievements</p>  
      <p className='font-normal  lg:text-[33px] md:text-[28px] text-[22px] text-[#A3364E] text-center '>District Level Achievements(Khelmahakumbh)</p>
      <img src="/assets/design.svg" className='md:w-[400px] w-[200px] '/>
    </div>


    <div className='w-full flex md:flex-row justify-center lg:gap-x-40 gap-x-20 mt-10 gap-y-5 flex-col lg:px-10 px-10 '>

        <div className=' flex flex-col gap-y-5 '>
              <div className='flex md:gap-x-8 gap-x-4 '>
                    <div className='w-3 h-3 bg-[#A3364E] rotate-45 mt-1.5'></div>
                    <p className='text-[#626262] font-normal text-[16px] w-[90%]'>First in the Kho Kho competition.</p>
               </div>

               <div className='flex md:gap-x-8 gap-x-4 '>
                    <div className='w-3 h-3 bg-[#A3364E] rotate-45 mt-1.5'></div>
                    <p className='text-[#626262] font-normal text-[16px] w-[90%]'>First in the Yoga competition.</p>
               </div>

               <div className='flex md:gap-x-8 gap-x-4 '>
                    <div className='w-3 h-3 bg-[#A3364E] rotate-45 mt-1.5'></div>
                    <p className='text-[#626262] font-normal text-[16px] w-[90%]'>Second in the Kho Kho competition.</p>
               </div>

               <div className='flex md:gap-x-8 gap-x-4 '>
                    <div className='w-3 h-3 bg-[#A3364E] rotate-45 mt-1.5'></div>
                    <p className='text-[#626262] font-normal text-[16px] w-[90%]'>Third in the Kho Kho competition.</p>
               </div>

        </div>

        <div className=' flex flex-col gap-y-5 '>
              <div className='flex md:gap-x-8 gap-x-4 '>
                    <div className='w-3 h-3 bg-[#A3364E] rotate-45 mt-1.5'></div>
                    <p className='text-[#626262] font-normal text-[16px] w-[90%]'>Second in the Swimming competition.</p>
               </div>

               <div className='flex md:gap-x-8 gap-x-4 '>
                    <div className='w-3 h-3 bg-[#A3364E] rotate-45 mt-1.5'></div>
                    <p className='text-[#626262] font-normal text-[16px] w-[90%]'>Third in the 100m Race competition.</p>
               </div>

               <div className='flex md:gap-x-8 gap-x-4 '>
                    <div className='w-3 h-3 bg-[#A3364E] rotate-45 mt-1.5'></div>
                    <p className='text-[#626262] font-normal text-[16px] w-[90%]'>Third in the 200m Race competition.</p>
               </div>

               <div className='flex md:gap-x-8 gap-x-4 '>
                    <div className='w-3 h-3 bg-[#A3364E] rotate-45 mt-1.5'></div>
                    <p className='text-[#626262] font-normal text-[16px] w-[90%]'>Third in the 600m Race competition.</p>
               </div>

        </div>

    </div>

    </div>

    <Donation/>

    </div>
  )
}

export default Achievements
