import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { motion, AnimatePresence } from 'framer-motion';



const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const names = [
      "Madhuri Dialysis & Research Centre",
      "Shree Nidhi Pragyan Academy",
      "Nachiketa Vidya Sansthan Gurukul"
    ];
  
    return (
      <div className='w-full bg-white lg:mt-5 mt-[85px]'>
        <div className='w-full lg:h-[670px] h-fit flex lg:flex-row flex-col justify-center items-center'>
          <div className='TEXTCONTENT lg:w-[60%] w-[90%]  flex flex-col justify-center lg:px-10'>
            <p className='font-bold md:text-[30px] text-[24px] text-[#A3364E] uppercase font-montserrat'>
              Shree Nidhi Charitable Trust
            </p>
            <p className='font-normal md:text-[16px] text-[14px] text-[#626262] lg:w-[80%] md:w-[90%] leading-8 mt-4 font-poppins'>
              Working since 2021 with the determination to realize the Vedic goal of "Sarvesantuniramaya" with the aim of increasing morality in human beings, awakening love for the nation, gaining true understanding of religion, increasing self-esteem and cultivating a sense of respect for others.
            </p>
  
            <div className='NAMES relative lg:mt-14 mt-10 min-h-[50px]'>
              <div className='bg-[#A3364E] w-[50px] rounded-r-[4px] h-[3px] absolute -top-2'></div>
              <AnimatePresence mode='wait'>
                <motion.p
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className='uppercase font-extrabold md:text-[30px] text-[24px] text-[#A3364E]'
                >
                  {names[activeIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
  
          <Swiper
            modules={[Pagination, A11y, EffectFade, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className='mySwiper lg:w-[40%] w-[90%] lg:mt-14'
          >
            <SwiperSlide>
              <div className='IMGCONTENT w-full flex justify-center items-center'>               
                  <img src="/assets/madhuriImg.svg" className=' ' />             
              </div>
            </SwiperSlide>
  
            <SwiperSlide>
              <div className='IMGCONTENT w-full flex justify-center items-center'>               
                  <img src="/assets/yogasanImg.svg" className=' ' />             
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='IMGCONTENT w-full flex justify-center items-center'>               
                  <img src="/assets/gurukulImg.svg" className=' ' />             
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
  };
  
  export default Hero;
  
