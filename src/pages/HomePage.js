

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies } from "../redux/actions";
import MovieCard from "../components/MovieCard";

const HomePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.popularMovies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-white text-3xl mb-4">Popular Movies</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
