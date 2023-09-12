import React from "react";

const Benefit = () => {
  return (
    <div className="bg-[#f2f2f2] flex flex-col items-center justify-center">
      <h2 className="pt-28 md:pt-[3.06rem] text-['Montserrat'] text-[2.25rem] font-[800] font-[#2F281E]">Who Benefit Most?</h2>
      <div className="h-[10px] w-[9rem] bg-[#3A5AFF] rounded-sm"></div>
      <div className="grid grid-cols-1 md:grid-cols-4 mt-20 md:mt-[3.5rem] gap-y-20 md:gap-8 xl:gap-28">
        <div className="w-[12rem]">
          <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="50" rx="19" fill="#3A5AFF"></rect>
            <path
              d="M26.1 14.9358L25.5 15.1615L24.9 14.9358C23.0984 14.2504 21.1645 13.9353 19.2255 14.011C17.2865 14.0868 15.3864 14.5517 13.65 15.3753L13 15.7079V35L14.8125 34.1447C16.2278 33.4772 17.7751 33.1004 19.3538 33.039C20.9325 32.9776 22.5071 33.2329 23.975 33.7883L25.5 34.3704L27.025 33.7883C28.4929 33.2329 30.0675 32.9776 31.6462 33.039C33.2249 33.1004 34.7722 33.4772 36.1875 34.1447L38 35V15.7079L37.3125 15.3753C35.5812 14.5569 33.6876 14.0947 31.7556 14.019C29.8235 13.9433 27.8964 14.2557 26.1 14.9358ZM19.85 30.6403C18.3718 30.6384 16.9029 30.863 15.5 31.3055V17.2047C18.2088 16.1358 21.2499 16.1144 23.975 17.1453L24.25 17.2523V31.353C22.8221 30.8855 21.3228 30.6446 19.8125 30.6403H19.85ZM35.5 31.3055C32.6611 30.4 29.5889 30.4 26.75 31.3055V17.2523L27.025 17.1453C29.7501 16.1144 32.7912 16.1358 35.5 17.2047V31.3055Z"
              fill="white"
            ></path>
          </svg>
          <p className="text-[#2F281E] font-['Poppins'] font-[600] text-[1.575rem] md:text-[1.375rem] mt-[1.88rem]">Begineers</p>
          <p className="text-[#2F281E] font-['Poppins'] font-[400] text-[1rem] md:text-[1rem] mt-[1rem]">Starting your creative journey? Join us to learn and grow.</p>
          <p className="text-[#544837] font-['Montserrat'] font-[700] text-[1.25rem] md:text-[1rem] leading-[1.625rem] mt-[1.75rem]">Learn more</p>
        </div>

        <div className="w-[12rem]">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="50" rx="19" fill="#FF3B53"></rect>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="-12 -12 50 50" fill="none">
              <g clipPath="url(#clip0_163_66)">
                <path
                  d="M12.5 1.5625C12.397 1.5625 12.2963 1.59305 12.2106 1.65028C12.125 1.70751 12.0582 1.78885 12.0188 1.88402C11.9794 1.97919 11.9691 2.08391 11.9892 2.18494C12.0093 2.28597 12.0589 2.37878 12.1317 2.45162C12.2046 2.52446 12.2974 2.57406 12.3984 2.59416C12.4994 2.61426 12.6041 2.60394 12.6993 2.56452C12.7945 2.5251 12.8758 2.45834 12.9331 2.37269C12.9903 2.28704 13.0208 2.18634 13.0208 2.08333C13.0208 1.9452 12.966 1.81272 12.8683 1.71505C12.7706 1.61737 12.6381 1.5625 12.5 1.5625ZM17.7083 0H7.29167C6.601 0 5.93862 0.274367 5.45024 0.762743C4.96187 1.25112 4.6875 1.9135 4.6875 2.60417V22.3958C4.6875 22.7378 4.75486 23.0765 4.88573 23.3924C5.0166 23.7084 5.20842 23.9954 5.45024 24.2373C5.69206 24.4791 5.97914 24.6709 6.2951 24.8018C6.61105 24.9326 6.94968 25 7.29167 25H17.7083C18.0503 25 18.389 24.9326 18.7049 24.8018C19.0209 24.6709 19.3079 24.4791 19.5498 24.2373C19.7916 23.9954 19.9834 23.7084 20.1143 23.3924C20.2451 23.0765 20.3125 22.7378 20.3125 22.3958V2.60417C20.3125 1.9135 20.0381 1.25112 19.5498 0.762743C19.0614 0.274367 18.399 0 17.7083 0V0ZM19.2708 22.3958C19.2708 22.8102 19.1062 23.2077 18.8132 23.5007C18.5202 23.7937 18.1227 23.9583 17.7083 23.9583H7.29167C6.87727 23.9583 6.47984 23.7937 6.18681 23.5007C5.89379 23.2077 5.72917 22.8102 5.72917 22.3958V18.75H19.2708V22.3958ZM19.2708 17.7083H5.72917V4.16667H19.2708V17.7083ZM19.2708 3.125H5.72917V2.60417C5.72917 2.18977 5.89379 1.79234 6.18681 1.49931C6.47984 1.20629 6.87727 1.04167 7.29167 1.04167H17.7083C18.1227 1.04167 18.5202 1.20629 18.8132 1.49931C19.1062 1.79234 19.2708 2.18977 19.2708 2.60417V3.125ZM12.5 22.9167C12.809 22.9167 13.1111 22.825 13.3681 22.6533C13.625 22.4816 13.8253 22.2376 13.9436 21.9521C14.0618 21.6666 14.0928 21.3524 14.0325 21.0493C13.9722 20.7462 13.8234 20.4678 13.6049 20.2493C13.3863 20.0308 13.1079 19.882 12.8048 19.8217C12.5017 19.7614 12.1876 19.7923 11.9021 19.9106C11.6165 20.0289 11.3725 20.2291 11.2008 20.4861C11.0291 20.743 10.9375 21.0451 10.9375 21.3542C10.9375 21.7686 11.1021 22.166 11.3951 22.459C11.6882 22.752 12.0856 22.9167 12.5 22.9167ZM12.5 20.8333C12.603 20.8333 12.7037 20.8639 12.7894 20.9211C12.875 20.9783 12.9418 21.0597 12.9812 21.1549C13.0206 21.25 13.0309 21.3547 13.0108 21.4558C12.9907 21.5568 12.9411 21.6496 12.8683 21.7225C12.7954 21.7953 12.7026 21.8449 12.6016 21.865C12.5006 21.8851 12.3959 21.8748 12.3007 21.8354C12.2055 21.7959 12.1242 21.7292 12.0669 21.6435C12.0097 21.5579 11.9792 21.4572 11.9792 21.3542C11.9792 21.216 12.034 21.0836 12.1317 20.9859C12.2294 20.8882 12.3619 20.8333 12.5 20.8333Z"
                  fill="white"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_163_66">
                  <rect width="25" height="25" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </svg>
          <p className="text-[#2F281E] font-['Poppins'] font-[600] text-[1.575rem] md:text-[1.375rem] mt-[1.88rem]">Begineers</p>
          <p className="text-[#2F281E] font-['Poppins'] font-[400] text-[1rem] md:text-[1rem] mt-[1rem]">Starting your creative journey? Join us to learn and grow.</p>
          <p className="text-[#544837] font-['Montserrat'] font-[700] text-[1.25rem] md:text-[1rem] leading-[1.625rem] mt-[1.75rem]">Learn more</p>
        </div>

        <div className="w-[12rem]">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="50" rx="19" fill="#3CC5FF"></rect>
            <svg width="50" height="50" viewBox="-12 -12 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21.875 10.1563H21.0938V3.125C21.0938 2.9178 21.0114 2.71909 20.8649 2.57257C20.7184 2.42606 20.5197 2.34375 20.3125 2.34375H4.6875C4.4803 2.34375 4.28159 2.42606 4.13507 2.57257C3.98856 2.71909 3.90625 2.9178 3.90625 3.125V10.1563H3.125C2.9178 10.1563 2.71909 10.2386 2.57257 10.3851C2.42606 10.5316 2.34375 10.7303 2.34375 10.9375V20.3125C2.34375 20.5197 2.42606 20.7184 2.57257 20.8649C2.71909 21.0114 2.9178 21.0938 3.125 21.0938H4.6875V21.875C4.6875 22.0822 4.76981 22.2809 4.91632 22.4274C5.06284 22.5739 5.26155 22.6563 5.46875 22.6563C5.67595 22.6563 5.87466 22.5739 6.02118 22.4274C6.16769 22.2809 6.25 22.0822 6.25 21.875V21.0938H18.75V21.875C18.75 22.0822 18.8323 22.2809 18.9788 22.4274C19.1253 22.5739 19.3241 22.6563 19.5313 22.6563C19.7385 22.6563 19.9372 22.5739 20.0837 22.4274C20.2302 22.2809 20.3125 22.0822 20.3125 21.875V21.0938H21.875C22.0822 21.0938 22.2809 21.0114 22.4274 20.8649C22.5739 20.7184 22.6563 20.5197 22.6563 20.3125V10.9375C22.6563 10.7303 22.5739 10.5316 22.4274 10.3851C22.2809 10.2386 22.0822 10.1563 21.875 10.1563ZM5.46875 3.90625H19.5313V10.1563H17.9688C17.7616 10.1563 17.5628 10.2386 17.4163 10.3851C17.2698 10.5316 17.1875 10.7303 17.1875 10.9375V13.2813H7.8125V10.9375C7.8125 10.7303 7.73019 10.5316 7.58368 10.3851C7.43716 10.2386 7.23845 10.1563 7.03125 10.1563H5.46875V3.90625ZM7.8125 14.8438H17.1875V16.4063H7.8125V14.8438ZM21.0938 19.5313H3.90625V11.7188H6.25V17.1875C6.25 17.3947 6.33231 17.5934 6.47882 17.7399C6.62534 17.8864 6.82405 17.9688 7.03125 17.9688H17.9688C18.176 17.9688 18.3747 17.8864 18.5212 17.7399C18.6677 17.5934 18.75 17.3947 18.75 17.1875V11.7188H21.0938V19.5313Z"
                fill="white"
              ></path>
            </svg>
          </svg>
          <p className="text-[#2F281E] font-['Poppins'] font-[600] text-[1.575rem] md:text-[1.375rem] mt-[1.88rem]">Begineers</p>
          <p className="text-[#2F281E] font-['Poppins'] font-[400] text-[1rem] md:text-[1rem] mt-[1rem]">Starting your creative journey? Join us to learn and grow.</p>
          <p className="text-[#544837] font-['Montserrat'] font-[700] text-[1.25rem] md:text-[1rem] leading-[1.625rem] mt-[1.75rem]">Learn more</p>
        </div>

        <div className="w-[12rem]">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <g clipPath="url(#clip0_0_549)">
              <rect width="50" height="50" rx="19" fill="#FFC43B"></rect>
              <path
                d="M22.2625 27.75H25.2875C25.452 27.751 25.6151 27.7194 25.7674 27.6572C25.9197 27.595 26.0582 27.5034 26.175 27.3875L30.65 22.9125C30.8828 22.6783 31.0135 22.3615 31.0135 22.0312C31.0135 21.701 30.8828 21.3842 30.65 21.15L27.625 18.15C27.3908 17.9172 27.074 17.7865 26.7437 17.7865C26.4135 17.7865 26.0967 17.9172 25.8625 18.15L21.3875 22.625C21.152 22.8558 21.0172 23.1703 21.0125 23.5V26.5C21.0125 26.8315 21.1442 27.1495 21.3786 27.3839C21.613 27.6183 21.931 27.75 22.2625 27.75ZM23.5125 24L26.75 20.8L28 22.05L24.775 25.25H23.525L23.5125 24ZM36.75 29H35.5V16.5H36.75C37.0815 16.5 37.3995 16.3683 37.6339 16.1339C37.8683 15.8995 38 15.5815 38 15.25C38 14.9185 37.8683 14.6005 37.6339 14.3661C37.3995 14.1317 37.0815 14 36.75 14H14.25C13.9185 14 13.6005 14.1317 13.3661 14.3661C13.1317 14.6005 13 14.9185 13 15.25C13 15.5815 13.1317 15.8995 13.3661 16.1339C13.6005 16.3683 13.9185 16.5 14.25 16.5H15.5V29H14.25C13.9185 29 13.6005 29.1317 13.3661 29.3661C13.1317 29.6005 13 29.9185 13 30.25C13 30.5815 13.1317 30.8995 13.3661 31.1339C13.6005 31.3683 13.9185 31.5 14.25 31.5H24.25V32.9375L18.5625 36.6875C18.3292 36.8319 18.1498 37.0491 18.0522 37.3056C17.9546 37.5621 17.944 37.8435 18.0222 38.1066C18.1004 38.3696 18.263 38.5996 18.4849 38.7611C18.7068 38.9225 18.9757 39.0065 19.25 39C19.4958 39.0028 19.7362 38.9285 19.9375 38.7875L24.25 35.9375V37.75C24.25 38.0815 24.3817 38.3995 24.6161 38.6339C24.8505 38.8683 25.1685 39 25.5 39C25.8315 39 26.1495 38.8683 26.3839 38.6339C26.6183 38.3995 26.75 38.0815 26.75 37.75V35.9375L31.0625 38.7875C31.2638 38.9285 31.5042 39.0028 31.75 39C32.0171 38.9979 32.2764 38.9104 32.4901 38.7502C32.7038 38.59 32.8606 38.3656 32.9375 38.1098C33.0143 37.8541 33.0073 37.5804 32.9173 37.3289C32.8273 37.0775 32.6592 36.8614 32.4375 36.7125L26.75 32.9625V31.5H36.75C37.0815 31.5 37.3995 31.3683 37.6339 31.1339C37.8683 30.8995 38 30.5815 38 30.25C38 29.9185 37.8683 29.6005 37.6339 29.3661C37.3995 29.1317 37.0815 29 36.75 29ZM33 29H18V16.5H33V29Z"
                fill="white"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_0_549">
                <rect width="50" height="50" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          <p className="text-[#2F281E] font-['Poppins'] font-[600] text-[1.575rem] md:text-[1.375rem] mt-[1.88rem]">Begineers</p>
          <p className="text-[#2F281E] font-['Poppins'] font-[400] text-[1rem] md:text-[1rem] mt-[1rem]">Starting your creative journey? Join us to learn and grow.</p>
          <p className="text-[#544837] font-['Montserrat'] font-[700] text-[1.25rem] md:text-[1rem] leading-[1.625rem] mt-[1.75rem]">Learn more</p>
        </div>
      </div>

      <button className="mb-2 font-['Montserrat'] text-center text-base font-[600] text-[#FFFFFF] bg-[#3A5AFF] rounded-[0.25rem] border-b-4 border-[#46178F] hover:cursor-pointer hover:bg-[#46178F] hover:text-white pt-3 pb-3 px-6 duration-150 ease-in-out my-[2rem]">
        SIGN UP NOW
      </button>
      <p className="pt-28 md:pt-[3.06rem] text-center text-['Poppins'] text-[2.25rem] font-[800] font-[#333333]">Vision</p>
      <div className="w-[7rem] h-[8px] bg-[#ff3b53]"></div>
      <p className="mt-[3.5rem] text-center text-['Poppins'] text-[2rem] font-[800] font-[#2F281E]">EVERYBODY EMPLOYEED</p>
      <p className="mt-[0.69rem] text-['Poppins'] text-[1.2rem] leading-[1.625rem] font-[500] font-[#544837] mb-16 md:mb-[3.44rem]">Poverty Eliminated!</p>
      <p className="mt-[0.69rem] text-['Montserrat'] text-[1.5rem] leading-[1.625rem] font-[500] font-[#544837] mb-16 md:mb-[3.44rem]">
        "<u>Make India Rich Again</u>"
      </p>
      <p className="mt-[0.69rem] text-['Montserrat'] text-[1.3rem] leading-[1.625rem] font-[500] font-[#544837]">Youngsters with Unique skills</p>
      <p className="mt-[0.69rem] text-['Poppins'] text-[1rem] leading-[1.625rem] font-[500] text-[#FF3B53] ">meet</p>
      <p className="mt-[0.69rem] text-['Montserrat'] text-[1.3rem] leading-[1.625rem] font-[500] font-[#544837]">Entrepreneurs with Unique ideas</p>
      <form className="flex flex-col items-center justify-center bg-white px-[3rem] py-[20px] rounded-[10px] my-[6rem]">
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
  );
};

export default Benefit;
