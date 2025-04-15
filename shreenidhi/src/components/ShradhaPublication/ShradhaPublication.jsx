import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectFade, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Donation from '../Home/Donation';

const ShradhaPublication = () => {

    const books = [
        {
           img: "/assets/book1.svg" 
        },
        {
            img: "/assets/book2.svg" 
        },
        {
            img: "/assets/book3.svg" 
        },
        {
            img: "/assets/book4.svg" 
        },
        {
            img: "/assets/book5.svg" 
        },
        {
            img: "/assets/book6.svg" 
        },
        {
            img: "/assets/book7.svg" 
        },
        {
            img: "/assets/book8.svg" 
        },
        {
            img: "/assets/book9.svg" 
        },
        {
            img: "/assets/book10.svg" 
        },
        {
            img: "/assets/book11.svg" 
        },
        {
            img: "/assets/book12.svg" 
        },
        {
            img: "/assets/book13.svg" 
        },
        {
            img: "/assets/book14.svg" 
        },
        {
            img: "/assets/book15.svg" 
        },
    ]
  return (
    <div className='bg-[#F9F9F9] py-5'>
    <div className='w-full bg-white h-fit lg:mt-[110px] mt-[85px] mb-4 py-10 font-alata '>

    <div className='flex flex-col items-center justify-center'>
      <p className='font-semibold text-[13px] text-[#626262] uppercase font-montserrat'>Publication</p>  
      <p className='font-normal  lg:text-[33px] md:text-[28px] text-[22px] text-[#A3364E] text-center '>Shradha Publication</p>
      <img src="/assets/design.svg" className='md:w-[300px] w-[200px] '/>
    </div>

    <div className='md:w-full w-[90%] mx-auto flex flex-row flex-wrap gap-4 justify-center mt-14 px-5 lg:px-10'>
       
      {books.map((book, index)=>{
        return (
            <img src={book.img}/>
        )
      })}
    </div>
      
    </div>

    <Donation/>
    </div>
  )
}

export default ShradhaPublication
