import React from "react";

function Navbar() {
  return (
    <nav className="bg-white w-full h-18  text-gray-700 p-4 fixed top-0 left-0 z-20">
      <div
        className="max-w-6xl mt-1 flex justify-between  items-center
      mx-auto"
      >
        <h1 className="text-lg font-bold">HABITFLOW</h1>

        <ul className="flex space-x-6">
          <li>
            <a
              href="#"
              className="text-sm hover:text-gray-300 duration-300 transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm hover:text-gray-300 duration-300 transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm hover:text-gray-300 duration-300 transition"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm hover:text-gray-300 duration-300 transition"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
