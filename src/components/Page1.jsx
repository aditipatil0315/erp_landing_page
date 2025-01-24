import React from 'react';
import img7 from '../assets/image 7.png';
import Navbar from './Navbar';

const Page1 = () => {
  return (
    <div className="Page1 w-full h-[100vh] relative">
      <Navbar />

      
      <img src={img7} className="absolute top-0 left-0 z-[-10] w-full h-full object-cover" alt="Background" />

      
      <div className="content absolute p-7 backdrop-blur-lg bg-white bg-opacity-45 rounded-2xl  
         max-w-[90%] md:max-w-[800px] 
        md:top-[30%] md:left-[5%]">
        <h1 className="text-[24px] md:text-[35px] leading-tight">
        Transform Your Business with Custom Management Tools <br />
          <span className="text-[#263281]">Tailored Software and System Design, <br />
          Carefully Built and Designed.</span>
        </h1>
        <h3 className="text-[16px] md:text-[20px] mt-2">
        We don’t just build software; we build systems that work for you
        </h3>
        <br />
        <button className="bg-[#263180] px-4 py-2 rounded-3xl text-white text-[14px] md:text-[16px]">
          See More
        </button>
      </div>

      
      <div className="icons flex flex-col md:flex-row absolute top-[120%] left-[5%] gap-2 md:gap-3 text-white">
        <i className="fa-regular fa-circle-play text-[35px] md:text-[45px]"></i>
        <h3 className="text-[16px] md:text-[18px]">Explore more</h3>
      </div>
    </div>
  );
};

export default Page1;