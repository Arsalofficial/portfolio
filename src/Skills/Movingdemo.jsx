"use client";

import React, { useEffect } from "react";
import { InfiniteMovingCards } from "../Skills/Moving";
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import boots from '../assets/boots.png';
import tailwind from '../assets/tailwind.png';
import reactLogo from '../assets/react.png';
import node from '../assets/node.png';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; 

export function InfiniteMovingCardsDemo() {
  useEffect(() => {
        // Initialize AOS
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          once: true, // Animation will happen only once
        });
      }, []);
  const testimonials = [
    { id: 1, img: html, text: 'I am an expert in HTML.' },
    { id: 2, img: css, text: 'I am an expert in CSS.' },
    { id: 3, img: js, text: 'I am an expert in JS.' },
    { id: 4, img: boots, text: 'I am an expert in Bootstrap.' },
    { id: 5, img: tailwind, text: 'I am an expert in Tailwind.' },
    { id: 6, img: reactLogo, text: 'I am an expert in React.' },
    { id: 7, img: node, text: 'I am a beginner in Node.js.' },
  ];

  return (
    <div className=" flex flex-col items-center justify-center  overflow-hidden mb-8" id="skills"  data-aos="zoom-in">
        <div>
            <h3 className="text-4xl text-[#22D3EE] font-bold pt-8 pb-8">My Skills</h3>
        </div>
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}
