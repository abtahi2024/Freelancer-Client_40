
import React, { useEffect, useState } from "react";
import ServicesProductList from "./ServicesProductItem";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ErrorAlert from "../ErrorAlert";
import api_Client from "../../ServicesApi/api_Client";

const ServicesProduct = () => {
  const [service, setService] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setLoading(true);
    api_Client
      .get("/services/")
      .then((res) => setService(res.data.results))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold">Trending Services</h1>
        <a
          href="#_"
          className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-xl shadow-md group"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
            View All
          </span>
          <span className="relative invisible">View All</span>
        </a>
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="flex justify-center items-center py-10">
          <div className="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin" />
        </div>
      )}

      {error && (
        <div className="flex justify-center items-center py-10">
          <ErrorAlert error={error} />
        </div>
      )}

      {/* Service Slider */}
      {!isLoading && !error && service.length > 0 && (
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1440: { slidesPerView: 2 },
          }}
          navigation
          className="mt-4 px-4 container"
        >
          {service.map((servic) => (
            <SwiperSlide key={servic.id} className="flex justify-center">
              <ServicesProductList key={servic.id} servic={servic} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {!isLoading && !error && service.length === 0 && (
        <div
          role="alert"
          className="bg-red-100 dark:bg-red-900 border-l-4 border-red-500 dark:border-red-700 text-red-900 dark:text-red-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-red-200 dark:hover:bg-red-800 transform hover:scale-105"
        >
          <svg
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5 flex-shrink-0 mr-2 text-red-600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
          <p className="text-xs font-semibold">Error - Something went wrong.</p>
        </div>
      )}
    </section>
  );
};

export default ServicesProduct;
