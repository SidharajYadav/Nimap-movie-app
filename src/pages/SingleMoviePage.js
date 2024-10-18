
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetail } from "../redux/actions";
import { useParams } from "react-router-dom";

const SingleMoviePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieDetail = useSelector((state) => state.movie.movieDetail);

  useEffect(() => {
    dispatch(fetchMovieDetail(id));
  }, [dispatch, id]);

  if (!movieDetail) return null;

  return (
    <div className="container mx-auto py-8 text-white">
      <div className="flex">
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
          alt={movieDetail.title}
          className="w-1/3 rounded-md"
        />
        <div className="ml-8">
          <h1 className="text-4xl font-bold">{movieDetail.title}</h1>
          <p className="text-lg">Rating: {movieDetail.vote_average}</p>
          <p>{movieDetail.overview}</p>
          <p>Release Date: {movieDetail.release_date}</p>
        </div>
      </div>
      {/* Cast information can be displayed here */}
    </div>
  );
};

export default SingleMoviePage;

