import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Nachiketa = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in ms
          once: true, // Only animate once
        });
      }, []);


      const handleClick = () => {
        window.scrollTo(0, 0);
      };
  return (
    <div className='w-full bg-white h-fit mt-4 py-10 '>

        <div className='flex flex-col items-center justify-center'>
          <p data-aos="fade-down" className='font-semibold text-[13px] text-[#626262] uppercase font-montserrat'>Gurukul</p>  
          <p className='font-normal  lg:text-[33px] md:text-[28px] text-[22px] text-[#A3364E] text-center font-alata'>Nachiketa Vidya Sansthan Gurukul</p>
          <img src="/assets/design.svg" className='md:w-[400px] w-[200px] '/>
        </div>


        <div className='w-full flex lg:flex-row flex-col gap-y-10 items-center justify-center mt-6 lg:px-10 font-poppins'>
            <div className='lg:w-[50%] w-[90%]  '>

               <div className='flex gap-x-4 '>
                    <div className='w-3 h-3 bg-[#A3364E] rotate-45 mt-1.5'></div>
                    <p className='text-[#626262] font-normal text-[16px] w-[90%]'>Nurture each student to reach his or her fullest potential in student to  potential in Nurture each student to reach his or her fullest potential  Nurture each  in Nurture each student to reach his or her fullest Nurture each student to reach his. </p>
               </div>

               <div className='flex gap-x-4 mt-3'>
                    <div className='w-3 h-3 bg-[#A3364E] rotate-45 mt-1.5'></div>
                    <p className='text-[#626262] font-normal text-[16px] w-[90%]'>Nurture each student to reach his or her fullest potential in student to  potential in Nurture each student to reach his or her fullest potential  Nurture each  in Nurture each student to reach his or her fullest Nurture each student to reach his. </p>
               </div>

               <div className='flex gap-x-4 mt-3'>
                    <div className='w-3 h-3 bg-[#A3364E] rotate-45 mt-1.5'></div>
                    <p className='text-[#626262] font-normal text-[16px] w-[90%]'>Nurture each student to reach his or her fullest potential in student to  potential in Nurture each student to reach his or her fullest potential  Nurture each  in Nurture each student to reach his or her fullest Nurture each student to reach his. </p>
               </div>

              <Link to="/gurukul" onClick={handleClick}>
              <div className='overflow-hidden'>

              
<p data-aos="fade-right" data-aos-delay="300" className='font-semibold text-[16px] text-[#A3364E] ml-6 mt-3 '>Know More</p>
</div>
               </Link>
            </div>

            <div className='lg:w-[50%] w-[90%] flex justify-center overflow-hidden '>

               <img src="/assets/gurukul.svg" className='IMG ' data-aos="fade-down-left"/>

            </div>

        </div>
      
    </div>
  )
}

export default Nachiketa
