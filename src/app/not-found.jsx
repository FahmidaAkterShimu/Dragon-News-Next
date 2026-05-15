import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-red-600/20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-orange-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

      <div className="text-center z-10 max-w-2xl">

        {/* Dragon Emoji / Icon */}
        <div className="text-8xl mb-6 animate-bounce">
          🐉
        </div>

        {/* 404 Text */}
        <h1 className="text-7xl md:text-9xl font-extrabold text-[#D72050] drop-shadow-lg">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-4 text-3xl md:text-5xl font-bold">
          Dragon Lost in the Sky
        </h2>

        {/* Description */}
        <p className="mt-6 text-gray-300 text-lg leading-relaxed">
          The news article you are looking for has flown away with the dragon.
          Maybe it never existed, or the link is broken.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <button className="px-8 py-3 bg-[#D72050] hover:bg-[#a3193e] transition-all duration-300 rounded-full font-semibold shadow-lg shadow-red-500/30 cursor-pointer">
              Back to Home
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default NotFound;