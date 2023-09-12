import React, { useState, useRef, useEffect } from "react";
import { FaTimes, FaFacebookF } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoInstagramAlt, BiLogoLinkedin } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  let menuRef = useRef()
  let location = useLocation();

  useEffect(() => {
    function handleDocumentClick(event) {
      if (menuRef.current && menuRef.current.contains(event.target)) {
        setSidebar(false);
      }
    }
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <header className="mt-[4rem] flex w-full justify-between items-center">
      <div className="flex items-baseline gap-3 justify-center ml-3 lg:ml-[4.38rem]">
        <svg width="2.8125rem" height="2.8125rem" viewBox="0 0 2.8125rem 2.8125rem" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 19.0651C8.58534 34.7088 23.1568 44.9999 39.688 44.9999C41.2699 44.9999 42.8338 44.9056 44.3763 44.7215C44.7865 41.6312 44.9998 38.4598 44.9998 35.2273C44.9998 22.0065 41.4324 9.80775 35.4137 0L30.3631 19.0651H0Z"
            fill="#3A5AFF"
          ></path>
        </svg>
        <Link to="/">
          <p className=" font-['Vibur'] text-[40px] font-normal md:text-[3.125rem]">Design Classroom</p>
        </Link>
      </div>

      <div className="flex gap-5 items-center mr-3 lg:mr-[4.38rem]">
        <Link to="/signup">
          <button className="w-[6.875rem] font-['Montserrat'] text-center text-base font-[600] text-[#FFFFFF] bg-[#3A5AFF] rounded-[0.25rem] border-b-4 border-[#46178F] hover:cursor-pointer hover:bg-[#46178F] hover:text-white pt-3 pb-3 px-4 duration-150 ease-in-out">
            Sign up
          </button>
        </Link>
        <Link to="/login">
          <button className="w-[6.875rem] font-['Montserrat'] text-center text-base font-[700] text-[#979797] border border-[#979797] border-solid rounded-[0.25rem] hover:cursor-pointer hover:bg-black hover:text-white pt-3 pb-4 px-4 duration-150 ease-in-out">
            Log in
          </button>
        </Link>
        <svg height="29" viewBox="0 0 34 29" xmlns="http://www.w3.org/2000/svg" width="34" fill="none" onClick={() => setSidebar(true)} className="cursor-pointer">
          <rect width="34" height="4.08" rx="2.04" fill="#3A5AFF"></rect>
          <rect x="6.12" y="8.16" width="27.88" height="4.08" rx="2.04" fill="#3A5AFF"></rect>
          <rect x="13.6" y="16.32" width="20.4" height="4.08" rx="2.04" fill="#3A5AFF"></rect>
          <rect x="20.4" y="24.48" width="13.6" height="4.08" rx="2.04" fill="#3A5AFF"></rect>
        </svg>
      </div>
      {sidebar && (
        <div className="flex flex-col items-center justify-center py-2">
          <div ref={menuRef} className="top-0 left-0 fixed w-full h-full bg-black bg-opacity-50 z-30"></div>
          <div  className="top-0 right-0 w-full md:w-[35vw] bg-[#3A5AFF]  p-10 pl-20 text-white fixed h-full z-40 ease-in-out duration-300 translate-x-0  ">
            <FaTimes className="text-[3rem] float-right cursor-pointer mt-[-2.9rem] mr-3" onClick={() => setSidebar(false)} />
            <Link to="/" onClick={() => setSidebar(false)}>
              <p className={`${location.pathname === "/" ? "text-[#46178F]" : "text-white"} cursor-default ${location.pathname === '/' || "hover:animate-bounce"} mt-20 text-4xl font-semibold font-['Montserrat'] `}>Home</p>
            </Link>
            <Link to="/signup" onClick={() => setSidebar(false)}>
              <p className={`${location.pathname === "/signup" ? "text-[#46178F]" : "text-white"} cursor-pointer ${location.pathname === '/signup' || "hover:animate-bounce"}  mt-6 text-4xl font-semibold font-['Montserrat'] `}>Sign Up</p>
            </Link>
            <Link to="login" onClick={() => setSidebar(false)}>
              <p className={`${location.pathname === "/login" ? "text-[#46178F]" : "text-white"} cursor-pointer ${location.pathname === '/login' || "hover:animate-bounce"}  mt-6 text-4xl font-semibold font-['Montserrat'] `}>Login</p>
            </Link>
            <Link to="/about" onClick={() => setSidebar(false)}>
              <p className={`${location.pathname === "/about" ? "text-[#46178F]" : "text-white"} cursor-pointer ${location.pathname === '/about' || "hover:animate-bounce"}  mt-6 text-4xl font-semibold font-['Montserrat'] `}>About Us</p>
            </Link>
            <div className="flex gap-4 items-center justify-start my-2 lg:my-[2rem]">
              <AiOutlineTwitter className="text-[1.5rem] cursor-pointer" />
              <BiLogoInstagramAlt className="text-[1.5rem] cursor-pointer" />
              <BsYoutube className="text-[1.5rem] cursor-pointer" />
              <FaFacebookF className="text-[1.2rem] cursor-pointer" />
              <BiLogoLinkedin className="text-[1.5rem] cursor-pointer" />
            </div>
            <p>
              +91 93545 80732 <br />
              sachin@asbdesign.in
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
