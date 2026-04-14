import React from "react";
function JoinSection() {
    return (
        <div className="bg-gradient-to-r mt-12 from-purple-500 to-indigo-600 w-full py-16 flex items-center justify-center h-80">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-white">Join Our Community</h2>
                <p className="text-gray-300 mt-4">Sign up today and start your journey towards better habits!</p>
                <button className="bg-white text-purple-600 hover:scale-105 transition-transform font-bold py-2 px-4 rounded-full mt-4">
                    Join Now
                </button>
            </div>
        </div>
    )
}
export default JoinSection;