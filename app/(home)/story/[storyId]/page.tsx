import { data } from "@/app/data/story";
import Image from "next/image";
import React from "react";

const page = async ({ params }: { params: Promise<{ storyId: string }> }) => {
  const { storyId } = await params;
  const story = data.find((s) => s.slug === storyId);

  console.log(story?.content[0].slice(1));

  return (
    <div className="bg-[url(/images/cardboard.png)] min-h-screen px-4 md:px-12 lg:px-32 pt-[100px]">
      <h3 className="md:text-6xl text-4xl mb-4 font-playfair">
        {story?.title}
      </h3>
      <div className="flex max-sm:flex-col-reverse gap-8">
        <label className="border px-4 py-2 max-sm:w-32 rounded-full">
          {story?.genre}
        </label>
        <div className="flex gap-4 max-sm:flex-col md:items-baseline-last pb-1">
          <p>Author: {story?.author}</p>
          <p>Publish On: {story?.date}</p>
        </div>
      </div>

      <div className="md:grid grid-cols-3 gap-8 mt-16">
        <div className="md:col-span-2">
          {story?.content?.map((paragraph, index) => (
            <div key={index} className="text-xl my-4">
              {index === 0 ? (
                <>
                  <span className="text-4xl font-semibold">{paragraph[0]}</span>
                  <span>{paragraph.slice(1)}</span>
                </>
              ) : (
                paragraph
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center max-h-[400px] relative items-center">
          <Image
            src={story?.image || ""}
            alt={story?.title || "Story Image"}
            fill
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
