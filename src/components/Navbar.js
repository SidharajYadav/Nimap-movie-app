import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>Movie App</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/top-rated">Top Rated</Link>
        </li>
        <li>
          <Link to="/upcoming">Upcoming Movies</Link>
        </li>
      </ul>
      <input type="text" placeholder="Search movies..." />
    </nav>
  );
};

export default Navbar;
