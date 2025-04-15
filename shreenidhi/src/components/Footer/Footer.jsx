import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const handleClick = () => {
        window.scrollTo(0, 0);
      };
  return (
    <>
    <div className='w-full bg-[#A3364E] py-14 md:px-10 px-5 '>

        <div className='w-full hidden xl:flex justify-between items-center '>

            <div className='w-[50%]  '>

                <div className='w-[212px] h-[208px] bg-white drop-shadow-xl rounded-[20px] flex justify-center items-center '>
                    <img src="/assets/Logo.svg"/>
                </div>

            </div>

            <div className='w-[50%] '>
                <p className='font-semibold font-poppins text-[20px] text-white '>Quick Links</p>

              <div className='flex gap-x-20 '>

                <div>
                <Link to="/" onClick={handleClick}>
                  <p className='font-normal text-[18px] font-poppins text-[#DEDEDEDE] mt-6 '>Home</p>
                </Link>

                 <Link to="/academy" onClick={handleClick}>
                  <p className='font-normal text-[18px] font-poppins text-[#DEDEDEDE] mt-4 '>Academy</p>
                </Link>

                 <Link to="/achievements" onClick={handleClick}>
                  <p className='font-normal text-[18px] font-poppins text-[#DEDEDEDE] mt-6 '>Achievements</p>
                </Link>

                 <Link to="/activities" onClick={handleClick}>
                  <p className='font-normal text-[18px] font-poppins text-[#DEDEDEDE] mt-6 '>Activities</p>
                </Link>

                 <Link to="/gurukul" onClick={handleClick}>
                  <p className='font-normal text-[18px] font-poppins text-[#DEDEDEDE] mt-6 '>Gurukul</p>
                </Link>
                </div>

                <div>
                 <Link to="/publication" onClick={handleClick}>
                  <p className='font-normal text-[18px] font-poppins text-[#DEDEDEDE] mt-6 '>Publication</p>
                </Link>

                 <Link to="/photo-gallery" onClick={handleClick}>
                  <p className='font-normal text-[18px] font-poppins text-[#DEDEDEDE] mt-6 '>Photo Gallery</p>
                </Link>

                 <Link to="/contact-us" onClick={handleClick}>
                  <p className='font-normal text-[18px] font-poppins text-[#DEDEDEDE] mt-6 '>Contact Us</p>
                </Link>
                </div>

              </div>
            </div>

            <div className='w-[50%] '>

                <div>
                    <div className='flex items-center gap-x-3 '>
                       <img src="/assets/Location.svg"/>
                       <p className='font-bold text-[20px] font-montserrat text-white'>Location</p>                      
                    </div>

                    <p className='font-semibold text-[16px] text-[#DEDEDE] font-poppins leading-8 mt-3 ml-8 '>312, Span Trade Center,Opposite Kochrab Aashram, Paladi, Ahmedabad-380006</p>
                </div>

                <div className='mt-10 '>
                    <div className='flex items-center gap-x-3 '>
                       <img src="/assets/User.svg"/>
                       <p className='font-bold text-[20px] font-montserrat text-white'>Contact</p>                      
                    </div>

                    <div className='flex items-center gap-x-3 ml-8 mt-4'>
                       <img src="/assets/Calling.svg"/>
                       <a href='tel:+91 98250 43962' className='font-medium text-[16px] font-poppins text-white'>+91 98250 43962</a>                  
                    </div>

                    <div className='flex items-center gap-x-3 ml-8 mt-2'>
                       <img src="/assets/Calling.svg"/>
                       <a href='tel:+91 76780 27829' className='font-medium text-[16px] font-poppins text-white'>+91 76780 27829</a>                 
                    </div>

                    <div className='flex items-center gap-x-3 ml-8 mt-2'>
                       <img src="/assets/Mail.svg"/>
                       <a href='mailto:shrinidhicharitabletrust@gmail.com' className='font-medium text-[16px] font-poppins text-white'>shrinidhicharitabletrust@gmail.com</a>                      
                    </div>

                   
                </div>

            </div>

        </div>


        <div className='w-full hidden xl:hidden md:flex flex-col justify-center items-center '>
            <div className='flex w-full '>

        <div className='w-[50%]  '>

<div className='w-[212px] h-[208px] bg-white drop-shadow-xl rounded-[20px] flex justify-center items-center '>
    <img src="/assets/Logo.svg"/>
</div>

        </div>

<div className='w-[50%] '>
<p className='font-semibold font-poppins text-[20px] text-white '>Quick Links</p>

<div className='flex gap-x-20 '>

<div>
 <Link to="/" onClick={handleClick}>
  <p className='font-normal text-[18px] font-poppins text-[#DEDEDEDE] mt-6 '>Home</p>
</Link>

 <Link to="/academy" onClick={handleClick}>
  <p className='font-normal text-[18px] font-poppins text-[#DEDEDEDE] mt-4 '>Academy</p>
</Link>

 <Link to="/achievements" onClick={handleClick}>
  <p className='font-normal text-[18px] font-poppins text-[#DEDEDEDE] mt-6 '>Achievements</p>
</Link>

 <Link to="/activities" onClick={handleClick}>
  <p className='font-normal text-[18px] font-poppins text-[#DEDEDEDE] mt-6 '>Activities</p>
</Link>

 <Link to="/gurukul" onClick={handleClick}>
  <p className='font-normal text-[18px] font-poppins text-[#DEDEDEDE] mt-6 '>Gurukul</p>
</Link>
</div>

<div>
 <Link to="/publication" onClick={handleClick}>
  <p className='font-normal text-[18px] font-poppins text-[#DEDEDEDE] mt-6 '>Publication</p>
</Link>

 <Link to="/photo-gallery" onClick={handleClick}>
  <p className='font-normal text-[18px] font-poppins text-[#DEDEDEDE] mt-6 '>Photo Gallery</p>
</Link>

 <Link to="/contact-us" onClick={handleClick}>
  <p className='font-normal text-[18px] font-poppins text-[#DEDEDEDE] mt-6 '>Contact Us</p>
</Link>
</div>

</div>
</div>

</div>

<div className='w-[100%] flex  mt-20'>

<div>
    <div className='flex items-center gap-x-3 '>
       <img src="/assets/Location.svg"/>
       <p className='font-bold text-[20px] font-montserrat text-white'>Location</p>                      
    </div>

    <p className='font-semibold text-[16px] text-[#DEDEDE] font-poppins leading-8 mt-3 ml-8 '>312, Span Trade Center,Opposite Kochrab Aashram, Paladi, Ahmedabad-380006</p>
</div>

<div className=' '>
    <div className='flex items-center gap-x-3 '>
       <img src="/assets/User.svg"/>
       <p className='font-bold text-[20px] font-montserrat text-white'>Contact</p>                      
    </div>

    <div className='flex items-center gap-x-3 ml-8 mt-4'>
       <img src="/assets/Calling.svg"/>
       <a href='tel:+91 98250 43962' className='font-medium text-[16px] font-poppins text-white'>+91 98250 43962</a>                      
    </div>

    <div className='flex items-center gap-x-3 ml-8 mt-2'>
       <img src="/assets/Calling.svg"/>
       <a href='tel:+91 76780 27829' className='font-medium text-[16px] font-poppins text-white'>+91 76780 27829</a>                      
    </div>

    <div className='flex items-center gap-x-3 ml-8 mt-2'>
       <img src="/assets/Mail.svg"/>
       <a href='mailto:shrinidhicharitabletrust@gmail.com' className='font-medium text-[16px] font-poppins text-white'>shrinidhicharitabletrust@gmail.com</a>                      
    </div>

   
</div>

</div>

        </div>


        <div className='w-full flex flex-col md:hidden justify-between items-center '>



    <div className='w-[212px] h-[208px] bg-white drop-shadow-xl rounded-[20px] flex justify-center items-center '>
        <img src="/assets/Logo.svg"/>
    </div>




    <p className='font-semibold font-poppins text-[20px] text-white mt-8'>Quick Links</p>

  <div className='flex gap-x-20 '>

    <div>
     <Link to="/" onClick={handleClick}>
      <p className='font-normal text-[18px] font-poppins text-[#DEDEDEDE] mt-6 '>Home</p>
    </Link>

     <Link to="/academy" onClick={handleClick}>
      <p className='font-normal text-[18px] font-poppins text-[#DEDEDEDE] mt-4 '>Academy</p>
    </Link>

     <Link to="/achievements" onClick={handleClick}>
      <p className='font-normal text-[18px] font-poppins text-[#DEDEDEDE] mt-6 '>Achievements</p>
    </Link>

     <Link to="/activities" onClick={handleClick}>
      <p className='font-normal text-[18px] font-poppins text-[#DEDEDEDE] mt-6 '>Activities</p>
    </Link>

     <Link to="/gurukul" onClick={handleClick}>
      <p className='font-normal text-[18px] font-poppins text-[#DEDEDEDE] mt-6 '>Gurukul</p>
    </Link>
    </div>

    <div>
     <Link to="/publication" onClick={handleClick}>
      <p className='font-normal text-[18px] font-poppins text-[#DEDEDEDE] mt-6 '>Publication</p>
    </Link>

     <Link to="/photo-gallery" onClick={handleClick}>
      <p className='font-normal text-[18px] font-poppins text-[#DEDEDEDE] mt-6 '>Photo Gallery</p>
    </Link>

     <Link to="/contact-us" onClick={handleClick}>
      <p className='font-normal text-[18px] font-poppins text-[#DEDEDEDE] mt-6 '>Contact Us</p>
    </Link>
    </div>

  </div>

    <div className='mt-10 '>
        <div className='flex items-center gap-x-3 '>
           <img src="/assets/Location.svg"/>
           <p className='font-bold text-[20px] font-montserrat text-white'>Location</p>                      
        </div>

        <p className='font-semibold text-[15px] text-[#DEDEDE] font-poppins leading-8 mt-3 ml-8 '>312, Span Trade Center,Opposite Kochrab Aashram, Paladi, Ahmedabad-380006</p>
    </div>

    <div className='mt-10 '>
        <div className='flex items-center gap-x-3 '>
           <img src="/assets/User.svg"/>
           <p className='font-bold text-[20px] font-montserrat text-white'>Contact</p>                      
        </div>

        <div className='flex items-center gap-x-3 ml-8 mt-4'>
           <img src="/assets/Calling.svg"/>
           <p className='font-medium text-[15px] font-poppins text-white'>+91 98250 43962</p>                      
        </div>

        <div className='flex items-center gap-x-3 ml-8 mt-2'>
           <img src="/assets/Calling.svg"/>
           <p className='font-medium text-[15px] font-poppins text-white'>+91 76780 27829</p>                      
        </div>

        <div className='flex items-center gap-x-3 ml-8 mt-2'>
           <img src="/assets/Mail.svg"/>
           <p className='font-medium text-[15px] font-poppins text-white'>shrinidhicharitabletrust@gmail.com</p>                      
        </div>

       
    </div>



</div>
      
    </div>

    <div className='w-full xl:h-[60px] py-4 bg-white flex xl:flex-row flex-col gap-y-4 justify-between items-center px-5 xl:px-14'>

        <p className='font-normal text-[16px] font-poppins text-[#1C1C1C] '>© {currentYear} All Rights Reserved SHREE NIDHI CHARITABLE TRUST</p>
        <p className='font-normal text-[16px] font-poppins text-[#1C1C1C] '>Designed and Developed by PRUTHATEK</p>
        <p className='font-normal text-[16px] font-poppins text-[#1C1C1C] '>Privacy Policy | Copyright | Terms of Use</p>

    </div>
    </>
  )
}

export default Footer
