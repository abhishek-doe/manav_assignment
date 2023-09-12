import React from 'react'
import signup from "../assets/signup.png"
import { useNavigate } from 'react-router-dom'

const Signup = () => {

    const navigate = useNavigate()
    const handleNavigate = e => {
        e.preventDefault()
        navigate('/login')
    }


  return (
    <div className="flex py-[5rem] justify-center items-center my-[1rem] lg:my-[0px] lg:justify-between lg:items-center ">
    <img src={signup} className="hidden lg:block h-[27rem]" />
    <div className="mt-[0rem] lg:mt-0 mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 ">
      <form className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Name"
          className="peer block min-h-[auto]  rounded-lg border-0 shadow-lg w-full md:w-4/5 lg:w-4/5 xl:w-4/5   bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear"
        />
        <input
          type="email"
          placeholder="Email address"
          className="peer block min-h-[auto]  rounded-lg border-0 shadow-lg w-full md:w-4/5 lg:w-4/5 xl:w-4/5   bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear"
        />
        <input
          type="password"
          placeholder="Password"
          className="peer block min-h-[auto]  rounded-lg border-0 shadow-lg w-full md:w-4/5 lg:w-4/5 xl:w-4/5   bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear"
        />
        <div className="flex gap-6">
          <button className="text-[.8rem] text-[#979797] font-[600] shadow-sm px-[15px] shadow-[#3a5aff] py-[10px] rounded-[5px]" onClick={e => e.preventDefault()}>REGISTER</button>
          <button className="text-[.8rem] text-[#979797] font-[600] px-[15px] py-[10px] rounded-[5px]" onClick={handleNavigate}>Login</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Signup
