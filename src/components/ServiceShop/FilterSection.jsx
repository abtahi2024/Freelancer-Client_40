import React from "react";

const FilterSection = ({
  orderRange,
  handlePriceChange,
  categories,
  selectedCategory,
  handleCategoryChange,
  searchQuery,
  handleSearchQuery,
  sortPrice,
  handleSortPrice,
}) => {
  return (
    <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Order Range */}
      <div className="bg-gradient-to-b from-indigo-200 to-fuchsia-200 rounded-lg shadow p-4 transition duration-300 ease-in-out hover:scale-110">
        <label className="block text-sm font-semibold  mb-2">Order Range</label>
        {/* Min Range */}
        <div className="flex items-center space-x-4">
          <input
            type="number"
            min="0"
            max={orderRange[1]}
            value={orderRange[0]}
            onChange={(e) => handlePriceChange(0, Number(e.target.value))}
            className="w-20 p-2 border rounded-md"
          />
          <input
            type="range"
            min="0"
            max={orderRange[1]}
            step="1"
            value={orderRange[0]}
            onChange={(e) => handlePriceChange(0, Number(e.target.value))}
            className="w-full"
          />
        </div>
        {/* Max Range */}
        <div className="flex items-center space-x-4 mt-2">
          <input
            type="number"
            min={orderRange[0]}
            max="1000"
            value={orderRange[1]}
            onChange={(e) => handlePriceChange(1, Number(e.target.value))}
            className="w-20 p-2 border rounded-md"
          />
          <input
            type="range"
            min={orderRange[0]}
            max="1000"
            step="1"
            value={orderRange[1]}
            onChange={(e) => handlePriceChange(1, Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="flex justify-between text-sm mt-2 font-semibold">
          <p>{orderRange[0]}</p>
          <p>{orderRange[1]}</p>
        </div>
      </div>

      {/* Category filter */}
      <div className="bg-gradient-to-l from-indigo-200 to-fuchsia-200 p-4 rounded-lg shadow transition duration-300 ease-in-out hover:scale-110">
        <label className="block text-sm font-medium  mb-2">Category</label>
        <select
          className="w-full p-2 border rounded-md bg-yellow-100 font-semibold"
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Search */}
      <div className="bg-gradient-to-l from-indigo-200 to-fuchsia-200 p-4 rounded-lg shadow transition duration-300 ease-in-out hover:scale-110">
        <label className="block text-sm font-medium  mb-2"></label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e)=>handleSearchQuery(e.target.value)}
          placeholder="Search Services...🔍"
          className="w-full p-2 border rounded-md"
        />
      </div>

      {/* Sorting */}
      <div className="bg-gradient-to-l from-indigo-200 to-fuchsia-200 p-4 rounded-lg shadow transition duration-300 ease-in-out hover:scale-110">
        <label className="block text-sm font-medium  mb-2">Sort By Price</label>
        <select className="w-full p-2 border rounded-md bg-amber-100 font-semibold " value={sortPrice} onChange={(e)=>handleSortPrice(e.target.value)}>
          <option value="">Default</option>
          <option value="price">Price : low</option>
          <option value="-price">Price: high</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSection;
