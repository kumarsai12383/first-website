import React from "react";
function Footersection() {
    return (
        <footer className="bg-white text-white  h-20 w-full ">
            <div className="max-w-6xl mx-auto mt-12 flex justify-between items-center text-center">
                <h1 className="text-gray-700">HabitFlow</h1>
                <p className="text-gray-500">&copy; 2024 HabitFlow. All rights reserved.</p>
                <ul className="flex justify-center space-x-4 mt-4">
                    <li><a href="#" className="text-gray-900 hover:text-purple-600 transition duration-300 ">Twitter</a></li>
                    <li><a href="#" className="text-gray-900 hover:text-purple-600 transition duration-300">Facebook</a></li>
                    <li><a href="#" className="text-gray-900 hover:text-purple-600 transition duration-300">GitHub</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footersection;