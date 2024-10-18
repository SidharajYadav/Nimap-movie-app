

import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card flex flex-col items-center">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="w-32 h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
        />
        <h2 className="text-white text-sm font-medium mt-2 text-center">
          {movie.title}
        </h2>
      </Link>
    </div>
  );
};

export default MovieCard;

