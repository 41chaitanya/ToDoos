import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderNavigation from "./LandingPageComponents/HeaderNavigation";
import HeroSection from "./LandingPageComponents/HeroSection";
import KeyFeatures from "./LandingPageComponents/KeyFeatures";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#121212] min-h-screen text-gray-200 font-sans p-5 flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-8">
        <HeaderNavigation />
        <HeroSection />
        <KeyFeatures />

        {/* Centered Button with Navigation */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-[#7c4dff] text-white px-6 py-3 rounded-full text-lg font-bold hover:bg-[#6633cc] transition duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
