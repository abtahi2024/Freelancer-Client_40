import ServiceList from "./ServiceList";
import Pagination from "./Pagination";
import { useState } from "react";
import useFetchService from "../../hooks/useFetchService";
import FilterSection from "./FilterSection";
import useFetchCategories from "../../hooks/useFetchCategories";
const ServicePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [orderRange, setOrderRange] = useState([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortPrice, setSortPrice] = useState("");
  const { services, Loading, totalPages } = useFetchService(
    currentPage,
    orderRange,
    selectedCategory,
    searchQuery,
    sortPrice,
  );

  const categories = useFetchCategories();

  const handlePriceChange = (index, value) => {
    setOrderRange((prev) => {
      const newRange = [...prev];
      newRange[index] = value;
      return newRange;
    });
    setCurrentPage(1);
  };
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 leading-snug text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600">Services Our Filteres</h1>
      <FilterSection
        orderRange={orderRange}
        handlePriceChange={handlePriceChange}
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategoryChange={setSelectedCategory}
        searchQuery={searchQuery}
        handleSearchQuery={setSearchQuery}
        sortPrice={sortPrice}
        handleSortPrice={setSortPrice}
      />
      <ServiceList services={services} Loading={Loading} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={setCurrentPage}
      />
    </div>
  );
};

export default ServicePage;
