import React from "react";
import HeroCarousel from "../components/Home/Carousel/HeroCarousel";
import Features from "../components/Features";
import ServicesProduct from "../components/Service/ServicesProduct";
import FreelanceSection from "../components/Home/Freelance_join/FreelanceSection";

import Category from "../components/Home/Category/Category";

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <Features />
      <Category/>
      <ServicesProduct />
      <FreelanceSection />
    </div>
  );
};

export default Home;
