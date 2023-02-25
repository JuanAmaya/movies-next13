"use client";

import { useEffect, useState } from "react";
import EmptySearchError from "../components/UI/EmptySearchError";
import MovieList from "./MovieList";
import MovieSlider from "./MovieSlider";
import ResultsList from "./ResultsList";
import SearchBar from "./SearchBar";

export default function MovieDisplay({
  popularRes,
  trendingRes,
  topRatedRes,
  nowPlayingRes,
  apiKey,
}) {
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchkey] = useState("");
  const [emptySearch, setEmptySearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fecthMovies = async (searchKey) => {
    setIsLoading(true);
    if (searchKey !== undefined && searchKey.trim() !== "") {
      const searchData = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchKey}&api_key=${apiKey}&language=en-US&page=1&include_adult=false`
      );
      const searchRes = await searchData.json();
      if (searchRes.results.length === 0) {
        console.log("vacio");
        setEmptySearch(true);
      } else {
        setEmptySearch(false);
        setMovies(searchRes);
      }
    }
    setIsLoading(false);
  };

  const searchMovie = (movieName) => {
    console.log("resultado busqueda", movieName);
    setSearchkey(movieName);
    fecthMovies(movieName);
  };

  useEffect(() => {
    fecthMovies();
  }, []);

  let content;

  if (
    movies.results !== undefined &&
    movies.results.length > 0 &&
    searchKey !== undefined &&
    searchKey.trim() !== "" &&
    !emptySearch
  ) {
    content = <ResultsList movies={movies.results} />;
  } else if (emptySearch) {
    content = <EmptySearchError />;
  } else {
    content = (
      <div>
        <div className="mb-8">
          <div>
            <MovieSlider movies={popularRes.results} />
          </div>
        </div>
        <MovieList movies={trendingRes.results} listTitle={"TRENDING"} />
        <MovieList movies={topRatedRes.results} listTitle={"TOP RATED"} />
        <MovieList movies={nowPlayingRes.results} listTitle={"IN THEATERS"} />
      </div>
    );
  }

  return (
    <div>
      <SearchBar searchMovie={searchMovie} />
      {content}
    </div>
  );
}
