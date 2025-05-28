import Link from "next/link";
import React from "react";

interface StoryCardDescriptionProps {
  slug: string;
  title: string;
  teaser: string;
}

const StoryCardDescription = ({slug, title, teaser}:StoryCardDescriptionProps) => {
  return (
    <div className="px-6">
      <h3 className="text-2xl font-semibold my-4">{title}</h3>
      <p className="text-gray-700 line-clamp-2 mb-4 text-sm">{teaser}</p>
      <Link
        href={`/story/${slug}`}
        className="bg-violet text-white px-4 py-2 rounded-lg hover:bg-violet/90 transition"
      >
        Read More
      </Link>
    </div>
  );
};

export default StoryCardDescription;
