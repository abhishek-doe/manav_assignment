import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"

const Start = () => {
  return (
    <div className="h-[40rem] flex flex-col justify-center items-center bg-[#ffc43b]">
      <div className="flex items-baseline gap-3 justify-center ml-3 lg:ml-[4.38rem]">
        <svg width="2.8125rem" height="2.8125rem" viewBox="0 0 2.8125rem 2.8125rem" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 19.0651C8.58534 34.7088 23.1568 44.9999 39.688 44.9999C41.2699 44.9999 42.8338 44.9056 44.3763 44.7215C44.7865 41.6312 44.9998 38.4598 44.9998 35.2273C44.9998 22.0065 41.4324 9.80775 35.4137 0L30.3631 19.0651H0Z"
            fill="white"
          ></path>
        </svg>
        <p className=" font-['Vibur'] text-[40px] font-normal md:text-[3.125rem] text-white">Design Classroom</p>
      </div>
      <button className="p-[1rem] bg-white rounded-full flex items-center w-[23rem] my-[1rem] justify-center text-[1.6rem] font-[1000] text-[#979797] gap-3 ml-[4rem]">Start from here <AiOutlineArrowRight className='font-[900] text-[3rem]'/></button>
    </div>
  )
}

export default Start
