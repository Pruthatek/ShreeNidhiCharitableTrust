import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectFade, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Donation from '../Home/Donation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Plus, PlusCircle, X } from 'lucide-react';

const PhotoGallery = () => {
  const useIsDesktop = () => {
    const [isDesktop, setIsDesktop] = useState(false)
  
    useEffect(() => {
      const checkScreenSize = () => {
        setIsDesktop(window.innerWidth >= 768)
      }
      checkScreenSize()
      window.addEventListener('resize', checkScreenSize)
      return () => window.removeEventListener('resize', checkScreenSize)
    }, [])
  
    return isDesktop
  }

  const isDesktop = useIsDesktop()
  const [activeIndex, setActiveIndex] = useState(null) 

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (photo) => {
    setSelectedImage({ ...photo }); // ensure it's a new object
  };
  

  const closeModal = () => {
    setSelectedImage(null);
    setActiveIndex(null); // reset overlay state
  };
  
    useEffect(() => {
            AOS.init({
              duration: 1000, // Animation duration in ms
              once: true, // Only animate once
            });
          }, []);

    const photos = [
        {
            img: "/assets/activities.svg",
            text: "Activities"
        },
        {
            img: "/assets/academy.svg",
            text: "Academy"
        },
        {
            img: "/assets/gurukul2.svg",
            text: "Gurukul"
        },
        {
            img: "/assets/achievements.svg",
            text: "Achievements"
        }
    ]      

    

    const handleImageClick = (index, photo) => {
      if (isDesktop) {
        // Desktop: only show overlay (hover handles that)
        setActiveIndex(null);
      } else {
        // Mobile/tablet: open modal directly
        setSelectedImage({ ...photo }); // use object to avoid stale render
      }
    };
    

  return (
    <div className='bg-[#F9F9F9] py-5'>
    <div className='w-full bg-white h-fit lg:mt-[110px] mt-[85px] mb-4 py-10 font-alata '>

    <div className='flex flex-col items-center justify-center'>
      <p className='font-semibold text-[13px] text-[#626262] uppercase font-montserrat'>Gallery</p>  
      <p className='font-normal  lg:text-[33px] md:text-[28px] text-[22px] text-[#A3364E] text-center '>Photo Gallery</p>
      <img src="/assets/design.svg" className='md:w-[300px] w-[200px] '/>
    </div>

    <div className='w-full flex flex-row flex-wrap justify-center items-center  gap-x-6 gap-y-10 mt-10  lg:px-10 px-5 '>

    {photos.map((photo, index) => (
          <div key={index}>
            {/* Image wrapper with hover overlay */}
            <div className="relative group" onClick={() => handleImageClick(index, photo)}>

              <img src={photo.img} alt=""
                className="md:w-[431px] md:h-[275px] w-full h-[230px]   "/>
              {/* Overlay on hover */}
              <div
               className={`
                absolute inset-0 rounded-[10px] 
                bg-[#A3364E33] flex items-center justify-center 
                opacity-0 transition duration-300 
                md:group-hover:opacity-100
                ${activeIndex === index && !isDesktop ? 'opacity-100' : ''}
              `}>
                {/* Plus icon */}
                <button
  onClick={(e) => {
    e.stopPropagation();
    openModal(photo);
  }}
  className="text-[#A3364E] cursor-pointer flex justify-center items-center text-4xl w-[50px] h-[50px] rounded-full bg-white"
>
  <Plus />
</button>

              
              </div>
            </div>

            <p className="text-center text-[22px] font-normal text-[#A3364E] font-alata mt-2">
              {photo.text}
            </p>
          </div>
        ))}

{selectedImage && (
          <div className='w-full fixed inset-0 bg-black/80 flex items-center justify-center z-50'>
            <div className='w-full relative'>
              <button
                className='absolute -top-12 right-10 cursor-pointer text-white text-2xl'
                onClick={closeModal}
              >
                <X />
              </button>
              <img
                src={selectedImage.img}
                alt='Enlarged'
                className='md:w-[100%] w-[90%] h-[500px] object-contain rounded-xl mx-auto'
              />
            </div>
          </div>
        )}
    </div>

    
      
    </div>

    <Donation/>
    </div>
  )
}

export default PhotoGallery

