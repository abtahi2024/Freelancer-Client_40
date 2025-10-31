import React from "react";
import { FaStar } from "react-icons/fa6";

const StarRating = ({ onChange, rating }) => {
  return (
    <div className="flex items-center space-x-1 mb-2">
      {[...Array(5)].map((_, i) => {
        const value = i + 1;
        return (
          <FaStar
            key={value}
            size={24}
            onClick={() => onChange(value)}
            className={`cursor-pointer transition-colors duration-200 ${
              value <= rating ? "text-[#ffc800]" : "text-[#d0d0d0]"
            } hover:text-[#ffc800]`}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
