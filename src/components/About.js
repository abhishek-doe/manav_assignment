import React from "react";

const About = () => {
  return (
    <div className="mt-[1rem]">
      <div  className="flex flex-col items-center justify-center">
        <h1 className="pt-28 md:pt-[3.06rem] text-center text-['Poppins'] text-[2.25rem] font-[800] font-[#333333]">About Us</h1>
        <div className="h-[10px] w-[8rem] bg-[#3a5aff]"></div>
        <p className="px-3 md:w-1/2 text-justify my-[3rem] text-[1.3rem]">
          Welcome to Competitive Design Platform! We're a pioneering startup on a mission to reshape the design landscape. Our platform is a testament to our commitment to transforming the way
          individuals approach creativity and competence in the world of design. <br />
          <br />
          At Competitive Design Platform, we recognized a significant void in the industry – the absence of a platform that offers a nurturing environment for budding UI/UX designers to evolve and
          refine their skills. The traditional approach to design education often falls short of preparing individuals for the real-world challenges of today's dynamic design industry.
          <br />
          <br />
          Our journey began with a collective vision to bridge this gap. We've meticulously crafted a space where creativity thrives, logic is celebrated, and design enthusiasts of all backgrounds can
          find their rightful place. Through a series of thoughtfully curated assignments, participants are invited to explore their creative boundaries while honing their problem-solving abilities.
        </p>
      </div>
      <div className=" bg-[#f2f2f2] flex justify-center align-center">
      <form className="flex flex-col items-center justify-center w-[28rem] bg-white px-[2.6rem] py-[20px] rounded-[10px] my-[6rem]">
        <h1 className="my-3 text-[2rem] font-semibold text-black">Contact Us</h1>
        <p className="">Fill up the form below to send us a message.</p>
        <div className="flex flex-col w-[100%] mt-[2rem] mb-[1rem] px-[8px]">
            <label className="block mb-2 text-sm text-black " htmlFor="name">Full Name</label>
            <input type="text" id="name" className="border-gray-300 border-[1px] rounded-[5px] p-[5px] text-[].9rem]"/>
        </div>
        <div className="flex flex-col w-[100%] mt-[10px] mb-[1rem] px-[8px]">
            <label className="block mb-2 text-sm text-black " htmlFor="email">Email Address</label>
            <input type="email" id="email" className="border-gray-300 border-[1px] rounded-[5px] p-[5px] text-[].9rem]"/>
        </div>
        <div className="flex flex-col w-[100%] mt-[10px] mb-[1rem] px-[8px]">
            <label className="block mb-2 text-sm text-black " htmlFor="phone">Phone Number</label>
            <input type="number" id="phone" className="border-gray-300 border-[1px] rounded-[5px] p-[5px] text-[].9rem]"/>
        </div>
        <div className="flex flex-col w-[100%] mt-[10px] mb-[1rem] px-[8px]">
            <label className="block mb-2 text-sm text-black " htmlFor="phone">Phone Number</label>
            <textarea type="number" id="phone" className="border-gray-300 border-[1px] rounded-[5px] p-[5px] text-[].9rem]"/>
        </div>
        <button className="bg-[#3a5aff] py-[13px] w-[95%] text-white rounded-[5px] my-[1.4rem]">Send Message</button>
      </form>
      </div>
    </div>
  );
};

export default About;
