import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import FeaturesSection from "./components/features";
import Joinsection from "./components/joinsection";
import Footersection from "./components/footersection";
import "./App.css";

function App() {
  return (
    <>
     < Navbar />
      < HeroSection />
      < FeaturesSection />
      < Joinsection />
      < Footersection />
    </>
  );
}

export default App;
