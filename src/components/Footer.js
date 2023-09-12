import React from "react";
import google from "../assets/google.png";
import app from "../assets/app.png";
import { FaFacebookF } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoInstagramAlt, BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="bg-[#3a5aff] text-white px-[9rem] pt-[4rem] pb-[2rem]">
      <div className="flex flex-wrap justify-between text-white">
        <div>
          <div className="flex items-baseline justify-baseline gap-4 mb-[3rem]">
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.000244141 11.9119C5.36438 21.6857 14.4684 28.1152 24.7968 28.1152C25.7851 28.1152 26.7623 28.0563 27.7261 27.9413C27.9824 26.0104 28.1156 24.0289 28.1156 22.0092C28.1156 13.749 25.8868 6.12731 22.1264 -0.000488281L18.9707 11.9119H0.000244141Z"
                fill="#FFFFFF"
              ></path>
            </svg>
            <p className="font-['Vibur'] text-[30px] font-normal md:text-[2.2rem]">Design Classroom</p>
          </div>
          <div>
            <p className="font-[900] mb-[5px]">Get the app:</p>
            <div className="flex gap-3">
              <img src={app} />
              <img src={google} />
            </div>
            <div className="my-[3rem]">
              <p className="font-[900] mb-[5px]">Follow us:</p>
              <div className="flex gap-5">
                <AiOutlineTwitter className="text-[1.5rem] cursor-pointer" />
                <BiLogoInstagramAlt className="text-[1.5rem] cursor-pointer" />
                <BsYoutube className="text-[1.5rem] cursor-pointer" />
                <FaFacebookF className="text-[1.2rem] cursor-pointer" />
                <BiLogoLinkedin className="text-[1.5rem] cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[10px] justify-start items-start">
          <h2 className="font-['Montserrat'] text-[1.25rem] leading-[1.875rem] font-[700] text-white mb-[2.19rem]">Discover</h2>
          <a href="#">About Us</a>
          <a href="#">Our Vision</a>
          <a href="#">Join Our Team</a>
          <a href="#">Prizing</a>
          <a href="#">Press Releases</a>
          <a href="#">Investors</a>
        </div>
        <div className="flex flex-col gap-[10px] justify-start items-start">
          <h2 className="font-['Montserrat'] text-[1.25rem] leading-[1.875rem] font-[700] text-white mb-[2.19rem]">Solutions</h2>
          <a href="#">For Education</a>
          <a href="#">For Professionals</a>
          <a href="#">For Professional Use</a>
        </div>
        <div className="flex flex-col gap-[10px] justify-start items-start">
          <h2 className="font-['Montserrat'] text-[1.25rem] leading-[1.875rem] font-[700] text-white mb-[2.19rem]">Resources</h2>
          <a href="#">Study with it</a>
          <a href="#">Blog</a>
          <a href="#">Certification</a>
          <a href="#">Help Center</a>
          <a href="#">Library</a>
          <a href="#">Store</a>
        </div>
        <div className="flex flex-col gap-[10px] justify-start items-start">
          <h2 className="font-['Montserrat'] text-[1.25rem] leading-[1.875rem] font-[700] text-white mb-[2.19rem]">Terms</h2>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Data Privacy</a>
          <a href="#">Child Privacy</a>
          <a href="#">Accessibility Policy</a>
        </div>
      </div>
      <p className="font-['Montserrat'] font-[500] text-[0.75rem] text-white mt-[2rem]">Copyright @ 2023, All rights reserved.</p>
    </div>
  );
};

export default Footer;
