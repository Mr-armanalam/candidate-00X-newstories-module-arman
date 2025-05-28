"use client";
import { data } from "@/app/data/story";
import { useIsVisible } from "@/utils/animation-nteraction";
import Link from "next/link";
import React, { useRef } from "react";

import StoryCardImage from "./view/story-card-image";
import StoryCardDescription from "./view/story-card-description";

const StoryShowcase = () => {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);

  return (
    <div className={`py-20 px-4 md:px-12`}>
      <h2 className="text-center text-7xl text-violet mb-20 font-playfair font-semibold">
        Stories
      </h2>
      <div
        ref={ref}
        className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 lg:px-8 gap-8"
      >
        {data.map((item, index) => (
          <Link
            href={`/story/${item.slug}`}
            key={index}
            className={`bg-white group rounded-lg shadow-lg pb-6 hover:shadow-xl transition-shadow duration-300 ${
              isVisible && "animate-slideUp"
            }`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <StoryCardImage
              image={item.image}
              length={data.length}
              index={index}
              genre={item.genre}
            />
            <StoryCardDescription
              slug={item.slug}
              title={item.title}
              teaser={item.teaser}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StoryShowcase;
