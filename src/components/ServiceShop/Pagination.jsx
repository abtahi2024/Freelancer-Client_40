import React from "react";

const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
  return (
    <div className="flex justify-center p-6">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          type="button"
          key={i}
          onClick={() => handlePageChange(i + 1)}
          className={`mx-1 px-3 py-1 rounded-lg ${
            currentPage === i + 1 ? "bg-black text-white" : "bg-gray-50"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
