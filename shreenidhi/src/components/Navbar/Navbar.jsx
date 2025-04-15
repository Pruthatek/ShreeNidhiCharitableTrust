import { AlignJustify, Phone, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    const location = useLocation();
    const [active, setActive] = useState("");

    const links = [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "Academy",
          link: "/academy",
        },
        {
          name: "Activities",
          link: "/activities",
        },
        {
          name: "Achievements",
          link: "/achievements",
        },
        {
            name: "Gurukul",
            link: "/gurukul",
        },
        {
            name: "Publication",
            link: "/publication",
        },
        {
            name: "Photo Gallery",
            link: "/photo-gallery",
        },
        {
            name: "Contact Us",
            link: "/contact-us",
        },
      ];
  
      
      useEffect(() => {
        switch (location.pathname) {
          case "/":
            setActive("Home");
            break;
          case "/academy":
            setActive("Academy");
            break;
          case "/activities":
            setActive("Activities");
            break;
          case "/achievements":
            setActive("Achievements");
            break;  
          case "/gurukul":
            setActive("Gurukul");
            break;  
            case "/publication":
            setActive("Publication");
            break;  
            case "/photo-gallery":
            setActive("Photo Gallery");
            break;  
            case "/contact-us":
            setActive("Contact Us");
            break;        
          default:
            setActive("");
        }
      }, [location.pathname]);


      const [openNav, setOpenNav] = useState(false);
      const [closing, setClosing] = useState(false);
      
      const handleClose = () => {
        setClosing(true);
        setTimeout(() => {
          setOpenNav(false);
          setClosing(false);
        }, 400); // duration should match animation
      };
      
      const handleClick = () => {
        window.scrollTo(0, 0);
      };
  return (

    <>
    <div className="lg:fixed lg:block hidden top-0 left-0 w-full z-50 font-poppins">

        <div className="relative">
          <Link to="/" onClick={handleClick}>         
          <div className="absolute z-50 w-[190px] h-[186px] bg-white shadow-lg left-14 rounded-b-[20px] flex justify-center items-center">
            <img src="/assets/Logo.svg" />
          </div>
          </Link>
        </div>

        <div className='w-full h-[60px] bg-white flex gap-x-2 justify-end items-center px-10'>
            <Phone color='#A3364E' size={22} />
            {/* <p className='font-normal text-[16px] text-[#626262] '>+91 98250 43962 | </p> */}
            <a href='tel:+91 98250 43962' className='font-normal text-[16px] text-[#626262]'>+91 98250 43962 </a> 
            <p className='font-normal text-[16px] text-[#626262]'>|</p>
            <a href='tel:+91 76780 27829' className='font-normal text-[16px] text-[#626262]'>+91 76780 27829</a>                 
        </div>

        <div className='w-full h-[60px] bg-[#A3364E] flex gap-x-14 justify-end items-center px-10'>
        {links.map((link,index)=>{
            return (
              <Link to={link.link} onClick={handleClick}>
                <div className={`${active === link.name ? "border-[2px] border-t-transparent border-l-transparent border-r-transparent border-b-white" : ""}  py-1`}>
                <p className={`xl:text-[16px] lg:text-[14px] font-normal text-white whitespace-nowrap    `}>{link.name}</p>
                </div>
                 
              </Link>
            )
          })}
        </div>
      
    </div>

    <div className='fixed lg:hidden bg-white shadow-md h-[90px] px-5 top-0 left-0 w-screen flex justify-between items-center z-50 font-poppins'>
       
    <Link to="/" onClick={handleClick}>
       <img src="/assets/Logo.svg" className='w-[65px] h-[65px] '/>
   </Link>
       <div className='flex gap-x-5 items-center '>

        <Link to="/achievements" onClick={handleClick}>
        <p className=' font-normal text-[14px]  font-poppins text-[#101010] ' >Achievements</p>
        </Link>

        <Link to="/contact-us" onClick={handleClick}>
        <p className=' font-normal text-[14px]  font-poppins text-[#101010] ' >Contact</p>
        </Link>

        <AlignJustify size={20} color='#33363F' onClick={()=>setOpenNav(true)}/>

       </div>
    </div>

    {openNav && (
  <div className="fixed top-0 left-0 w-screen h-screen  z-50">
    <div
      className={`fixed top-0 right-0 h-full w-[100%]  bg-white shadow-lg px-6 py-10 z-50 ${
        closing ? "animate-slide-out" : "animate-slide-in"
      }`}
    >
      <div className="flex justify-end">
        <button onClick={handleClose} className="text-[#333] text-xl ">
          <X/>
        </button>
      </div>
      <div className="flex flex-col items-center gap-6 mt-6">
        {links.map((link) => (
          <Link
            to={link.link}
            key={link.name}
            onClick={handleClose}
            className={`text-[16px] font-medium text-start font-poppins ${
              active === link.name ? "text-[#A3364E]  font-semibold" : "text-[#333]"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  </div>
)}


    </>
  )
}

export default Navbar
