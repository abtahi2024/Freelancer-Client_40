import React from "react";
import { FaAngleRight } from "react-icons/fa6";
const CategoryItems = ({ category }) => {
  return (
    <div className="">
    <div className="w-[300px] h-[200px] rounded-lg text-white relative overflow-hidden cursor-pointer transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] [transform-style:preserve-3d] [perspective:1000px] hover:rotate-y-[10deg] hover:rotate-x-[10deg] hover:scale-105 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70]">
      {/* Before Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.1)] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-x-full"></div>
      {/* After Overlay */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.1)] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:translate-x-full"></div>



      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center gap-2 h-full px-5">
        <p className="h-10 w-10 rounded-full bg-gradient-to-bl from-rose-400 to-pink-700 text-white flex items-center justify-center font-bold text-xl">
          {category.name.charAt(0)}
        </p>
        <p className="text-2xl font-bold uppercase">{category.name}</p>
        <p className="text-sm opacity-80">{category.description}</p>
        <button
          type="submit"
          className="flex items-center text-black font-bold hover:text-gray-200"
        >
          Explore
          <FaAngleRight />
        </button>
        
      </div>
    </div>
    </div>
  );
};

export default CategoryItems;
