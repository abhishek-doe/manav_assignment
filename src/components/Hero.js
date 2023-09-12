import React from "react";
import google from "../assets/googlePlay.png";
import app from "../assets/appStore.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse justify-around gap-8 items-center lg:mt-[4.31rem] mt-8 pb-[2.75rem] md:justify-between md:items-center">
      <div className="flex flex-col ml-[9rem] w-[30rem]">
        <h1 className="text-[#2F281E] font-[800] lg:text-[4rem] text-4xl md:leading-[6.25rem] font-['Montserrat']">
          Focus.
          <br /> Learn. Excel.
        </h1>
        <p className="text-[#544837] my-[1rem] font-[400] lg:text-[1.5rem] text-base font-['Montserrat'] md:leading-[1.9375rem]">Unlock your potential in photography and design!</p>
        <Link to="/signup">
          <button className="bg-[#3A5AFF] w-[15.9375rem] my-[2rem] md:w-72 h-12 rounded-[0.25rem] font-[800] text-[1rem] text-[#FFF] hover:bg-[#46178F] font-['Montserrat'] duration-150 ease-in-out">
            Sign up for free
          </button>
        </Link>
        <div className="flex flex-col mt-6 items-start">
          <p className="font-['Montserrat'] text-[0.875rem] font-[700] h-[1.8125rem]">Or download the app:</p>
          <div className="flex">
            <img src={app} className="hover:shadow-xl mt-[4px] duration-150 ease-in-out h-[50px] w-[130px]" />
            <img src={google} className="hover:shadow-xl duration-150 ease-in-out h-[60px] w-[150px]" />
          </div>
        </div>
      </div>
      <div className="xl:mr-[8.64rem] md:mr-3">
        <img src="https://asbdesign.in/static/media/hero.a1e5fd7b561c923c866a.jpg" />
      </div>
    </div>
  );
};

export default Hero;
