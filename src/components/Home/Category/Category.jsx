import React, { useEffect, useState } from "react";
import api_Client from "../../../ServicesApi/api_Client";
import CategoryItems from "./CategoryItems";
import ErrorAlert from "../../ErrorAlert";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    api_Client
      .get("/categories/")
      .then((res) => setCategories(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      {/* Category Heading */}
      <div className="flex justify-between mb-8">
        <h1 className="text-3xl font-bold text-[#4a00f7]">ALL Categories</h1>
        <button
          className="relative flex items-center gap-2 px-4 py-2 min-h-[2.4em] min-w-[3em] text-[18px] font-bold tracking-[0.05em] rounded-md text-gray-200 
  bg-gradient-to-br from-[hsl(240,40%,50%)] to-[hsl(240,40%,30%)] 
  shadow-inner transition-all duration-150 ease-[cubic-bezier(0.22,0.61,0.36,1)] 
  hover:scale-110 hover:shadow-[inset_0.4px_1px_4px_hsla(0,0%,50%,1),2px_4px_8px_hsla(0,0%,0%,0.3)] 
  hover:[text-shadow:0_0_10px_rgba(255,255,255,0.4)] 
  active:scale-100 active:[text-shadow:0_0_20px_rgba(255,255,255,1)] 
  active:shadow-[inset_0.4px_1px_8px_hsla(0,0%,50%,0.8),0_0_8px_hsla(240,40%,50%,0.6)] 
  active:tracking-[0.1em]"
        >
          <a href="">View All</a>
        </button>
      </div>
      {/* Loading */}
      {isLoading && (
        <div className="flex justify-center items-center py-10">
          <div className="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin" />
        </div>
      )}
      {/* error */}
      {error && (
        <div className="flex justify-center items-center py-10">
          <ErrorAlert error={error} />
        </div>
      )}
      {/* Category grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <CategoryItems key={category.id} index={index} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Category;
