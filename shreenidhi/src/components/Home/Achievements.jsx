import React from 'react'

const Achievements = () => {
  return (
    <div className='w-full bg-white h-fit mt-4 py-10 font-alata'>

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
  )
}

export default Achievements
