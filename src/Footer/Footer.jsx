import React, { useEffect } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; 
const Footer = () => {
   useEffect(() => {
      // Initialize AOS
      AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: true, // Animation will happen only once
      });
    }, []);
  return (
    <footer className="bg-[#20242D] text-gray-50 py-8 md:py-12"  data-aos="zoom-in" >
      {/* Horizontal Line */}
      <hr className="border-[#00ECFB]" />

      {/* Footer Content */}
      <div className="flex flex-col items-center px-4 md:px-8">
        {/* Logo */}
        <div className="mb-5 mt-6 md:mt-8">
          <img src={logo} alt="logo" className="w-20 md:w-24" />
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-3 gap-4 md:flex md:gap-6">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-lg font-semibold px-4 py-2 hover:text-[#00ECFB] transition cursor-pointer text-center"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-lg font-semibold px-4 py-2 hover:text-[#00ECFB] transition cursor-pointer text-center"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-lg font-semibold px-4 py-2 hover:text-[#00ECFB] transition cursor-pointer text-center"
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="text-lg font-semibold px-4 py-2 hover:text-[#00ECFB] transition cursor-pointer text-center col-span-1 md:col-auto"
          >
            Skills
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-lg font-semibold px-4 py-2 hover:text-[#00ECFB] transition cursor-pointer text-center col-span-1 md:col-auto"
          >
            Contact
          </Link>
        </div>

        {/* Footer Bottom Text */}
        <div className="mt-6 text-center text-sm md:text-lg font-bold leading-relaxed">
          © {new Date().getFullYear()} Your Name. Crafted with ❤️ and care.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
