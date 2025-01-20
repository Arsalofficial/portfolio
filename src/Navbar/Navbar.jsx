import React, { useState, useEffect } from 'react';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS CSS
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

  useEffect(() => {
    // Initialize AOS when the component is mounted
    AOS.init({ duration: 1000, once: true }); // Adjust duration and once for single animation
  }, []);

  return (
    <nav className="bg-[#2d313a] shadow-md w-[calc(100%-60px)] mt-8 mx-[30px] rounded-lg" data-aos="fade-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <a href="#">
              <img src={logo} alt="logo" className="w-16" />
            </a>
          </div>

          {/* Right: Navigation Links (desktop version) */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-lg font-semibold px-4 py-2 text-gray-50 hover:text-[#00ECFB] transition cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-lg font-semibold px-4 py-2 text-gray-50 hover:text-[#00ECFB] transition cursor-pointer"
            >
              About Me
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-lg font-semibold px-4 py-2 text-gray-50 hover:text-[#00ECFB] transition cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="text-lg font-semibold px-4 py-2 text-gray-50 hover:text-[#00ECFB] transition cursor-pointer"
            >
              Skills
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-lg font-semibold px-4 py-2 text-gray-50 hover:text-[#00ECFB] transition cursor-pointer"
            >
              Contact
            </Link>
          </div>

          {/* Hamburger Icon (mobile version) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-50 text-2xl"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden flex flex-col items-center space-y-4 mt-4 bg-[#2d313a] rounded-lg p-4`}
        >
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-lg font-semibold px-4 py-2 text-gray-50 hover:text-[#00ECFB] transition cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-lg font-semibold px-4 py-2 text-gray-50 hover:text-[#00ECFB] transition cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            About Me
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-lg font-semibold px-4 py-2 text-gray-50 hover:text-[#00ECFB] transition cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="text-lg font-semibold px-4 py-2 text-gray-50 hover:text-[#00ECFB] transition cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-lg font-semibold px-4 py-2 text-gray-50 hover:text-[#00ECFB] transition cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
