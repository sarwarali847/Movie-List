import React from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";

const MovieList = ({ movies }) => {
  const sortedMovies = movies
    ? movies.slice().sort((a, b) => b.vote_average - a.vote_average)
    : [];

  //Grouping Movies by Year
  const moviesByYear = sortedMovies.reduce((result, movie) => {
    const year = new Date(movie.release_date).getFullYear();
    result[year] = result[year] || [];
    result[year].push(movie);
    return result;
  }, {});
  console.log("Group By Year Movies List : ", moviesByYear);
  //Sorting movies list in descending order (2023, 2022)
  const years = Object.keys(moviesByYear).sort((a, b) => b - a);

  console.log("Desending Order Year Movies List : ", years);

  return (
    <div>
      {years.map((year) => (
        <div key={year} className="year-section">
          <h2>{year}</h2>
          <div className="movie-list-container">
            {moviesByYear[year].map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
