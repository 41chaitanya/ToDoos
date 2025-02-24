import React from "react";
import HeaderNavigation from "./LandingPageComponents/HeaderNavigation";
import HeroSection from "./LandingPageComponents/HeroSection";
import KeyFeatures from "./LandingPageComponents/KeyFeatures";

const LandingPage = () => {
  return (
    <div className=" bg-[#121212] min-h-screen text-gray-200 font-sans p-5 flex-col items-center">
      <HeaderNavigation />
      <HeroSection />
      <KeyFeatures />
      <button className="bg-[#7c4dff] text-white px-6 py-3 rounded-full mt-6 w-full text-center text-lg font-bold">
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
