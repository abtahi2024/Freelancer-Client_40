import React from "react";
import { FiPackage, FiStar, FiUsers } from "react-icons/fi";

const Card = () => {
  return (
    <div>
      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <div className="p-4 bg-gradient-to-l from-rose-800 to-pink-400 rounded-lg shadow-2xl transition-colors duration-300">
          <FiPackage className="h-6 w-6" />
          Total Services
        </div>
        <div className="p-4 bg-gradient-to-br from-rose-300 to-amber-600 rounded-lg shadow-2xl transition-colors duration-300">
          <FiUsers className="h-6 w-6" />
          Card 2
        </div>
        <div className="p-4 bg-gradient-to-br from-sky-300 to-blue-800 rounded-lg shadow-2xl transition-colors duration-300">
          <FiStar className="h-6 w-6 " />
          Card 3
        </div>
      </div>
    </div>
  );
};

export default Card;
