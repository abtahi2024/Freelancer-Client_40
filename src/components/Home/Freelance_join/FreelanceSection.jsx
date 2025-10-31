import React from "react";
import bannerImg from "../../../assets/images/Fiveres_1269a57212df4631b866219ba2013fa8_ed2490106c464de183070431035de191.webp";
import FreelanceTimer from "./FreelanceTimer";
const FreelanceSection = () => {
  return (
    <section className="w-full h-[600px] bg-cover flex justify-center items-center px-2.5 md:px-8 bg-[#fff6f2]">
      <div className=" container w-full flex flex-col md:flex-row items-center justify-between ">
        {/* left */}
        <div className="w-full md:w-1/2 flex justify-center ">
          <img
            className="max-w-md md:max-w-md drop-shadow-lg w-96"
            src={bannerImg}
            alt=""
          />
        </div>
        {/* right */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl  font-bold">
            Freelance services at your fingertips
          </h1>
          <p className="p-2 hover:underline">Need help with Vibe coding? </p>

          {/* countDown */}
          <FreelanceTimer />

          <button
            className="btn btn-neutral btn-outline text-xl mt-1"
            type="submit"
          >
            Join Freelancer
          </button>
        </div>
      </div>
    </section>
  );
};

export default FreelanceSection;
