"use client";
import { cn } from '../Skills/cn.js';
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      setAnimationProperties();
      setStart(true);
    }
  }, []);

  const setAnimationProperties = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );

      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-5 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
          key={item.id}
          className="relative w-[300px] max-w-full flex-shrink-0 rounded-2xl  transition-all hover:scale-105"
          style={{
            boxShadow: "0 0 15px",
            borderImageSlice: 1,
          }}
        >
          <div className="flex flex-col items-center text-center border 2 border-[#22D3EE] p-6 shadow-[0_0_8px_#0ef] hover:shadow-[0_0_10px_#0ef] rounded-2xl ">
            <img
              src={item.img}
              alt='img'
              className="w-16 h-16 mb-4"
             
            />
            <h3 className="text-xl font-semibold text-white mb-2">{item.text.split('.')[0]}</h3>
            
          </div>
        </li>
        
        ))}
      </ul>
    </div>
  );
};
