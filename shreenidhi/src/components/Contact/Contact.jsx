import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

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
      <p className='font-semibold text-[13px] text-[#626262] uppercase font-montserrat'>Connect</p>  
      <p className='font-normal  lg:text-[33px] md:text-[28px] text-[22px] text-[#A3364E] text-center '>Get In Touch</p>
      <img src="/assets/design.svg" className=' w-[200px] '/>
    </div>

    <p className='font-normal text-[16px] font-poppins text-[#626262] w-[90%] mx-auto mt-10 '>Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest Nurture each student. Nurture each student to reach his or her fullest potential in each student to reach his or her fullest potential in Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest Nurture each student, her fullest potential in Nurture each.</p>


    <div className='w-[90%] flex lg:flex-row flex-col rounded-[26px]  mx-auto mt-10 bg-white drop-shadow-2xl '>

        <div className='lg:w-[50%] w-full bg-[#A3364E1A] rounded-[26px] py-5 px-5 md:px-8'>

            <p className='font-semibold lg:text-[36px] md:text-[32px] text-[26px] font-poppins text-[#A3364E] '>Get In Touch</p>

            <div className='w-[100%] h-[420px] bg-white rounded-[14px] mt-8 p-2'>
            <iframe className='w-full h-full rounded-[14px] ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.1980785574456!2d72.56377327509166!3d23.016498279178023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84ffe7f40a95%3A0xcf8c7ae9d4dd7d25!2sSpan%20Trade%20Center%2C%20Pritam%20Nagar%2C%20Paldi%2C%20Ahmedabad%2C%20Gujarat%20380007!5e0!3m2!1sen!2sin!4v1744459252248!5m2!1sen!2sin" ></iframe>
            </div>

        </div>

        <div className='lg:w-[50%] w-full bg-white rounded-[26px] py-5 px-5 md:px-8'>

            <p className='font-semibold lg:text-[36px] md:text-[32px] text-[26px] font-poppins text-[#626262] '>Let's Connect</p>

            <div className='w-[100%] mt-8 p-2 flex flex-col gap-y-4'>

            <input placeholder='Name' type='text'
            className='w-full h-[45px] bg-[#EAEAEB80] px-4 outline-none border border-transparent focus:border-[#A3364E] focus:ring-1 focus:ring-[#A3364E] transition-all duration-300 ease-in-out rounded-[10px]'/>    

            <input placeholder='Email' type='email'
            className='w-full h-[45px] bg-[#EAEAEB80] px-4 outline-none border border-transparent focus:border-[#A3364E] focus:ring-1 focus:ring-[#A3364E] transition-all duration-300 ease-in-out rounded-[10px]'/>           

            <input placeholder='Phone' 
            className='w-full h-[45px] bg-[#EAEAEB80] px-4 outline-none border border-transparent focus:border-[#A3364E] focus:ring-1 focus:ring-[#A3364E] transition-all duration-300 ease-in-out rounded-[10px]'/>                  
            
            <textarea placeholder='Message'
            className='w-full h-[180px] bg-[#EAEAEB80] p-4 outline-none border border-transparent focus:border-[#A3364E] focus:ring-1 focus:ring-[#A3364E] transition-all duration-300 ease-in-out rounded-[10px]'/>           
            
            <div className='w-full flex md:flex-row flex-col gap-3 '>
               <button className='md:w-[50%] h-[52px] rounded-[14px] border border-[#626262] text-[#626262] font-semibold text-[16px] font-poppins '>Cancel</button>
               <button className='md:w-[50%] h-[52px] rounded-[14px] text-white bg-[#A3364E] font-semibold text-[16px] font-poppins '>Submit</button>
            </div>
            </div>

        </div>
    
    </div>    
    

    
      
    </div>

    
    </div>
  )
}

export default Contact
