// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CarouselSlide from "./CarouselSlide";
import progarming from "../../../assets/images/BecomeaSuccessfulFreelanceProgrammer.png";
import digitail from "../../../assets/images/digital-marketing-with-icons-business-people_53876-94833.jpg"
import Garphic from "../../../assets/images/garphic-1483745473-612x612.jpg"
import Wirting from "../../../assets/images/wirting_1681740765349.jpg"
const HeroCarousel = () => {
  const slides = [
    {
      title: "Become a Successful Freelance Programmer",
      subtitle: "Becoming a freelance programmer",
      image: progarming,
    },
    {
      title: "Digitail Markating",
      subtitle: "Become a Digitail Markating",
      image: digitail,
    },
    {
      title: "Garphic & Design for make a platform",
      subtitle: "Become a Garphic Designer",
      image: Garphic,
    },
    {
      title: "Wirter & Translation for make a platform",
      subtitle: "Become a Wirter",
      image: Wirting,
    },
  ];
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slid, index) => (
          <SwiperSlide key={index}>
            <CarouselSlide title={slid.title} subtitle={slid.subtitle} image={slid.image}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroCarousel;
