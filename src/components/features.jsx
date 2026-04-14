import React from "react";

function FeaturesSection(){
    return(
        <>
        <div className="text-center mt-20 mb-12 w-full ">
            <div>
                 <h2 className="text-4xl font-bold">Why Choose HabitFlow?</h2>
            <p className="text-gray-600 text-lg mt-5">Everything you need to succeed</p>
            </div>
           
        </div>
        <div className="mx-auto max-w-6xl px-4">
             <div className="grid grid-cols-3 gap-2 p-2">
            <div className="bg-white p-10 rounded-xl border border-gray-200 hover:-translate-y-4 transition duration-300 hover:shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-15 w-15 h-15 mb-4 p-1 text-indigo-600">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
</svg>

                <h3 className="text-xl font-semibold mb-4">Smart Habit Tracking</h3>
                <p className="text-gray-600">Easily track your habits with our intuitive interface and get insights to stay motivated.</p>
            </div>
            <div className="bg-white p-10 rounded-xl border border-gray-200 hover:-translate-y-4 transition duration-300 hover:shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-15 w-15 h-15 mb-4 p-1 text-indigo-600">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>

                <h3 className="text-xl font-semibold mb-4">Personalized Insights</h3>
                <p className="text-gray-600">Your personal data is encrypted and protected with industry-leading security standards.</p>
            </div>
            <div className="bg-white p-10 rounded-xl border border-gray-200  hover:-translate-y-4 transition duration-300 hover:shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-15 w-15 h-15 mb-4 p-1 text-indigo-600">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>

                <h3 className="text-xl font-semibold mb-4">Mobile friendly</h3>
                <p className="text-gray-600">Access your habits anywhere with our responsive design that works perfectly on any device.</p>
            </div>
        </div>
        </div>
       
        </>
    )
}

export default FeaturesSection;