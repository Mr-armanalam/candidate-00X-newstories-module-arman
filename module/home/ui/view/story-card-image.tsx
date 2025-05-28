import Image from "next/image";
import React, { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";

interface StoryCardImageProps {
  length: number;
  image: string;
  genre: string;
  index: number;
}

const StoryCardImage = ({length, image, genre, index }: StoryCardImageProps) => {
  const [bookmarks, setbookmarks] = useState<boolean[]>(Array(length).fill(false));
  const handleBookmarkClick = (index: number) => {
    setbookmarks((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };
  return (
    <div className="relative h-56 z-0 w-full">
      <Image
        src={image}
        alt={`Story Image ${index + 1}`}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover rounded-lg mb-4"
      />
      <div className="absolute hidden group-hover:block top-4 left-4 text-amber">
        {genre}
      </div>
      <div
        onClick={() => handleBookmarkClick(index)}
        className="absolute hidden group-hover:block top-4 right-4 text-amber"
      >
        {bookmarks[index] ? <FaBookmark size={20} /> : <CiBookmark size={24} />}
      </div>
    </div>
  );
};

export default StoryCardImage;
