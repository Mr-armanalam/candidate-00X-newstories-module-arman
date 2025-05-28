'use client';
import { useIsVisible } from "@/utils/animation-nteraction";
import Image from "next/image";
import React, { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);
  
  return (
    <>
      <div ref={ref} className="max-w-full absolute z-0 inset-0 max-h-screen">
        <Image
          src={
            "https://images.pexels.com/photos/1809340/pexels-photo-1809340.jpeg"
          }
          alt="herosection"
          fill
          className="object-cover rounded-lg max-h-[100vh] opacity-30 max-w-full"
        />
      </div>

      <div className="relative flex flex-col justify-center items-center min-h-screen min-w-full z-10 text-center max-w-3xl">
        <h1 className={`font-heading text-5xl font-bold font-playfair md:text-8xl text-violet mb-6 ${isVisible && "animate-fadeIn"}`}>
          A Story Worth Telling
        </h1>
        <p className={`font-body text-lg max-sm:px-8 md:text-2xl text-gray-700 mb-8 ${isVisible && "animate-slideUp"}`}>
          Write, read, and inspire with real stories from everyday changemakers.
        </p>

        <div className="flex justify-center mt-20 gap-4 animate-fadeIn">
          <button disabled className="bg-violet text-white px-6 py-3 rounded-2xl shadow-md hover:bg-violet/90 transition">
            Get Started
          </button>
          <button disabled className="bg-amber text-white px-6 py-3 rounded-2xl shadow-md hover:bg-amber/90 transition">
            Get BookMarks
          </button>
        </div>

      </div>
    </>
  );
};

export default HeroSection;
