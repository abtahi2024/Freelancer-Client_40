import React from "react";
import { BiSolidBusiness } from "react-icons/bi";
import { FiCode, FiMonitor } from "react-icons/fi";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { PiGraphFill } from "react-icons/pi";

const Features = () => {
  const features = [
    {
      icon: <FiCode className="text-2xl text-blue-500" />,
      title: "Programming & Tech",
      description: "Lorem ipsum dolor sit.",
    },
    {
      icon: <PiGraphFill className="text-2xl text-orange-500" />,
      title: "Graphics & Design",
      description: "Lorem ipsum dolor sit.",
    },
    {
      icon: <MdOutlineOndemandVideo className="text-2xl text-cyan-500" />,
      title: "Video & Animation",
      description: "Lorem ipsum dolor sit.",
    },
    {
      icon: <BiSolidBusiness className="text-2xl text-indigo-500" />,
      title: "Business",
      description: "Lorem ipsum dolor sit.",
    },
  ];
  return (
    <section className="px-8 py-15">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {feature.icon}
            <h3 className="text-lg font-semibold mt-2">{feature.title}</h3>
            <p className="text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
