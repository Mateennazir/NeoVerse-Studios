import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import FeatureSection from "./Components/FeatureSection";
import Workflow from "./Components/Workflow";
import Pricing from "./Components/Pricing";

export const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        {" "}
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
      </div>
    </>
  );
};

export default App;
