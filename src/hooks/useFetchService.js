import React, { useEffect, useState } from "react";
import api_Client from "../ServicesApi/api_Client";

const useFetchService = (
  currentPage,
  orderRange,
  selectedCategory,
  searchQuery,
  sortPrice
) => {
  const [services, setServices] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const url = `services/?ordering=${orderRange[0]}&page=${currentPage}&category_id=${selectedCategory}&search=${searchQuery}&ordering=${sortPrice}`;
        setLoading(true);
        const response = await api_Client.get(url);
        const data = await response.data;

        setServices(data.results);
        setTotalPages(Math.ceil(data.count / data.results.length));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, [currentPage, orderRange, selectedCategory, searchQuery, sortPrice]);
  return {
    services,
    Loading,
    totalPages,
  };
};

export default useFetchService;
