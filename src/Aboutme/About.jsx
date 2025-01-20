import React, { useEffect } from 'react';
import arsal from '../assets/arsal.png';
import { FaLinkedin } from 'react-icons/fa6';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css';
import { FaWhatsapp } from 'react-icons/fa';

const About = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation will happen only once
    });
  }, []);
  return (
    <div>
      <div className="bg-[#20242D] flex flex-col lg:flex-row items-center justify-between px-6 sm:px-8 md:px-16 lg:px-20 py-8" id='about'>
        {/* Image Section */}
        <div className="bg-[#00ECFB] p-4 rounded-[32px_64px] mb-6 lg:mb-0" data-aos="fade-right">
          <img src={arsal} alt="arsal-img" className="w-64 sm:w-80 md:w-96 lg:w-72 h-auto rounded-lg " />
        </div>
        {/* Text Section */}
        <div className="text-white w-full lg:w-[50%] lg:mr-28 text-center lg:text-left" data-aos="fade-left">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4 text-[#00ECFB]">About Me</h2>
          <p className="mb-6 text-lg sm:text-xl md:text-lg">
            Assalamu Alaikum. My name is Arsal Zaheer, and I am 19 years old. I am a frontend web developer with over 3 years of experience in building responsive and user-friendly web interfaces. My favorite technologies are React and Node.js. I study at Virtual University and have completed various projects, from personal websites to large-scale applications.
          </p>
          <hr className='border-[#00ECFB] mb-3'/>
          <div className='flex gap-4 justify-center lg:justify-start'>
            <div className="text-white border-2 border-[#00ECFB] rounded-full p-3 shadow-[0_0_8px_#0ef] hover:shadow-[0_0_20px_#0ef] transition" data-aos="zoom-in">
              <FaLinkedin className="text-[#fff] text-xl sm:text-2xl" />
            </div>
            <div className="text-white border-2 border-[#00ECFB] rounded-full p-3 shadow-[0_0_8px_#0ef] hover:shadow-[0_0_20px_#0ef] transition" data-aos="zoom-in">
              <FaWhatsapp className="text-[#fff] text-xl sm:text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
