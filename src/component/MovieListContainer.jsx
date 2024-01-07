import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "./MovieList";
import "./MovieListContainer.css";

const MovieListContainer = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    getMoviesList();
  }, []);

  const getMoviesList = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=2dca580c2a14b55200e784d157207b4d&sort_by=popularity.desc&primary_release_year=2023&page=1&vote_count.gte=100",
      )
      .then((res) => {
        setMovies(res.data);
        setFilteredList(res.data.results);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value === "") {
      setFilteredList(movies.results);
    } else {
      const filteredObj = [];
      movies.results &&
        movies.results.forEach((obj) => {
          if (
            obj.original_title.toLowerCase().includes(value.toLowerCase()) ||
            obj.overview.toLowerCase().includes(value.toLowerCase()) ||
            obj.release_date.includes(value.toLowerCase())
          ) {
            filteredObj.push(obj);
          }
        });
      console.log(filteredObj);
      setFilteredList(filteredObj);
    }
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {filteredList.length > 0 ? (
        <MovieList movies={filteredList} />
      ) : (
        <p className="not-found">
          No movies found having content <b>{searchTerm}</b>
        </p>
      )}
    </div>
  );
};

export default MovieListContainer;
