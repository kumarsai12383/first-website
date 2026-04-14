import React from "react";
import GetstartedBtn from './getstarted-btn';
import LearnMoreBtn from './learnmore-btn';
function HeroSection() {
  return (
   <div className="relative h-screen flex items-center justify-center">

  
  <div className="absolute inset-0">
    <img 
      src="https://img.freepik.com/free-photo/multitasking-family-home_637285-12535.jpg?semt=ais_hybrid" 
      className="w-full h-full object-cover opacity-20"
    />
  </div>

  <div className="relative z-10 text-center">
   <h1 class="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
  Build Better Habits, <br /> Everyday
</h1>
    <p className="mt-4 text-gray-500 text-lg w-150 mx-auto">
      Transform your daily routine with smart habit tracking and personalized insights that keep you motivated
    </p>
    <div className="mt-6">
     <GetstartedBtn/>
      <LearnMoreBtn/>
    </div>
  </div>

</div>
  );
}

export default HeroSection;