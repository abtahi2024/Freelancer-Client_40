import React from "react";
import ServicesProductItem from "../Service/ServicesProductItem";

const ServiceList = ({ services, Loading }) => {
  if (Loading)
    return (
      <div className="flex justify-center items-center py-10 min-h-screen">
        <div className="flex flex-row gap-2">
          <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce"></div>
          <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce [animation-delay:-.3s]"></div>
          <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce [animation-delay:-.5s]"></div>
        </div>
      </div>
    );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {services.map((service) => (
        <ServicesProductItem servic={service} key={service.id} />
      ))}
    </div>
  );
};

export default ServiceList;
