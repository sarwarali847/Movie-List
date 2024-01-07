import React from "react";
import "./MovieList.css";

const MovieCard = ({ movie }) => {
  const movieImage =
    "https://image.tmdb.org/t/p/w220_and_h330_face" + movie.backdrop_path;
  return (
    <div className="movie-card">
      <img src={movieImage} />
      <h3>{movie.original_title}</h3>
      <p>Rating: {movie.vote_average}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Adult: {movie.adult ? "True" : "False"}</p>
      <p>Description: {movie.overview}</p>
    </div>
  );
};

export default MovieCard;
