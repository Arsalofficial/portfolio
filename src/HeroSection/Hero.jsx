import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import arsal from '../assets/arsal1.png'; // Replace with your image path
import { FaGithub, FaLinkedin,FaTwitter } from 'react-icons/fa';
import Typed from 'typed.js'; // Import Typed.js
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import '../HeroSection/Hero.css';

const Hero = () => {
  const typedRef = useRef(null); // Ref for Typed.js instance
  const typedElement = useRef(null); // Ref for attaching Typed.js

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedElement.current, {
      strings: [
        'Frontend Developer',
        'Professional React.js Developer',
        'UI/UX Designer',
        'Web Developer',
      ],
      typeSpeed: 70,
      backSpeed: 70,
      loop: true,
    });

    typedRef.current = typed; // Save the instance for cleanup

    return () => {
      // Clean up Typed.js instance
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Run animation only once
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-[#20242D] min-h-screen flex items-center justify-center" id="hero">
        <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-14 flex flex-col-reverse lg:flex-row items-center">
          {/* Left Section: Text */}
          <div
            className="flex-1 pr-10 mt-10 lg:mt-[-40px] lg:pr-12 text-center lg:text-left"
            data-aos="fade-right" // AOS animation for left section
          >
            <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-xl font-semibold text-white">
              Hello, It's Me
            </h4>
            <h1 className="shine text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-semibold text-white mb-2 mt-1">
              Arsal Zaheer
            </h1>
            <h2 className="home-content text-xl sm:text-2xl md:text-xl lg:text-1xl font-semibold text-white mb-3">
              And I'm a <span className="text-[#00ECFB]" ref={typedElement}></span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-lg text-gray-400 mb-4">
              I’m a passionate Web Designer specializing in creating beautiful,
              functional, and responsive websites.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4 mb-4">
              {[FaGithub, FaTwitter, FaLinkedin].map((Icon, index) => (
                <div
                  key={index}
                  className="p-3 rounded-full cursor-pointer border-2 border-[#00ECFB] shadow-[0_0_8px_#0ef] hover:shadow-[0_0_20px_#0ef] transition"
                  data-aos="zoom-in" // AOS animation for icons
                >
                  <Icon className="text-white text-xl sm:text-2xl md:text-xl" />
                </div>
              ))}
            </div>
            <button
              className="bg-[#00ECFB] text-[#20242D] px-6 py-3 rounded-full text-lg sm:text-xl md:text-2xl lg:text-xl font-semibold shadow-[0_0_20px_#0ef] transition"
            >
              Download CV
            </button>
          </div>

          {/* Right Section: Image */}
          <div
            className="flex-1 flex justify-center items-center lg:ml-12"
            data-aos="fade-left" // AOS animation for right section
          >
            <div className="home shadow-[0_0_30px_#0ef] transition bg-[#00ECFB] p-4 rounded-full">
              <img
                src={arsal}
                alt="Portrait of Arsal Zaheer"
                className="rounded-full h-60 sm:h-72 md:h-80 lg:h-80 w-60 sm:w-72 md:w-80  lg:w-80 object-cover border-4 border-white shadow-[0_0_20px_#0ef] transition"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
