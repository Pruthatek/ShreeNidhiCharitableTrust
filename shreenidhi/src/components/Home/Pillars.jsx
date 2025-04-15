import React from 'react'
import { Link } from 'react-router-dom'

const Pillars = () => {

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='w-full bg-white h-fit mt-4 py-10 font-alata'>

    <div className='flex flex-col items-center justify-center'>
      <p className='font-semibold text-[13px] text-[#626262] uppercase font-montserrat '>Pillars</p>  
      <p className='font-normal  lg:text-[33px] md:text-[28px] text-[22px] text-[#A3364E] text-center '>Founders and Successors</p>
      <img src="/assets/design.svg" className='md:w-[400px] w-[200px] '/>
    </div>

    <div className='md:w-full w-[90%] mx-auto flex flex-row flex-wrap gap-x-20 gap-y-14 justify-center mt-14'>

      <Link to="/founders" onClick={handleClick}>
        <div>
           
               <div className=' w-[240px] h-[240px] rounded-full border-[8px] border-white hover:border-[#A3364E] duration-1000 transition-all drop-shadow-lg'>
                  <img src="/assets/avatar.png"/>
               </div>
         
            <p className='font-semibold md:text-[20px] text-[18px] text-[#A3364E] text-center mt-3 font-poppins'>Alpesh Kumarji</p>
            <p className='font-normal md:text-[20px] text-[18px] text-[#626262] text-center  font-poppins'>Founder</p>
        </div>
      </Link>

      <Link to="/founders" onClick={handleClick}>
        <div>
           
               <div className=' w-[240px] h-[240px] rounded-full border-[8px] border-white hover:border-[#A3364E] duration-1000 transition-all drop-shadow-lg'>
                  <img src="/assets/avatar.png"/>
               </div>
         
            <p className='font-semibold md:text-[20px] text-[18px] text-[#A3364E] text-center mt-3 font-poppins'>Alpesh Kumarji</p>
            <p className='font-normal md:text-[20px] text-[18px] text-[#626262] text-center  font-poppins'>Founder</p>
        </div>
      </Link>

      <Link to="/founders" onClick={handleClick}>
        <div>
           
               <div className=' w-[240px] h-[240px] rounded-full border-[8px] border-white hover:border-[#A3364E] duration-1000 transition-all drop-shadow-lg'>
                  <img src="/assets/avatar.png"/>
               </div>
         
            <p className='font-semibold md:text-[20px] text-[18px] text-[#A3364E] text-center mt-3 font-poppins'>Alpesh Kumarji</p>
            <p className='font-normal md:text-[20px] text-[18px] text-[#626262] text-center  font-poppins'>Founder</p>
        </div>
      </Link>

      <Link to="/founders" onClick={handleClick}>
        <div>
           
               <div className=' w-[240px] h-[240px] rounded-full border-[8px] border-white hover:border-[#A3364E] duration-1000 transition-all drop-shadow-lg'>
                  <img src="/assets/avatar.png"/>
               </div>
         
            <p className='font-semibold md:text-[20px] text-[18px] text-[#A3364E] text-center mt-3 font-poppins'>Alpesh Kumarji</p>
            <p className='font-normal md:text-[20px] text-[18px] text-[#626262] text-center  font-poppins'>Founder</p>
        </div>
      </Link>

        

    </div>
      
    </div>
  )
}

export default Pillars
