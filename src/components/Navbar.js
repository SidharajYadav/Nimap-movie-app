import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-white text-xl font-bold">MovieDb</h1>
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-2 sm:mt-0">
          <a href="/" className="text-gray-300 hover:text-white">
            Popular
          </a>
          <a href="/top-rated" className="text-gray-300 hover:text-white">
            Top Rated
          </a>
          <a href="/upcoming" className="text-gray-300 hover:text-white">
            Upcoming
          </a>
        </div>
        <div className="flex space-x-2 mt-2 sm:mt-0">
          <input
            type="text"
            className="p-2 rounded-md w-full sm:w-auto"
            placeholder="Movie Name"
          />
          <button className="bg-gray-500 text-white px-4 py-2 rounded-md">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
