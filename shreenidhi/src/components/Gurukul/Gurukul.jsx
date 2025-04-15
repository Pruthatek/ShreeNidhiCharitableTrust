import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Donation from '../Home/Donation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectFade, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Gurukul = () => {
     useEffect(() => {
            AOS.init({
              duration: 1000, // Animation duration in ms
              once: true, // Only animate once
            });
          }, []);

  return (
    <div className='bg-[#F9F9F9] py-5'>
     <div className='w-full bg-white h-fit lg:mt-[110px] mt-[85px] mb-[10px] py-10 '>

     <div className='flex flex-col items-center justify-center'>
          <p data-aos="fade-down" className='font-semibold text-[13px] text-[#626262] uppercase font-montserrat'>Gurukul</p>  
          <p className='font-normal  lg:text-[33px] md:text-[28px] text-[22px] text-[#A3364E] text-center font-alata'>Nachiketa Vidya Sansthan Gurukul</p>
          <img src="/assets/design.svg" className='md:w-[400px] w-[200px] '/>
        </div>


        <div className='w-full flex flex-col gap-y-10 items-center justify-center mt-6  font-poppins'>
         <div className='w-full flex justify-center '>

         <Swiper
            modules={[Pagination, A11y, EffectFade, Autoplay, EffectCoverflow]}
            loop={true}
            slidesPerView={1}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
           
            className='mySwiper w-[90%]'
          >
            <SwiperSlide>      
              <div className='w-full lg:h-[540px] h-[250px] rounded-[10px] '>
               <img src="/assets/gurukulSlide.svg" className='w-full h-full object-cover rounded-[10px] '/>  
              </div>     
                         
            </SwiperSlide>

            <SwiperSlide>           
            <div className='w-full lg:h-[540px] h-[250px] rounded-[10px] '>
               <img src="/assets/gurukulSlide.svg" className='w-full h-full object-cover rounded-[10px] '/>  
              </div>             
            </SwiperSlide>

            <SwiperSlide>           
            <div className='w-full lg:h-[540px] h-[250px] rounded-[10px] '>
               <img src="/assets/gurukulSlide.svg" className='w-full h-full object-cover rounded-[10px] '/>  
              </div>   
            </SwiperSlide>

            <SwiperSlide>           
            <div className='w-full lg:h-[540px] h-[250px] rounded-[10px] '>
               <img src="/assets/gurukulSlide.svg" className='w-full h-full object-cover rounded-[10px] '/>  
              </div>            
            </SwiperSlide>
        </Swiper>

         </div>
           
            <div className='w-[90%] '>
                <div className='w-full flex md:flex-row flex-col justify-between '>
                <p className='font-normal text-[20px] text-[#626262] font-alata'>Managed by <b className='font-normal text-[#A3364E] '>Sanskrutik Samutkarsh Trust</b></p>

                <p className='font-normal text-[20px] text-[#626262] font-alata'>District- <b className='font-normal text-[#A3364E] '>Sambarkantha</b></p>
                </div>
                

               <div className='flex gap-x-4 mt-8'>
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

            </div>
        </div>
      
    </div>

    <Donation/>
    </div>
  )
}

export default Gurukul
