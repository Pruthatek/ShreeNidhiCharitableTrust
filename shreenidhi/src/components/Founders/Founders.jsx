import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectFade, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Donation from '../Home/Donation';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Founders = () => {

    useEffect(() => {
            AOS.init({
              duration: 1000, // Animation duration in ms
              once: true, // Only animate once
            });
          }, []);

  return (
    <div className='bg-[#F9F9F9] py-5'>
    <div className='w-full bg-white h-fit lg:mt-[110px] mt-[85px] mb-4 py-10 font-alata '>

    <div className='flex flex-col items-center justify-center'>
      <p className='font-semibold text-[13px] text-[#626262] uppercase font-montserrat'>Pillars</p>  
      <p className='font-normal  lg:text-[33px] md:text-[28px] text-[22px] text-[#A3364E] text-center '>Founders and Successors</p>
      <img src="/assets/design.svg" className='md:w-[300px] w-[200px] '/>
    </div>

    <div className='w-full flex md:flex-row flex-col justify-center items-center  gap-6 mt-10 lg:px-20 px-10 '>

       <div className='md:w-[50%] w-full flex justify-center md:justify-start'>
        <div data-aos="fade-down-right" >
          <img src="/assets/avatar.png" className='lg:w-[388px] lg:h-[388px] md:w-[240px] md:h-[240px] w-[200px] h-[200px] rounded-full border-[8px] border-[#A3364E] '/>
           
        </div>
      </div>

        <div className='md:w-[50%] w-full '>
            <p className='font-semibold md:text-[24px] text-[20px] font-poppins text-[#A3364E] '>Message from the Founder</p>
            <p className='font-normal text-[15px] font-poppins text-[#626262] mt-4'>Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest Nurture each.</p>
            <p className='font-normal text-[15px] font-poppins text-[#626262] mt-4'>Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest Nurture each.</p>
            <p data-aos="fade-left" className='font-semibold text-[15px] font-poppins text-[#A3364E] text-end mt-4'>-Alpesh Kumarji</p>
        </div>



    </div>

    
      
    </div>

    <Donation/>
    </div>
  )
}

export default Founders
