import React from "react";

const Features = () => {
  return (
    <div>
      <p className="text-[#3a5aff] text-[2rem] text-center my-[2rem]">
        <u>Take a look to our features games</u>
      </p>
      <div className="flex flex-col items-center justify-center mt-[6rem]">
        <h1 className="font-[900] text-[2.3rem]">How It Works?</h1>
        <div className="h-[9px] w-[9rem] bg-[#3a5aff] mx"></div>
      </div>
      <div className="flex flex-col items-center justify-center gap-[2rem] lg:gap-[10rem] my-[4rem] lg:flex-row">
        <img src="https://asbdesign.in/static/media/imageWork1.b3bea167f45955165680.png" />
        <div className="w-[60%] lg:w-[30rem] flex flex-col items-center justify-center lg:items-start lg:justify-start">
            <h1 className="font-[800] text-[1.8rem] lg:text-[2.3rem] my-[10px]">Select</h1>
            <p className="text-[1rem] lg:text-[1.9rem]">Begin by selecting your desired learning module, whether its design or photography.</p>
        </div>
      </div>

      <div className="flex flex-col-reverse items-center justify-center gap-[2rem] lg:gap-[10rem] my-[4rem] lg:flex-row">
        <div className="w-[60%] lg:w-[30rem] flex flex-col items-center justify-center lg:items-start lg:justify-start">
            <h1 className="font-[800] text-[1.8rem] lg:text-[2.3rem] my-[10px]">Learn</h1>
            <p className="text-[1rem] lg:text-[1.9rem]">Immerse yourself in engaging lessons that are easily accessible on your mobile device.</p>
        </div>
        <img src="https://asbdesign.in/static/media/imageWork2.9916385b30d86ee48c91.png" />
      </div>

      <div className="flex flex-col items-center justify-center gap-[2rem] lg:gap-[10rem] my-[4rem] lg:flex-row">
        <img src="https://asbdesign.in/static/media/imageWork3.8fb6cec5121df15ad5e7.png" />
        <div className="w-[60%] lg:w-[30rem] flex flex-col items-center justify-center lg:items-start lg:justify-start">
            <h1 className="font-[800] text-[1.8rem] lg:text-[2.3rem] my-[10px]">Solve</h1>
            <p className="text-[1rem] lg:text-[1.9rem]">Apply what you've learned by tackling real-world assignments. Put your creativity and expertise to test.</p>
        </div>
      </div>

      <div className="flex flex-col-reverse items-center justify-center gap-[2rem] lg:gap-[10rem] my-[4rem] lg:flex-row">
        <div className="w-[60%] lg:w-[30rem] flex flex-col items-center justify-center lg:items-start lg:justify-start">
            <h1 className="font-[800] text-[1.8rem] lg:text-[2.3rem] my-[10px]">Rank</h1>
            <p className="text-[1rem] lg:text-[1.9rem]">See how you stack up against others. Earn rankings based on your assignment performance.</p>
        </div>
        <img src="https://asbdesign.in/static/media/imageWork1.b3bea167f45955165680.png" />
      </div>
    </div>
  );
};

export default Features;
