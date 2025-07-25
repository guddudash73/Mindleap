import React, { useState } from "react";
import thumbnail from "../assets/video-thumbnail.webp";
import { IoPlay } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import { IoArrowForwardCircle } from "react-icons/io5";

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleplay = () => {
    setIsVideoPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
  };

  return (
    <div id="about" className="bg-[#f7f8fc] pb-16 pt-20">
      <div className="container mx-auto">
        <div className="py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* left side */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            {!isVideoPlaying ? (
              <div className="relative">
                <img
                  src={thumbnail}
                  alt="video-thumbnail"
                  className="w-full md:h-[446px] h-auto rounded-lg object-cover"
                />
                <button
                  onClick={handleplay}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg cursor-pointer"
                >
                  <IoPlay className="size-12 text-white"></IoPlay>
                </button>
              </div>
            ) : null}
          </div>

          {/* right side */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-3xl font-secondary font-bold mb-4 leading-snug capitalize">
              individual consult and therapy
            </h2>
            <p className="text-lg mb-12 md:pr-8">
              We lower our stress levels, we get to know our pain, we connect
              better, we improve our focus, and we're kinder to ourselves. let
              us walk you through the basics in out new mindful guide on how to
              meditate.
            </p>
            <button className="bg-primary text-white py-3 px-6  font-medium rounded-md hover:bg-primary/90 cursor-pointer">
              <a href="#contact" className="flex gap-1 items-center">
                {" "}
                <span>Get Started</span>
                <IoArrowForwardCircle />
              </a>
            </button>
          </div>
        </div>

        {isVideoPlaying && (
          <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
            <div className=" relative w-full h-full flex items-center justify-center">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/tX8TgVR33KM?si=mHOJknAed-gsCOWT"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <button
                onClick={handleCloseVideo}
                className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
              >
                <CgClose className="size-8" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
