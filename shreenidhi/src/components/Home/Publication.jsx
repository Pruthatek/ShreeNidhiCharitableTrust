import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectFade, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const Publication = () => {

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

    const handleClick = () => {
        window.scrollTo(0, 0);
      };
  return (
    <Link to="/publication" onClick={handleClick} className='w-full '>
    
    <div className='w-full bg-white h-fit mt-4 py-10 font-alata '>

    <div className='flex flex-col items-center justify-center'>
      <p className='font-semibold text-[13px] text-[#626262] uppercase font-montserrat'>Publication</p>  
      <p className='font-normal  lg:text-[33px] md:text-[28px] text-[22px] text-[#A3364E] text-center '>Shradha Publication</p>
      <img src="/assets/design.svg" className='md:w-[300px] w-[200px] '/>
    </div>

    <div className='md:w-full w-[90%] mx-auto flex flex-row flex-wrap gap-x-4 gap-y-8 justify-center mt-14  px-10'>

           <Swiper
            modules={[Pagination, A11y, EffectFade, Autoplay, EffectCoverflow]}
            effect={'coverflow'}
            coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 70,
                modifier: 1,
                slideShadows: true,
              }}
            loop={true}
            breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 7,
                  spaceBetween: 10,
                },
              }}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            // pagination={{ clickable: true }}
           
            className='mySwiper '
          >
            {books.map((book, index)=>{
            return (
            <SwiperSlide>
            
                <img src={book.img}/>
            
            </SwiperSlide>
            )
        })}
       
        </Swiper>

       

    </div>
      
    </div>
    </Link>
  )
}

export default Publication
