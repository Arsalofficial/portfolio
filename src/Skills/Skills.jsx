import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import boots from '../assets/boots.png';
import tailwind from '../assets/tailwind.png';
import reactLogo from '../assets/react.png';
import node from '../assets/node.png';

const Skills = () => {
  const cards = [
    { id: 1, img: html, text: 'I am an expert in HTML.' },
    { id: 2, img: css, text: 'I am an expert in CSS.' },
    { id: 3, img: js, text: 'I am an expert in JS.' },
    { id: 4, img: boots, text: 'Bootstrap Expert.' },
    { id: 5, img: tailwind, text: 'Tailwind CSS Expert.' },
    { id: 6, img: reactLogo, text: 'I am an expert in React.' },
    { id: 7, img: node, text: 'I am a beginner in Node.js.' },
  ];

  return (
    <div className=" py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#00ECFB]">My Skills</h1>
        <p className="text-gray-100 mt-2">Technologies I work with</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 ">
        {cards.map((card) => (
          <div
            key={card.id}
            className=" border-2 border-cyan-400  rounded-3xl p-4 flex flex-col items-center  duration-300 shadow-[0_0_8px_#0ef] hover:shadow-[0_0_20px_#0ef] transition"
          >
            <img src={card.img} alt={card.text} className="w-20 h-20 mb-4" />
            <h3 className="text-lg font-semibold text-gray-100">{card.text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

