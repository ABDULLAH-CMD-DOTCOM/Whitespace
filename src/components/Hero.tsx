import React from 'react';

const Hero = () => {
  return (
    <div className="bg-[#043873] w-full h-screen flex flex-col items-center justify-center p-4">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10">
        <div className="text-center md:text-left max-w-xl">
          <p className="text-white text-[28px] md:text-[32px] font-bold leading-tight">
            Get more done with <br /> Witespace
          </p>
          <p className="text-white text-[14px] md:text-[18px] leading-relaxed mt-4">
            Project management software that enables your teams to collaborate, plan, <br className="hidden md:block" />
            analyze, and manage everyday tasks.
          </p>
        </div>
        <div className="bg-[#C4DEFD] w-[250px] h-[200px] sm:w-[300px] sm:h-[250px] md:w-[450px] md:h-[350px] lg:w-[594px] lg:h-[449px] my-8 mx-5"></div>
      </div>
    </div>
  );
};

export default Hero;
