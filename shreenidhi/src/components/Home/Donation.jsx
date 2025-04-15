import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const Donation = () => {
     useEffect(() => {
            AOS.init({
              duration: 1000, // Animation duration in ms
              once: true, // Only animate once
            });
          }, []);

          const fadeUpLeft = {
            hidden: { opacity: 0, x: 50, y: 50 },
            visible: { opacity: 1, x: 0, y: 0 },
          };
          
          const zoomIn = {
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          };
  return (
    <div className='w-full bg-[#A3364E0A] flex lg:flex-row flex-col gap-y-5 md:px-10 px-5 py-10 h-fit lg:items-center justify-center lg:justify-start'>
       <div className='lg:w-[50%] w-[90%] mt-7 md:mt-0 '>
       <motion.p
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          className='font-extrabold lg:text-[30px] md:text-[26px] text-[24px] font-montserrat text-[#A3364E]'
        >
          MAKING A <br /> MEANINGFUL DIFFERENCE TOGETHER
        </motion.p>
         
        <motion.button
          variants={fadeUpLeft}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, delay: 0.2 }}
          className='w-[142px] h-[40px] rounded-[58px] bg-[#A3364E] text-white font-medium text-[16px] font-poppins lg:mt-10 mt-6'
        >
          Donate Now
        </motion.button>
       </div>

       <motion.div
        className='lg:w-[50%] w-[90%]'
        variants={fadeUpLeft}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p className='font-normal text-[16px] font-poppins text-[#626262] leading-8'>
          Working since 2021 with the determination to realize the Vedic goal of "Sarvesantuniramaya" with the aim of increasing morality in human beings, awakening love for the nation, gaining true understanding of religion, increasing self-esteem and cultivating a sense of respect for others...
        </p>
      </motion.div>
    </div>
  )
}

export default Donation
